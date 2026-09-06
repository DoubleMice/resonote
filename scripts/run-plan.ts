// Execute pending entries in data/plans/*.yml:
//   1. download RSS transcript → data/transcripts/<id>.txt
//   2. scaffold durable episode assets from _templates
//   3. invoke claude -p to generate slides.md + editorial meta.yml + article.html
//   4. canonicalize deterministic fields and validate generated artifacts
//   5. update plan entry status (pending → generated | audit_failed | failed)
//
// Usage:
//   pnpm run plan:run                              # all pending across all plans
//   pnpm run plan:run -- --id=lex-fridman          # only this source
//   pnpm run plan:run -- --limit=3                 # process at most N episodes
//   pnpm run plan:run -- --concurrency=2           # parallel generation
//   pnpm run plan:run -- --dry-run                 # show what would be done
//
// Status updates are written back to data/plans/<source>.yml after each episode.
// This means interruptions are safe — re-run picks up from where we left off.

import { resolve, join } from 'node:path'
import {
  readFileSync, writeFileSync, appendFileSync, existsSync, mkdirSync, readdirSync, mkdtempSync, rmSync, statSync,
} from 'node:fs'
import { spawn } from 'node:child_process'
import { createHash } from 'node:crypto'
import { tmpdir } from 'node:os'
import { readYaml, writeYaml } from './lib/yaml-io.ts'
import { cleanTranscript, fetchText, preferredTranscript } from './lib/rss.ts'
import { log } from './lib/log.ts'
import { run } from './lib/spawn.ts'
import { DashScopeClient, jobFromTask } from './lib/dashscope.ts'
import { MiMoClient } from './lib/mimo.ts'
import { downloadAudio, splitAudio } from './lib/transcription-audio.ts'
import { scaffoldEpisodeWorkspace, stageEpisodePresentation } from './lib/episode-workspace.ts'
import { contentCommand, parseContentLog } from './lib/content-runner.ts'
import { canonicalizeGeneratedMeta, canonicalizeSlidesFrontmatter } from './lib/generated-artifacts.ts'
import { validateEpisodeArtifacts } from './lib/artifact-validator.ts'
import type { PlanEntry, PlanFile, TranscriptionJob, TranscriptionJobsFile } from './lib/types.ts'

const ROOT = process.cwd()
const PLANS_DIR = resolve(ROOT, 'data/plans')
const TRANSCRIPTS_DIR = resolve(ROOT, 'data/transcripts')
const TRANSCRIPT_CHUNKS_DIR = resolve(TRANSCRIPTS_DIR, '.chunks')
const TRANSCRIPTION_JOBS_PATH = resolve(ROOT, 'data/transcription-jobs.yml')
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TEMPLATES_DIR = resolve(EPISODES_DIR, '_templates')
const PROMPTS_DIR = resolve(ROOT, 'scripts/prompts')
const RULES_FILE = resolve(PROMPTS_DIR, 'slides-system-rules.md')
const TASK_FILE = resolve(PROMPTS_DIR, 'slides-task.md')

const onlyId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]
const onlyEpisode = process.argv.find(a => a.startsWith('--episode='))?.split('=')[1]
const retryFailed = process.argv.includes('--retry-failed')
const limit = Number(process.argv.find(a => a.startsWith('--limit='))?.split('=')[1] ?? 9999)
const concurrency = Number(process.argv.find(a => a.startsWith('--concurrency='))?.split('=')[1] ?? 1)
const dryRun = process.argv.includes('--dry-run')
const onlyCategory = process.argv.find(a => a.startsWith('--category='))?.split('=')[1]
const autoTranscribe = process.argv.includes('--auto-transcribe')
const transcribeLimit = Number(process.argv.find(a => a.startsWith('--transcribe-limit='))?.split('=')[1] ?? 1)
const transcribeWaitMinutes = Number(process.argv.find(a => a.startsWith('--transcribe-wait-minutes='))?.split('=')[1] ?? 0)
const dashscopeRegion = (process.argv.find(a => a.startsWith('--dashscope-region='))?.split('=')[1] ?? 'cn') as 'cn' | 'intl'
const transcriptProvider = (process.env.TRANSCRIPT_PROVIDER || 'mimo').toLowerCase() as 'mimo' | 'dashscope'
const TRANSCRIBE_MAX_RETRIES = 3
const DATA_URI_CHUNK_SECONDS = Number(process.env.DASHSCOPE_DATA_URI_CHUNK_SECONDS ?? 900)
const DATA_URI_MAX_BYTES = Number(process.env.DASHSCOPE_DATA_URI_MAX_MB ?? 18) * 1024 * 1024
const STALE_SUBMITTING_MINUTES = Number(process.env.DASHSCOPE_STALE_SUBMITTING_MINUTES ?? 30)

// Shared state for generation rate-limit detection and token tracking
let generationRateLimited = false
const transcriptionFailures = new Set<string>()
const stats = {
  generated: 0,
  failed: 0,
  skippedRateLimit: 0,
  totalInputTokens: 0,
  totalOutputTokens: 0,
  totalDurationMs: 0,
  episodes: [] as { id: string; inputTokens: number; outputTokens: number; durationMs: number; status: string }[],
}

function loadPlans(): { source: string; path: string; plan: PlanFile }[] {
  if (!existsSync(PLANS_DIR)) {
    throw new Error(`${PLANS_DIR} not found — run \`pnpm run plan\` first`)
  }
  const files = readdirSync(PLANS_DIR).filter(f => f.endsWith('.yml'))
  return files.map(f => {
    const path = join(PLANS_DIR, f)
    const plan = readYaml<PlanFile>(path)
    return { source: plan.source, path, plan }
  })
}

function savePlan(path: string, plan: PlanFile): void {
  plan.pending = plan.episodes.filter(e => e.status === 'pending' || e.status === 'audit_failed').length
  plan.needs_transcript = plan.episodes.filter(e => e.status === 'needs_transcript').length
  plan.transcribing = plan.episodes.filter(e => e.status === 'transcribing').length
  plan.transcribe_failed = plan.episodes.filter(e => e.status === 'transcribe_failed').length
  plan.downloaded = plan.episodes.filter(e => e.status === 'downloaded').length
  plan.done = plan.episodes.filter(e => e.status === 'generated').length
  writeYaml(path, plan)
}

function loadTranscriptionJobs(): TranscriptionJobsFile {
  return readYaml<TranscriptionJobsFile>(TRANSCRIPTION_JOBS_PATH, { jobs: [] })
}

function saveTranscriptionJobs(file: TranscriptionJobsFile): void {
  writeYaml(TRANSCRIPTION_JOBS_PATH, file)
}

