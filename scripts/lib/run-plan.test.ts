import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { delimiter, join, resolve } from 'node:path'
import test from 'node:test'
import { parse } from 'yaml'
import { artifactFixture } from './test-support/artifact-fixture.ts'
import { archiveFailedEpisode } from './episode-workspace.ts'

const root = process.cwd()

function execute(episodes: Record<string, unknown>[], args: string[] = [], setup?: (directory: string) => void, inspect?: (directory: string) => unknown) {
  const directory = mkdtempSync(join(tmpdir(), 'resonote-plan-result-'))
  try {
    mkdirSync(join(directory, 'data/plans'), { recursive: true })
    const planPath = join(directory, 'data/plans/test.yml')
    const summaryPath = join(directory, 'summary.md')
    writeFileSync(planPath, JSON.stringify({ source: 'test', episodes }))
    setup?.(directory)
    const result = spawnSync(process.execPath, [
      resolve(root, 'node_modules/tsx/dist/cli.mjs'), resolve(root, 'scripts/run-plan.ts'),
      ...args,
    ], {
      cwd: directory,
      env: { ...process.env, PATH: `${join(directory, 'bin')}${delimiter}${process.env.PATH}`, GITHUB_STEP_SUMMARY: summaryPath, TRANSCRIPT_PROVIDER: 'mimo', MIMO_API_KEY: 'test-key', CONTENT_PROVIDER: 'claude', CONTENT_API_KEY: 'test-key' },
      encoding: 'utf8', timeout: 10_000,
    })
    assert.equal(result.error, undefined)
    return { code: result.status, stdout: result.stdout, plan: parse(readFileSync(planPath, 'utf8')), summary: readFileSync(summaryPath, 'utf8'), inspection: inspect?.(directory) }
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
  assert.equal(execute([], ['--concurrency=0', '--allow-episode-failures']).code, 1)
  assert.equal(execute([], ['--episode=does-not-exist', '--allow-episode-failures']).code, 1)
})

test('episode publication mode records ASR and download failures without failing the batch', () => {
  const result = execute([
    { id: 'bad-audio', title: 'Bad audio', status: 'needs_transcript', audio_url: 'http://127.0.0.1:1/audio.mp3' },
    { id: 'missing-transcript', title: 'Missing transcript', status: 'pending' },
  ], ['--auto-transcribe', '--allow-episode-failures', '--concurrency=3'])
  assert.equal(result.code, 0)
  assert.equal(result.plan.episodes[0].status, 'transcribe_failed')
  assert.equal(result.plan.episodes[1].status, 'failed')
  assert.match(result.summary, /Transcription failures this run: 1/)
  assert.match(result.summary, /Generation\/download failures: 1/)
  assert.match(result.summary, /test\/missing-transcript/)
  assert.match(result.summary, /completed with episode warnings; publication checks required/)
})

function setupPublicationFixture(directory: string) {
  mkdirSync(join(directory, 'episodes/_templates/public'), { recursive: true })
  writeFileSync(join(directory, 'episodes/_templates/style.css'), ':root {}\n')
  mkdirSync(join(directory, 'scripts/prompts'), { recursive: true })
  writeFileSync(join(directory, 'scripts/prompts/slides-system-rules.md'), 'Test rules')
  writeFileSync(join(directory, 'scripts/prompts/slides-task.md'), '{{EPISODE_ID}}')
  mkdirSync(join(directory, 'bin'), { recursive: true })
  writeFileSync(join(directory, 'bin/pnpm'), `#!${process.execPath}\nprocess.exit(process.argv.includes('--id=bad-layout') ? 1 : 0)\n`, { mode: 0o755 })
  writeFileSync(join(directory, 'bin/claude'), `#!${process.execPath}
const fs = require('node:fs');
fs.writeFileSync('episodes/bad-meta/meta.yml', 'title: [unfinished');
fs.writeFileSync('episodes/bad-meta/article.html', 'unfinished article');
console.log(JSON.stringify({type:'result',is_error:true}));
`, { mode: 0o755 })
}

