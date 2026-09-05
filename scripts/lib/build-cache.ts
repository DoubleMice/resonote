import { createHash } from 'node:crypto'
import {
  cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync,
} from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'

// Bump when the Slidev build command or fingerprint rules change.
const CACHE_VERSION = 1
const EXCLUDED_DIRECTORIES = new Set([
  'audit', 'audit-layout', 'boris-audit', 'dist', 'node_modules', 'screenshots', 'shots',
])
const EXCLUDED_FILES = new Set([
  '.failed', 'article.html', 'global-bottom.vue', 'meta.yml', 'package-lock.json',
])

interface FingerprintOptions {
  rootDir: string
  episodeDir: string
  templatesDir: string
  base: string
}

interface CacheManifest {
  version: number
  fingerprint: string
}

function collectFiles(directory: string, files: string[] = []): string[] {
  if (!existsSync(directory)) return files
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && EXCLUDED_DIRECTORIES.has(entry.name)) continue
    if (entry.isFile() && EXCLUDED_FILES.has(entry.name)) continue
    const path = join(directory, entry.name)
    if (entry.isDirectory()) collectFiles(path, files)
    else if (entry.isFile()) files.push(path)
  }
  return files
}

function updateFile(hash: ReturnType<typeof createHash>, label: string, path: string): void {
  if (!existsSync(path) || !statSync(path).isFile()) return
  const content = readFileSync(path)
  hash.update(label)
  hash.update('\0')
  hash.update(String(content.length))
  hash.update('\0')
  hash.update(content)
  hash.update('\0')
}

export function episodeBuildFingerprint(options: FingerprintOptions): string {
  const root = resolve(options.rootDir)
  const episode = resolve(options.episodeDir)
  const templates = resolve(options.templatesDir)
  const hash = createHash('sha256')
  hash.update(`resonote-episode-build-v${CACHE_VERSION}\0${options.base}\0`)

  for (const path of collectFiles(episode).sort()) {
    updateFile(hash, `episode/${relative(episode, path).split(sep).join('/')}`, path)
  }
  for (const name of ['style.css']) {
    updateFile(hash, `templates/${name}`, join(templates, name))
  }
  for (const name of ['package.json', 'pnpm-lock.yaml']) {
    updateFile(hash, `root/${name}`, join(root, name))
  }
  updateFile(hash, 'scripts/lib/episode-workspace.ts', join(root, 'scripts/lib/episode-workspace.ts'))
  return hash.digest('hex')
}

function cacheEpisodeDirectory(cacheRoot: string, id: string): string {
  const root = resolve(cacheRoot)
  const directory = resolve(root, id)
  if (dirname(directory) !== root) throw new Error(`episode cache path escapes root: ${id}`)
  return directory
}

export function cachedEpisodeDist(cacheRoot: string, id: string, fingerprint: string): string | null {
  const directory = cacheEpisodeDirectory(cacheRoot, id)
  const manifestPath = join(directory, 'manifest.json')
  const distPath = join(directory, 'dist')
  if (!existsSync(manifestPath) || !existsSync(join(distPath, 'index.html'))) return null
  try {
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as CacheManifest
    return manifest.version === CACHE_VERSION && manifest.fingerprint === fingerprint ? distPath : null
  } catch {
    return null
  }
}

export function storeEpisodeDist(
  cacheRoot: string,
  id: string,
  fingerprint: string,
  sourceDist: string,
): string {
  if (!existsSync(join(sourceDist, 'index.html'))) {
    throw new Error(`cannot cache incomplete episode build: ${id}`)
  }
  const directory = cacheEpisodeDirectory(cacheRoot, id)
  rmSync(directory, { recursive: true, force: true })
  mkdirSync(directory, { recursive: true })
  cpSync(sourceDist, join(directory, 'dist'), { recursive: true })
  writeFileSync(join(directory, 'manifest.json'), `${JSON.stringify({
    version: CACHE_VERSION,
    fingerprint,
  }, null, 2)}\n`)
  return join(directory, 'dist')
}
