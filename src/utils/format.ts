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
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}

/** Concatène des classes conditionnelles. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
