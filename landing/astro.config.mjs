import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// Env-driven base path. Production (resonote.doublemice.top) and local both use '/'; override for nested hosting.
const base = process.env.RESONOTE_BASE || '/'
const site = process.env.RESONOTE_SITE || 'http://localhost:4173'

export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
  trailingSlash: 'always',
})
