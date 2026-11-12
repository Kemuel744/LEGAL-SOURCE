/**
 * Audit d'unicité des images.
 *
 * Règle : un fichier image de `src/assets/images` ne doit être utilisé que
 * pour UN SEUL contenu du site. Ce script analyse les imports `@/assets/...`
 * et compte le nombre de références réellement faites à chaque image dans le
 * code source.
 *
 * - Une image référencée plus d'une fois = doublon (erreur).
 * - Une image jamais référencée = fichier mort (erreur).
 * - Les logos (`src/assets/logos`) sont exclus de la règle d'unicité : ce sont
 *   des marques, réutilisées par nature dans l'en-tête et le pied de page.
 *
 * Usage :
 *   node scripts/check-image-usage.mjs          # échoue si violation
 *   node scripts/check-image-usage.mjs --report # affiche seulement le rapport
 */
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const ROOT = process.cwd()
const SRC = join(ROOT, 'src')
const IMAGES = join(SRC, 'assets', 'images')
const reportOnly = process.argv.includes('--report')

const IMAGE_EXT = /\.(webp|avif|jpe?g|png|gif|svg)$/i

const toPosix = (p) => p.split(sep).join('/')

const LOGOS = toPosix(join(SRC, 'assets', 'logos'))

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

/** Fichier image -> liste des { file, identifier, count } */
const usages = new Map()

const sourceFiles = walk(SRC).filter((file) => /\.(ts|tsx)$/.test(file))

const importRe = /import\s+([A-Za-z_$][\w$]*)\s+from\s+['"]@\/assets\/([^'"]+)['"]/g

/**
 * Retire commentaires et chaînes de caractères : les mots français présents
 * dans les textes (« gants », « formation »…) ne doivent pas être confondus
 * avec des identifiants de variables.
 */
function stripLiterals(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/[^\n]*/g, ' ')
    .replace(/'(?:\\.|[^'\\])*'/g, "''")
    .replace(/"(?:\\.|[^"\\])*"/g, '""')
    .replace(/`(?:\\.|[^`\\])*`/g, '``')
}


for (const file of sourceFiles) {
  const content = readFileSync(file, 'utf8')
  // Code sans littéraux ni lignes d'import : seules les vraies références restent.
  const code = stripLiterals(content)
    .split(/\r?\n/)
    .filter((line) => !/^\s*import\b/.test(line))
    .join('\n')
  let match
  while ((match = importRe.exec(content)) !== null) {
    const [, identifier, assetPath] = match
    const asset = toPosix(join(SRC, 'assets', assetPath))
    if (!IMAGE_EXT.test(asset)) continue

    const refRe = new RegExp(`\\b${identifier.replace(/[$]/g, '\\$')}\\b`, 'g')
    const count = (code.match(refRe) ?? []).length

    if (!usages.has(asset)) usages.set(asset, [])
    usages.get(asset).push({ file: toPosix(relative(ROOT, file)), identifier, count })
  }
}

const allImages = walk(join(SRC, 'assets'))
  .filter((file) => IMAGE_EXT.test(file))
  .map(toPosix)
const duplicates = []
const unused = []

/**
 * Réutilisation indirecte : affecter l'image d'un enregistrement à plusieurs
 * autres enregistrements (`image: family.image`) multiplie la même photo sans
 * qu'aucun import supplémentaire n'apparaisse.
 */
const propagation = []
for (const file of sourceFiles) {
  const code = stripLiterals(readFileSync(file, 'utf8'))
  const re = /\b(?:image|imageAlt)\s*:\s*[A-Za-z_$][\w$]*\.(?:image|imageAlt)\b/g
  let found
  while ((found = re.exec(code)) !== null) {
    const line = code.slice(0, found.index).split('\n').length
    propagation.push({ file: toPosix(relative(ROOT, file)), line, snippet: found[0] })
  }
}

for (const asset of allImages) {
  const isLogo = asset.startsWith(LOGOS)
  const entries = usages.get(asset) ?? []
  const total = entries.reduce((sum, entry) => sum + entry.count, 0)
  const label = toPosix(relative(ROOT, asset))

  if (total === 0) {
    unused.push(label)
    continue
  }
  if (!isLogo && total > 1) {
    duplicates.push({ label, total, entries: entries.filter((entry) => entry.count > 0) })
  }
}

const okCount = allImages.length - duplicates.length - unused.length

console.log(`\nAudit des images — ${allImages.length} fichiers, ${okCount} conformes`)
console.log(`  Doublons : ${duplicates.length}`)
console.log(`  Réutilisation indirecte : ${propagation.length}`)
console.log(`  Inutilisées : ${unused.length}\n`)

if (duplicates.length > 0) {
  console.log('DOUBLONS (une image doit illustrer un seul contenu) :')
  for (const dup of duplicates.sort((a, b) => b.total - a.total)) {
    console.log(`  ×${dup.total}  ${dup.label}`)
    for (const entry of dup.entries) {
      console.log(`        ${entry.file} (${entry.identifier} ×${entry.count})`)
    }
  }
  console.log('')
}

if (unused.length > 0) {
  console.log('FICHIERS MORTS (jamais utilisés) :')
  for (const file of unused) console.log(`  -  ${file}`)
  console.log('')
}

if (propagation.length > 0) {
  console.log('RÉUTILISATION INDIRECTE (image d’un enregistrement recopiée sur d’autres) :')
  for (const item of propagation) console.log(`  ${item.file}:${item.line}  ${item.snippet}`)
  console.log('')
}

const failed = duplicates.length > 0 || unused.length > 0 || propagation.length > 0
if (failed && !reportOnly) {
  console.error(
    'Échec : corrigez les doublons, la réutilisation indirecte ou supprimez les fichiers morts.\n',
  )
  process.exit(1)
}

if (!failed) console.log('Aucune image n’est utilisée deux fois. ✅\n')
