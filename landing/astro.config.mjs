import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// Env-driven base path: set RESONOTE_BASE=/resonote/ in CI for GitHub Pages.
const base = process.env.RESONOTE_BASE || '/'
const site = process.env.RESONOTE_SITE || 'http://localhost:4173'

export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
  trailingSlash: 'always',
})
