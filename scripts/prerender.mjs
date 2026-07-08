/**
 * Build-time prerender: injects the server-rendered App HTML into dist/index.html
 * so crawlers (including non-JS AI bots like GPTBot/PerplexityBot) receive real
 * content instead of an empty <div id="root">.
 *
 * Runs after: vite build (client) + vite build --ssr (server bundle).
 */
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = resolve(root, 'dist/index.html')
const serverEntry = resolve(root, 'dist/server/entry-server.js')

const { render } = await import(serverEntry.startsWith('/') ? serverEntry : `file://${serverEntry.replace(/\\/g, '/')}`)
const appHtml = render()

const template = readFileSync(indexPath, 'utf-8')
const marker = '<div id="root"></div>'

if (!template.includes(marker)) {
  console.error('prerender: could not find <div id="root"></div> in dist/index.html — aborting without changes')
  process.exit(1)
}

writeFileSync(indexPath, template.replace(marker, `<div id="root">${appHtml}</div>`))

// The SSR bundle is a build artifact only — keep it out of the deploy output.
rmSync(resolve(root, 'dist/server'), { recursive: true, force: true })

const kb = Math.round(appHtml.length / 1024)
console.log(`prerender: injected ${kb} KB of static HTML into dist/index.html`)
