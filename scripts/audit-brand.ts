import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { basename, extname, join, relative, resolve } from 'node:path'

const ROOT = process.cwd()
const DIST_DIR = resolve(ROOT, 'dist')
const forbiddenBrand = ['pod', 'deck'].join('')
const textExtensions = new Set([
  '.astro', '.css', '.excalidraw', '.html', '.js', '.json', '.md', '.mjs',
  '.svg', '.ts', '.tsx', '.txt', '.vue', '.xml', '.yaml', '.yml',
])
const textBasenames = new Set(['.gitignore', '.npmrc', '.nvmrc'])

interface Finding {
  file: string
  line?: number
  excerpt?: string
  type: 'content' | 'path'
}

function repositoryFiles(): string[] {
  const output = execFileSync(
    'git',
    ['ls-files', '--cached', '--others', '--exclude-standard', '-z'],
    { cwd: ROOT, encoding: 'utf8' },
  )
  return output.split('\0').filter(Boolean).map(file => resolve(ROOT, file))
}

function walk(directory: string): string[] {
  if (!existsSync(directory)) return []
  const files: string[] = []
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry)
    if (statSync(path).isDirectory()) files.push(...walk(path))
    else files.push(path)
  }
  return files
}

function isTextFile(file: string): boolean {
  return textExtensions.has(extname(file).toLowerCase())
    || textBasenames.has(basename(file))
}

function inspectFile(file: string): Finding[] {
  const displayPath = relative(ROOT, file)
  const findings: Finding[] = []
  if (displayPath.toLowerCase().includes(forbiddenBrand)) {
    findings.push({ file: displayPath, type: 'path' })
  }
  if (!isTextFile(file)) return findings

  const text = readFileSync(file, 'utf8')
  text.split(/\r?\n/).forEach((line, index) => {
    if (!line.toLowerCase().includes(forbiddenBrand)) return
    findings.push({
      file: displayPath,
      line: index + 1,
      excerpt: line.trim().slice(0, 180),
      type: 'content',
    })
  })
  return findings
}

function main() {
  const sourceFiles = repositoryFiles()
  const distFiles = walk(DIST_DIR)
  const files = [...new Set([...sourceFiles, ...distFiles])]
  const findings = files.flatMap(inspectFile)

  if (findings.length > 0) {
    const details = findings.map(finding => {
      if (finding.type === 'path') return `- ${finding.file}: legacy brand in path`
      return `- ${finding.file}:${finding.line}: ${finding.excerpt}`
    })
    throw new Error(`legacy brand references found:\n${details.join('\n')}`)
  }

  console.log(`brand audit passed: ${sourceFiles.length} repository files, ${distFiles.length} build files`)
}

main()
