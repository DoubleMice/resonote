import assert from 'node:assert/strict'
import { rmSync, writeFileSync } from 'node:fs'
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
