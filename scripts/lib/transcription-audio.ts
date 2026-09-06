import { createWriteStream, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import { setTimeout } from 'node:timers/promises'
import { run } from './spawn.ts'

export async function downloadAudio(
  url: string, path: string,
  options: { attempts?: number; retryDelayMs?: number; timeoutMs?: number } = {},
): Promise<{ bytes: number }> {
  const attempts = options.attempts ?? 3
  for (let attempt = 0; attempt < attempts; attempt++) {
    let retryable = true
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(options.timeoutMs ?? 120_000),
        headers: { accept: 'audio/*,*/*', 'user-agent': 'Resonote transcription fetcher/1.0' },
      })
      if (!response.ok) {
        // Podcast redirect services can briefly return 404 without a CDN URL.
        retryable = [404, 408, 429, 500, 502, 503, 504].includes(response.status)
        await response.body?.cancel()
        throw new Error(`audio download failed: ${response.status} ${response.statusText}`)
      }
      if (!response.body) throw new Error('audio download returned no body')
      await pipeline(Readable.fromWeb(response.body as any), createWriteStream(path))
      const bytes = statSync(path).size
      if (!bytes) throw new Error('audio download returned an empty file')
      return { bytes }
    } catch (error) {
      rmSync(path, { force: true })
      if (!retryable || attempt + 1 >= attempts) throw error
      await setTimeout((options.retryDelayMs ?? 1_000) * 2 ** attempt)
    }
  }
  throw new Error('audio download attempts must be positive')
}

export function audioChunkSeconds(requestedSeconds: number, maxBytes: number): number {
  if (!Number.isFinite(requestedSeconds) || requestedSeconds <= 0 || !Number.isFinite(maxBytes) || maxBytes < 64 * 1024) {
    throw new Error('audio chunk duration must be positive and size limit must be at least 64 KiB')
  }
  // 32 kbit/s mono MP3; reserve 10% for frame rounding and container overhead.
  return Math.min(requestedSeconds, Math.floor(maxBytes * 0.9 / 4_000))
}

export async function splitAudio(input: string, directory: string, seconds: number, maxBytes: number): Promise<string[]> {
  await run('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-y', '-i', input,
    '-map', '0:a:0', '-map_metadata', '-1', '-map_chapters', '-1',
    '-vn', '-ac', '1', '-ar', '16000', '-c:a', 'libmp3lame', '-b:a', '32k',
    '-f', 'segment', '-segment_format', 'mp3',
    '-segment_format_options', 'id3v2_version=0:write_xing=0',
    '-segment_time', String(audioChunkSeconds(seconds, maxBytes)),
    '-reset_timestamps', '1', join(directory, 'chunk-%03d.mp3'),
  ])
  const paths = readdirSync(directory).filter(file => /^chunk-\d+\.mp3$/.test(file)).sort().map(file => join(directory, file))
  if (!paths.length) throw new Error('ffmpeg produced no audio chunks')
  for (const path of paths) {
    if (statSync(path).size > maxBytes) throw new Error(`encoded audio chunk exceeds ${maxBytes} bytes: ${path}`)
  }
  return paths
}
