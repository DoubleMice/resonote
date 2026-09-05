// Layout audit pipeline:
// 1. Build generated Slidev episodes to static HTML.
// 2. Open the built deck with Playwright and detect slide content that overflows the viewport.
// 3. Optionally export PNGs for manual visual review with --png or --keep.
//
// Usage:
//   pnpm run audit:layout -- --id=<episodeId>
//   pnpm run audit:layout -- --all
//   pnpm run audit:layout -- --all --png --keep

import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright-chromium'
import { log } from './lib/log.ts'
import { run } from './lib/spawn.ts'
import { readYaml } from './lib/yaml-io.ts'
import type { EpisodeMeta } from './lib/types.ts'
import { stageEpisodePresentation } from './lib/episode-workspace.ts'

interface Args {
  all: boolean
  id?: string
  keep: boolean
  png: boolean
  threshold: number
}

interface Issue {
  episodeId: string
  slide: number
  type: 'slide-overflow' | 'element-overflow'
  message: string
}

interface Offender {
  selector: string
  text: string
  bottomOverflow: number
  rightOverflow: number
}

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TEMPLATES_DIR = join(EPISODES_DIR, '_templates')
const DEFAULT_THRESHOLD = 8

function parseArgs(): Args {
  const args = process.argv.slice(2)
  const parsed: Args = { all: false, keep: false, png: false, threshold: DEFAULT_THRESHOLD }

  for (const arg of args) {
    if (arg === '--') continue
    else if (arg === '--all') parsed.all = true
    else if (arg === '--keep') parsed.keep = true
    else if (arg === '--png') parsed.png = true
    else if (arg.startsWith('--id=')) parsed.id = arg.slice('--id='.length)
    else if (arg.startsWith('--threshold=')) {
      const threshold = Number(arg.slice('--threshold='.length))
      if (!Number.isFinite(threshold) || threshold < 0) {
        throw new Error(`invalid --threshold value: ${arg}`)
      }
      parsed.threshold = threshold
    }
    else {
      throw new Error(`unknown argument: ${arg}`)
    }
  }

  if (!parsed.all && !parsed.id) {
    throw new Error('provide --id=<episodeId> or --all')
  }
  if (parsed.all && parsed.id) {
    throw new Error('use either --id=<episodeId> or --all')
  }

  return parsed
}

function generatedEpisodes(): string[] {
  const ids: string[] = []
  if (!existsSync(EPISODES_DIR)) return []
  for (const entry of readdirSync(EPISODES_DIR)) {
    if (entry.startsWith('_')) continue
    const dir = join(EPISODES_DIR, entry)
    if (!statSync(dir).isDirectory()) continue
    const metaPath = join(dir, 'meta.yml')
    if (!existsSync(metaPath) || !existsSync(join(dir, 'slides.md'))) continue
    const meta = readYaml<EpisodeMeta>(metaPath)
    if (meta.status === 'generated') ids.push(entry)
  }
  return ids.sort()
}

async function renderEpisode(id: string, outDir: string, png: boolean): Promise<string> {
  const episodeDir = join(EPISODES_DIR, id)
  if (!existsSync(join(episodeDir, 'slides.md'))) {
    throw new Error(`slides.md not found for episode ${id}`)
  }

  rmSync(outDir, { recursive: true, force: true })
  mkdirSync(outDir, { recursive: true })

  const htmlDir = join(outDir, 'html')

  const cleanupPresentation = stageEpisodePresentation(episodeDir, TEMPLATES_DIR)

  try {
    if (png) {
      const pngDir = join(outDir, 'png')
      const exportResult = await run('pnpm', [
        'exec',
        'slidev',
        'export',
        join(episodeDir, 'slides.md'),
        '--format',
        'png',
        '--output',
        pngDir,
      ], { cwd: ROOT, reject: false })

      if (exportResult.code !== 0) {
        throw new Error(`${id} export failed\n${exportResult.stderr.slice(0, 1000)}`)
      }
    }

    const buildResult = await run('pnpm', [
      'exec',
      'slidev',
      'build',
      join(episodeDir, 'slides.md'),
      '--base',
      './',
      '--out',
      htmlDir,
    ], { cwd: ROOT, reject: false })

    if (buildResult.code !== 0) {
      throw new Error(`${id} build failed\n${buildResult.stderr.slice(0, 1000)}`)
    }
  } finally {
    cleanupPresentation()
  }

  return htmlDir
}

function outputDirFor(id: string, keep: boolean): string {
  if (keep) return join(EPISODES_DIR, id, 'audit-layout')
  return join(tmpdir(), 'resonote-layout-audit', id)
}

