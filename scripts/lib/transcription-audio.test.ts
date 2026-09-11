import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { audioChunkSeconds, downloadAudio, splitAudio } from './transcription-audio.ts'

test('retries a temporary podcast redirect 404 and replaces incomplete downloads', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'resonote-download-'))
  let attempts = 0
  const server = createServer((_request, response) => {
    if (++attempts === 1) { response.writeHead(404); response.end('Missing redirect URL') }
    else response.end('audio data')
  })
  await new Promise<void>(done => server.listen(0, '127.0.0.1', done))
  try {
    const address = server.address() as { port: number }
    const path = join(directory, 'audio')
    writeFileSync(path, 'previous partial download')
    const result = await downloadAudio(`http://127.0.0.1:${address.port}/episode.mp3`, path, { retryDelayMs: 1 })
    assert.equal(attempts, 2)
    assert.equal(result.bytes, 10)
    assert.equal(readFileSync(path, 'utf8'), 'audio data')
  } finally {
    await new Promise<void>(done => server.close(() => done()))
    rmSync(directory, { recursive: true, force: true })
  }
})

test('downloads through podcast redirects that reject wildcard Accept-Language', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'resonote-language-'))
  const server = createServer((request, response) => {
    if (request.headers['accept-language'] === '*') {
      response.writeHead(404); response.end('Missing redirect URL')
    } else if (request.url === '/episode.mp3') {
      response.writeHead(302, { location: '/audio.mp3' }); response.end()
    } else response.end('complete audio')
  })
  await new Promise<void>(done => server.listen(0, '127.0.0.1', done))
  try {
    const address = server.address() as { port: number }
    const url = `http://127.0.0.1:${address.port}/episode.mp3`
    const baseline = await fetch(url)
    assert.equal(baseline.status, 404)
    await baseline.body?.cancel()
    const path = join(directory, 'audio')
    assert.equal((await downloadAudio(url, path, { attempts: 1 })).bytes, 14)
    assert.equal(readFileSync(path, 'utf8'), 'complete audio')
  } finally {
    await new Promise<void>(done => server.close(() => done()))
    rmSync(directory, { recursive: true, force: true })
  }
})

test('caps chunk duration to the configured byte budget', () => {
  assert.equal(audioChunkSeconds(900, 18 * 1024 * 1024), 900)
  assert.ok(audioChunkSeconds(90_000, 1024 * 1024) < 240)
  for (const seconds of [0, -1, NaN, Infinity]) assert.throws(() => audioChunkSeconds(seconds, 1024 * 1024))
})

test('strips large metadata and splits without losing audio', {
  skip: spawnSync('ffmpeg', ['-version']).status !== 0 || spawnSync('ffprobe', ['-version']).status !== 0,
}, async () => {
  const directory = mkdtempSync(join(tmpdir(), 'resonote-audio-chunks-'))
  try {
    const metadata = join(directory, 'metadata.txt')
    const input = join(directory, 'input.mp3')
    writeFileSync(metadata, ';FFMETADATA1\ncomment=' + 'x'.repeat(256 * 1024))
    const generated = spawnSync('ffmpeg', ['-v', 'error', '-f', 'lavfi', '-i', 'sine=frequency=440:duration=32',
      '-f', 'ffmetadata', '-i', metadata, '-map', '0:a', '-map_metadata', '1', '-b:a', '32k', input], { encoding: 'utf8' })
    assert.equal(generated.status, 0, generated.stderr)
    const maxBytes = 64 * 1024
    assert.ok(statSync(input).size > maxBytes)
    const chunks = await splitAudio(input, directory, 900, maxBytes)
    assert.equal(chunks.length, 3)
    let duration = 0
    for (const chunk of chunks) {
      assert.ok(statSync(chunk).size <= maxBytes)
      const probe = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration:format_tags', '-of', 'json', chunk], { encoding: 'utf8' })
      assert.equal(probe.status, 0, probe.stderr)
      const format = JSON.parse(probe.stdout).format
      assert.equal(format.tags?.comment, undefined)
      duration += Number(format.duration)
    }
    assert.ok(duration >= 32 && duration < 33, `audio duration ${duration}`)
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})