async function ensureRssTranscript(entry: PlanEntry): Promise<void> {
  const txtPath = join(TRANSCRIPTS_DIR, `${entry.id}.txt`)
  if (existsSync(txtPath)) {
    log.raw(`  transcript exists: ${entry.id}.txt`)
    return
  }
  mkdirSync(TRANSCRIPTS_DIR, { recursive: true })
  const transcript = entry.transcript_url
    ? { url: entry.transcript_url, type: entry.transcript_type || '' }
    : preferredTranscript(entry.transcripts || [])
  if (!transcript?.url) {
    throw new Error(`No RSS transcript URL for ${entry.id}`)
  }
  log.raw(`  downloading transcript ${entry.id}`)
  const raw = await fetchText(transcript.url)
  const txt = cleanTranscript(raw, transcript.type || transcript.url)
  writeFileSync(txtPath, txt, 'utf-8')
  log.ok(`    cleaned → ${txtPath} (${txt.length} chars)`)
}

function renderTask(entry: PlanEntry, sourceId: string): string {
  return readFileSync(TASK_FILE, 'utf-8')
    .replaceAll('{{ID}}', entry.id)
    .replaceAll('{{SOURCE}}', sourceId)
    .replaceAll('{{TITLE}}', entry.title)
    .replaceAll('{{URL}}', entry.url || '')
    .replaceAll('{{PUBLISHED}}', formatPublishedMonth(entry))
    .replaceAll('{{PUBLISHED_SORT}}', entry.published_sort || '')
    .replaceAll('{{THUMBNAIL}}', entry.image || '')
    .replaceAll('{{DURATION}}', formatDuration(entry.duration))
}

