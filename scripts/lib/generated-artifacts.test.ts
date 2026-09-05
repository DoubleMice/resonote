import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { parse } from 'yaml'
import {
  canonicalizeGeneratedMeta, canonicalizeSlidesFrontmatter,
} from './generated-artifacts.ts'

test('orchestrator replaces deterministic metadata and preserves editorial fields', () => {
  const directory = mkdtempSync(join(tmpdir(), 'resonote-generated-meta-'))
  const metaPath = join(directory, 'meta.yml')
  try {
    writeFileSync(metaPath, [
      'id: invented',
      'source: invented',
      'title: 中文编辑标题',
      'guest: Ada',
      'tags: [ai-research]',
      'generated_at: invented',
      '',
    ].join('\n'))

    canonicalizeGeneratedMeta(metaPath, {
      id: 'episode-1',
      source: 'source-1',
      sourceTitle: 'Original title',
      published: '2026-09',
      publishedSort: '20260905',
      duration: '1h2m',
      url: 'https://example.com/episode',
      thumbnail: 'https://example.com/image.jpg',
      category: 'ai-tech',
      status: 'audit_failed',
    })

    const meta = parse(readFileSync(metaPath, 'utf8'))
    assert.equal(meta.id, 'episode-1')
    assert.equal(meta.source, 'source-1')
    assert.equal(meta.source_title, 'Original title')
    assert.equal(meta.title, '中文编辑标题')
    assert.equal(meta.guest, 'Ada')
    assert.equal(meta.published_sort, '20260905')
    assert.equal(meta.article_path, 'episodes/episode-1/article.html')
    assert.equal(meta.base, '/episodes/episode-1/')
    assert.equal(meta.generated_at, undefined)
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})

test('normalizes missing and existing slide frontmatter from one template', () => {
  const directory = mkdtempSync(join(tmpdir(), 'resonote-generated-slides-'))
  try {
    const malformedPath = join(directory, 'malformed.md')
    writeFileSync(malformedPath, 'theme: default\ntitle: Old\n---\n\n# 第一页\n')
    canonicalizeSlidesFrontmatter(malformedPath, 'Canonical title')
    const malformed = readFileSync(malformedPath, 'utf8')
    assert.match(malformed, /^---\ntheme: academic\n/)
    assert.match(malformed, /title: Canonical title/)
    assert.match(malformed, /# 第一页/)
    assert.doesNotMatch(malformed, /theme: default/)

    const existingPath = join(directory, 'existing.md')
    writeFileSync(existingPath, '---\ntheme: default\ntitle: Old\n---\n\n# 正文\n')
    canonicalizeSlidesFrontmatter(existingPath, 'Canonical title')
    const existing = readFileSync(existingPath, 'utf8')
    assert.equal((existing.match(/^---$/gm) || []).length, 2)
    assert.match(existing, /# 正文/)
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})
