import { Buffer } from 'node:buffer'
import { existsSync, readFileSync, mkdtempSync, rmSync, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { tmpdir } from 'node:os'
import { setTimeout as sleep } from 'node:timers/promises'
import { DashScopeClient } from './lib/dashscope.ts'
import { MiMoClient } from './lib/mimo.ts'
import { log } from './lib/log.ts'
import { downloadAudio, splitAudio } from './lib/transcription-audio.ts'

const ROOT = process.cwd()
const SAMPLE_AUDIO_URL = 'https://example-files.cnbj1.mi-fds.com/example-files/audio/audio_example.wav'

async function downloadSampleAudioDataUri(): Promise<string> {
  const response = await fetch(SAMPLE_AUDIO_URL, {
    headers: { accept: 'audio/*,*/*' },
  })
  const audio = Buffer.from(await response.arrayBuffer())
  if (!response.ok) {
    throw new Error(`MiMo E2E sample download failed: ${response.status} ${audio.toString('utf-8').slice(0, 200)}`)
  }
  if (audio.length === 0) throw new Error('MiMo E2E sample download returned an empty file')

  const contentType = response.headers.get('content-type')?.split(';')[0]?.trim().toLowerCase()
  const mimeType = contentType?.startsWith('audio/') ? contentType : 'audio/wav'
  log.info(`MiMo E2E sample ready (${audio.length} bytes, ${mimeType})`)
  return `data:${mimeType};base64,${audio.toString('base64')}`
}

function loadEnvFile(path: string): void {
  if (!existsSync(path)) return
  for (const rawLine of readFileSync(path, 'utf-8').split('\n')) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const match = line.match(/^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)=(.*)$/)
    if (!match) continue
    const [, key, rawValue] = match
    if (process.env[key]) continue
    const value = rawValue
      .trim()
      .replace(/^['"]|['"]$/g, '')
    process.env[key] = value
  }
}

function loadLocalEnv(): void {
  loadEnvFile(resolve(ROOT, '.env.local'))
  loadEnvFile(resolve(ROOT, 'scripts/env.local.sh'))
}

function provider(): 'mimo' | 'dashscope' {
  const value = (process.env.TRANSCRIPT_PROVIDER || 'mimo').toLowerCase()
  if (value === 'dashscope') return 'dashscope'
  return 'mimo'
}

async function testMiMo(): Promise<void> {
  const apiKey = process.env.MIMO_API_KEY
  if (!apiKey) throw new Error('MIMO_API_KEY is required for MiMo E2E')
  const client = new MiMoClient({
    apiKey,
    baseUrl: process.env.MIMO_BASE_URL,
    model: process.env.MIMO_MODEL,
  })
  // mimo-v2.5 accepts audio plus a text instruction, matching the production path.
  const result = await client.transcribe(await downloadSampleAudioDataUri())
  if (result.text.length < 5) throw new Error(`MiMo transcript too short: ${JSON.stringify(result.text)}`)
  log.ok(`MiMo E2E transcript ok (${result.text.length} chars): ${result.text.slice(0, 120)}`)
}

async function testDashScope(): Promise<void> {
  const apiKey = process.env.DASHSCOPE_API_KEY
  if (!apiKey) throw new Error('DASHSCOPE_API_KEY is required for DashScope E2E')
  const client = new DashScopeClient({
    apiKey,
    region: (process.env.DASHSCOPE_REGION || 'cn') as 'cn' | 'intl',
  })
  const taskId = await client.submit(SAMPLE_AUDIO_URL)
  log.info(`DashScope task submitted: ${taskId}`)
  const deadline = Date.now() + Number(process.env.E2E_TRANSCRIPTION_TIMEOUT_MS || 120_000)
  while (Date.now() < deadline) {
    await sleep(5_000)
    const task = await client.query(taskId)
    if (task.status === 'SUCCEEDED') {
      const url = task.transcriptionUrls[0]
      if (!url) throw new Error('DashScope task succeeded without transcription_url')
      const transcript = await client.downloadTranscript(url)
      if (transcript.text.length < 5) throw new Error(`DashScope transcript too short: ${JSON.stringify(transcript.text)}`)
      log.ok(`DashScope E2E transcript ok (${transcript.text.length} chars): ${transcript.text.slice(0, 120)}`)
      return
    }
    if (task.status === 'FAILED' || task.status === 'CANCELED' || task.status === 'UNKNOWN') {
      throw new Error(`DashScope task ended with ${task.status}: ${task.code ?? ''} ${task.message ?? ''}`.trim())
    }
  }
  throw new Error(`DashScope task did not finish within timeout: ${taskId}`)
}

async function main(): Promise<void> {
  loadLocalEnv()
  // Optional regression check for an actual failed podcast download. It uses
  // the production encoder, then the usual small sample checks API access.
  if (process.env.E2E_AUDIO_URL) {
    const directory = mkdtempSync(join(tmpdir(), 'resonote-audio-e2e-'))
    try {
      const input = join(directory, 'input')
      const downloaded = await downloadAudio(process.env.E2E_AUDIO_URL, input)
      const chunks = await splitAudio(input, directory, 900, 18 * 1024 * 1024)
      const maximum = Math.max(...chunks.map(path => statSync(path).size))
      log.ok(`Audio preprocess passed: ${downloaded.bytes} bytes → ${chunks.length} chunks; largest ${maximum} bytes`)
    } finally {
      rmSync(directory, { recursive: true, force: true })
    }
  }
  const selected = provider()
  log.step(`Transcription E2E — provider=${selected}`)
  if (selected === 'dashscope') await testDashScope()
  else await testMiMo()
}

main().catch(error => {
  log.err(error.stack || error.message)
  process.exit(1)
})
