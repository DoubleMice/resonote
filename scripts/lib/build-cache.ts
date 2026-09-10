import { createHash } from 'node:crypto'
import {
  existsSync, readFileSync, readdirSync, statSync,
} from 'node:fs'
import { join, relative, resolve, sep } from 'node:path'

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
  updateFile(hash, 'scripts/lib/slide-title-layout.ts', join(root, 'scripts/lib/slide-title-layout.ts'))
  return hash.digest('hex')
}

/** A cache hit must contain the shared runtime and every selected episode. */
export function cachedPlayerDist(cacheRoot: string, fingerprint: string, ids: string[]): string | null {
  const dist = join(cacheRoot, 'dist')
  try {
    if (JSON.parse(readFileSync(join(cacheRoot, 'manifest.json'), 'utf8')).fingerprint !== fingerprint) return null
    const manifest = JSON.parse(readFileSync(join(dist, 'player/manifest.json'), 'utf8'))
    if (!Array.isArray(manifest.files) || !manifest.files.length) return null
    if (!manifest.files.filter((file: string) => file !== 'index.html').every((file: string) => existsSync(join(dist, 'player', file)))) return null
    if (!ids.every(id => existsSync(join(dist, 'episodes', id, 'index.html')))) return null
    return dist
  } catch { return null }
}
