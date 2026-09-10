import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Plugin } from 'vite'
import { withFullWidthTitles } from './slide-title-layout.ts'

// The virtual-module adapter is intentionally tied to the pinned Slidev version.
// Editorial sources and `dev:episode` continue to use ordinary Slidev Markdown.
export async function buildSharedPlayer(root: string, ids: string[], output: string, siteBase = '/') {
  const { resolveOptions, parser, createDataUtils, ViteSlidevPlugin } = await import('@slidev/cli')
  const { build } = await import('vite')
  const workspace = join(output, '../workspace')
  rmSync(workspace, { recursive: true, force: true })
  mkdirSync(workspace, { recursive: true })
  writeFileSync(join(workspace, 'slides.md'), '---\ntheme: academic\naddons: [slidev-addon-excalidraw]\ncolorSchema: light\nmdc: true\n---\n# Resonote\n')
  cpSync(join(root, 'episodes/_templates/style.css'), join(workspace, 'style.css'))
  const options = await resolveOptions({ entry: join(workspace, 'slides.md'), base: `${siteBase}player/`, routerMode: 'hash' }, 'build')
  if (JSON.parse(readFileSync(join(options.cliRoot, 'package.json'), 'utf8')).version !== '52.18.0')
    throw new Error('Review the shared player adapter before upgrading Slidev 52.18.0')
  const allSlides: typeof options.data.slides = []
  const episodes: { id: string; start: number; count: number; config: any; html: string; titles: string }[] = []
  const owners: string[] = []
  for (const id of ids) {
    const directory = join(root, 'episodes', id)
    try {
      // Custom build extensions need deliberate integration, not silent omission.
      const custom = readdirSync(directory).filter(name => /^(?:vite\.config\.|uno(?:css)?\.config\.|setup$|components$|layouts$)/.test(name))
      if (custom.length) throw new Error(`${id}: unsupported episode build extensions: ${custom.join(', ')}`)
      const entry = join(directory, 'slides.md')
      const source = withFullWidthTitles(readFileSync(entry, 'utf8')).replace(/(drawFilePath=["'])\.\/public\/([^"']+)(["'])/g,
        (match, before, name, after) => existsSync(join(directory, 'public', name)) ? `${before}./${name}${after}` : match)
      const loaded = await parser.load({ roots: options.roots, userRoot: directory, allowedRoots: [root, ...options.roots] }, entry,
        { [entry]: source }, 'build')
      const config = parser.resolveConfig(loaded.headmatter, options.data.themeMeta, entry)
      if (config.theme !== 'academic' || JSON.stringify(config.addons) !== JSON.stringify(options.data.config.addons))
        throw new Error(`${id}: shared player requires the site's academic theme and Excalidraw addon`)
      config.routerMode = 'hash'
      const utils = await createDataUtils({ ...options, entry, userRoot: directory, base: `${siteBase}episodes/${id}/`, data: { ...loaded, config, themeMeta: options.data.themeMeta } })
      const html = utils.indexHtml
      const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] || config.title
      // Slidev's generated title is HTML escaped. The browser supplies its decoded value.
      const start = allSlides.length
      for (const [index, slide] of loaded.slides.entries()) {
        slide.frontmatter = { ...(loaded.headmatter.defaults as Record<string, unknown>), ...slide.frontmatter }
        slide.frontmatter.layout ||= index === 0 ? 'cover' : 'default'
        allSlides.push(slide)
        owners.push(id)
      }
      Object.assign(options.data.markdownFiles, loaded.markdownFiles)
      for (const [feature, enabled] of Object.entries(loaded.features)) {
        if (enabled) (options.data.features as any)[feature] = enabled
      }
      const titles = join(workspace, `${id}-titles.md`)
      writeFileSync(titles, loaded.slides.map((slide, i) => `<template ${i ? 'v-else-if' : 'v-if'}="no === ${i + 1}">\n\n${slide.title}\n\n</template>`).join('\n') + `
  <script setup lang="ts">
  import { useSlideContext } from '@slidev/client/context.ts'
  import { computed } from 'vue'
  const props = defineProps<{ no?: number | string }>()
  const { $page } = useSlideContext()
  const no = computed(() => +(props.no ?? $page.value))
  </script>`)
      episodes.push({ id, start, count: loaded.slides.length, config: { ...config, slidesTitle: title }, html, titles })
    } catch (error) {
      throw new Error(`${directory}/slides.md: ${(error as Error).message}`, { cause: error })
    }
  }
  options.data.slides = allSlides
  options.data.headmatter.defaults = {}
  // Keep font utility rules shared while preserving each episode's font selection.
  for (const family of ['sans', 'serif', 'mono'] as const) options.data.config.fonts[family] = [`var(--resonote-font-${family})`]
  options.utils = await createDataUtils(options)
  const entryId = '/@resonote/entry'
  const stateId = '/@resonote/state'
  const episodePrefix = '/@resonote/episode/'
  const indexId = join(workspace, 'index.html')
  const contentModules = new Map(episodes.map(ep => [episodePrefix + ep.id, ep]))
  const plugins = await ViteSlidevPlugin(options)
  const flatPlugins = (plugins as any[]).flat(Infinity).filter(Boolean)
  const loader = flatPlugins.find(plugin => plugin.name === 'slidev:loader')
  const layout = flatPlugins.find(plugin => plugin.name === 'slidev:layout-wrapper')
  if (!loader || !layout?.transform?.handler) throw new Error('Unsupported Slidev plugin API; review the shared player adapter')
  const sharedConfig = options.data.config
  for (const ep of episodes) {
    options.data.config = ep.config
    ep.config = JSON.parse((await loader.load.call({ resolve() { throw new Error('Unexpected config import') } }, '/@slidev/configs')).code.replace(/^export default /, ''))
  }
  options.data.config = sharedConfig
  const layoutTransform = layout.transform.handler
  layout.transform.handler = async function (code: string, id: string) {
    const result = await layoutTransform.call(this, code, id)
    const index = Number(id.match(/__slidev_(\d+)\.md$/)?.[1]) - 1
    const episode = episodes.find(ep => index >= ep.start && index < ep.start + ep.count)
    return result && episode ? result.replace(`_frontmatterToProps($frontmatter,${index})`, `_frontmatterToProps($frontmatter,${index - episode.start})`) : result
  }
  const adapter: Plugin = {
    name: 'resonote-shared-player', enforce: 'pre' as const,
    resolveId: { order: 'pre' as const, handler(id: string) { if (id.startsWith('/@resonote/') || id === indexId) return id } },
    load: { order: 'pre' as const, handler(id: string) {
      if (id === indexId) return options.utils.indexHtml.replace(/(<script type="module" src=")[^"]+/, `$1${entryId}`)
      if (id === stateId) return `import { shallowRef } from 'vue'; export const slides = shallowRef([]); export const titleRenderer = shallowRef(null)`
      if (id === '/@slidev/slides') return `export { slides } from '${stateId}'`
      if (id === '/@slidev/configs') return `const config = JSON.parse(document.getElementById('resonote-episode').textContent).config; config.slidesTitle = document.title; export default config`
      if (id === '/@slidev/title-renderer') return `import { h } from 'vue'; import { titleRenderer } from '${stateId}'; export default { props: ['no'], setup: props => () => titleRenderer.value ? h(titleRenderer.value, props) : null }`
      if (id === entryId) return `
import { slides, titleRenderer } from '${stateId}'
import mount from '@slidev/client/main.ts'
const episode = JSON.parse(document.getElementById('resonote-episode').textContent)
const loaders = {${episodes.map(ep => `${JSON.stringify(ep.id)}: () => import('${episodePrefix + ep.id}')`).join(',')}}
async function start() {
  const content = await loaders[episode.id]()
  slides.value = content.slides
  titleRenderer.value = content.titleRenderer
  await mount()
}
start().catch(error => {
  console.error(error)
  const message = document.createElement('p')
  message.textContent = '内容加载失败，请刷新重试。'
  document.getElementById('app').append(message)
})`
      const ep = contentModules.get(id)
      if (ep) return [
        `export { default as titleRenderer } from ${JSON.stringify(ep.titles)}`,
        ...Array.from({ length: ep.count }, (_, i) => `import c${i} from '/@slidev/slides/${ep.start + i + 1}/md'; import { meta as m${i} } from '/@slidev/slides/${ep.start + i + 1}/frontmatter'; m${i}.slide.no = ${i + 1}; m${i}.slide.id = ${i}`),
        `export const slides = [${Array.from({ length: ep.count }, (_, i) => `{no:${i + 1},meta:m${i},component:c${i},load:async()=>({default:c${i}})}`).join(',')}]`,
      ].join('\n')
    } },
    transform: { order: 'pre' as const, handler(code: string, id: string) {
      // Fetch runtime and content concurrently, then mount once local routes exist.
      if (id.endsWith('/@slidev/client/main.ts')) {
        if (!/\nmain\(\)\s*$/.test(code)) throw new Error('Unsupported Slidev mount entry')
        return code.replace(/\nmain\(\)\s*$/, '\nexport default main\n')
      }
      // Static build asset base belongs to /player; navigation and content URLs
      // belong to the selected episode, including the Excalidraw addon.
      if ((id.includes('/@slidev/client/') || id.includes('/slidev-addon-excalidraw/')) && code.includes('import.meta.env.BASE_URL'))
        return code.replaceAll('import.meta.env.BASE_URL', `(JSON.parse(document.getElementById('resonote-episode').textContent).base)`)
    } },
    configResolved(config: any) {
      const output = config.build.rollupOptions.output
      const original = output.manualChunks
      const contentChunk = (id: string) => {
        const facade = id.match(/\/@slidev\/slides\/(\d+)\//)
        const source = id.match(/__slidev_(\d+)\.(?:md|frontmatter)/)
        const owner = owners[Number((facade || source)?.[1]) - 1]
        if (owner) return `episodes/${owner}`
        if (contentModules.has(id)) return `episodes/${contentModules.get(id)!.id}`
        const title = episodes.find(ep => id.split('?')[0] === ep.titles)
        if (title) return `episodes/${title.id}`
        return undefined
      }
      delete output.manualChunks
      output.strictExecutionOrder = true
      const runtimeKind = (id: string) => {
        if (id.startsWith('/@slidev/slides/')) return undefined
        if (id.includes('/@slidev/client/') || id.startsWith('/@slidev/')
          || id.includes('/slidev-theme-academic/') || id.includes('/slidev-addon-excalidraw/')
          || id === '\0vite/preload-helper.js' || id === '\0plugin-vue:export-helper')
          return /mermaid/i.test(id) ? 'player-mermaid' : 'player-runtime'
      }
      // Higher-priority runtime owns common dependencies. Mermaid must not
      // capture a shared helper and thereby load on every non-Mermaid episode.
      output.codeSplitting = { groups: [
        { name: contentChunk, includeDependenciesRecursively: false, priority: 10 },
        { name: 'player-state', test: (id: string) => [stateId, '/@slidev/slides', '/@slidev/configs', '/@slidev/title-renderer'].includes(id), includeDependenciesRecursively: false, priority: 5 },
        { name: original, includeDependenciesRecursively: true, priority: 3 },
        { name: 'player-runtime', test: (id: string) => runtimeKind(id) === 'player-runtime', includeDependenciesRecursively: true, priority: 2 },
        { name: 'player-mermaid', test: (id: string) => runtimeKind(id) === 'player-mermaid', includeDependenciesRecursively: true, priority: 1 },
      ] }

    },
    generateBundle(_options: any, bundle: any) {
      const chunks = Object.values(bundle).filter((chunk: any) => chunk.type === 'chunk') as any[]
      const manifest = chunks.map(chunk => ({ file: chunk.fileName, imports: chunk.imports, dynamicImports: chunk.dynamicImports, modules: Object.keys(chunk.modules) }))
      writeFileSync(join(output, '../chunks.json'), JSON.stringify(manifest, null, 2))
      const entry = chunks.find(chunk => Object.keys(chunk.modules).includes(entryId))!
      if (chunks.some(chunk => chunk.imports.includes(entry.fileName)))
        throw new Error('Shared runtime must not depend on the episode registry')
      const initial = new Set<string>()
      const visit = (file: string) => {
        if (initial.has(file)) return
        initial.add(file)
        chunks.find(chunk => chunk.fileName === file)?.imports.forEach(visit)
      }
      visit(entry.fileName)
      if (chunks.some(chunk => initial.has(chunk.fileName) && Object.keys(chunk.modules).some(id => id.includes('/node_modules/mermaid/') || id.includes('/builtin/Mermaid.vue'))))
        throw new Error('Mermaid must load only with episodes that use it')
      for (const ep of episodes) {
        const content = chunks.filter(chunk => Object.keys(chunk.modules).some(id => id === episodePrefix + ep.id))
        if (content.length !== 1) throw new Error(`Expected one content chunk for ${ep.id}`)
        if (!entry.dynamicImports.includes(content[0].fileName)) throw new Error(`Unexpected content facade: ${ep.id}`)
        if (content[0].imports.some((file: string) => file.includes('/episodes/'))) throw new Error(`Cross-episode content dependency: ${ep.id}`)
      }
      if (chunks.some(chunk => !chunk.fileName.includes('/episodes/') && chunk.imports.some((file: string) => file.includes('/episodes/'))))
        throw new Error('Shared runtime must not import episode content')
      this.emitFile({ type: 'asset', fileName: 'manifest.json', source: JSON.stringify({
        episodes: Object.fromEntries(episodes.map(ep => {
          const chunk = chunks.find(chunk => Object.keys(chunk.modules).includes(episodePrefix + ep.id))!
          return [ep.id, { slides: ep.count, file: chunk.fileName, css: [...(chunk.viteMetadata?.importedCss || [])] }]
        })),
        files: Object.keys(bundle),
      }, null, 2) })
    },
  }
  await build({ configFile: false, root: workspace, base: `${siteBase}player/`, plugins: [adapter, ...plugins],
    define: { __VUE_PROD_DEVTOOLS__: false },
    build: { outDir: join(output, 'player'), emptyOutDir: true, rollupOptions: { input: indexId }, chunkSizeWarningLimit: 2000 },
  })
  const sharedHtml = readFileSync(join(output, 'player/index.html'), 'utf8')
  const manifest = JSON.parse(readFileSync(join(output, 'player/manifest.json'), 'utf8'))
  const sharedTags = sharedHtml.match(/<(?:script\b[^>]*type="module"[^>]*><\/script|link\b[^>]*(?:rel="(?:stylesheet|modulepreload)")[^>]*)>/g)?.filter(tag => !tag.includes('https://')) || []
  for (const ep of episodes) {
    const directory = join(output, 'episodes', ep.id)
    mkdirSync(directory, { recursive: true })
    const publicDir = join(root, 'episodes', ep.id, 'public')
    if (existsSync(publicDir)) cpSync(publicDir, directory, { recursive: true })
    const json = JSON.stringify({ id: ep.id, base: `${siteBase}episodes/${ep.id}/`, config: ep.config }).replaceAll('<', '\\u003c')
    const fontStyles = ['sans', 'serif', 'mono'].map(family => `--resonote-font-${family}:${ep.config.fonts[family].join(',')}`).join(';')
    const content = manifest.episodes[ep.id]
    const contentTags = `<link rel="modulepreload" crossorigin href="${siteBase}player/${content.file}">`
      + content.css.map((file: string) => `<link rel="stylesheet" href="${siteBase}player/${file}">`).join('')
    const html = ep.html.replace(/<script type="module"[^>]*><\/script>/, '')
      .replace('</head>', `<script id="resonote-episode" type="application/json">${json}</script><style>:root{${fontStyles}}</style>\n${sharedTags.join('\n')}\n${contentTags}\n</head>`)
    writeFileSync(join(directory, 'index.html'), html)
  }
  rmSync(join(output, 'player/index.html'))
  return episodes.map(ep => ({ id: ep.id, path: join(output, 'episodes', ep.id) }))
}
