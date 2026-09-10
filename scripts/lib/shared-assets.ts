import { readFileSync, readdirSync, statSync, unlinkSync } from 'node:fs'
import { basename, extname, join, relative, sep } from 'node:path'

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

/** Read-only publication statistics; shared Vite output already owns common assets. */
export function staticAssetStats(directory: string) {
  const files = filesIn(directory)
  return { files: files.length, bytes: files.reduce((sum, file) => sum + statSync(file).size, 0) }
}
