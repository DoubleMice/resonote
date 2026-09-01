import assert from 'node:assert/strict'
import test from 'node:test'
import { absoluteUrl, buildRssFeed, escapeXml } from './rss.ts'
import type { EpisodeWithSource, Source } from './data.ts'

const sourceRef: Source = { id: 'tbpn', name: 'TBPN', color: '#525252' }

function episode(overrides: Partial<EpisodeWithSource>): EpisodeWithSource {
  return {
    id: 'ep-1',
    source: 'tbpn',
    title: 'Episode One',
    url: 'https://example.com/audio',
    status: 'generated',
    sourceRef,
    ...overrides,
  }
}

test('escapeXml escapes XML special characters', () => {
  assert.equal(
    escapeXml(`A & B <tag> "quoted" 'single'`),
    'A &amp; B &lt;tag&gt; &quot;quoted&quot; &apos;single&apos;',
  )
})

test('absoluteUrl joins origin, base path and path', () => {
  assert.equal(absoluteUrl('https://doublemice.github.io/', '/resonate/', 'episodes/e1/'), 'https://doublemice.github.io/resonate/episodes/e1/')
  assert.equal(absoluteUrl('http://localhost:4173', '/', 'rss.xml'), 'http://localhost:4173/rss.xml')
  assert.equal(absoluteUrl('https://example.com', '/resonate/', ''), 'https://example.com/resonate/')
})

test('buildRssFeed filters non-readable episodes and sorts newest first', () => {
  const xml = buildRssFeed({
    episodes: [
      episode({ id: 'old-generated', title: 'Old Generated', published_sort: '20260701' }),
      episode({ id: 'queued', title: 'Queued Only', status: 'queued' }),
      episode({ id: 'article-only', title: 'Article Only', status: 'downloaded', article_path: 'episodes/article-only/article.html' }),
      episode({ id: 'new-generated', title: 'New Generated', published_sort: '20260831' }),
    ],
    site: 'https://doublemice.github.io',
    base: '/resonate/',
    now: new Date('2026-09-01T00:00:00Z'),
  })

  assert.match(xml, /<title>声笺 Resonote<\/title>/)
  assert.match(xml, /<language>zh-CN<\/language>/)
  assert.doesNotMatch(xml, /Queued Only/)
  const first = xml.indexOf('<item>')
  const second = xml.indexOf('<item>', first + 1)
  assert.match(xml.slice(first, second), /New Generated/)
  assert.match(xml.slice(second), /Old Generated/)
})

test('buildRssFeed prefers article link and exposes both formats in description', () => {
  const xml = buildRssFeed({
    episodes: [
      episode({
        id: 'ep-both',
        title: 'Both Formats',
        published_sort: '20260831',
        article_path: 'episodes/ep-both/article.html',
        summary: '一段 & 特殊 <字符> 的摘要',
      }),
    ],
    site: 'https://doublemice.github.io',
    base: '/resonate/',
  })

  const itemXml = xml.slice(xml.indexOf('<item>'))
  assert.match(itemXml, /<link>https:\/\/doublemice\.github\.io\/resonate\/episodes\/ep-both\/article\.html<\/link>/)
  const description = itemXml.match(/<description>(.*?)<\/description>/s)?.[1] ?? ''
  assert.match(description, /&lt;p&gt;一段 &amp;amp; 特殊 &amp;lt;字符&amp;gt; 的摘要&lt;\/p&gt;/)
  assert.match(description, /&lt;a href=&quot;https:\/\/doublemice\.github\.io\/resonate\/episodes\/ep-both\/&quot;&gt;幻灯片笔记&lt;\/a&gt;/)
  assert.match(description, /长读文章/)
})

test('buildRssFeed links deck when no article exists and emits categories', () => {
  const xml = buildRssFeed({
    episodes: [
      episode({
        id: 'deck-only',
        title: 'Deck Only',
        published_sort: '20260801',
        tags: ['ai-products', 'hardware'],
      }),
    ],
    site: 'https://doublemice.github.io',
    base: '/resonate/',
  })

  assert.match(xml, /<link>https:\/\/doublemice\.github\.io\/resonate\/episodes\/deck-only\/<\/link>/)
  assert.match(xml, /<guid isPermaLink="true">https:\/\/doublemice\.github\.io\/resonate\/episodes\/deck-only\/<\/guid>/)
  assert.match(xml, /<category>ai-products<\/category>/)
  assert.match(xml, /<category>TBPN<\/category>/)
  const itemXml = xml.slice(xml.indexOf('<item>'))
  assert.doesNotMatch(itemXml, /阅读格式/)
})

test('buildRssFeed formats pubDate from published_sort and falls back to generated_at', () => {
  const xml = buildRssFeed({
    episodes: [
      episode({ id: 'dated', title: 'Dated', published_sort: '20260831' }),
      episode({ id: 'month-only', title: 'Month Only', published: '2026-08', published_sort: '202608' }),
      episode({ id: 'generated-fallback', title: 'Generated Fallback', generated_at: '2026-08-30T12:00:00Z' }),
      episode({ id: 'no-date', title: 'No Date' }),
    ],
    site: 'https://doublemice.github.io',
    base: '/resonate/',
  })

  assert.match(xml, /<pubDate>Mon, 31 Aug 2026 00:00:00 GMT<\/pubDate>/)
  assert.match(xml, /<pubDate>Sat, 01 Aug 2026 00:00:00 GMT<\/pubDate>/)
  assert.match(xml, /<pubDate>Sun, 30 Aug 2026 12:00:00 GMT<\/pubDate>/)
  const noDateTitle = xml.indexOf('<title>No Date</title>')
  const noDateItem = xml.slice(xml.lastIndexOf('<item>', noDateTitle), xml.indexOf('</item>', noDateTitle))
  assert.doesNotMatch(noDateItem, /<pubDate>/)
})

test('buildRssFeed declares atom self link with feed url', () => {
  const xml = buildRssFeed({
    episodes: [],
    site: 'https://doublemice.github.io',
    base: '/resonate/',
  })

  assert.match(xml, /<rss version="2.0" xmlns:atom="http:\/\/www\.w3\.org\/2005\/Atom">/)
  assert.match(xml, /<atom:link href="https:\/\/doublemice\.github\.io\/resonate\/rss\.xml" rel="self" type="application\/rss\+xml"\/>/)
  assert.match(xml, /<link>https:\/\/doublemice\.github\.io\/resonate\/<\/link>/)
})
