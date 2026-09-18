import assert from 'node:assert/strict'
import test from 'node:test'
import { spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import {
  getAvailableFormats, sortEpisodesByGeneratedDesc, sortEpisodesByPublishedDesc, sortEpisodesForLibrary,
} from './data.ts'
import type { EpisodeWithSource } from './data.ts'

test('article-only publication never advertises slides while legacy notes keep both formats', () => {
  const episode: EpisodeWithSource = {
    id: 'article', source: 'source', title: 'Article', status: 'generated',
    url: 'https://example.com', article_path: 'episodes/article/article.html',
    sourceRef: { id: 'source', name: 'Source' },
  }
  assert.deepEqual(getAvailableFormats(episode), ['slides', 'article'])
  assert.deepEqual(getAvailableFormats({ ...episode, visual_notes: false }), ['article'])
  assert.deepEqual(getAvailableFormats({ ...episode, visual_notes: false, article_path: undefined }), [])
})

test('loads completed articles and preserves status for plan and catalog entries', () => {
  const root = mkdtempSync(join(tmpdir(), 'resonote-article-library-'))
  try {
    for (const directory of ['landing', 'data/plans', 'episodes/article']) mkdirSync(join(root, directory), { recursive: true })
    writeFileSync(join(root, 'sources.yml'), 'sources: [{id: source, name: Source}]')
    writeFileSync(join(root, 'episodes/article/meta.yml'), JSON.stringify({
      id: 'article', source: 'source', title: 'Article', url: 'https://example.com',
      status: 'generated', visual_notes: false, generated_at: '2026-09-18T00:00:00Z',
    }))
    writeFileSync(join(root, 'episodes/article/article.html'), '<article>Article</article>')
    writeFileSync(join(root, 'data/plans/source.yml'), JSON.stringify({ source: 'source', episodes: [
      { id: 'planned', title: 'Planned', status: 'needs_transcript', url: 'https://example.com' },
    ] }))
    writeFileSync(join(root, 'episodes.yml'), JSON.stringify({ episodes: [
      { id: 'catalog', source: 'source', title: 'Catalog', status: 'queued', url: 'https://example.com' },
    ] }))
    const result = spawnSync(process.execPath, [
      resolve('node_modules/tsx/dist/cli.mjs'), '-e',
      `import { loadEpisodes, getAvailableFormats } from ${JSON.stringify(resolve('landing/src/lib/data.ts'))}; console.log(JSON.stringify(loadEpisodes().map(ep => ({id:ep.id,status:ep.status,formats:getAvailableFormats(ep)}))))`,
    ], { cwd: join(root, 'landing'), encoding: 'utf8', timeout: 10_000 })
    assert.equal(result.status, 0, result.stderr)
    const episodes = JSON.parse(result.stdout)
    assert.deepEqual(episodes.find((episode: any) => episode.id === 'article'), { id: 'article', status: 'generated', formats: ['article'] })
    assert.equal(episodes.find((episode: any) => episode.id === 'planned').status, 'needs_transcript')
    assert.equal(episodes.find((episode: any) => episode.id === 'catalog').status, 'queued')
  } finally { rmSync(root, { recursive: true, force: true }) }
})

test('sorts recent notes by persisted generation time', () => {
  const episodes = [
    { id: 'old', title: 'Old', published: '2026-08', published_sort: '20260831', generated_at: '2026-08-01T00:00:00Z' },
    { id: 'new', title: 'New', published: '2026-07', published_sort: '20260701', generated_at: '2026-08-30T00:00:00Z' },
  ]
  assert.deepEqual(sortEpisodesByGeneratedDesc(episodes).map(episode => episode.id), ['new', 'old'])
})

test('sorts publication dates using exact persisted day keys', () => {
  const episodes = [
    { id: 'first', title: 'First', published: '2026-08', published_sort: '20260801' },
    { id: 'last', title: 'Last', published: '2026-08', published_sort: '20260831' },
  ]
  assert.deepEqual(sortEpisodesByPublishedDesc(episodes).map(episode => episode.id), ['last', 'first'])
})

test('sorts library by generation time by default and publication time on request', () => {
  const episodes = [
    { id: 'published-later', title: 'Published later', status: 'generated', published_sort: '20260831', generated_at: '2026-08-01T00:00:00Z' },
    { id: 'generated-later', title: 'Generated later', status: 'generated', published_sort: '20260701', generated_at: '2026-08-30T00:00:00Z' },
    { id: 'not-generated', title: 'Not generated', status: 'queued', published_sort: '20260901' },
  ]

  assert.deepEqual(sortEpisodesForLibrary(episodes).map(episode => episode.id), ['generated-later', 'published-later', 'not-generated'])
  assert.deepEqual(sortEpisodesForLibrary(episodes, 'published').map(episode => episode.id), ['not-generated', 'published-later', 'generated-later'])
})
