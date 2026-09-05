import assert from 'node:assert/strict'
import test from 'node:test'
import {
  sortEpisodesByGeneratedDesc, sortEpisodesByPublishedDesc, sortEpisodesForLibrary,
} from './data.ts'

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
