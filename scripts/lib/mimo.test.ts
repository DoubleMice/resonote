import assert from 'node:assert/strict'
import test from 'node:test'
import {
  buildMiMoTranscriptionRequest,
  DEFAULT_MIMO_MAX_COMPLETION_TOKENS,
  DEFAULT_MIMO_MODEL,
  MiMoClient,
  resolveMaxCompletionTokens,
} from './mimo.ts'

test('uses the general MiMo model and its documented completion default', () => {
  assert.equal(DEFAULT_MIMO_MODEL, 'mimo-v2.5')
  assert.equal(resolveMaxCompletionTokens(undefined), DEFAULT_MIMO_MAX_COMPLETION_TOKENS)
  assert.equal(resolveMaxCompletionTokens(''), DEFAULT_MIMO_MAX_COMPLETION_TOKENS)
  assert.equal(resolveMaxCompletionTokens('not-a-number'), DEFAULT_MIMO_MAX_COMPLETION_TOKENS)
  assert.equal(resolveMaxCompletionTokens('65536'), 65536)
  assert.equal(resolveMaxCompletionTokens('999999'), 131072)
})

test('builds the documented audio-understanding request with a transcription instruction', () => {
  const request = buildMiMoTranscriptionRequest(DEFAULT_MIMO_MODEL, 'data:audio/mpeg;base64,AAAA')
  const messages = request.messages as Array<Record<string, unknown>>
  const userContent = messages[1]?.content as Array<Record<string, unknown>>

  assert.equal(request.model, 'mimo-v2.5')
  assert.equal(request.max_completion_tokens, 32768)
  assert.deepEqual(request.thinking, { type: 'disabled' })
  assert.match(String(messages[0]?.content), /transcription engine/i)
  assert.deepEqual(userContent[0], {
    type: 'input_audio',
    input_audio: { data: 'data:audio/mpeg;base64,AAAA' },
  })
  assert.equal(userContent[1]?.type, 'text')
  assert.match(String(userContent[1]?.text), /transcribe.*verbatim/i)
})

test('uses OpenAI-compatible Bearer authentication', async () => {
  const originalFetch = globalThis.fetch
  let authorization = ''
  globalThis.fetch = async (_input, init) => {
    authorization = String((init?.headers as Record<string, string>)?.Authorization || '')
    return new Response(JSON.stringify({ choices: [{ message: { content: 'ok transcript' } }] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  try {
    await new MiMoClient({ apiKey: 'test-key' }).transcribe('data:audio/wav;base64,AAAA')
    assert.equal(authorization, 'Bearer test-key')
  } finally {
    globalThis.fetch = originalFetch
  }
})
