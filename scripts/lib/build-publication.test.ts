import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { delimiter, join, resolve } from 'node:path'
import test from 'node:test'
import { parse } from 'yaml'
import { artifactFixture } from './test-support/artifact-fixture.ts'

const repository = process.cwd()

function executeBuild(generatedEpisodes: string[], inspect: (root: string, code: number | null, output: string) => void, failLanding = false) {
  const { root } = artifactFixture(undefined, 'good')
  try {
    artifactFixture(root, 'bad-build')
    for (const directory of ['episodes/_templates', 'data/plans', 'landing', 'logs', 'bin']) mkdirSync(join(root, directory), { recursive: true })
    writeFileSync(join(root, 'episodes/_templates/style.css'), ':root {}')
    writeFileSync(join(root, 'episodes/_templates/article-theme.css'), ':root {}')
    writeFileSync(join(root, 'data/plans/source-1.yml'), JSON.stringify({ source: 'source-1', episodes: [
      { id: 'good', status: 'generated' }, { id: 'bad-build', status: 'generated' },
    ] }))
    writeFileSync(join(root, 'logs/pipeline-timing.json'), JSON.stringify({ generatedEpisodes }))
    // Exercise the real build orchestration, caching and HTML assembly without
    // invoking compilers. One compiler fails, the other emits a minimal bundle.
    writeFileSync(join(root, 'bin/pnpm'), `#!${process.execPath}
const fs = require('node:fs'), path = require('node:path');
if (process.argv.includes('slidev')) {
  const output = process.argv[process.argv.indexOf('--out') + 1];
  if (output.includes('bad-build')) { console.error('fixture compilation failed'); process.exit(1); }
  fs.mkdirSync(output, {recursive:true});
  fs.writeFileSync(path.join(output,'index.html'), '<html><head></head><body>deck</body></html>');
} else {
  if (${failLanding}) process.exit(1);
  fs.mkdirSync('dist',{recursive:true});
  fs.writeFileSync('dist/index.html','<html><head></head><body>library</body></html>');
}
`, { mode: 0o755 })
    const result = spawnSync(process.execPath, [
      resolve(repository, 'node_modules/tsx/dist/cli.mjs'), resolve(repository, 'scripts/build-all.ts'), '--allow-episode-failures',
    ], { cwd: root, encoding: 'utf8', timeout: 15_000, env: {
      ...process.env, PATH: `${join(root, 'bin')}${delimiter}${process.env.PATH}`, RESONOTE_BUILD_CACHE_DIR: join(root, 'cache'), RESONOTE_BUILD_CONCURRENCY: '2', GITHUB_STEP_SUMMARY: join(root, 'summary.md'),
    } })
    assert.equal(result.error, undefined)
    inspect(root, result.status, result.stdout + result.stderr)
  } finally { rmSync(root, { recursive: true, force: true }) }
}

test('a failed new build does not block successful decks or leak a draft article into dist', () => {
  executeBuild(['good', 'bad-build'], (root, code, output) => {
    assert.equal(code, 0, output)
    assert.ok(existsSync(join(root, 'dist/episodes/good/index.html')))
    assert.ok(existsSync(join(root, 'dist/episodes/good/article.html')))
    assert.equal(existsSync(join(root, 'dist/episodes/bad-build')), false)
    assert.ok(existsSync(join(root, 'episodes/_failed/bad-build/article.html')))
    assert.doesNotMatch(readFileSync(join(root, 'dist/episodes/good/index.html'), 'utf8'), /bad-build/)
    assert.doesNotMatch(readFileSync(join(root, 'dist/episodes/good/article.html'), 'utf8'), /bad-build/)
    const plan = parse(readFileSync(join(root, 'data/plans/source-1.yml'), 'utf8'))
    assert.deepEqual(plan.episodes.map((entry: any) => entry.status), ['generated', 'failed'])
    assert.match(readFileSync(join(root, 'summary.md'), 'utf8'), /New episode build failures \(drafts preserved\): 1/)
  })
})

test('publication mode still fails on an existing episode build regression', () => {
  executeBuild(['good'], (root, code, output) => {
    assert.equal(code, 1, output)
    assert.ok(existsSync(join(root, 'episodes/bad-build/article.html')))
    assert.equal(existsSync(join(root, 'episodes/_failed/bad-build')), false)
  })
})

test('publication mode still fails on a site build error', () => {
  executeBuild(['good', 'bad-build'], (_root, code, output) => {
    assert.equal(code, 1, output)
    assert.match(output, /landing build failed/)
  }, true)
})
