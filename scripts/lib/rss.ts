import { Buffer } from 'node:buffer'

export interface RssTranscript {
  url: string
  type: string
  language?: string
}

export interface RssEpisodeEntry {
  id: string
  guid: string
  title: string
  duration: number
  published: string
  published_sort: string
  url: string
  audio_url: string
  audio_type: string
  audio_length: number
  image?: string
  description?: string
  summary?: string
  transcripts: RssTranscript[]
}

interface RssChannelMeta {
  image?: string
}

function decodeXml(value: string | undefined): string {
  return String(value ?? '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
}

function stripHtml(value: string): string {
  return decodeXml(value)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function tag(source: string, name: string): string {
  const match = source.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'))
  return decodeXml(match?.[1])
}

function selfClosingTags(source: string, name: string): string[] {
  return Array.from(source.matchAll(new RegExp(`<${name}\\s+([^>]*)\\/?\\s*>`, 'gi'))).map(m => m[1])
}

function attr(source: string | undefined, name: string): string {
  const match = String(source ?? '').match(new RegExp(`${name}=["']([^"']*)["']`, 'i'))
  return decodeXml(match?.[1])
}

function parseDuration(value: string): number {
  const trimmed = value.trim()
  if (!trimmed) return 0
  if (/^\d+$/.test(trimmed)) return Number(trimmed)
  const parts = trimmed.split(':').map(Number)
  if (parts.some(Number.isNaN)) return 0
  return parts.reduce((total, part) => total * 60 + part, 0)
}

function toDateKey(value: string): string {
  const time = Date.parse(value)
  if (Number.isNaN(time)) return ''
  const date = new Date(time)
  const y = date.getUTCFullYear()
  const m = String(date.getUTCMonth() + 1).padStart(2, '0')
  const d = String(date.getUTCDate()).padStart(2, '0')
  return `${y}${m}${d}`
}

function stableEpisodeId(sourceId: string, item: string): string {
  const guid = tag(item, 'guid')
  const link = tag(item, 'link')
  const seed = guid || link || tag(item, 'title')
  const raw = seed.split('/').filter(Boolean).pop() || seed
  const safe = raw.replace(/[^A-Za-z0-9_-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
  if (safe.length >= 6 && safe.length <= 80) return safe
  return `${sourceId}-${Buffer.from(seed).toString('base64url').slice(0, 16)}`
}

export function parseRssFeed(xml: string, sourceId: string): RssEpisodeEntry[] {
  const items = Array.from(xml.matchAll(/<item[\s\S]*?<\/item>/gi)).map(m => m[0])
  const channel = xml.match(/<channel[\s\S]*?<item/i)?.[0] ?? xml
  const channelMeta: RssChannelMeta = {
    image: attr(selfClosingTags(channel, 'itunes:image')[0], 'href') ||
      tag(channel, 'url') ||
      undefined,
  }
  return items.map(item => {
    const enclosure = selfClosingTags(item, 'enclosure')[0] ?? ''
    const transcripts = selfClosingTags(item, 'podcast:transcript')
      .map(t => ({
        url: attr(t, 'url'),
        type: attr(t, 'type'),
        language: attr(t, 'language') || undefined,
      }))
      .filter(t => t.url)

    const published = tag(item, 'pubDate')
    const description = stripHtml(tag(item, 'description'))
    const summary = stripHtml(tag(item, 'itunes:summary'))

    return {
      id: stableEpisodeId(sourceId, item),
      guid: tag(item, 'guid'),
      title: tag(item, 'title') || '(no title)',
      duration: parseDuration(tag(item, 'itunes:duration')),
      published,
      published_sort: toDateKey(published),
      url: tag(item, 'link'),
      audio_url: attr(enclosure, 'url'),
      audio_type: attr(enclosure, 'type'),
      audio_length: Number(attr(enclosure, 'length')) || 0,
      image: attr(selfClosingTags(item, 'itunes:image')[0], 'href') || channelMeta.image,
      description: description || undefined,
      summary: summary || undefined,
      transcripts,
    }
  })
}

export function preferredTranscript(transcripts: RssTranscript[]): RssTranscript | undefined {
  return transcripts.find(t => t.type === 'text/plain') ||
    transcripts.find(t => t.url.endsWith('.txt')) ||
    transcripts.find(t => t.type === 'text/vtt') ||
    transcripts.find(t => t.url.endsWith('.vtt')) ||
    transcripts.find(t => t.type === 'application/x-subrip') ||
    transcripts.find(t => t.url.endsWith('.srt')) ||
    transcripts[0]
}

export async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      'user-agent': 'Resonote RSS fetcher',
      accept: 'application/rss+xml, application/xml, text/xml, text/plain, */*',
    },
  })
  if (!res.ok) throw new Error(`GET ${url} failed: ${res.status} ${res.statusText}`)
  return res.text()
}

export function cleanTranscript(content: string, typeOrUrl = ''): string {
  if (typeOrUrl.includes('text/html')) return stripHtml(content)
  return content
    .replace(/^WEBVTT[\s\S]*?\n\n/i, '')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !/^\d+$/.test(line))
    .filter(line => !/^\d{1,2}:\d{2}:\d{2}[,.]\d{3}\s+-->/i.test(line))
    .map(line => line.replace(/<[^>]+>/g, '').trim())
    .filter(Boolean)
    .join('\n')
}
