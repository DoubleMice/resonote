import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import {
  cachedEpisodeDist, episodeBuildFingerprint, storeEpisodeDist,
} from './build-cache.ts'

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'resonote-build-cache-'))
  const episode = join(root, 'episodes', 'episode-1')
  const templates = join(root, 'episodes', '_templates')
  mkdirSync(join(episode, 'public'), { recursive: true })
  mkdirSync(templates, { recursive: true })
  writeFileSync(join(root, 'package.json'), '{}\n')
  writeFileSync(join(root, 'pnpm-lock.yaml'), 'lockfileVersion: 9\n')
  mkdirSync(join(root, 'scripts', 'lib'), { recursive: true })
  writeFileSync(join(root, 'scripts', 'lib', 'episode-workspace.ts'), 'export {}\n')
  writeFileSync(join(episode, 'slides.md'), '# Slide\n')
  writeFileSync(join(episode, 'meta.yml'), 'status: generated\n')
  writeFileSync(join(episode, 'article.html'), '<article>one</article>\n')
  writeFileSync(join(episode, 'public', 'diagram.excalidraw'), '{}\n')
  writeFileSync(join(templates, 'style.css'), ':root {}\n')
  return { root, episode, templates }
}

test('episode fingerprints ignore landing metadata but include presentation inputs', () => {
  const { root, episode, templates } = fixture()
  try {
    const options = { rootDir: root, episodeDir: episode, templatesDir: templates, base: '/resonote/episodes/episode-1/' }
    const initial = episodeBuildFingerprint(options)
    writeFileSync(join(episode, 'meta.yml'), 'status: generated\ngenerated_at: now\n')
    writeFileSync(join(episode, 'article.html'), '<article>two</article>\n')
    assert.equal(episodeBuildFingerprint(options), initial)

    writeFileSync(join(episode, 'slides.md'), '# Changed\n')
    assert.notEqual(episodeBuildFingerprint(options), initial)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('episode fingerprints include the shared style and deployed base path', () => {
  const { root, episode, templates } = fixture()
  try {
    const options = { rootDir: root, episodeDir: episode, templatesDir: templates, base: '/resonote/episodes/episode-1/' }
    const initial = episodeBuildFingerprint(options)
    writeFileSync(join(templates, 'style.css'), ':root { color: green; }\n')
    assert.notEqual(episodeBuildFingerprint(options), initial)
    assert.notEqual(episodeBuildFingerprint({ ...options, base: '/other/' }), initial)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('cached builds are reused only for an exact fingerprint', () => {
  const { root } = fixture()
  try {
    const sourceDist = join(root, 'source-dist')
    const cache = join(root, '.cache', 'episode-builds')
    mkdirSync(sourceDist, { recursive: true })
    writeFileSync(join(sourceDist, 'index.html'), '<!doctype html>\n')
    const stored = storeEpisodeDist(cache, 'episode-1', 'fingerprint-a', sourceDist)
    assert.equal(cachedEpisodeDist(cache, 'episode-1', 'fingerprint-a'), stored)
    assert.equal(cachedEpisodeDist(cache, 'episode-1', 'fingerprint-b'), null)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
