import { parseSync } from '@slidev/parser'

// Adapt legacy decks at render time; keep editorial source and quote evidence intact.
// Only a leading page title is promoted. Column-specific or custom slot layouts stay intact.
export function withFullWidthTitles(source: string): string {
  let result = source
  for (const slide of parseSync(source, 'slides.md').slides) {
    if (slide.frontmatter.layout !== 'two-cols' || !slide.frontmatterRaw) continue
    if (!/^# [^\n]+\n/.test(slide.content)) continue
    if (!/^::right::\s*$/m.test(slide.content) || /^::(?:left|default|bottom)::/m.test(slide.content)) continue
    if ((slide.content.match(/^# /gm) || []).length !== 1) continue
    const raw = slide.raw
      .replace(slide.frontmatterRaw, slide.frontmatterRaw.replace(/^(layout:[ \t]*)['"]?two-cols['"]?([ \t]*(?:#.*)?)$/m, '$1two-cols-header$2'))
      .replace(slide.contentRaw, slide.contentRaw.replace(/^(# [^\n]+)\n/m, '$1\n\n::left::\n'))
    if (raw !== slide.raw && raw.includes('layout: two-cols-header')) result = result.replace(slide.raw, raw)
  }
  return result
}
