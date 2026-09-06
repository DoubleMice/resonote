import { existsSync } from 'node:fs'
import { contentEffortArgs } from './content-effort.ts'

export type ContentProvider = 'claude' | 'codex'

export function contentProvider(env: NodeJS.ProcessEnv = process.env): ContentProvider {
  const provider = env.CONTENT_PROVIDER?.trim().toLowerCase() || 'auto'
  if (provider === 'claude' || provider === 'codex') return provider
  if (provider !== 'auto') throw new Error('CONTENT_PROVIDER must be auto, claude or codex')
  const model = env.CONTENT_MODEL_NAME || env.ANTHROPIC_MODEL || env.ANTHROPIC_DEFAULT_HAIKU_MODEL || ''
  return /^(gpt-|o\d(?:-|$)|codex)/i.test(model) ? 'codex' : 'claude'
}

export function responsesBaseUrl(base: string): string {
  const url = new URL(base)
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) {
    throw new Error('CONTENT_BASE_URL must be an HTTP(S) API base URL without credentials, query or fragment')
  }
  const path = url.pathname.replace(/\/+$/, '')
  // Preserve custom prefixes, and avoid /v1/v1 when the base already has /v1.
  url.pathname = path.endsWith('/v1') ? path : `${path}/v1`
  return url.toString().replace(/\/$/, '')
}

export function contentCommand(prompt: string, env: NodeJS.ProcessEnv = process.env): {
  provider: ContentProvider; command: string; args: string[]; env: NodeJS.ProcessEnv
} {
  const provider = contentProvider(env)
  const effortArgs = contentEffortArgs(env.CONTENT_EFFORT || '')
  const key = env.CONTENT_API_KEY || env.ANTHROPIC_AUTH_TOKEN
  const model = env.CONTENT_MODEL_NAME || env.ANTHROPIC_MODEL || env.ANTHROPIC_DEFAULT_HAIKU_MODEL
  const base = env.CONTENT_BASE_URL || env.ANTHROPIC_BASE_URL
  if (provider === 'codex') {
    if (!model) throw new Error('CONTENT_MODEL_NAME is required for Codex generation')
    if (!base) throw new Error('CONTENT_BASE_URL is required for Codex generation')
    if (!key) throw new Error('CONTENT_API_KEY is required for Codex generation')
    const args = [
      'exec', '--json', '--ephemeral', '--ignore-user-config',
      '--sandbox', 'workspace-write', '--model', model,
      '-c', 'approval_policy="never"',
      '-c', 'model_provider="resonote"',
      '-c', 'model_providers.resonote.name="Resonote content"',
      '-c', `model_providers.resonote.base_url=${JSON.stringify(responsesBaseUrl(base))}`,
      '-c', 'model_providers.resonote.wire_api="responses"',
      '-c', 'model_providers.resonote.env_key="CONTENT_API_KEY"',
      '-c', 'model_providers.resonote.request_max_retries=2',
      '-c', 'model_providers.resonote.stream_max_retries=2',
    ]
    if (effortArgs.length) args.push('-c', `model_reasoning_effort=${JSON.stringify(effortArgs[1])}`)
    args.push(prompt)
    return { provider, command: 'codex', args, env: { ...env, CONTENT_API_KEY: key } }
  }
  const windowsClaude = 'C:\\nvm4w\\nodejs\\node_modules\\@anthropic-ai\\claude-code\\bin\\claude.exe'
  const command = process.platform === 'win32' && existsSync(windowsClaude) ? windowsClaude : 'claude'
  return {
    provider, command,
    args: ['-p', '--model', model || 'haiku', '--verbose', '--output-format', 'stream-json',
      '--allowedTools', 'Read,Write,Edit,Bash,Grep,Glob', ...effortArgs,
      '--permission-mode', 'bypassPermissions', prompt],
    env: { ...env, ...(base ? { ANTHROPIC_BASE_URL: base } : {}), ...(key ? { ANTHROPIC_AUTH_TOKEN: key } : {}) },
  }
}

export function parseContentLog(content: string): {
  inputTokens: number; outputTokens: number; isRateLimit: boolean; isError: boolean; completed: boolean
} {
  let inputTokens = 0, outputTokens = 0, isError = false, completed = false, isRateLimit = false
  for (const line of content.split('\n')) {
    let event: any
    try { event = JSON.parse(line) } catch { continue }
    if (event.type === 'result') {
      completed = true
      isError ||= event.is_error === true
      const usage = event.usage || event.result?.usage
      inputTokens += usage?.input_tokens || 0
      outputTokens += usage?.output_tokens || 0
    } else if (event.type === 'turn.completed') {
      completed = true
      inputTokens += event.usage?.input_tokens || 0
      outputTokens += event.usage?.output_tokens || 0
    } else if (event.type === 'turn.failed') {
      isError = true
    }
    if (event.type === 'turn.failed' || event.type === 'error' || (event.type === 'result' && event.is_error)) {
      isRateLimit ||= /hit your limit|rate.?limit|quota exceeded|too many requests|\b429\b/i.test(line)
    }
  }
  return { inputTokens, outputTokens, isRateLimit: isRateLimit && (isError || !completed), isError, completed }
}
