import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { validateEpisodeArtifacts } from './artifact-validator.ts'

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'resonote-artifacts-'))
  const id = 'episode-1'
  const directory = join(root, 'episodes', id)
  mkdirSync(join(directory, 'public'), { recursive: true })
  writeFileSync(join(root, 'sources.yml'), 'sources:\n  - id: source-1\n')
  writeFileSync(join(root, 'tags.yml'), 'categories:\n  topic:\n    - ai-research\n')
  mkdirSync(join(root, 'data', 'transcripts'), { recursive: true })
  writeFileSync(join(root, 'data', 'transcripts', `${id}.txt`), 'short transcript\n')
  writeFileSync(join(directory, 'meta.yml'), [
    `id: ${id}`,
    'source: source-1',
    'source_title: Original title',
    'title: 中文标题',
    'guest: Ada',
    'guest_role: Researcher',
    'published: 2026-09',
    'published_sort: "20260905"',
    'duration: 1h',
    'url: https://example.com',
    'status: generated',
    'generated_at: 2026-09-05T00:00:00.000Z',
    'tags: [ai-research]',
    'summary: 摘要',
    'core_ideas: [观点]',
    `article_path: episodes/${id}/article.html`,
    `base: /episodes/${id}/`,
    '',
  ].join('\n'))
  const slides = [
    '---',
    'theme: academic',
    'colorSchema: light',
    'addons: [slidev-addon-excalidraw]',
    'title: 中文标题',
    'class: text-center',
    'transition: slide-left',
    'mdc: true',
    'drawings:',
    '  persist: false',
    '---',
    '',
    '# 封面',
    '',
  ]
  for (let index = 1; index <= 20; index += 1) {
    if (index <= 4) {
      slides.push('---', 'layout: two-cols', '---', '', `# 图示 ${index}`, '', `<Excalidraw drawFilePath="./diagram-${index}.excalidraw" />`, '')
      writeFileSync(join(directory, 'public', `diagram-${index}.excalidraw`), '{}\n')
    } else {
      slides.push('---', '', `# 正文 ${index}`, '')
    }
  }
  slides.push('---', 'layout: end', '---', '', '# 结束', '')
  writeFileSync(join(directory, 'slides.md'), slides.join('\n'))
  writeFileSync(join(directory, 'article.html'), [
    '<!doctype html><html><body><article><header><h1>标题</h1></header>',
    `<p>${'正文'.repeat(2600)}</p>`,
    '<footer>来源</footer></article></body></html>',
  ].join(''))
  writeFileSync(join(directory, 'quote-evidence.yml'), [
    `episode_id: ${id}`,
    'quotes:',
    '  - artifact: slides.md',
    '    artifact_excerpt: "# 封面"',
    '    transcript_excerpt: short transcript',
    '',
  ].join('\n'))
  return { root, id, directory }
}

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
