/** Met en minuscules et retire les accents pour comparer des textes en français. */
export function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

/**
 * Vrai si tous les mots de la requête figurent dans l’un des champs
 * (insensible à la casse et aux accents).
 */
export function matchesQuery(query: string, fields: Array<string | undefined>): boolean {
  const words = normalizeText(query).split(/\s+/).filter(Boolean)
  if (words.length === 0) return true
  const haystack = normalizeText(fields.filter(Boolean).join(' '))
  return words.every((word) => haystack.includes(word))
}