async function auditEpisode(id: string, outDir: string, threshold: number): Promise<Issue[]> {
  const indexPath = join(outDir, 'index.html')
  if (!existsSync(indexPath)) {
    throw new Error(`${id} build did not produce index.html`)
  }

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
  const indexUrl = pathToFileURL(indexPath).href
  const issues: Issue[] = []

  await page.goto(indexUrl, { waitUntil: 'networkidle' })
  const slideCount = await page.evaluate(() => {
    const pageCount = Number(document.querySelector('.slidev-page-total')?.textContent?.trim())
    if (Number.isFinite(pageCount) && pageCount > 0) return pageCount
    return Math.max(1, document.querySelectorAll('.slidev-page').length)
  })

  for (let slide = 1; slide <= slideCount; slide++) {
    await page.goto(`${indexUrl}#/${slide}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(500)

    const result = await page.evaluate((limit) => {
      const root = document.querySelector<HTMLElement>('.slidev-page')
        || document.querySelector<HTMLElement>('#slide-content')
        || document.querySelector<HTMLElement>('.slidev-layout')
        || document.body

      const viewportBottom = window.innerHeight
      const viewportRight = window.innerWidth
      const ignored = '.resonote-back, .slidev-page-number, .slidev-page-total, .slidev-presenter, [aria-hidden="true"]'

      const offenders = Array.from(root.querySelectorAll<HTMLElement>('*'))
        .filter((el) => !el.matches(ignored) && !el.closest(ignored))
        .map((el) => {
          const rect = el.getBoundingClientRect()
          const bottomOverflow = rect.bottom - viewportBottom
          const rightOverflow = rect.right - viewportRight
          const selector = el.id
            ? `${el.tagName.toLowerCase()}#${el.id}`
            : `${el.tagName.toLowerCase()}${el.className ? `.${String(el.className).trim().split(/\s+/).slice(0, 3).join('.')}` : ''}`
          return {
            selector,
            text: (el.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 100),
            bottomOverflow,
            rightOverflow,
          }
        })
        .filter((item) => item.bottomOverflow > limit || item.rightOverflow > limit)
        .sort((a, b) => Math.max(b.bottomOverflow, b.rightOverflow) - Math.max(a.bottomOverflow, a.rightOverflow))
        .slice(0, 5)

      return {
        documentBottomOverflow: document.documentElement.scrollHeight - window.innerHeight,
        documentRightOverflow: document.documentElement.scrollWidth - window.innerWidth,
        offenders,
      }
    }, threshold) as {
      documentBottomOverflow: number
      documentRightOverflow: number
      offenders: Offender[]
    }

    if (result.documentBottomOverflow > threshold || result.documentRightOverflow > threshold) {
      issues.push({
        episodeId: id,
        slide,
        type: 'slide-overflow',
        message: `document overflow bottom=${Math.round(result.documentBottomOverflow)}px right=${Math.round(result.documentRightOverflow)}px`,
      })
    }

    for (const offender of result.offenders) {
      issues.push({
        episodeId: id,
        slide,
        type: 'element-overflow',
        message: `${offender.selector} overflows bottom=${Math.round(offender.bottomOverflow)}px right=${Math.round(offender.rightOverflow)}px text="${offender.text}"`,
      })
    }
  }

  await browser.close()
  return issues
}

async function main(): Promise<void> {
  const args = parseArgs()
  const ids = args.all ? generatedEpisodes() : [args.id!]
  if (ids.length === 0) throw new Error('no generated episodes found')

  log.step(`Layout audit — ${ids.length} episode(s)`)
  const allIssues: Issue[] = []

  for (const id of ids) {
    const outDir = outputDirFor(id, args.keep)
    try {
      log.info(`rendering ${id}`)
      const htmlDir = await renderEpisode(id, outDir, args.png || args.keep)

      log.info(`auditing ${id}`)
      const issues = await auditEpisode(id, htmlDir, args.threshold)
      allIssues.push(...issues)

      if (issues.length === 0) log.ok(`  ${id} layout audit passed`)
      else log.warn(`  ${id} layout audit found ${issues.length} issue(s)`)
    } catch (error: any) {
      allIssues.push({
        episodeId: id,
        slide: 0,
        type: 'slide-overflow',
        message: error.stack || error.message,
      })
      log.err(`  ${id} layout audit crashed`)
    } finally {
      if (!args.keep) rmSync(outDir, { recursive: true, force: true })
    }
  }

  if (allIssues.length > 0) {
    log.err(`layout audit failed with ${allIssues.length} issue(s)`)
    for (const issue of allIssues.slice(0, 80)) {
      log.raw(`${issue.episodeId} slide ${issue.slide}: ${issue.message}`)
    }
    if (allIssues.length > 80) log.raw(`... ${allIssues.length - 80} more issue(s)`)
    process.exit(1)
  }

  log.ok('layout audit passed')
}

main().catch((error) => {
  log.err(error.stack || error.message)
  process.exit(1)
})
