import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, readdirSync, statSync, unlinkSync, writeFileSync } from 'node:fs'
import { basename, extname, join, posix, relative, sep } from 'node:path'

const BINARY_TYPES = new Set(['.ttf', '.woff', '.woff2', '.png', '.jpg', '.jpeg', '.webp'])
const TEXT_TYPES = new Set(['.html', '.js', '.css'])
const SHARED_DIR = 'shared-assets'

function filesIn(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? filesIn(path) : entry.isFile() ? [path] : []
  })
}

/** Remove only unchanged boilerplate copies with no compiled filename/stem reference. */
export function pruneUnusedBoilerplate(directory: string, originals: ReadonlyMap<string, Buffer>, contentReferences = '') {
  const files = filesIn(directory)
  const text = files.filter(file => ['.html', '.js', '.css', '.json', '.svg'].includes(extname(file)))
    .map(file => readFileSync(file, 'utf8')).join('\n') + '\n' + contentReferences
  let removedFiles = 0
  let removedBytes = 0
  for (const file of files) {
    const name = basename(file)
    const original = originals.get(name)
    const local = relative(directory, file).split(sep).join('/')
    // Public diagrams are flat; theme example assets may have nested pnpm paths.
    if (!original || !(local === name && extname(file) === '.excalidraw' || local.startsWith('theme/'))) continue
    // Diagram stem checks also retain names composed with an extension. Theme
    // names like "box" are too generic, so check their complete filenames.
    if (text.includes(name) || extname(file) === '.excalidraw' && text.includes(basename(file, extname(file)))) continue
    const content = readFileSync(file)
    if (!content.equals(original)) continue
    unlinkSync(file)
    removedFiles++
    removedBytes += content.length
  }
  return { removedFiles, removedBytes }
}

// Only operate on compiled static URLs. Dynamic expressions and escaped strings
// are deliberately left alone; JavaScript modules themselves never move.
function rewriteReferences(text: string, file: string, base: string, targets: Map<string, string>): string {
  const rewrite = (value: string): string => {
    if (/[\\\s]/.test(value) || value.includes('${') || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value)) return value
    const [, pathname, suffix = ''] = value.match(/^([^?#]*)([?#].*)?$/) || []
    if (!pathname) return value
    let source: string
    // Vite's preload dependency arrays are relative to the episode base, even
    // when the containing JS chunk is nested in assets/modules or assets/slidev.
    const preload = extname(file) === '.js' && pathname.startsWith('assets/')
    if (pathname.startsWith('/')) {
      if (!pathname.startsWith(base)) return value
      source = pathname.slice(base.length)
    } else if (preload) {
      source = posix.join(file.split('/').slice(0, 2).join('/'), pathname)
    } else {
      source = posix.join(posix.dirname(file), pathname)
    }
    const target = targets.get(source)
    if (!target) return value
    // The preload helper prepends the episode base; absolute URLs would be
    // double-prefixed. Other references can use the canonical site URL.
    return (preload ? posix.relative(file.split('/').slice(0, 2).join('/'), target) : base + target) + suffix
  }

  const quoted = text.replace(/(["'`])((?:\\[\s\S]|(?!\1)[^\\])*?)\1/g,
    (match, quote, value) => `${quote}${rewrite(value)}${quote}`)
  // CSS url() syntax must not match JavaScript's URL() constructor, including
  // inline scripts in HTML. Preserve untouched tokens byte-for-byte.
  return extname(file) === '.css'
    ? quoted.replace(/url\(\s*([^\s"'()]+)\s*\)/gi, (match, value) => {
      const target = rewrite(value)
      return target === value ? match : `url(${target})`
    })
    : quoted
}

function movableCss(text: string): boolean {
  // Relative URLs (including fragment-only SVG references) depend on the CSS
  // file location. Keep such stylesheets local, as well as imports/source maps.
  if (/@import|sourceMappingURL|(?:image-set|image|src)\s*\(/i.test(text)) return false
  return [...text.matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/gi)].every(([, , url]) =>
    /^(?:\/(?!\/)|https?:\/\/|\/\/|data:)/i.test(url.trim()),
  )
}

/** Share repeated leaf assets after assembly, leaving episode build caches intact. */
export function shareEpisodeAssets(dist: string, siteBase = '/') {
  const base = `/${siteBase.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')
  const allFiles = filesIn(dist)
  const beforeFiles = allFiles.length
  const beforeBytes = allFiles.reduce((sum, file) => sum + statSync(file).size, 0)
  const paths = new Map(allFiles.map(file => [relative(dist, file).split(sep).join('/'), file]))
  const texts = new Map([...paths].filter(([file]) => TEXT_TYPES.has(extname(file)))
    .map(([file, path]) => [file, readFileSync(path, 'utf8')]))
  const targets = new Map<string, string>()
  const shared = new Map<string, Buffer>()

  const collect = (candidates: Iterable<[string, Buffer]>) => {
    const groups = new Map<string, string[]>()
    const contents = new Map<string, Buffer>()
    for (const [file, content] of candidates) {
      const key = createHash('sha256').update(content).digest('hex') + extname(file)
      const group = groups.get(key) || []
      group.push(file)
      groups.set(key, group)
      contents.set(key, content)
    }
    const proposed = new Map<string, string>()
    for (const [key, group] of groups) {
      if (group.length > 1) for (const file of group) proposed.set(file, `${SHARED_DIR}/${key}`)
    }
    const remaining = new Map<string, string>()
    for (const [file, text] of texts) {
      const episode = file.split('/').slice(0, 2).join('/')
      remaining.set(episode, (remaining.get(episode) || '') + '\n' + rewriteReferences(text, file, base, proposed))
    }
    for (const [key, group] of groups) {
      if (group.length < 2) continue
      // If a filename still occurs after the supported URL rewrites (e.g. an
      // escaped or runtime-composed URL), keep the entire group local. False
      // positives only cost space; deleting an unresolved dependency breaks it.
      if (group.some(file => remaining.get(file.split('/').slice(0, 2).join('/'))?.includes(basename(file)))) continue
      const target = `${SHARED_DIR}/${key}`
      shared.set(target, contents.get(key)!)
      for (const file of group) targets.set(file, target)
    }
  }

  // Limit candidates to Vite's assets directory; public files can be consumed
  // through runtime-composed URLs that cannot safely be rewritten here.
  const episodeAsset = (file: string) => /^episodes\/[^/]+\/assets\//.test(file)
  collect([...paths].filter(([file]) => episodeAsset(file) && BINARY_TYPES.has(extname(file)))
    .map(([file, path]) => [file, readFileSync(path)]))
  for (const [file, text] of texts) texts.set(file, rewriteReferences(text, file, base, targets))

  // Normalize font/image URLs first, so otherwise identical stylesheets can
  // share content even if their original URLs contained different episode IDs.
  collect([...texts].filter(([file, text]) => episodeAsset(file) && extname(file) === '.css' && movableCss(text))
    .map(([file, text]) => [file, Buffer.from(text)]))
  for (const [file, text] of texts) {
    if (!targets.has(file)) writeFileSync(paths.get(file)!, rewriteReferences(text, file, base, targets))
  }
  if (shared.size) mkdirSync(join(dist, SHARED_DIR), { recursive: true })
  for (const [file, content] of shared) writeFileSync(join(dist, file), content)
  for (const file of targets.keys()) unlinkSync(paths.get(file)!)

  const after = filesIn(dist)
  return {
    beforeFiles, afterFiles: after.length, beforeBytes,
    afterBytes: after.reduce((sum, file) => sum + statSync(file).size, 0),
    sharedFiles: shared.size,
  }
}
