import assert from 'node:assert/strict'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { parse } from 'yaml'
import { isolateNewEpisodeBuildFailure } from './episode-publication.ts'
import { artifactFixture } from './test-support/artifact-fixture.ts'

test('a new episode build failure is isolated and queued for generation retry', () => {
  const { root, id } = artifactFixture()
  try {
    mkdirSync(join(root, 'data/plans'), { recursive: true })
    const path = join(root, 'data/plans/source-1.yml')
    writeFileSync(path, JSON.stringify({ source: 'source-1', done: 2, episodes: [
      { id, status: 'generated' }, { id: 'other', status: 'generated' },
    ] }))
    isolateNewEpisodeBuildFailure(root, id, new Set([id]), new Error('Slidev compilation failed'))
    assert.equal(existsSync(join(root, 'episodes', id)), false)
    assert.ok(existsSync(join(root, 'episodes/_failed', id, 'article.html')))
    assert.match(readFileSync(join(root, 'episodes/_failed', id, 'build-error.txt'), 'utf8'), /Slidev compilation failed/)
    const plan = parse(readFileSync(path, 'utf8'))
    assert.equal(plan.done, 1)
    assert.deepEqual(plan.episodes, [{ id, status: 'failed' }, { id: 'other', status: 'generated' }])
  } finally { rmSync(root, { recursive: true, force: true }) }
})

test('does not hide a build regression in previously published content', () => {
  const { root, id } = artifactFixture()
  try {
    const error = new Error('existing content cannot build')
    assert.throws(() => isolateNewEpisodeBuildFailure(root, id, new Set(), error), value => value === error)
    assert.ok(existsSync(join(root, 'episodes', id, 'meta.yml')))
  } finally { rmSync(root, { recursive: true, force: true }) }
})
