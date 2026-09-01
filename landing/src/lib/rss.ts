import { episodePublishedTime, sortEpisodesByPublishedDesc } from './data'
import type { EpisodeWithSource } from './data'

export const FEED_TITLE = '声笺 Resonote'
export const FEED_DESCRIPTION = '把长播客整理成值得翻阅的视觉笔记与长读文章'
export const FEED_PATH = '/rss.xml'

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function absoluteUrl(site: string, base: string, path: string): string {
  const origin = site.trim().replace(/\/+$/, '')
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.replace(/^\/+/, '')
  return `${origin}${baseWithSlash}${cleanPath}`
}

function isReadable(ep: EpisodeWithSource): boolean {
  return ep.status === 'generated' || Boolean(ep.article_path)
}

function episodeDeckPath(ep: Pick<EpisodeWithSource, 'id'>): string {
  return `episodes/${ep.id}/`
}

function episodeArticlePath(ep: Pick<EpisodeWithSource, 'article_path'>): string | null {
  return ep.article_path ? ep.article_path.replace(/^\/+/, '') : null
}

function itemPubDate(ep: EpisodeWithSource): string | null {
  const fromPublished = episodePublishedTime(ep)
  if (fromPublished > 0) return new Date(fromPublished).toUTCString()
  for (const value of [ep.published, ep.generated_at]) {
    const parsed = Date.parse(String(value || ''))
    if (Number.isFinite(parsed)) return new Date(parsed).toUTCString()
  }
  return null
}

function itemDescription(ep: EpisodeWithSource, deckUrl: string, articleUrl: string | null): string {
  const parts: string[] = []
  if (ep.guest) {
    const role = ep.guest_role ? `（${escapeXml(ep.guest_role)}）` : ''
    parts.push(`<p><strong>嘉宾</strong>：${escapeXml(ep.guest)}${role}</p>`)
  }
  if (ep.summary) parts.push(`<p>${escapeXml(ep.summary)}</p>`)
  const links: string[] = []
  if (ep.status === 'generated') links.push(`<a href="${escapeXml(deckUrl)}">幻灯片笔记</a>`)
  if (articleUrl) links.push(`<a href="${escapeXml(articleUrl)}">长读文章</a>`)
  if (links.length > 1) parts.push(`<p>阅读格式：${links.join(' · ')}</p>`)
  return parts.join('')
}

function renderItem(ep: EpisodeWithSource, site: string, base: string): string {
  const deckUrl = absoluteUrl(site, base, episodeDeckPath(ep))
  const articleUrl = (() => {
    const path = episodeArticlePath(ep)
    return path ? absoluteUrl(site, base, path) : null
  })()
  const link = articleUrl ?? deckUrl
  const pubDate = itemPubDate(ep)

  const categories = [...(ep.tags || []), ep.sourceRef?.name].filter(Boolean) as string[]
  const categoryXml = categories
    .map(tag => `    <category>${escapeXml(tag)}</category>`)
    .join('\n')

  return [
    '    <item>',
    `      <title>${escapeXml(ep.title)}</title>`,
    `      <link>${escapeXml(link)}</link>`,
    `      <guid isPermaLink="true">${escapeXml(link)}</guid>`,
    ...(pubDate ? [`      <pubDate>${pubDate}</pubDate>`] : []),
    `      <description>${escapeXml(itemDescription(ep, deckUrl, articleUrl))}</description>`,
    ...(categoryXml ? [categoryXml] : []),
    '    </item>',
  ].join('\n')
}

export interface RssFeedOptions {
  episodes: EpisodeWithSource[]
  site: string
  base: string
  now?: Date
}

export function buildRssFeed(options: RssFeedOptions): string {
  const { episodes, site, base } = options
  const selfUrl = absoluteUrl(site, base, FEED_PATH)
  const channelUrl = absoluteUrl(site, base, '')

  const items = sortEpisodesByPublishedDesc(episodes.filter(isReadable))
    .map(ep => renderItem(ep, site, base))

  const channelLines = [
    '    <title>' + escapeXml(FEED_TITLE) + '</title>',
    `    <link>${escapeXml(channelUrl)}</link>`,
    `    <description>${escapeXml(FEED_DESCRIPTION)}</description>`,
    '    <language>zh-CN</language>',
    ...(options.now ? [`    <lastBuildDate>${options.now.toUTCString()}</lastBuildDate>`] : []),
    '    <generator>Resonote</generator>',
    `    <atom:link href="${escapeXml(selfUrl)}" rel="self" type="application/rss+xml"/>`,
  ]

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    ...channelLines,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n')
}
