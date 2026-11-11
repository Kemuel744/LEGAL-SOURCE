const priceFormatter = new Intl.NumberFormat('fr-FR', {
  maximumFractionDigits: 0,
})

/** Formate un prix en francs CFA. Retourne null si le prix n’est pas communiqué. */
export function formatPrice(price: number | null): string | null {
  if (price === null) return null
  return `${priceFormatter.format(price)} FCFA`
}

/** Formate une date ISO en français (ex. « 5 novembre 2026 »). */
export function formatDate(iso: string): string {
  // Une date seule (AAAA-MM-JJ) est interprétée à midi local pour éviter
  // le décalage d’un jour dans les fuseaux négatifs.
  const date = /^\d{4}-\d{2}-\d{2}$/.test(iso) ? new Date(`${iso}T12:00:00`) : new Date(iso)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

/** Concatène des classes conditionnelles. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
