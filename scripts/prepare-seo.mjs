import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { domains } from '../src/data/curriculum.js'
import { roadmaps } from '../src/data/roadmaps.js'

const raw = process.env.VITE_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || ''
const site = raw ? (raw.startsWith('http') ? raw : `https://${raw}`).replace(/\/$/, '') : ''
const indexPath = resolve('index.html')
let index = readFileSync(indexPath, 'utf8').replace(/\s*<link rel="canonical"[^>]*>/g, '')
if (site) index = index.replace('</head>', `    <link rel="canonical" href="${site}/" />\n  </head>`)
writeFileSync(indexPath, index)

writeFileSync(resolve('public/robots.txt'), `User-agent: *\nAllow: /\n${site ? `Sitemap: ${site}/sitemap.xml\n` : ''}`)

const routes = [
  '/',
  ...domains.map(domain => `/discipline/${domain.id}`),
  ...roadmaps.slice(0, 2).map(track => `/${track.id}`),
  '/projects',
  '/about', '/credits', '/contact', '/privacy', '/terms', '/cookies', '/data-deletion',
]
const urls = site ? routes.map(route => `  <url><loc>${site}${route}</loc></url>`).join('\n') : ''
writeFileSync(resolve('public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)

if (site) console.log(`SEO: canonical URL and sitemap prepared for ${site}`)
else console.warn('SEO: set VITE_SITE_URL to your production domain to publish canonical URLs and sitemap entries.')
