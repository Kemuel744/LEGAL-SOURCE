/**
 * Génère les fichiers SEO et le fallback SPA dans `dist/` après le build Vite :
 * - 404.html : restauration des deep-links sur GitHub Pages ;
 * - robots.txt ;
 * - sitemap.xml.
 *
 * Les URL sont dérivées de `.env` (VITE_SITE_URL / VITE_BASE_PATH) afin de ne
 * jamais coder en dur un domaine ou un chemin de déploiement.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { loadEnv } from 'vite'

const env = loadEnv('production', process.cwd(), '')
const origin = (env.VITE_SITE_URL || 'https://kemuel744.github.io').replace(/\/$/, '')

let base = env.VITE_BASE_PATH || '/'
if (!base.startsWith('/')) base = `/${base}`
if (!base.endsWith('/')) base = `${base}/`

const distDir = 'dist'
if (!existsSync(distDir)) {
  throw new Error('Le dossier dist/ est introuvable : lancez `vite build` avant ce script.')
}

const today = new Date().toISOString().slice(0, 10)

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/a-propos', priority: '0.7', changefreq: 'yearly' },
  { path: '/activites', priority: '0.9', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/formations', priority: '0.9', changefreq: 'monthly' },
  { path: '/boutique', priority: '0.9', changefreq: 'weekly' },
  { path: '/projets', priority: '0.8', changefreq: 'monthly' },
  { path: '/actualites', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'yearly' },
  { path: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
  { path: '/politique-de-confidentialite', priority: '0.3', changefreq: 'yearly' },
  { path: '/conditions-generales', priority: '0.3', changefreq: 'yearly' },
]

/** Extrait les slugs d'un fichier de données TypeScript (`slug: '...'`). */
function extractSlugs(filePath) {
  const source = readFileSync(filePath, 'utf8')
  return [...source.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((match) => match[1])
}

const productSlugs = extractSlugs('src/data/products.ts')
const newsSlugs = extractSlugs('src/data/news.ts')

const entries = [
  ...staticRoutes,
  ...productSlugs.map((slug) => ({
    path: `/boutique/${slug}`,
    priority: '0.6',
    changefreq: 'monthly',
  })),
  ...newsSlugs.map((slug) => ({
    path: `/actualites/${slug}`,
    priority: '0.6',
    changefreq: 'yearly',
  })),
]

const locFor = (path) => `${origin}${base}${path === '/' ? '' : path.replace(/^\//, '')}`

// ---------------------------------------------------------------------------
// 404.html — fallback GitHub Pages (script officiel spa-github-pages)
// ---------------------------------------------------------------------------
const pathSegmentsToKeep = base.split('/').filter(Boolean).length
const notFoundHtml = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>LEGAL SOURCE — Redirection…</title>
    <script>
      // GitHub Pages SPA fallback : encode le chemin demandé dans la query string.
      var pathSegmentsToKeep = ${pathSegmentsToKeep};
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body></body>
</html>
`
writeFileSync(`${distDir}/404.html`, notFoundHtml, 'utf8')

// ---------------------------------------------------------------------------
// robots.txt
// ---------------------------------------------------------------------------
writeFileSync(
  `${distDir}/robots.txt`,
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}${base}sitemap.xml\n`,
  'utf8',
)

// ---------------------------------------------------------------------------
// sitemap.xml
// ---------------------------------------------------------------------------
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${locFor(entry.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
writeFileSync(`${distDir}/sitemap.xml`, sitemap, 'utf8')

console.log(
  `[seo] 404.html, robots.txt et sitemap.xml générés (${entries.length} URL) pour ${origin}${base}`,
)