test('parallel mixed batch preserves the successful episode and quarantines generation and layout failures', () => {
  const episodes = [
    { id: 'good', title: 'Good', status: 'audit_failed', duration: 3600, published_sort: '20260908', url: 'https://example.com/good' },
    { id: 'bad-layout', title: 'Bad layout', status: 'audit_failed', duration: 3600, published_sort: '20260908', url: 'https://example.com/bad' },
    { id: 'bad-meta', title: 'Bad metadata', status: 'pending' },
  ]
  const result = execute(episodes, ['--allow-episode-failures', '--concurrency=3'], directory => {
    for (const id of ['good', 'bad-layout']) artifactFixture(directory, id)
    writeFileSync(join(directory, 'sources.yml'), 'sources:\n  - id: test\n')
    writeFileSync(join(directory, 'data/transcripts/bad-meta.txt'), 'Transcript')
    setupPublicationFixture(directory)
  }, directory => {
    const validation = spawnSync(process.execPath, [resolve(root, 'node_modules/tsx/dist/cli.mjs'), resolve(root, 'scripts/validate-artifacts.ts')], { cwd: directory, encoding: 'utf8' })
    return {
      validationCode: validation.status,
      validationOutput: validation.stdout + validation.stderr,
      good: parse(readFileSync(join(directory, 'episodes/good/meta.yml'), 'utf8')).status,
      badMetaPublished: existsSync(join(directory, 'episodes/bad-meta')),
      badLayoutPublished: existsSync(join(directory, 'episodes/bad-layout')),
      archivedMeta: readFileSync(join(directory, 'episodes/_failed/bad-meta/meta.yml'), 'utf8'),
      archivedArticle: readFileSync(join(directory, 'episodes/_failed/bad-layout/article.html'), 'utf8').includes('<article>'),
      timing: JSON.parse(readFileSync(join(directory, 'logs/pipeline-timing.json'), 'utf8')),
    }
  })
  assert.equal(result.code, 0, result.stdout)
  assert.deepEqual(result.plan.episodes.map((entry: any) => entry.status), ['generated', 'audit_failed', 'failed'])
  assert.match(result.summary, /Generated and validated: 1/)
  assert.match(result.summary, /Generation\/download failures: 2/)
  const inspection = result.inspection as any
  assert.equal(inspection.validationCode, 0, inspection.validationOutput)
  assert.equal(inspection.good, 'generated')
  assert.equal(inspection.badMetaPublished, false)
  assert.equal(inspection.badLayoutPublished, false)
  assert.equal(inspection.archivedMeta, 'title: [unfinished')
  assert.equal(inspection.archivedArticle, true)
  assert.deepEqual(inspection.timing.generatedEpisodes, ['good'])
})

test('an isolated layout failure resumes from its existing transcript and artifacts', () => {
  const result = execute([
    { id: 'retry-audit', title: 'Retry', status: 'audit_failed', duration: 3600, published_sort: '20260908', url: 'https://example.com/retry' },
  ], ['--allow-episode-failures'], directory => {
    artifactFixture(directory, 'retry-audit')
    writeFileSync(join(directory, 'sources.yml'), 'sources:\n  - id: test\n')
    setupPublicationFixture(directory)
    archiveFailedEpisode(join(directory, 'episodes'), 'retry-audit')
  }, directory => ({ restored: existsSync(join(directory, 'episodes/retry-audit/article.html')), archived: existsSync(join(directory, 'episodes/_failed/retry-audit')) }))
  assert.equal(result.code, 0, result.stdout)
  assert.equal(result.plan.episodes[0].status, 'generated')
  assert.deepEqual(result.inspection, { restored: true, archived: false })
})

test('generation retry does not bypass the transcription cooldown', () => {
  const result = execute([
    { id: 'failed-generation', title: 'Failed generation', status: 'failed' },
    { id: 'recent-asr-failure', title: 'Recent failure', status: 'transcribe_failed', audio_url: 'http://127.0.0.1:1/audio.mp3', transcript_completed_at: new Date().toISOString() },
  ], ['--retry-generation-failures', '--auto-transcribe', '--allow-episode-failures'])
  assert.equal(result.code, 0)
  assert.match(result.stdout, /1 pending, will process 1/)
  assert.match(result.summary, /Generation\/download failures: 1/)
  assert.match(result.summary, /Transcription failures this run: 0/)
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
