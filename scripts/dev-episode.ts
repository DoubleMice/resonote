import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { log } from './lib/log.ts'
import { resolveEpisodeDirectory, stageEpisodePresentation } from './lib/episode-workspace.ts'

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TEMPLATES_DIR = resolve(EPISODES_DIR, '_templates')

async function main() {
  const id = process.argv[2]
  if (!id) throw new Error('usage: pnpm run dev:episode <episodeId>')

  const directory = resolveEpisodeDirectory(EPISODES_DIR, id)
  if (!existsSync(join(directory, 'slides.md'))) {
    throw new Error(`slides.md not found for episode ${id}`)
  }

  const cleanup = stageEpisodePresentation(directory, TEMPLATES_DIR)
  const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  try {
    log.info(`starting episode ${id} on http://localhost:3031`)
    const code = await new Promise<number>((resolveChild, rejectChild) => {
      const child = spawn(command, [
        'exec', 'slidev', join(directory, 'slides.md'), '--port', '3031',
      ], {
        cwd: ROOT,
        stdio: 'inherit',
        shell: false,
      })
      child.once('error', rejectChild)
      child.once('close', childCode => resolveChild(childCode ?? 1))
    })
    if (code !== 0) process.exitCode = code
  } finally {
    cleanup()
  }
}

main().catch(error => {
  log.err(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
})
