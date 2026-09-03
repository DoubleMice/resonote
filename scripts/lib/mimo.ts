export interface MiMoClientOptions {
  apiKey: string
  model?: string
  baseUrl?: string
}

export interface MiMoTranscript {
  text: string
  rawId?: string
  usage?: unknown
}

export const DEFAULT_MIMO_MODEL = 'mimo-v2.5'
export const DEFAULT_MIMO_MAX_COMPLETION_TOKENS = 32768
const MAX_MIMO_COMPLETION_TOKENS = 131072

const TRANSCRIPTION_SYSTEM_PROMPT = [
  'You are a precise speech transcription engine.',
  'Return only the complete transcript in the original spoken language or languages.',
  'Preserve the speakers\' wording and add punctuation where appropriate.',
  'Do not summarize, translate, explain, or add markdown.',
].join(' ')

const TRANSCRIPTION_USER_PROMPT = 'Transcribe this entire audio verbatim. Return only the transcript text.'

type JsonObject = Record<string, unknown>

function isObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value : undefined
}

function getPath(root: unknown, path: string[]): unknown {
  let cursor = root
  for (const key of path) {
    if (Array.isArray(cursor)) {
      const index = Number(key)
      if (!Number.isInteger(index)) return undefined
      cursor = cursor[index]
    } else if (isObject(cursor)) {
      cursor = cursor[key]
    } else {
      return undefined
    }
  }
  return cursor
}

export function resolveMaxCompletionTokens(rawValue: string | undefined): number {
  if (!rawValue?.trim()) return DEFAULT_MIMO_MAX_COMPLETION_TOKENS
  const value = Number(rawValue)
  if (!Number.isInteger(value) || value < 1) return DEFAULT_MIMO_MAX_COMPLETION_TOKENS
  return Math.min(value, MAX_MIMO_COMPLETION_TOKENS)
}

export function buildMiMoTranscriptionRequest(model: string, audioData: string): JsonObject {
  return {
    model,
    messages: [
      {
        role: 'system',
        content: TRANSCRIPTION_SYSTEM_PROMPT,
      },
      {
        role: 'user',
        content: [
          {
            type: 'input_audio',
            input_audio: { data: audioData },
          },
          {
            type: 'text',
            text: TRANSCRIPTION_USER_PROMPT,
          },
        ],
      },
    ],
    max_completion_tokens: resolveMaxCompletionTokens(process.env.MIMO_MAX_COMPLETION_TOKENS),
    thinking: { type: 'disabled' },
  }
}

export class MiMoClient {
  private apiKey: string
  private model: string
  private url: string

  constructor(options: MiMoClientOptions) {
    this.apiKey = options.apiKey
    this.model = options.model || DEFAULT_MIMO_MODEL
    this.url = `${(options.baseUrl || 'https://api.xiaomimimo.com/v1').replace(/\/$/, '')}/chat/completions`
  }

  async transcribe(audioData: string): Promise<MiMoTranscript> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(buildMiMoTranscriptionRequest(this.model, audioData)),
    })
    const body = await response.text()
    if (!response.ok) throw new Error(`MiMo transcription failed: ${response.status} ${body.slice(0, 500)}`)
    const json = JSON.parse(body)
    const finishReason = asString(getPath(json, ['choices', '0', 'finish_reason']))
    if (finishReason === 'length') {
      throw new Error('MiMo transcription was truncated because it reached max_completion_tokens')
    }
    const text = asString(getPath(json, ['choices', '0', 'message', 'content']))
      ?? asString(getPath(json, ['choices', '0', 'message', 'reasoning_content']))
    if (!text) throw new Error(`MiMo transcription returned empty text: ${body.slice(0, 500)}`)
    return {
      text: text.trim(),
      rawId: asString(getPath(json, ['id'])),
      usage: isObject(json) ? json.usage : undefined,
    }
  }
}
