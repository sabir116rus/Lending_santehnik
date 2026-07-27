import http from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { createReadStream } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, 'dist')
const port = Number(process.env.PORT || 3007)
const host = process.env.HOST || '127.0.0.1'

const sendModule = await import(pathToFileURL(path.join(__dirname, 'api', 'send.js')).href)
const sendHandler = sendModule.default
const lunaraOrigin = process.env.LUNARA_ORIGIN || 'http://127.0.0.1:8000'

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
}

function createApiResponse(res) {
  return {
    setHeader: (name, value) => res.setHeader(name, value),
    status(code) {
      res.statusCode = code
      return this
    },
    json(payload) {
      if (!res.headersSent) res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(payload))
    },
  }
}

async function readJsonBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  if (!chunks.length) return {}
  const raw = Buffer.concat(chunks).toString('utf8')
  return JSON.parse(raw)
}

async function serveStatic(req, res) {
  const url = new URL(req.url || '/', 'http://localhost')
  let pathname = decodeURIComponent(url.pathname)
  if (pathname === '/') pathname = '/index.html'

  let filePath = path.normalize(path.join(distDir, pathname))
  if (!filePath.startsWith(distDir)) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  try {
    const info = await stat(filePath)
    if (!info.isFile()) throw new Error('not a file')
  } catch {
    filePath = path.join(distDir, 'index.html')
  }

  const ext = path.extname(filePath).toLowerCase()
  res.setHeader('Content-Type', mime[ext] || 'application/octet-stream')
  if (filePath.includes(`${path.sep}assets${path.sep}`)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
  } else {
    res.setHeader('Cache-Control', 'public, max-age=300')
  }
  createReadStream(filePath).pipe(res)
}

async function proxyToLunara(req, res) {
  const sourceUrl = new URL(req.url || '/', 'http://localhost')
  let targetPath = sourceUrl.pathname

  if (targetPath === '/lunara' || targetPath === '/lunara/') {
    targetPath = '/miniapp/shuffle'
  } else if (targetPath.startsWith('/lunara/')) {
    targetPath = targetPath.slice('/lunara'.length)
  }

  const targetUrl = new URL(targetPath + sourceUrl.search, lunaraOrigin)
  const response = await fetch(targetUrl, { method: req.method, redirect: 'manual' })
  res.writeHead(response.status, Object.fromEntries(response.headers.entries()))
  res.end(Buffer.from(await response.arrayBuffer()))
}

const server = http.createServer(async (req, res) => {
  try {
    if ((req.url || '').startsWith('/lunara') || (req.url || '').startsWith('/static/miniapp/')) {
      await proxyToLunara(req, res)
      return
    }

    if ((req.url || '').startsWith('/api/send')) {
      req.body = await readJsonBody(req)
      await sendHandler(req, createApiResponse(res))
      return
    }
    await serveStatic(req, res)
  } catch (error) {
    console.error(error)
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' })
      res.end(JSON.stringify({ error: 'Internal Server Error' }))
    }
  }
})

server.listen(port, host, () => {
  console.log(`Lending_santehnik listening on http://${host}:${port}`)
})
