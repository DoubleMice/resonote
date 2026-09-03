import assert from 'node:assert/strict'
import test from 'node:test'
import { contentEffortArgs } from './content-effort.ts'

test('omits the Claude effort option when CONTENT_EFFORT is unset', () => {
  assert.deepEqual(contentEffortArgs(undefined), [])
  assert.deepEqual(contentEffortArgs('  '), [])
})

test('passes a configured Claude effort level', () => {
  assert.deepEqual(contentEffortArgs(' xhigh '), ['--effort', 'xhigh'])
})

test('rejects unsupported Claude effort levels', () => {
  assert.throws(() => contentEffortArgs('extreme'), /CONTENT_EFFORT must be one of/)
})
