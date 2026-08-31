import assert from 'node:assert/strict'
import test from 'node:test'
import { parse } from 'yaml'
import {
  normalizeGeneratedAt, normalizePublishedSort, setTopLevelScalar,
} from './meta-fields.ts'

test('normalizes exact, month-only, and RSS publication dates', () => {
  assert.equal(normalizePublishedSort('20260831'), '20260831')
  assert.equal(normalizePublishedSort('2026-08'), '20260801')
  assert.equal(normalizePublishedSort('Tue, 11 Aug 2026 20:12:00 -0000'), '20260811')
  assert.equal(normalizePublishedSort('not a date'), undefined)
})

test('normalizes generation timestamps to UTC ISO strings', () => {
  assert.equal(normalizeGeneratedAt('2026-08-30T18:51:43Z'), '2026-08-30T18:51:43.000Z')
  assert.equal(normalizeGeneratedAt('invalid'), undefined)
})

test('sets top-level scalar fields without reformatting the document', () => {
  let text = 'id: example\npublished: 2026-08\nstatus: generated\nsummary: |\n  Keep this block.\n'
  text = setTopLevelScalar(text, 'published_sort', '20260811', 'published')
  text = setTopLevelScalar(text, 'generated_at', '2026-08-30T18:51:43.000Z', 'status')

  assert.match(text, /published: 2026-08\npublished_sort: "20260811"/)
  assert.match(text, /status: generated\ngenerated_at: "2026-08-30T18:51:43.000Z"/)
  assert.equal(parse(text).summary, 'Keep this block.\n')
})
