import assert from 'node:assert/strict'
import test from 'node:test'
import { contentEffortArgs } from './content-effort.ts'

test('omits the Claude effort option when CONTENT_EFFORT is unset', () => {
  const originalEffort = process.env.CONTENT_EFFORT
  delete process.env.CONTENT_EFFORT

  try {
    assert.deepEqual(contentEffortArgs(), [])
    assert.deepEqual(contentEffortArgs('  '), [])
  }
  finally {
    if (originalEffort === undefined) delete process.env.CONTENT_EFFORT
    else process.env.CONTENT_EFFORT = originalEffort
  }
})

test('passes a configured Claude effort level', () => {
  assert.deepEqual(contentEffortArgs(' xhigh '), ['--effort', 'xhigh'])
})

test('rejects unsupported Claude effort levels', () => {
  assert.throws(() => contentEffortArgs('extreme'), /CONTENT_EFFORT must be one of/)
})