function formatPublishedMonth(entry: PlanEntry): string {
  const key = entry.published_sort || ''
  if (/^\d{8}$/.test(key)) return `${key.slice(0, 4)}-${key.slice(4, 6)}`
  const time = Date.parse(entry.published || '')
  if (Number.isNaN(time)) return ''
  const date = new Date(time)
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`
}

function formatDuration(seconds: number): string {
  if (!seconds) return ''
  const minutes = Math.round(seconds / 60)
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h > 0 ? `${h}h${m}m` : `${m}m`
}

function hasGeneratedArtifacts(id: string): boolean {
  const dir = join(EPISODES_DIR, id)
  return existsSync(join(dir, 'slides.md'))
    && existsSync(join(dir, 'meta.yml'))
}

function hasGeneratedEpisode(id: string): boolean {
  const dir = join(EPISODES_DIR, id)
  const metaPath = join(dir, 'meta.yml')
  if (!existsSync(join(dir, 'slides.md')) || !existsSync(metaPath)) return false
  try {
    const meta = readYaml<Record<string, unknown>>(metaPath)
    return meta.status === 'generated'
  } catch {
    return false
  }
}

function canonicalizeEpisodeArtifacts(
  entry: PlanEntry,
  sourceId: string,
  status: PlanEntry['status'],
): boolean {
  const metaPath = join(EPISODES_DIR, entry.id, 'meta.yml')
  const slidesPath = join(EPISODES_DIR, entry.id, 'slides.md')
  if (!existsSync(metaPath)) return false
  try {
    canonicalizeGeneratedMeta(metaPath, {
      id: entry.id,
      source: sourceId,
      sourceTitle: entry.title,
      published: formatPublishedMonth(entry),
      publishedSort: entry.published_sort || '',
      duration: formatDuration(entry.duration),
      url: entry.url || '',
      thumbnail: entry.image,
      category: entry.category,
      status,
    })
    if (existsSync(slidesPath)) {
      const meta = readYaml<Record<string, unknown>>(metaPath)
      canonicalizeSlidesFrontmatter(slidesPath, String(meta.title || entry.title))
    }
    return true
  } catch (error: any) {
    log.warn(`  failed to canonicalize artifacts for ${entry.id}: ${error.message}`)
    return false
  }
}

function validateGeneratedArtifacts(id: string): boolean {
  const issues = validateEpisodeArtifacts({ rootDir: ROOT, id, strict: true })
  for (const issue of issues) {
    const message = `  ${issue.file}: [${issue.code}] ${issue.message}`
    if (issue.level === 'error') log.err(message)
    else log.warn(message)
  }
  return issues.every(issue => issue.level !== 'error')
}

function dashscopeClient(): DashScopeClient | null {
  const apiKey = process.env.DASHSCOPE_API_KEY
  if (!apiKey) return null
  return new DashScopeClient({ apiKey, region: dashscopeRegion })
}

function mimoClient(): MiMoClient | null {
  const apiKey = process.env.MIMO_API_KEY
  if (!apiKey) return null
  return new MiMoClient({
    apiKey,
    model: process.env.MIMO_MODEL,
    baseUrl: process.env.MIMO_BASE_URL,
  })
}

function entryKey(sourceId: string, entry: PlanEntry): string {
  return `${sourceId}:${entry.id}:${entry.published_sort ?? ''}:${entry.audio_url ?? ''}`
}

function jobEntryKey(job: TranscriptionJob): string {
  return job.parent_key ?? job.key ?? `${job.source}:${job.id}`
}

function isRetriableTranscriptionError(message: string | undefined): boolean {
  return /FILE_403|403|forbidden|InvalidParameter|maximum allowed|String value length|submit did not complete/i.test(message ?? '')
}

function findJob(jobs: TranscriptionJobsFile, key: string): TranscriptionJob | undefined {
  return jobs.jobs.find(job => {
    if (jobEntryKey(job) !== key) return false
    if (job.status !== 'failed') return true
    return !isRetriableTranscriptionError(job.error)
  })
}

function candidateSortKey(item: { sourceId: string; entry: PlanEntry }): string {
  return `${item.entry.first_seen_at ?? ''}:${item.entry.published_sort ?? ''}:${item.entry.id}:${item.sourceId}`
}

function isTranscribableAudioUrl(url: string | undefined): boolean {
  if (!url) return false
  try {
    const protocol = new URL(url).protocol
    return protocol === 'http:' || protocol === 'https:'
  } catch {
    return false
  }
}

function shouldUseDataUri(sourceId: string, audioUrl: string): boolean {
  if (transcriptProvider === 'mimo') return true
  const lower = audioUrl.toLowerCase()
  try {
    const host = new URL(audioUrl).hostname.toLowerCase()
    return sourceId === 'unchained'
      || host === 'pdrl.fm'
      || host.endsWith('.megaphone.fm')
      || lower.includes('megaphone.fm/')
  } catch {
    return false
  }
}

function shouldRetryFailedTranscription(sourceId: string, entry: PlanEntry): boolean {
  if (entry.status !== 'transcribe_failed' || !entry.audio_url) return false
  if (retryFailed) return true
  const lastAttempt = Math.max(...[entry.transcript_completed_at, entry.transcript_submitted_at]
    .map(value => Date.parse(value || '')).filter(Number.isFinite))
  if (Number.isFinite(lastAttempt) && Date.now() - lastAttempt < 48 * 60 * 60_000) return false
  if (transcriptProvider === 'mimo') return true
  if (!shouldUseDataUri(sourceId, entry.audio_url)) return false
  return isRetriableTranscriptionError(entry.transcript_error)
}

function transcriptionChunkDir(parentKey: string, attemptKey: string): string {
  const digest = createHash('sha256').update(`${parentKey}:${attemptKey}`).digest('hex').slice(0, 32)
  return join(TRANSCRIPT_CHUNKS_DIR, digest)
}

function transcriptionChunkPath(parentKey: string, attemptKey: string, index: number): string {
  return join(transcriptionChunkDir(parentKey, attemptKey), `${String(index).padStart(3, '0')}.txt`)
}

function jobsForEntry(jobsFile: TranscriptionJobsFile, key: string): TranscriptionJob[] {
  return jobsFile.jobs.filter(job => jobEntryKey(job) === key)
}

function jobAttemptKey(job: TranscriptionJob): string {
  return job.attempt_key ?? job.submitted_at
}

function jobsForAttempt(jobsFile: TranscriptionJobsFile, key: string, attemptKey: string): TranscriptionJob[] {
  return jobsForEntry(jobsFile, key).filter(job => jobAttemptKey(job) === attemptKey)
}

function completeChunkAttempt(jobsFile: TranscriptionJobsFile, key: string): string | undefined {
  const attempts = [...new Set(jobsForEntry(jobsFile, key)
    .filter(job => job.chunk_count !== undefined)
    .map(jobAttemptKey))].sort().reverse()
  return attempts.find(attemptKey => {
    const group = jobsForAttempt(jobsFile, key, attemptKey).filter(job => job.chunk_count !== undefined)
    const chunkCount = group[0]?.chunk_count
    return !!chunkCount && group.length >= chunkCount && group.every(job => job.status === 'succeeded')
  })
}

function combineChunkTranscripts(parentKey: string, attemptKey: string, chunkCount: number): string {
  const chunks: string[] = []
  for (let index = 0; index < chunkCount; index++) {
    const path = transcriptionChunkPath(parentKey, attemptKey, index)
    if (!existsSync(path)) throw new Error(`missing transcript chunk ${index + 1}/${chunkCount}`)
    chunks.push(readFileSync(path, 'utf-8').trim())
  }
  return chunks.filter(Boolean).join('\n\n').trim()
}

function markEntryTranscribed(item: { entry: PlanEntry; plan: PlanFile; planPath: string }, taskId: string, now: string, text: string, provider: 'dashscope' | 'mimo'): void {
  mkdirSync(TRANSCRIPTS_DIR, { recursive: true })
  writeFileSync(join(TRANSCRIPTS_DIR, `${item.entry.id}.txt`), text + '\n', 'utf-8')
  item.entry.status = 'pending'
  item.entry.transcript_provider = provider
  item.entry.transcript_job_id = taskId
  item.entry.transcript_completed_at = now
  item.entry.transcript_error = undefined
  savePlan(item.planPath, item.plan)
}

function maybeFinalizeChunkedTranscription(
  jobsFile: TranscriptionJobsFile,
  parentKey: string,
  item: { entry: PlanEntry; plan: PlanFile; planPath: string },
  now: string,
  provider: 'dashscope' | 'mimo' = 'dashscope',
): boolean {
  const attemptKey = completeChunkAttempt(jobsFile, parentKey)
  if (!attemptKey) return false
  const group = jobsForAttempt(jobsFile, parentKey, attemptKey).filter(job => job.chunk_count !== undefined)
  const chunkCount = group[0]?.chunk_count
  if (!chunkCount || group.length < chunkCount || !group.every(job => job.status === 'succeeded')) return false
  for (let index = 0; index < chunkCount; index++) {
    if (!existsSync(transcriptionChunkPath(parentKey, attemptKey, index))) return false
  }
  const text = combineChunkTranscripts(parentKey, attemptKey, chunkCount)
  const taskIds = group
    .sort((a, b) => (a.chunk_index ?? 0) - (b.chunk_index ?? 0))
    .map(job => job.task_id)
    .join(',')
  markEntryTranscribed(item, taskIds, now, text, provider)
  return true
}

function jobNeedsTranscriptRecovery(job: TranscriptionJob): boolean {
  if (job.status !== 'succeeded' || !job.transcription_url) return false
  const transcriptPath = join(TRANSCRIPTS_DIR, `${job.id}.txt`)
  return !existsSync(transcriptPath)
}

function maybeFinalizeCachedChunks(
  jobsFile: TranscriptionJobsFile,
  key: string,
  item: { entry: PlanEntry; plan: PlanFile; planPath: string },
  now: string,
): boolean {
  const attemptKey = completeChunkAttempt(jobsFile, key)
  if (!attemptKey) return false
  const group = jobsForAttempt(jobsFile, key, attemptKey).filter(job => job.chunk_count !== undefined)
  const chunkCount = group[0]?.chunk_count
  if (!chunkCount) return false
  for (let index = 0; index < chunkCount; index++) {
    if (!existsSync(transcriptionChunkPath(key, attemptKey, index))) return false
  }
  return maybeFinalizeChunkedTranscription(jobsFile, key, item, now, 'dashscope')
}

function isStaleSubmitting(job: TranscriptionJob, now: string): boolean {
  if (job.status !== 'submitting') return false
  const submitted = Date.parse(job.updated_at || job.submitted_at)
  if (Number.isNaN(submitted)) return true
  return Date.parse(now) - submitted >= STALE_SUBMITTING_MINUTES * 60_000
}

function dataUriFromAudioFile(path: string, mimeType: string): { fileUrl: string; bytes: number } {
  const bytes = statSync(path).size
  if (bytes > DATA_URI_MAX_BYTES) {
    throw new Error(`audio chunk is ${(bytes / 1024 / 1024).toFixed(1)}MB, above DASHSCOPE_DATA_URI_MAX_MB=${process.env.DASHSCOPE_DATA_URI_MAX_MB ?? 18}`)
  }
  return {
    fileUrl: `data:${mimeType};base64,${readFileSync(path).toString('base64')}`,
    bytes,
  }
}

async function* prepareTranscriptionAudioInputs(sourceId: string, entry: PlanEntry): AsyncGenerator<{ fileUrl: string; mode: 'url' | 'data_uri'; bytes?: number; chunkIndex?: number; chunkCount?: number }> {
  if (!entry.audio_url) throw new Error(`No audio URL for ${entry.id}`)
  if (!shouldUseDataUri(sourceId, entry.audio_url)) {
    yield { fileUrl: entry.audio_url, mode: 'url' }
    return
  }

  const workDir = mkdtempSync(join(tmpdir(), 'resonote-asr-'))
  log.raw(`  downloading audio for local transcription ${sourceId}/${entry.id}`)
  try {
    const inputPath = join(workDir, 'input')
    const download = await downloadAudio(entry.audio_url, inputPath)
    const chunkPaths = await splitAudio(inputPath, workDir, DATA_URI_CHUNK_SECONDS, DATA_URI_MAX_BYTES)
    log.raw(`  prepared ${chunkPaths.length} chunk(s) from ${(download.bytes / 1024 / 1024).toFixed(1)}MB audio`)
    // Encode only the current chunk. A multi-hour episode must not keep every
    // chunk's base64 payload in memory while waiting for the transcription API.
    for (let index = 0; index < chunkPaths.length; index++) {
      const dataUri = dataUriFromAudioFile(chunkPaths[index], 'audio/mpeg')
      yield { ...dataUri, mode: 'data_uri', chunkIndex: index, chunkCount: chunkPaths.length }
    }
  } finally {
    rmSync(workDir, { recursive: true, force: true })
  }
}

function selectFairTranscribeCandidates(
  plans: { source: string; path: string; plan: PlanFile }[],
  jobs: TranscriptionJobsFile,
  max: number,
): { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[] {
  if (max <= 0) return []

  const bySource = plans.map(({ source, path, plan }) => ({
    source,
    path,
    plan,
    entries: plan.episodes
      .filter(entry => {
        if (onlyEpisode && entry.id !== onlyEpisode) return false
        const retryFailed = shouldRetryFailedTranscription(source, entry)
        return (entry.status === 'needs_transcript' || retryFailed)
          && isTranscribableAudioUrl(entry.audio_url)
          && (retryFailed || !findJob(jobs, entryKey(source, entry)))
      })
      .sort((a, b) => Number(a.status === 'transcribe_failed') - Number(b.status === 'transcribe_failed')
        || (b.published_sort ?? '').localeCompare(a.published_sort ?? '')),
  })).filter(group => group.entries.length > 0)

  const selected: { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[] = []
  while (selected.length < max) {
    const activeSources = bySource.filter(group => group.entries.length > 0)
    if (activeSources.length === 0) break

    activeSources.sort((a, b) => {
      const newestA = a.entries[0]!
      const newestB = b.entries[0]!
      const byRetry = Number(newestA.status === 'transcribe_failed') - Number(newestB.status === 'transcribe_failed')
      if (byRetry) return byRetry
      return candidateSortKey({ sourceId: b.source, entry: newestB }).localeCompare(candidateSortKey({ sourceId: a.source, entry: newestA }))
    })
    for (const group of activeSources) {
      if (selected.length >= max) break
      const entry = group.entries.shift()
      if (!entry) continue
      selected.push({ entry, sourceId: group.source, plan: group.plan, planPath: group.path })
    }
  }
  return selected
}

function selectFairGenerationCandidates(
  candidates: { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[],
  max: number,
): { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[] {
  if (max <= 0) return []
  const bySource = new Map<string, { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[]>()
  for (const item of candidates) {
    const list = bySource.get(item.sourceId) ?? []
    list.push(item)
    bySource.set(item.sourceId, list)
  }
  for (const list of bySource.values()) {
    list.sort((a, b) => (b.entry.published_sort ?? '').localeCompare(a.entry.published_sort ?? ''))
  }

  const groups = [...bySource.entries()].map(([sourceId, entries]) => ({ sourceId, entries }))
  const selected: { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[] = []
  while (selected.length < max && groups.some(group => group.entries.length > 0)) {
    groups.sort((a, b) => {
      const newestA = a.entries[0]?.entry.published_sort ?? ''
      const newestB = b.entries[0]?.entry.published_sort ?? ''
      return newestB.localeCompare(newestA)
    })
    for (const group of groups) {
      if (selected.length >= max) break
      const item = group.entries.shift()
      if (item) selected.push(item)
    }
  }
  return selected
}

async function pollTranscriptionJobs(
  plans: { source: string; path: string; plan: PlanFile }[],
  jobsFile: TranscriptionJobsFile,
  client: DashScopeClient,
): Promise<number> {
  let completed = 0
  const entryByKey = new Map<string, { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }>()
  for (const { path, plan } of plans) {
    for (const entry of plan.episodes) {
      if (onlyEpisode && entry.id !== onlyEpisode) continue
      entryByKey.set(entryKey(plan.source, entry), { entry, sourceId: plan.source, plan, planPath: path })
    }
  }

  for (const job of jobsFile.jobs) {
    const key = jobEntryKey(job)
    const item = entryByKey.get(key)
    if (!item) continue
    const now = new Date().toISOString()
    if (job.status === 'failed') continue
    if (job.status === 'submitting') {
      if (!isStaleSubmitting(job, now)) continue
      job.status = 'failed'
      job.error = `transcription submit did not complete within ${STALE_SUBMITTING_MINUTES} minutes`
      job.updated_at = now
      transcriptionFailures.add(key)
      item.entry.status = 'transcribe_failed'
      item.entry.transcript_completed_at = now
      item.entry.transcript_error = job.error
      savePlan(item.planPath, item.plan)
      log.err(`  transcription submit stale ${job.id}: ${job.error}`)
      continue
    }
    if (job.status === 'succeeded' && !jobNeedsTranscriptRecovery(job)) continue
    if (job.status === 'succeeded' && job.chunk_count !== undefined && maybeFinalizeCachedChunks(jobsFile, key, item, now)) {
      completed++
      log.ok(`  restored transcript ${job.id} from cached chunks`)
      continue
    }
    try {
      const task = job.status === 'succeeded'
        ? { status: 'SUCCEEDED', transcriptionUrls: job.transcription_url ? [job.transcription_url] : [] }
        : await client.query(job.task_id)
      job.updated_at = now
      if (task.status === 'SUCCEEDED') {
        const transcriptionUrl = task.transcriptionUrls[0]
        if (!transcriptionUrl) throw new Error('DashScope task succeeded without transcription_url')
        const normalized = await client.downloadTranscript(transcriptionUrl)
        job.status = 'succeeded'
        job.transcription_url = transcriptionUrl
        job.completed_at = now
        job.error = undefined
        if (job.chunk_count !== undefined && job.chunk_index !== undefined) {
          mkdirSync(transcriptionChunkDir(key, jobAttemptKey(job)), { recursive: true })
          writeFileSync(transcriptionChunkPath(key, jobAttemptKey(job), job.chunk_index), normalized.text + '\n', 'utf-8')
          if (maybeFinalizeChunkedTranscription(jobsFile, key, item, now, 'dashscope')) {
            completed++
            log.ok(`  transcribed ${job.id} from ${job.chunk_count} chunks`)
          } else {
            item.entry.status = 'transcribing'
            savePlan(item.planPath, item.plan)
            log.ok(`  transcribed chunk ${(job.chunk_index ?? 0) + 1}/${job.chunk_count} for ${job.id}`)
          }
        } else {
          markEntryTranscribed(item, job.task_id, now, normalized.text, 'dashscope')
          completed++
          log.ok(`  transcribed ${job.id} (${normalized.text.length} chars)`)
        }
        for (const warning of normalized.warnings) log.warn(`  ${job.id}: ${warning}`)
      } else if (task.status === 'FAILED' || task.status === 'CANCELED' || task.status === 'UNKNOWN') {
        job.status = 'failed'
        job.error = `DashScope task ended with ${task.status}${task.code ? ` (${task.code})` : ''}${task.message ? `: ${task.message}` : ''}`
        for (const sibling of jobsForAttempt(jobsFile, key, jobAttemptKey(job))) {
          if (sibling.status !== 'succeeded') {
            sibling.status = 'failed'
            sibling.error = job.error
            sibling.updated_at = now
          }
        }
        transcriptionFailures.add(key)
        item.entry.status = 'transcribe_failed'
        item.entry.transcript_completed_at = now
        item.entry.transcript_error = job.error
        savePlan(item.planPath, item.plan)
        log.err(`  transcription failed ${job.id}: ${job.error}`)
      } else {
        job.status = 'running'
        item.entry.status = 'transcribing'
        savePlan(item.planPath, item.plan)
      }
    } catch (error: any) {
      job.updated_at = now
      job.error = error.message
      job.retries = (job.retries ?? 0) + 1
      if (job.retries >= TRANSCRIBE_MAX_RETRIES) {
        job.status = 'failed'
        for (const sibling of jobsForAttempt(jobsFile, key, jobAttemptKey(job))) {
          if (sibling.status !== 'succeeded') {
            sibling.status = 'failed'
            sibling.error = error.message
            sibling.updated_at = now
          }
        }
        transcriptionFailures.add(key)
        item.entry.status = 'transcribe_failed'
        item.entry.transcript_completed_at = now
        item.entry.transcript_error = error.message
        log.err(`  transcription failed ${job.id}: ${error.message}`)
      } else {
        job.status = 'running'
        item.entry.status = 'transcribing'
        item.entry.transcript_error = error.message
        log.warn(`  transcription poll deferred ${job.id}: ${error.message}`)
      }
      savePlan(item.planPath, item.plan)
    }
  }
  saveTranscriptionJobs(jobsFile)
  return completed
}

async function submitTranscriptionCandidates(
  candidates: { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[],
  jobsFile: TranscriptionJobsFile,
  client: DashScopeClient,
): Promise<number> {
  let submitted = 0
  for (const item of candidates) {
    const { entry } = item
    if (!entry.audio_url) continue
    const now = new Date().toISOString()
    if (dryRun) {
      log.info(`  (dry-run) would transcribe ${item.sourceId}/${entry.id}`)
      submitted++
      continue
    }
    const key = entryKey(item.sourceId, entry)
    const attemptKey = `${key}:attempt:${now}`
    entry.status = 'transcribing'
    entry.transcript_provider = 'dashscope'
    entry.transcript_submitted_at = now
    savePlan(item.planPath, item.plan)
    saveTranscriptionJobs(jobsFile)
    try {
      const inputs = prepareTranscriptionAudioInputs(item.sourceId, entry)
      let firstTaskId = ''
      for await (const input of inputs) {
        const chunkKey = input.chunkCount ? `${attemptKey}:chunk:${input.chunkIndex}` : key
        const jobAttempt = input.chunkCount ? attemptKey : now
        const pendingJob: TranscriptionJob = {
          key: chunkKey,
          parent_key: input.chunkCount ? key : undefined,
          attempt_key: jobAttempt,
          id: entry.id,
          source: item.sourceId,
          title: entry.title,
          audio_url: entry.audio_url,
          task_id: '',
          submission_mode: input.mode,
          chunk_index: input.chunkIndex,
          chunk_count: input.chunkCount,
          status: 'submitting',
          retries: 0,
          submitted_at: now,
          updated_at: now,
        }
        jobsFile.jobs.push(pendingJob)
        saveTranscriptionJobs(jobsFile)
        const taskId = await client.submit(input.fileUrl)
        if (!firstTaskId) firstTaskId = taskId
        Object.assign(pendingJob, jobFromTask({
          key: chunkKey,
          id: entry.id,
          source: item.sourceId,
          title: entry.title,
          audioUrl: entry.audio_url,
          taskId,
          submissionMode: input.mode,
          parentKey: input.chunkCount ? key : undefined,
          attemptKey: jobAttempt,
          chunkIndex: input.chunkIndex,
          chunkCount: input.chunkCount,
          now,
        }))
        pendingJob.status = 'submitted'
        log.ok(`  submitted transcription ${item.sourceId}/${entry.id}${input.chunkCount ? ` chunk ${(input.chunkIndex ?? 0) + 1}/${input.chunkCount}` : ''} task=${taskId}`)
      }
      entry.status = 'transcribing'
      entry.transcript_provider = 'dashscope'
      entry.transcript_job_id = firstTaskId
      entry.transcript_submitted_at = now
      entry.transcript_error = undefined
      savePlan(item.planPath, item.plan)
      saveTranscriptionJobs(jobsFile)
      submitted++
    } catch (error: any) {
      const failedJobs = jobsForEntry(jobsFile, key).filter(job => job.status === 'submitting' || jobAttemptKey(job) === attemptKey || jobAttemptKey(job) === now)
      for (const job of failedJobs) {
        if (job.status !== 'succeeded') {
          job.status = 'failed'
          job.error = error.message
          job.updated_at = new Date().toISOString()
        }
      }
      transcriptionFailures.add(key)
      entry.status = 'transcribe_failed'
      entry.transcript_error = error.message
      savePlan(item.planPath, item.plan)
      saveTranscriptionJobs(jobsFile)
      log.err(`  submit transcription failed ${item.sourceId}/${entry.id}: ${error.message}`)
    }
  }
  return submitted
}

async function submitMiMoTranscriptionCandidates(
  candidates: { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[],
  jobsFile: TranscriptionJobsFile,
  client: MiMoClient,
): Promise<number> {
  let submitted = 0
  for (const item of candidates) {
    const { entry } = item
    if (!entry.audio_url) continue
    const now = new Date().toISOString()
    if (dryRun) {
      log.info(`  (dry-run) would transcribe ${item.sourceId}/${entry.id} with MiMo`)
      submitted++
      continue
    }
    const key = entryKey(item.sourceId, entry)
    const attemptKey = `${key}:mimo:${now}`
    entry.status = 'transcribing'
    entry.transcript_provider = 'mimo'
    entry.transcript_submitted_at = now
    savePlan(item.planPath, item.plan)
    saveTranscriptionJobs(jobsFile)
    try {
      const inputs = prepareTranscriptionAudioInputs(item.sourceId, entry)
      let finalized = false
      let inputCount = 0
      const taskIds: string[] = []
      for await (const input of inputs) {
        inputCount++
        const chunkKey = input.chunkCount ? `${attemptKey}:chunk:${input.chunkIndex}` : key
        const jobAttempt = input.chunkCount ? attemptKey : now
        const pendingJob: TranscriptionJob = {
          key: chunkKey,
          parent_key: input.chunkCount ? key : undefined,
          attempt_key: jobAttempt,
          provider: 'mimo',
          id: entry.id,
          source: item.sourceId,
          title: entry.title,
          audio_url: entry.audio_url,
          task_id: '',
          submission_mode: input.mode,
          chunk_index: input.chunkIndex,
          chunk_count: input.chunkCount,
          status: 'running',
          retries: 0,
          submitted_at: now,
          updated_at: now,
        }
        jobsFile.jobs.push(pendingJob)
        saveTranscriptionJobs(jobsFile)
        const result = await client.transcribe(input.fileUrl)
        const taskId = result.rawId || `mimo:${entry.id}:${input.chunkIndex ?? 0}:${now}`
        taskIds.push(taskId)
        pendingJob.task_id = taskId
        pendingJob.status = 'succeeded'
        pendingJob.completed_at = new Date().toISOString()
        pendingJob.updated_at = pendingJob.completed_at
        pendingJob.error = undefined
        if (input.chunkCount !== undefined && input.chunkIndex !== undefined) {
          mkdirSync(transcriptionChunkDir(key, jobAttempt), { recursive: true })
          writeFileSync(transcriptionChunkPath(key, jobAttempt, input.chunkIndex), result.text + '\n', 'utf-8')
          finalized = maybeFinalizeChunkedTranscription(jobsFile, key, item, pendingJob.completed_at, 'mimo')
          log.ok(`  transcribed MiMo chunk ${(input.chunkIndex ?? 0) + 1}/${input.chunkCount} for ${entry.id}`)
        } else {
          markEntryTranscribed(item, taskId, pendingJob.completed_at, result.text, 'mimo')
          finalized = true
          log.ok(`  transcribed ${item.sourceId}/${entry.id} with MiMo (${result.text.length} chars)`)
        }
        saveTranscriptionJobs(jobsFile)
      }
      if (inputCount > 1 && !finalized) {
        const text = combineChunkTranscripts(key, attemptKey, inputCount)
        markEntryTranscribed(item, taskIds.join(','), new Date().toISOString(), text, 'mimo')
        log.ok(`  transcribed ${item.sourceId}/${entry.id} with MiMo from ${inputCount} chunks`)
      }
      entry.transcript_error = undefined
      savePlan(item.planPath, item.plan)
      saveTranscriptionJobs(jobsFile)
      submitted++
    } catch (error: any) {
      const failedJobs = jobsForEntry(jobsFile, key).filter(job => job.status === 'running' || job.status === 'submitting' || jobAttemptKey(job) === attemptKey || jobAttemptKey(job) === now)
      for (const job of failedJobs) {
        if (job.status !== 'succeeded') {
          job.status = 'failed'
          job.error = error.message
          job.updated_at = new Date().toISOString()
        }
      }
      transcriptionFailures.add(key)
      entry.status = 'transcribe_failed'
      entry.transcript_error = error.message
      entry.transcript_completed_at = new Date().toISOString()
      savePlan(item.planPath, item.plan)
      saveTranscriptionJobs(jobsFile)
      log.err(`  MiMo transcription failed ${item.sourceId}/${entry.id}: ${error.message}`)
    }
  }
  return submitted
}

async function runAutoTranscription(plans: { source: string; path: string; plan: PlanFile }[]): Promise<void> {
  if (!autoTranscribe) return
  const jobsFile = loadTranscriptionJobs()
  log.step(`Auto transcription — provider=${transcriptProvider}, fair scheduling, limit=${transcribeLimit}`)

  if (transcriptProvider === 'mimo') {
    const client = mimoClient()
    if (!client) {
      log.warn('auto transcription enabled but MIMO_API_KEY is missing')
      return
    }
    const candidates = selectFairTranscribeCandidates(plans, jobsFile, transcribeLimit)
    if (candidates.length > 0) await submitMiMoTranscriptionCandidates(candidates, jobsFile, client)
    else log.info('no needs_transcript candidates available for transcription')
    return
  }

  const client = dashscopeClient()
  if (!client) {
    log.warn('auto transcription enabled but DASHSCOPE_API_KEY is missing')
    return
  }

  await pollTranscriptionJobs(plans, jobsFile, client)

  const candidates = selectFairTranscribeCandidates(plans, jobsFile, transcribeLimit)
  if (candidates.length > 0) await submitTranscriptionCandidates(candidates, jobsFile, client)
  else log.info('no needs_transcript candidates available for transcription')

  if (transcribeWaitMinutes > 0) {
    const deadline = Date.now() + transcribeWaitMinutes * 60_000
    while (Date.now() < deadline) {
      const active = jobsFile.jobs.some(job => job.status === 'submitted' || job.status === 'running')
      if (!active) break
      await new Promise(resolve => setTimeout(resolve, 30_000))
      const completed = await pollTranscriptionJobs(plans, jobsFile, client)
      if (completed > 0) break
    }
  }
}

async function auditGeneratedLayout(id: string): Promise<boolean> {
  log.raw(`  auditing layout for ${id}`)
  const result = await run('pnpm', [
    'exec',
    'tsx',
    'scripts/audit-layout.ts',
    `--id=${id}`,
  ], { cwd: ROOT, reject: false })

  if (result.code === 0) return true
  log.err(`  layout audit failed for ${id}`)
  const output = `${result.stdout}\n${result.stderr}`.trim()
  if (output) log.raw(output.split('\n').slice(-40).join('\n'))
  return false
}

interface GenerateResult {
  ok: boolean
  inputTokens: number
  outputTokens: number
  durationMs: number
  isRateLimit: boolean
}

function generateOne(entry: PlanEntry, sourceId: string): Promise<GenerateResult> {
  const systemRules = readFileSync(RULES_FILE, 'utf-8')
  const taskPrompt = renderTask(entry, sourceId)
  const combinedPrompt = [
    'Use the available file and shell tools for Read/Write/Edit/Bash/Grep/Glob in the rules below. Do not invoke another generation agent.',
    `Only edit content under episodes/${entry.id}/. Do not change scripts, configuration, dependencies, plans or other episodes.`,
    '# System Rules',
    systemRules,
    '# Task',
    taskPrompt,
  ].join('\n\n')
  const invocation = contentCommand(combinedPrompt)
  const logPath = join(ROOT, 'logs', `generate-${entry.id}.log`)
  mkdirSync(join(ROOT, 'logs'), { recursive: true })
  const fs = require('node:fs')
  const logFd = fs.openSync(logPath, 'w')
  const startTime = Date.now()

  log.raw(`  spawning ${invocation.provider} for ${entry.id} → logs/generate-${entry.id}.log`)
  return new Promise(resolveFn => {
    const child = spawn(invocation.command, invocation.args, {
      cwd: ROOT,
      env: invocation.env,
      stdio: ['ignore', logFd, logFd],
      shell: false,
      windowsHide: true,
    })
    let spawnError: Error | undefined
    child.once('error', error => { spawnError = error })
    child.once('close', code => {
      fs.closeSync(logFd)
      if (spawnError) log.err(`  spawn error: ${spawnError.message}`)
      const durationMs = Date.now() - startTime
      const result = parseContentLog(readFileSync(logPath, 'utf8'))
      resolveFn({
        ok: !spawnError && code === 0 && result.completed && !result.isError,
        inputTokens: result.inputTokens, outputTokens: result.outputTokens,
        durationMs, isRateLimit: result.isRateLimit,
      })
    })
  })
}

async function processEntry(
  entry: PlanEntry,
  sourceId: string,
  plan: PlanFile,
  planPath: string,
): Promise<void> {
  log.step(`[${sourceId}] ${entry.id} — ${entry.title.slice(0, 70)}`)

  if (dryRun) {
    log.info('  (dry-run) would download + generate')
    return
  }

  const retryAuditOnly = entry.status === 'audit_failed' && hasGeneratedArtifacts(entry.id)

  if (entry.status === 'needs_transcript') {
    log.warn('  needs transcript; enable --auto-transcribe or provide RSS transcript')
    return
  }

  if (entry.status === 'transcribing') {
    log.warn('  transcription still running')
    return
  }

  if (entry.status === 'transcribe_failed') {
    log.warn(`  transcription failed: ${entry.transcript_error ?? 'unknown error'}`)
    return
  }

  try {
    await ensureRssTranscript(entry)
    if (generationRateLimited) {
      log.warn('  queue stopped after transcript download — entry stays pending')
      return
    }
    if (!retryAuditOnly) entry.status = 'downloaded'
    savePlan(planPath, plan)
  } catch (e: any) {
    log.err(`  download failed: ${e.message}`)
    stats.failed++
    entry.status = 'failed'
    savePlan(planPath, plan)
    return
  }

  scaffoldEpisodeWorkspace(EPISODES_DIR, TEMPLATES_DIR, entry.id)

  if (retryAuditOnly) {
    const artifactsOk = canonicalizeEpisodeArtifacts(entry, sourceId, 'downloaded')
    const staticOk = artifactsOk && validateGeneratedArtifacts(entry.id)
    const layoutOk = staticOk && await auditGeneratedLayout(entry.id)
    entry.status = staticOk && layoutOk ? 'generated' : 'audit_failed'
    savePlan(planPath, plan)
    canonicalizeEpisodeArtifacts(entry, sourceId, entry.status)
    log.ok(`  → status=${entry.status}`)
    stats.episodes.push({
      id: entry.id,
      inputTokens: 0,
      outputTokens: 0,
      durationMs: 0,
      status: entry.status,
    })
    if (entry.status === 'generated') stats.generated++
    else stats.failed++
    return
  }

  if (generationRateLimited) {
    entry.status = 'pending'
    savePlan(planPath, plan)
    log.warn('  queue stopped before generation — entry stays pending')
    return
  }

  const cleanupPresentation = stageEpisodePresentation(
    join(EPISODES_DIR, entry.id),
    TEMPLATES_DIR,
  )
  let result: GenerateResult = {
    ok: false,
    inputTokens: 0,
    outputTokens: 0,
    durationMs: 0,
    isRateLimit: false,
  }
  try {
    result = await generateOne(entry, sourceId)
  } catch (error: any) {
    log.err(`  generation failed before completion: ${error.message}`)
  } finally {
    cleanupPresentation()
  }
  const generatedFilesExist = hasGeneratedArtifacts(entry.id)
  const artifactsOk = generatedFilesExist
    && canonicalizeEpisodeArtifacts(entry, sourceId, 'downloaded')
  const staticOk = result.ok && artifactsOk && validateGeneratedArtifacts(entry.id)
  const layoutOk = staticOk
    ? await auditGeneratedLayout(entry.id)
    : false
  entry.status = result.ok && artifactsOk && staticOk && layoutOk
    ? 'generated'
    : result.ok && artifactsOk
      ? 'audit_failed'
      : 'failed'
  savePlan(planPath, plan)
  canonicalizeEpisodeArtifacts(entry, sourceId, entry.status)

  const durationStr = (result.durationMs / 1000 / 60).toFixed(1) + 'min'
  const tokenStr = result.inputTokens > 0
    ? `${(result.inputTokens / 1000).toFixed(0)}k in / ${(result.outputTokens / 1000).toFixed(0)}k out`
    : 'no token data'
  log.ok(`  → status=${entry.status}  ⏱ ${durationStr}  📊 ${tokenStr}`)

  // Track stats
  stats.episodes.push({
    id: entry.id,
    inputTokens: result.inputTokens,
    outputTokens: result.outputTokens,
    durationMs: result.durationMs,
    status: entry.status,
  })
  stats.totalInputTokens += result.inputTokens
  stats.totalOutputTokens += result.outputTokens
  stats.totalDurationMs += result.durationMs
  if (entry.status === 'generated') stats.generated++
  else stats.failed++

  if (result.isRateLimit) {
    generationRateLimited = true
    log.err('  ⚠ Rate limit hit — stopping queue, remaining entries stay pending')
  }

  if (!result.ok && !result.isRateLimit) {
    const logPath = join(ROOT, 'logs', `generate-${entry.id}.log`)
    try {
      const tail = readFileSync(logPath, 'utf-8').trim().split('\n').slice(-20).join('\n')
      log.err(`  ── log tail ──\n${tail}\n  ── end ──`)
    } catch {}
  }
}

async function main() {
  log.step(`Run-plan — concurrency=${concurrency}, limit=${limit}${autoTranscribe ? ', auto-transcribe' : ''}${dryRun ? ' (DRY RUN)' : ''}`)

  const plans = loadPlans()
  const targetPlans = onlyId ? plans.filter(p => p.source === onlyId) : plans
  if (targetPlans.length === 0) {
    if (onlyEpisode) throw new Error(`episode ${onlyEpisode} not found in selected plans`)
    log.warn('no matching plans')
    return
  }
  if (onlyEpisode && !targetPlans.some(({ plan }) => plan.episodes.some(entry => entry.id === onlyEpisode))) {
    throw new Error(`episode ${onlyEpisode} not found in selected plans`)
  }

  await runAutoTranscription(targetPlans)

  // Flatten all generatable entries with their plan context, sorted by published date desc
  const allPending: { entry: PlanEntry; sourceId: string; plan: PlanFile; planPath: string }[] = []
  for (const { source, path, plan } of targetPlans) {
    for (const entry of plan.episodes) {
      if (onlyEpisode && entry.id !== onlyEpisode) continue
      if (entry.status !== 'generated' && hasGeneratedEpisode(entry.id)) {
        entry.status = 'generated'
        savePlan(path, plan)
        canonicalizeEpisodeArtifacts(entry, source, 'generated')
        continue
      }
      if (entry.status === 'pending' || entry.status === 'downloaded' || entry.status === 'audit_failed' || (retryFailed && entry.status === 'failed') || (existsSync(join(TRANSCRIPTS_DIR, `${entry.id}.txt`)) && (entry.status === 'needs_transcript' || entry.status === 'transcribing' || entry.status === 'transcribe_failed'))) {
        if (existsSync(join(TRANSCRIPTS_DIR, `${entry.id}.txt`)) && (entry.status === 'needs_transcript' || entry.status === 'transcribing' || entry.status === 'transcribe_failed')) {
          entry.status = 'pending'
          savePlan(path, plan)
        }
        allPending.push({ entry, sourceId: source, plan, planPath: path })
      }
    }
  }
  // Filter by category if --category specified
  if (onlyCategory) {
    const filtered = allPending.filter(p => p.entry.category === onlyCategory)
    allPending.length = 0
    allPending.push(...filtered)
  }

  const categoryPriority: Record<string, number> = {
    'ai-tech': 0, 'mind-body': 1, 'science': 2, 'business': 3, 'culture': 4,
  }
  allPending.sort((a, b) => {
    const ca = categoryPriority[a.entry.category ?? ''] ?? 99
    const cb = categoryPriority[b.entry.category ?? ''] ?? 99
    if (ca !== cb) return ca - cb
    return (b.entry.published_sort ?? '').localeCompare(a.entry.published_sort ?? '')
  })

  if (allPending.length === 0) {
    log.info('No pending entries — all plans up to date')
    return
  }

  const toProcess = selectFairGenerationCandidates(allPending, limit)
  log.info(`${allPending.length} pending, will process ${toProcess.length}${onlyCategory ? ` (category: ${onlyCategory})` : ''}`)

  // Concurrency: run N at a time
  const queue = [...toProcess]
  const workers: Promise<void>[] = []
  async function worker(): Promise<void> {
    while (queue.length > 0) {
      if (generationRateLimited) {
        stats.skippedRateLimit += queue.length
        queue.length = 0
        break
      }
      const item = queue.shift()
      if (!item) break
      try {
        await processEntry(item.entry, item.sourceId, item.plan, item.planPath)
      } catch (err: any) {
        log.err(`  UNHANDLED in ${item.entry.id}: ${err.stack || err.message}`)
        stats.failed++
        item.entry.status = 'failed'
        savePlan(item.planPath, item.plan)
      }
    }
  }
  for (let i = 0; i < concurrency; i++) workers.push(worker())
  await Promise.all(workers)

  // Print summary
  log.ok('\n══════════ Run-plan Summary ══════════')
  log.ok(`  ✅ Generated: ${stats.generated}`)
  if (stats.failed > 0) log.err(`  ❌ Failed: ${stats.failed}`)
  if (stats.skippedRateLimit > 0) log.warn(`  ⏭ Skipped (rate limit): ${stats.skippedRateLimit}`)
  log.ok(`  ⏱ Total time: ${(stats.totalDurationMs / 1000 / 60).toFixed(1)} min`)
  if (stats.totalInputTokens > 0) {
    log.ok(`  📊 Total tokens: ${(stats.totalInputTokens / 1000).toFixed(0)}k input / ${(stats.totalOutputTokens / 1000).toFixed(0)}k output`)
  }
  if (stats.episodes.length > 0) {
    log.ok('  ── Per episode ──')
    for (const ep of stats.episodes) {
      const d = (ep.durationMs / 1000 / 60).toFixed(1)
      const t = ep.inputTokens > 0
        ? `${(ep.inputTokens / 1000).toFixed(0)}k/${(ep.outputTokens / 1000).toFixed(0)}k`
        : '-'
      log.ok(`    ${ep.status === 'generated' ? '✅' : '❌'} ${ep.id}  ${d}min  ${t}`)
    }
  }
  log.ok('══════════════════════════════════════')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exitCode = 1
}).finally(() => {
  const failed = stats.failed > 0 || transcriptionFailures.size > 0 || stats.skippedRateLimit > 0
  if (!dryRun && failed) process.exitCode = 1
  const summary = [
    '## Content generation',
    '',
    `- Generated and validated: ${stats.generated}`,
    `- Generation/download failures: ${stats.failed}`,
    `- Transcription failures this run: ${transcriptionFailures.size}`,
    `- Skipped after rate limit: ${stats.skippedRateLimit}`,
    `- Outcome: ${dryRun ? 'dry run' : process.exitCode ? 'failed; progress saved, deployment blocked' : stats.generated ? 'generated' : 'no new content'}`,
    '',
  ].join('\n')
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary)
})
