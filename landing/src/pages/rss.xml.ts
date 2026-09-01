import type { APIRoute } from 'astro'
import { loadEpisodes } from '../lib/data'
import { buildRssFeed } from '../lib/rss'

export const prerender = true

export const GET: APIRoute = ({ site }) => {
  const xml = buildRssFeed({
    episodes: loadEpisodes(),
    site: site?.toString() || 'http://localhost:4173',
    base: import.meta.env.BASE_URL,
    now: new Date(),
  })
  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
