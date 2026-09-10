import assert from 'node:assert/strict'
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { validateEpisodeArtifacts } from './artifact-validator.ts'
import { artifactFixture as fixture } from './test-support/artifact-fixture.ts'


test('accepts a strict generated artifact set', () => {
  const { root, id } = fixture()
  try {
    assert.deepEqual(validateEpisodeArtifacts({ rootDir: root, id, strict: true }), [])
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('validates referenced diagram JSON and scene structure even outside strict mode', () => {
  const { root, id, directory } = fixture()
  try {
    const diagram = join(directory, 'public/diagram-1.excalidraw')
    for (const invalid of ['{"elements":[{"text":"unescaped "quote""}]}', 'null', '{}', '{"elements":{}}', '{"elements":[null]}', '{"elements":[],"appState":[]}', '{"elements":[{"type":"arrow"}]}', '{"elements":[{"type":"line","points":[[0,0],[1,null]]}]}']) {
      writeFileSync(diagram, invalid)
      const issues = validateEpisodeArtifacts({ rootDir: root, id })
      assert.ok(issues.some(issue => issue.code === 'invalid-excalidraw-file' && issue.message.includes('diagram-1.excalidraw')), invalid)
    }
    writeFileSync(diagram, JSON.stringify({ elements: [{ type: 'text', text: 'quoted "text"' }], files: null }))
    const slides = join(directory, 'slides.md')
    writeFileSync(slides, readFileSync(slides, 'utf8').replace('./diagram-1.excalidraw', './public/diagram-1.excalidraw'))
    assert.deepEqual(validateEpisodeArtifacts({ rootDir: root, id }), [])
    rmSync(diagram)
    assert.ok(validateEpisodeArtifacts({ rootDir: root, id }).some(issue => issue.code === 'missing-excalidraw-file'))
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('rejects copied config, unknown tags, forbidden slides and article chrome', () => {
  const { root, id, directory } = fixture()
  try {
    writeFileSync(join(directory, 'package.json'), '{}\n')
    writeFileSync(join(directory, 'slides.md'), 'theme: academic\n---\n<v-click>hidden</v-click>\n')
    writeFileSync(join(directory, 'article.html'), `<article><header></header><style>x{}</style>${'文'.repeat(5200)}<footer></footer></article>`)
    writeFileSync(join(directory, 'meta.yml'), [
      `id: ${id}`,
      'source: source-1',
      'source_title: Original',
      'title: Title',
      'guest: Ada',
      'guest_role: Researcher',
      'published: 2026-09',
      'published_sort: "20260905"',
      'duration: 1h',
      'url: https://example.com',
      'status: audit_failed',
      'tags: [invented]',
      'summary: 摘要',
      'core_ideas: [观点]',
      `article_path: episodes/${id}/article.html`,
      `base: /episodes/${id}/`,
    ].join('\n'))
    const codes = validateEpisodeArtifacts({ rootDir: root, id, strict: true }).map(issue => issue.code)
    assert.ok(codes.includes('unknown-tag'))
    assert.ok(codes.includes('missing-frontmatter'))
    assert.ok(codes.includes('forbidden-v-click'))
    assert.ok(codes.includes('article-owned-chrome'))
    assert.ok(codes.includes('copied-shared-config'))
    assert.ok(codes.includes('quote-artifact-mismatch'))
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('flags AI-flavored editorial narration and repeated framing', () => {
  const { root, id, directory } = fixture()
  try {
    writeFileSync(join(directory, 'article.html'), [
      '<!doctype html><html><body><article><header><h1>标题</h1></header>',
      '<h2>先把样本的比例尺说清楚</h2>',
      '<p>这也解释了为什么市场改变了方向。</p>',
      '<p>真正的问题是需求是否存在。</p>',
      '<p>这不应被读作已经兑现的事实。</p>',
      '<p>节目要说明的不是结果，而是过程。</p>',
      '<p>更准确地说，这仍是一个待检验的假设。</p>',
      `<p>${'正文'.repeat(2600)}</p>`,
      '<footer>来源</footer></article></body></html>',
    ].join('\n'))
    const reviews = validateEpisodeArtifacts({ rootDir: root, id, strict: true })
      .filter(issue => issue.level === 'warning')
    const messages = reviews.map(issue => issue.message).join('\n')
    assert.match(messages, /先把样本的比例尺说清楚/)
    assert.match(messages, /这也解释了为什么/)
    assert.match(messages, /真正的问题是/)
    assert.match(messages, /不应被读作/)
    assert.match(messages, /节目要说明的不是/)
    assert.match(messages, /更准确地说/)
    assert.match(messages, /待检验的假设/)
    assert.ok(reviews.some(issue => issue.code === 'repetitive-editorial-frame'))
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('rejects layout metadata parsed as a separate slide during generation', () => {
  const { root, id, directory } = fixture()
  try {
    const path = join(directory, 'slides.md')
    writeFileSync(path, readFileSync(path, 'utf8').replace('---\nlayout: two-cols', '---\n\nlayout: two-cols'))
    assert.ok(validateEpisodeArtifacts({ rootDir: root, id, strict: true }).some(issue => issue.code === 'detached-slide-layout'))
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('accepts labeled native diagrams and Mermaid without requiring Excalidraw', () => {
  const { root, id, directory } = fixture()
  try {
    const path = join(directory, 'slides.md')
    const source = readFileSync(path, 'utf8').replace('addons: [slidev-addon-excalidraw]', 'diagramMode: static')
    const native = '<div class="rn-note" data-note-diagram="steps" aria-label="两个阶段"><div class="rn-note-card">准备</div><div class="rn-note-card">完成</div></div>'
    writeFileSync(path, source.replace(/<Excalidraw[^>]+\/>/g, native))
    assert.deepEqual(validateEpisodeArtifacts({ rootDir: root, id, strict: true }), [])
    writeFileSync(path, source.replace(/<Excalidraw[^>]+\/>/g, '```mermaid\nflowchart LR\nA-->B\n```'))
    assert.deepEqual(validateEpisodeArtifacts({ rootDir: root, id, strict: true }), [])
    writeFileSync(path, source)
    assert.ok(validateEpisodeArtifacts({ rootDir: root, id }).some(i => i.code === 'missing-excalidraw-addon'))
  } finally { rmSync(root, { recursive: true, force: true }) }
})


test('accepts no direct quotes while still rejecting malformed or unverifiable evidence', () => {
  const { root, id, directory } = fixture()
  try {
    const evidence = join(directory, 'quote-evidence.yml')
    writeFileSync(evidence, `episode_id: ${id}\nquotes: []\n`)
    assert.deepEqual(validateEpisodeArtifacts({ rootDir: root, id, strict: true }), [])
    writeFileSync(evidence, `episode_id: ${id}\nquotes: null\n`)
    assert.ok(validateEpisodeArtifacts({ rootDir: root, id, strict: true }).some(issue => issue.code === 'empty-quote-evidence'))
    writeFileSync(evidence, `episode_id: ${id}\nquotes:\n  - artifact: slides.md\n    artifact_excerpt: "# 封面"\n    transcript_excerpt: invented quotation\n`)
    assert.ok(validateEpisodeArtifacts({ rootDir: root, id, strict: true }).some(issue => issue.code === 'quote-transcript-mismatch'))
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})


test('accepts concise decks and default-layout diagrams without editorial quotas', () => {
  const { root, id, directory } = fixture()
  try {
    const path = join(directory, 'slides.md')
    const cover = readFileSync(path, 'utf8').split('---\nlayout: two-cols')[0]
      .replace('addons: [slidev-addon-excalidraw]', 'diagramMode: static')
    const body = '---\nlayout: default\n---\n\n# 机制与条件\n\n说明与依据。\n'
    const end = '---\nlayout: end\n---\n\n# 结论\n\n适用条件。\n'
    writeFileSync(join(root, 'data', 'transcripts', `${id}.txt`), 'short transcript\n' + '原文'.repeat(130_000))
    for (const diagram of ['', '\n```mermaid\nflowchart LR\nA-->B\n```\n']) {
      writeFileSync(path, cover + body + diagram + end)
      assert.deepEqual(validateEpisodeArtifacts({ rootDir: root, id, strict: true }), [])
    }
    writeFileSync(path, cover + body)
    assert.ok(validateEpisodeArtifacts({ rootDir: root, id, strict: true }).some(issue => issue.code === 'missing-end-layout'))
    rmSync(join(root, 'data', 'transcripts', `${id}.txt`))
    assert.ok(validateEpisodeArtifacts({ rootDir: root, id, strict: true }).some(issue => issue.code === 'missing-transcript'))
  } finally { rmSync(root, { recursive: true, force: true }) }
})
