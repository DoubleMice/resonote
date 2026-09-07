import assert from 'node:assert/strict'
import test from 'node:test'
import { parseSync } from '@slidev/parser'
import { withFullWidthTitles } from './slide-title-layout.ts'

const page = `---
layout: two-cols
---

# 不加班：把工作时长当作算力管理

原文与“引语”保持不变。

::right::

<Excalidraw drawFilePath="./diagram.excalidraw" />
`

test('promotes the title to a spanning header without changing body or slide count', () => {
  const rendered = withFullWidthTitles(page)
  assert.match(rendered, /layout: two-cols-header/)
  assert.match(rendered, /# 不加班：把工作时长当作算力管理\n\n::left::/)
  assert.equal(parseSync(rendered).slides.length, parseSync(page).slides.length)
  assert.equal(rendered.replace('two-cols-header', 'two-cols').replace('\n\n::left::', ''), page)
  assert.equal(withFullWidthTitles(rendered), rendered)
})

test('leaves column-specific headings and custom slots alone', () => {
  for (const source of [page.replace('# 不加班', '开场文字\n\n# 不加班'), page.replace('::right::', '::left::'), page.replace('::right::', '::right::\n\n# 右栏标题')]) {
    assert.equal(withFullWidthTitles(source), source)
  }
})

test('does not mistake frontmatter comments or fenced examples for a page title', () => {
  const commented = page.replace('layout: two-cols', '# Layout note\nlayout: "two-cols" # Keep this comment')
  const rendered = withFullWidthTitles(commented)
  assert.match(rendered, /# Layout note\nlayout: two-cols-header # Keep this comment/)
  assert.match(rendered, /# 不加班：把工作时长当作算力管理\n\n::left::/)
  const example = page.replace('# 不加班', '```md\n# 不加班').replace('::right::', '```\n\n::right::')
  assert.equal(withFullWidthTitles(example), example)
})
