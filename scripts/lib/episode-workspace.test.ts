import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import {
  archiveFailedEpisode, restoreFailedEpisode, resolveEpisodeDirectory, scaffoldEpisodeWorkspace, stageEpisodePresentation,
} from './episode-workspace.ts'

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'resonote-workspace-'))
  const episodes = join(root, 'episodes')
  const templates = join(episodes, '_templates')
  mkdirSync(join(templates, 'public'), { recursive: true })
  writeFileSync(join(templates, 'style.css'), ':root {}\n')
  writeFileSync(join(templates, 'public', 'asset.txt'), 'asset\n')
  return { root, episodes, templates }
}

test('scaffolds only durable episode assets', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-1')
    assert.ok(existsSync(join(directory, 'public', 'asset.txt')))
    assert.equal(existsSync(join(directory, 'package.json')), false)
    assert.equal(existsSync(join(directory, 'style.css')), false)
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('stages the canonical style for a command and removes it during cleanup', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-2')
    const cleanup = stageEpisodePresentation(directory, templates)
    assert.equal(readFileSync(join(directory, 'style.css'), 'utf8'), ':root {}\n')
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
    cleanup()
    cleanup()
    assert.equal(existsSync(join(directory, 'style.css')), false)
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('temporarily replaces a stale style and suppresses legacy chrome', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-3')
    writeFileSync(join(directory, 'style.css'), 'stale style\n')
    writeFileSync(join(directory, 'global-bottom.vue'), '<template>stale</template>\n')
    const cleanup = stageEpisodePresentation(directory, templates)
    assert.equal(readFileSync(join(directory, 'style.css'), 'utf8'), ':root {}\n')
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
    cleanup()
    assert.equal(readFileSync(join(directory, 'style.css'), 'utf8'), 'stale style\n')
    assert.equal(readFileSync(join(directory, 'global-bottom.vue'), 'utf8'), '<template>stale</template>\n')
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('cleans a canonical style left by an interrupted command', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-4')
    writeFileSync(join(directory, 'style.css'), ':root {}\n')
    const cleanup = stageEpisodePresentation(directory, templates)
    cleanup()
    assert.equal(existsSync(join(directory, 'style.css')), false)
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('rejects episode ids that could escape the episode root', () => {
  assert.throws(() => resolveEpisodeDirectory('/tmp/episodes', '../outside'), /invalid episode id/)
  assert.throws(() => resolveEpisodeDirectory('/tmp/episodes', 'nested/id'), /invalid episode id/)
  assert.throws(() => archiveFailedEpisode('/tmp/episodes', '../outside'), /invalid episode id/)
  assert.throws(() => restoreFailedEpisode('/tmp/episodes', '../outside'), /invalid episode id/)
})

test('isolates a malformed draft and restores its exact files for retry', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'failed-episode')
    writeFileSync(join(directory, 'meta.yml'), 'title: [unfinished\n')
    writeFileSync(join(directory, 'article.html'), 'unfinished article')
    assert.equal(archiveFailedEpisode(episodes, 'failed-episode'), true)
    assert.equal(existsSync(directory), false)
    assert.equal(archiveFailedEpisode(episodes, 'failed-episode'), false)
    assert.equal(readFileSync(join(episodes, '_failed/failed-episode/meta.yml'), 'utf8'), 'title: [unfinished\n')
    assert.equal(restoreFailedEpisode(episodes, 'failed-episode'), true)
    assert.equal(readFileSync(join(directory, 'meta.yml'), 'utf8'), 'title: [unfinished\n')
    assert.equal(readFileSync(join(directory, 'article.html'), 'utf8'), 'unfinished article')
    assert.equal(readFileSync(join(directory, 'public/asset.txt'), 'utf8'), 'asset\n')
    assert.equal(restoreFailedEpisode(episodes, 'failed-episode'), false)
  } finally { rmSync(root, { recursive: true, force: true }) }
})

test('does not overwrite an existing failed or active workspace', () => {
  const { root, episodes, templates } = fixture()
  try {
    scaffoldEpisodeWorkspace(episodes, templates, 'collision')
    archiveFailedEpisode(episodes, 'collision')
    const active = scaffoldEpisodeWorkspace(episodes, templates, 'collision')
    writeFileSync(join(active, 'user-note.txt'), 'keep me')
    assert.throws(() => archiveFailedEpisode(episodes, 'collision'), /both active and failed/)
    assert.throws(() => restoreFailedEpisode(episodes, 'collision'), /both active and failed/)
    assert.equal(readFileSync(join(active, 'user-note.txt'), 'utf8'), 'keep me')
  } finally { rmSync(root, { recursive: true, force: true }) }
})

test('stages full-width titles for rendering and restores exact editorial source', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'title')
    const path = join(directory, 'slides.md')
    const original = '---\nlayout: two-cols\n---\n\n# 标题\n\n左文\n\n::right::\n\n右图\n'
    writeFileSync(path, original)
    const cleanup = stageEpisodePresentation(directory, templates)
    assert.match(readFileSync(path, 'utf8'), /layout: two-cols-header/)
    cleanup()
    assert.equal(readFileSync(path, 'utf8'), original)
    const generationCleanup = stageEpisodePresentation(directory, templates, false)
    assert.equal(readFileSync(path, 'utf8'), original)
    generationCleanup()
    const editCleanup = stageEpisodePresentation(directory, templates)
    writeFileSync(path, 'user edit\n')
    editCleanup()
    assert.equal(readFileSync(path, 'utf8'), 'user edit\n')
  } finally { rmSync(root, { recursive: true, force: true }) }
})
