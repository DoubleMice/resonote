import {
  cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync,
} from 'node:fs'
import { dirname, join, resolve } from 'node:path'

export function resolveEpisodeDirectory(episodesDir: string, id: string): string {
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(id)) {
    throw new Error(`invalid episode id: ${id}`)
  }
  const root = resolve(episodesDir)
  const directory = resolve(root, id)
  if (dirname(directory) !== root) throw new Error(`episode escapes root: ${id}`)
  return directory
}

export function scaffoldEpisodeWorkspace(
  episodesDir: string,
  templatesDir: string,
  id: string,
): string {
  const directory = resolveEpisodeDirectory(episodesDir, id)
  mkdirSync(directory, { recursive: true })

  const packagePath = join(directory, 'package.json')
  if (!existsSync(packagePath)) {
    const pkg = JSON.parse(readFileSync(join(templatesDir, 'package.json'), 'utf8'))
    pkg.name = `episode-${id}`
    writeFileSync(packagePath, `${JSON.stringify(pkg, null, 2)}\n`)
  }

  const stylePath = join(directory, 'style.css')
  if (!existsSync(stylePath)) cpSync(join(templatesDir, 'style.css'), stylePath)

  const publicPath = join(directory, 'public')
  if (!existsSync(publicPath)) {
    cpSync(join(templatesDir, 'public'), publicPath, { recursive: true })
  }

  return directory
}

export function stageEpisodePresentation(
  episodeDir: string,
  templatesDir: string,
): () => void {
  const stylePath = join(episodeDir, 'style.css')
  const chromePath = join(episodeDir, 'global-bottom.vue')
  const borrowedStyle = !existsSync(stylePath)
  const originalChrome = existsSync(chromePath) ? readFileSync(chromePath, 'utf8') : null

  if (borrowedStyle) cpSync(join(templatesDir, 'style.css'), stylePath)
  cpSync(join(templatesDir, 'global-bottom.vue'), chromePath)

  let cleaned = false
  return () => {
    if (cleaned) return
    cleaned = true
    if (borrowedStyle) rmSync(stylePath, { force: true })
    if (originalChrome === null) rmSync(chromePath, { force: true })
    else writeFileSync(chromePath, originalChrome)
  }
}
