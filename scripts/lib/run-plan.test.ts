import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import test from 'node:test'
import { parse } from 'yaml'

const root = process.cwd()

function execute(episodes: Record<string, unknown>[], args: string[] = []) {
  const directory = mkdtempSync(join(tmpdir(), 'resonote-plan-result-'))
  try {
    mkdirSync(join(directory, 'data/plans'), { recursive: true })
    const planPath = join(directory, 'data/plans/test.yml')
    const summaryPath = join(directory, 'summary.md')
    writeFileSync(planPath, JSON.stringify({ source: 'test', episodes }))
    const result = spawnSync(process.execPath, [
      resolve(root, 'node_modules/tsx/dist/cli.mjs'), resolve(root, 'scripts/run-plan.ts'),
      ...args,
    ], {
      cwd: directory,
      env: { ...process.env, GITHUB_STEP_SUMMARY: summaryPath, TRANSCRIPT_PROVIDER: 'mimo', MIMO_API_KEY: 'test-key' },
      encoding: 'utf8', timeout: 10_000,
    })
    assert.equal(result.error, undefined)
    return { code: result.status, stdout: result.stdout, plan: parse(readFileSync(planPath, 'utf8')), summary: readFileSync(summaryPath, 'utf8') }
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
}

test('an empty queue succeeds but explicitly reports no new content', () => {
  const result = execute([])
  assert.equal(result.code, 0)
  assert.match(result.summary, /Generated and validated: 0/)
  assert.match(result.summary, /Outcome: no new content/)
  assert.match(result.summary, /Pipeline wall time:/)
})

test('invalid concurrency and duplicate episode IDs fail before processing', () => {
  assert.equal(execute([], ['--concurrency=0']).code, 1)
  assert.equal(execute([], ['--concurrency=NaN']).code, 1)
  const episode = { id: 'duplicate', title: 'duplicate', status: 'pending' }
  const result = execute([episode, episode], ['--concurrency=2'])
  assert.equal(result.code, 1)
  assert.deepEqual(result.plan.episodes, [episode, episode])
})

test('a failed transcript download persists progress and fails the Action', () => {
  const result = execute([{ id: 'missing-transcript', title: 'Missing transcript', status: 'pending' }])
  assert.equal(result.code, 1)
  assert.equal(result.plan.episodes[0].status, 'failed')
  assert.match(result.summary, /Generation\/download failures: 1/)
  assert.match(result.summary, /deployment blocked/)
})

test('an ASR failure fails the Action even when there is nothing ready to generate', () => {
  const result = execute([{
    id: 'bad-audio', title: 'Bad audio', status: 'needs_transcript',
    // Port 1 is blocked by fetch; this exercises failure without an API call.
    audio_url: 'http://127.0.0.1:1/audio.mp3',
  }], ['--auto-transcribe'])
  assert.equal(result.code, 1)
  assert.equal(result.plan.episodes[0].status, 'transcribe_failed')
  assert.match(result.summary, /Transcription failures this run: 1/)
  assert.match(result.summary, /deployment blocked/)
})

test('recent failed transcriptions cool down, while an explicit retry can bypass it', () => {
  const episode = { id: 'recent-failure', title: 'Recent failure', status: 'transcribe_failed',
    audio_url: 'http://127.0.0.1:1/audio.mp3', transcript_completed_at: new Date().toISOString() }
  const skipped = execute([episode], ['--auto-transcribe'])
  assert.equal(skipped.code, 0)
  assert.match(skipped.summary, /Transcription failures this run: 0/)
  const retried = execute([episode], ['--auto-transcribe', '--retry-failed'])
  assert.equal(retried.code, 1)
  assert.match(retried.summary, /Transcription failures this run: 1/)
  const resubmitted = execute([{ ...episode,
    transcript_completed_at: '2020-01-01T00:00:00Z', transcript_submitted_at: new Date().toISOString(),
  }], ['--auto-transcribe'])
  assert.equal(resubmitted.code, 0)
  assert.match(resubmitted.summary, /Transcription failures this run: 0/)
})

test('publication mode preserves ASR failures but allows publication checks to run', () => {
  const result = execute([{
    id: 'bad-audio', title: 'Bad audio', status: 'needs_transcript',
    audio_url: 'http://127.0.0.1:1/audio.mp3',
  }], ['--auto-transcribe', '--allow-transcription-failures'])
  assert.equal(result.code, 0)
  assert.equal(result.plan.episodes[0].status, 'transcribe_failed')
  assert.ok(result.plan.episodes[0].transcript_error)
  assert.match(result.summary, /Transcription failures this run: 1/)
  assert.match(result.summary, /bad-audio/)
  assert.match(result.summary, /completed with transcription warnings; publication checks required/)
  assert.doesNotMatch(result.summary, /deployment blocked/)
})

test('publication mode still blocks generation failures alongside ASR failures', () => {
  const result = execute([
    { id: 'bad-audio', title: 'Bad audio', status: 'needs_transcript', audio_url: 'http://127.0.0.1:1/audio.mp3' },
    { id: 'missing-transcript', title: 'Missing transcript', status: 'pending' },
  ], ['--auto-transcribe', '--allow-transcription-failures'])
  assert.equal(result.code, 1)
  assert.equal(result.plan.episodes[0].status, 'transcribe_failed')
  assert.equal(result.plan.episodes[1].status, 'failed')
  assert.match(result.summary, /Transcription failures this run: 1/)
  assert.match(result.summary, /Generation\/download failures: 1/)
  assert.match(result.summary, /deployment blocked/)
})

test('publication mode does not mask fatal errors', () => {
  const result = execute([], ['--episode=does-not-exist', '--allow-transcription-failures'])
  assert.equal(result.code, 1)
  assert.match(result.summary, /deployment blocked/)
})

test('can select and retry one failed generation without resetting other episodes', () => {
  const episodes = [
    { id: 'failed-one', title: 'Failed one', status: 'failed' },
    { id: 'failed-two', title: 'Failed two', status: 'failed' },
  ]
  const result = execute(episodes, ['--retry-failed', '--episode=failed-two', '--dry-run'])
  assert.equal(result.code, 0)
  assert.match(result.stdout, /1 pending, will process 1/)
  assert.deepEqual(result.plan.episodes, episodes)
  assert.equal(execute(episodes, ['--episode=does-not-exist']).code, 1)
})
