import {
  cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync,
} from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { withFullWidthTitles } from './slide-title-layout.ts'

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

  const publicPath = join(directory, 'public')
  if (!existsSync(publicPath)) {
    cpSync(join(templatesDir, 'public'), publicPath, { recursive: true })
  }

  return directory
}

export function stageEpisodePresentation(
  episodeDir: string,
  templatesDir: string,
  normalizeTitles = true,
): () => void {
  const slidesPath = join(episodeDir, 'slides.md')
  const originalSlides = normalizeTitles && existsSync(slidesPath) ? readFileSync(slidesPath, 'utf8') : null
  const renderedSlides = originalSlides === null ? null : withFullWidthTitles(originalSlides)
  const stylePath = join(episodeDir, 'style.css')
  const legacyChromePath = join(episodeDir, 'global-bottom.vue')
  const templateStyle = readFileSync(join(templatesDir, 'style.css'), 'utf8')
  const existingStyle = existsSync(stylePath) ? readFileSync(stylePath, 'utf8') : null
  const originalStyle = existingStyle === templateStyle ? null : existingStyle
  const legacyChrome = existsSync(legacyChromePath) ? readFileSync(legacyChromePath, 'utf8') : null

  cpSync(join(templatesDir, 'style.css'), stylePath)
  if (renderedSlides !== null && renderedSlides !== originalSlides) writeFileSync(slidesPath, renderedSlides)
  // Navigation is injected into the assembled HTML in viewport coordinates.
  // Suppress any ignored legacy component while Slidev runs so an old local
  // file cannot reintroduce the scaled, overlapping back button.
  rmSync(legacyChromePath, { force: true })

  let cleaned = false
  return () => {
    if (cleaned) return
    cleaned = true
    if (originalSlides !== null && renderedSlides !== originalSlides && existsSync(slidesPath)
      && readFileSync(slidesPath, 'utf8') === renderedSlides) writeFileSync(slidesPath, originalSlides)
    if (originalStyle === null) rmSync(stylePath, { force: true })
    else writeFileSync(stylePath, originalStyle)
    if (legacyChrome !== null) writeFileSync(legacyChromePath, legacyChrome)
  }
}
