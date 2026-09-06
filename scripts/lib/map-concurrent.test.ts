import assert from 'node:assert/strict'
import test from 'node:test'
import { setTimeout } from 'node:timers/promises'
import { mapConcurrent } from './map-concurrent.ts'

test('bounds active work and preserves input order despite out-of-order completion', async () => {
  let active = 0, peak = 0
  const result = await mapConcurrent([30, 5, 10, 1], 2, async (delay, index) => {
    peak = Math.max(peak, ++active)
    await setTimeout(delay)
    active--
    return index
  })
  assert.equal(peak, 2)
  assert.equal(active, 0)
  assert.deepEqual(result, [0, 1, 2, 3])
})

test('stops new work and drains in-flight tasks before rejecting', async () => {
  const started: number[] = []
  let cleaned = false
  const failure = new Error('build failed')
  await assert.rejects(mapConcurrent([0, 1, 2, 3], 2, async index => {
    started.push(index)
    if (index === 0) { await setTimeout(1); throw failure }
    await setTimeout(20)
    cleaned = true
  }), error => error === failure)
  assert.deepEqual(started, [0, 1])
  assert.equal(cleaned, true)
})

test('handles empty work and rejects invalid concurrency', async () => {
  assert.deepEqual(await mapConcurrent([], 2, async value => value), [])
  for (const invalid of [0, -1, 1.5, NaN, Infinity]) {
    await assert.rejects(mapConcurrent([1], invalid, async value => value), /positive integer/)
  }
})
