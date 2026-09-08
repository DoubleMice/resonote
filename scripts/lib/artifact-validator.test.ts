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
