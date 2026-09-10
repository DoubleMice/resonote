import { createHash } from 'node:crypto'
import { createRequire } from 'node:module'
import { parse } from 'yaml'

export function staticDiagramMode(source: string): boolean {
  const header = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  return !!header && parse(header[1])?.diagramMode === 'static'
}

// Skip complete non-Mermaid fences, including examples containing shorter fences.
export function mermaidFences(source: string, plain = true) {
  const result: { start: number; end: number; code: string; line: number }[] = []
  const opening = /^ {0,3}(`{3,}|~{3,})([^\n\r]*)\r?\n/gm
  let match: RegExpExecArray | null
  while ((match = opening.exec(source))) {
    const marker = match[1]
    const closing = new RegExp(`^ {0,3}${marker[0]}{${marker.length},}[ \\t]*\\r?$`, 'gm')
    closing.lastIndex = opening.lastIndex
    const end = closing.exec(source)
    const info = match[2].trim()
    if (!end) {
      if (/^mermaid\b/.test(info)) throw new Error('unclosed Mermaid fence')
      break
    }
    if (/^mermaid\b/.test(info)) {
      if (plain && info !== 'mermaid') throw new Error('static Mermaid uses a plain ```mermaid fence; put sizing in the surrounding rn-note container')
      result.push({ start: match.index, end: closing.lastIndex, code: source.slice(opening.lastIndex, end.index).trim(), line: source.slice(0, match.index).split('\n').length })
    }
    opening.lastIndex = closing.lastIndex
  }
  return result
}

/** One lazy, local renderer per build. Authored Markdown stays editable. */
export function createStaticDiagramRenderer() {
  let session: Promise<{ page: import('playwright-chromium').Page; close: () => Promise<void> }> | undefined
  const cache = new Map<string, string>()
  async function start() {
    const { createServer } = await import('vite')
    const { chromium } = await import('playwright-chromium')
    const fromCli = createRequire(createRequire(__filename).resolve('@slidev/cli/package.json'))
    const fromClient = createRequire(fromCli.resolve('@slidev/client/package.json'))
    const modulePath = fromClient.resolve('mermaid/dist/mermaid.esm.min.mjs')
    // Vite's dev server sets NODE_ENV. Do not leak it into the publication build.
    const nodeEnv = process.env.NODE_ENV
    let server: Awaited<ReturnType<typeof createServer>> | undefined
    try {
      server = await createServer({ configFile: false, logLevel: 'error', server: { host: '127.0.0.1', port: 0 } })
      await server.listen()
    } catch (error) { await server?.close(); throw error }
    finally {
      if (nodeEnv === undefined) delete process.env.NODE_ENV
      else process.env.NODE_ENV = nodeEnv
    }
    let browser: Awaited<ReturnType<typeof chromium.launch>> | undefined
    try {
      browser = await chromium.launch()
      const page = await browser.newPage()
      const origin = new URL(server.resolvedUrls!.local[0]).origin
      await page.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort())
      await page.goto(origin)
      await page.evaluate(async path => {
        const { default: mermaid } = await import(/* @vite-ignore */ '/@fs/' + path)
        ;(window as any).renderNoteDiagram = async (id: string, code: string) => {
          mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', htmlLabels: false, theme: 'base', themeVariables: {
            fontFamily: 'PingFang SC, Microsoft YaHei, Noto Sans CJK SC, sans-serif', fontSize: '20px', primaryColor: '#fffdf8', primaryTextColor: '#26322f', primaryBorderColor: '#557461', lineColor: '#68736f',
          }, flowchart: { curve: 'linear', nodeSpacing: 22, rankSpacing: 30, padding: 16 } })
          const { svg } = await mermaid.render(id, code)
          const node = new DOMParser().parseFromString(svg, 'image/svg+xml')
          if (node.querySelector('parsererror, script, foreignObject, image')) throw new Error('static diagram must contain only vector shapes and text')
          for (const el of node.querySelectorAll('*')) for (const attr of el.attributes) {
            if (/^on/i.test(attr.name) || /(?:^|:)href$/.test(attr.name) && !attr.value.startsWith('#')) throw new Error('unsupported SVG resource or event attribute')
          }
          if (/@import|url\(\s*['"]?(?!#)[^)]/i.test(svg)) throw new Error('static diagram cannot reference external resources')
          return svg
        }
      }, modulePath)
      return { page, close: async () => { await browser!.close(); await server.close() } }
    } catch (error) { await browser?.close(); await server.close(); throw error }
  }
  return {
    async transform(source: string, file: string) {
      if (!staticDiagramMode(source)) return source
      let result = source
      for (const fence of mermaidFences(source).reverse()) {
        try {
          if (!fence.code || /%%\s*\{|^---/m.test(fence.code)) throw new Error('empty diagrams and per-diagram configuration overrides are not supported')
          // File and offset keep IDs unique even for identical diagrams on different slides.
          const key = createHash('sha256').update(file + ':' + fence.start + ':' + fence.code).digest('hex').slice(0, 20)
          let svg = cache.get(key)
          if (!svg) {
            const { page } = await (session ||= start())
            svg = await page.evaluate(({ key, code }) => (window as any).renderNoteDiagram('rn-' + key, code), { key, code: fence.code }) as string
            cache.set(key, svg)
          }
          // A data image isolates SVG CSS and Vue interpolation; URL encoding compresses better than base64.
          const image = `<img data-static-diagram alt="关系图" src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}" />`
          result = result.slice(0, fence.start) + image + result.slice(fence.end)
        } catch (error) { throw new Error(`${file}:${fence.line}: ${(error as Error).message}`, { cause: error }) }
      }
      return result
    },
    async close() { if (session) await (await session.catch(() => undefined))?.close() },
  }
}
