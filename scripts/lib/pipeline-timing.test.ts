import assert from 'node:assert/strict'
import test from 'node:test'
import { PipelineTiming } from './pipeline-timing.ts'

test('records successful and failed overlapping measurements without conflating wall time', async () => {
  const timing = new PipelineTiming()
  await Promise.allSettled([
    timing.measure('agent', 'one', async () => 'ok'),
    timing.measure('agent', 'two', async () => { throw new Error('failed') }),
  ])
  const report = timing.report()
  assert.equal(report.samples.length, 2)
  assert.equal(report.samples.find(s => s.id === 'one')?.ok, true)
  assert.equal(report.samples.find(s => s.id === 'two')?.ok, false)
  assert(report.samples.every(s => s.ms >= 0 && s.ms <= report.wallMs))
})
