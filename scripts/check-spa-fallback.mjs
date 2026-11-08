/**
 * Vérifie le fallback SPA généré dans `dist/` :
 * 404.html encode le chemin, puis le script de index.html le restaure.
 * Le build échoue si un deep-link n'est pas correctement reconstruit.
 */
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

function extractScript(file, needle) {
  const html = readFileSync(file, 'utf8')
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1])
  const script = scripts.find((content) => content.includes(needle))
  assert.ok(script, `Script introuvable dans ${file}`)
  return script
}

const notFoundScript = extractScript('dist/404.html', 'pathSegmentsToKeep')
const indexScript = extractScript('dist/index.html', 'replaceState')

function redirectFromNotFound(pathname) {
  let redirected = ''
  const location = {
    protocol: 'https:',
    hostname: 'example.test',
    port: '',
    pathname,
    search: '',
    hash: '',
    replace(url) {
      redirected = url
    },
  }
  new Function('window', notFoundScript)({ location })
  return redirected
}

function restoreFromIndex(redirected) {
  let final = ''
  const url = new URL(redirected)
  const location = { pathname: url.pathname, search: url.search, hash: url.hash }
  new Function('window', indexScript)({
    location,
    history: {
      replaceState(_state, _title, value) {
        final = value
      },
    },
  })
  return final
}

const cases = [
  '/LOCAL-SOURCES/boutique/casque-de-securite',
  '/LOCAL-SOURCES/actualites/iso-45001-les-fondamentaux',
  '/LOCAL-SOURCES/services',
  '/LOCAL-SOURCES/',
]

for (const path of cases) {
  const redirected = redirectFromNotFound(path)
  const restored = restoreFromIndex(redirected)
  assert.equal(restored, path, `Deep-link mal restauré : ${path} → ${restored}`)
}

console.log(`[check] fallback SPA valide (${cases.length} deep-links testés)`)
