import assert from 'node:assert/strict'
import test from 'node:test'
import { contentCommand, contentProvider, parseContentLog, responsesBaseUrl } from './content-runner.ts'

test('selects the Responses runner for GPT and preserves Messages providers', () => {
  assert.equal(contentProvider({ CONTENT_MODEL_NAME: 'gpt-5.6-luna' }), 'codex')
  assert.equal(contentProvider({ ANTHROPIC_MODEL: 'mimo-v2.5' }), 'claude')
  assert.equal(contentProvider({ ANTHROPIC_MODEL: 'deepseek-v4-flash' }), 'claude')
  assert.equal(contentProvider({ CONTENT_PROVIDER: 'claude', CONTENT_MODEL_NAME: 'gpt-5.6-luna' }), 'claude')
  assert.throws(() => contentProvider({ CONTENT_PROVIDER: 'invalid' }), /CONTENT_PROVIDER/)
})

test('normalizes Responses base paths without duplicating v1', () => {
  assert.equal(responsesBaseUrl('https://gateway.example'), 'https://gateway.example/v1')
  assert.equal(responsesBaseUrl('https://gateway.example/v1/'), 'https://gateway.example/v1')
  assert.equal(responsesBaseUrl('https://gateway.example/proxy/v1'), 'https://gateway.example/proxy/v1')
  assert.throws(() => responsesBaseUrl('https://user:secret@gateway.example'), /without credentials/)
})

test('configures the selected model and token without placing the key in process arguments', () => {
  const invocation = contentCommand('Generate one episode', {
    CONTENT_MODEL_NAME: 'gpt-5.6-luna', CONTENT_BASE_URL: 'https://gateway.example',
    CONTENT_API_KEY: 'private-token', CONTENT_EFFORT: 'max',
  })
  assert.equal(invocation.command, 'codex')
  assert.ok(invocation.args.includes('gpt-5.6-luna'))
  assert.ok(invocation.args.includes('model_reasoning_effort="max"'))
  assert.ok(invocation.args.includes('model_providers.resonote.base_url="https://gateway.example/v1"'))
  assert.ok(!invocation.args.join(' ').includes('private-token'))
  assert.equal(invocation.env.CONTENT_API_KEY, 'private-token')
})

test('honors common configuration for the Claude runner', () => {
  const invocation = contentCommand('Generate', {
    CONTENT_MODEL_NAME: 'mimo-v2.5', CONTENT_BASE_URL: 'https://gateway.example/anthropic', CONTENT_API_KEY: 'token',
  })
  assert.equal(invocation.provider, 'claude')
  assert.ok(invocation.args.includes('mimo-v2.5'))
  assert.equal(invocation.env.ANTHROPIC_AUTH_TOKEN, 'token')
  assert.equal(invocation.env.ANTHROPIC_BASE_URL, 'https://gateway.example/anthropic')
})

test('requires completed, non-error output and reads actual usage for both CLIs', () => {
  const claude = parseContentLog(JSON.stringify({ type: 'result', subtype: 'success', is_error: true, usage: { input_tokens: 42, output_tokens: 3 } }))
  assert.equal(claude.completed, true)
  assert.equal(claude.isError, true)
  assert.equal(claude.inputTokens, 42)
  const codex = parseContentLog(JSON.stringify({ type: 'turn.completed', usage: { input_tokens: 10, output_tokens: 8 } }))
  assert.equal(codex.completed, true)
  assert.equal(codex.isError, false)
  assert.equal(codex.outputTokens, 8)
  assert.equal(parseContentLog('{"type":"turn.failed"}').isError, true)
  assert.equal(parseContentLog('{"type":"turn.started"}\npartial output').completed, false)
  assert.equal(parseContentLog('{"type":"item.completed","item":{"text":"We discussed rate limits"}}\n{"type":"turn.completed"}').isRateLimit, false)
  assert.equal(parseContentLog('{"type":"turn.failed","error":{"message":"429 Too many requests"}}').isRateLimit, true)
})
