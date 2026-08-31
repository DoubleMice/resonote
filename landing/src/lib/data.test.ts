import assert from 'node:assert/strict'
import test from 'node:test'
import {
  sortEpisodesByGeneratedDesc, sortEpisodesByPublishedDesc,
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
