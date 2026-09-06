import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, resolve, sep } from 'node:path'

const contentTypes: Record<string, string> = {
  '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.excalidraw': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2',
}

// Browser audits must use HTTP: file:// silently blocks built module scripts.
export async function startStaticServer(directory: string, base = '/', fallback?: Buffer) {
  const root = resolve(directory)
  const siteBase = `/${base.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/')
  const server = createServer((request, response) => {
    let pathname: string
    try { pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname) }
    catch { response.writeHead(400); response.end(); return }
    if (!pathname.startsWith(siteBase)) { response.writeHead(404); response.end(); return }
    let file = resolve(root, pathname.slice(siteBase.length))
    if (file !== root && !file.startsWith(`${root}${sep}`)) { response.writeHead(403); response.end(); return }
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
    if (!existsSync(file) || !statSync(file).isFile()) {
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
      response.end(fallback)
      return
    }
    response.writeHead(200, { 'Content-Type': contentTypes[extname(file)] || 'application/octet-stream' })
    createReadStream(file).on('error', () => response.destroy()).pipe(response)
  })
  await new Promise<void>((ready, reject) => {
    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => { server.off('error', reject); ready() })
  })
  const address = server.address()
  if (!address || typeof address === 'string') throw new Error('failed to start audit server')
  const origin = `http://127.0.0.1:${address.port}`
  return { server, origin, url: `${origin}${siteBase}` }
}
