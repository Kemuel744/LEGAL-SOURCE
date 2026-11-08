/**
 * Configuration centrale du site LEGAL SOURCE.
 *
 * Coordonnées validées par LEGAL SOURCE (8 novembre 2026).
 * Les éventuelles évolutions sont à suivre dans docs/CONTENUS-A-CONFIRMER.md.
 *
 * Pour changer de numéro WhatsApp, ne modifier QUE `whatsapp.number`
 * (format international, sans +, sans espaces ni tirets).
 */
/** Origine publique du site (sans slash final), pilotée par `.env`. */
const siteOrigin = (import.meta.env.VITE_SITE_URL || 'https://kemuel744.github.io').replace(
  /\/$/,
  '',
)

/** Chemin de base du déploiement (sans slash final), fourni par Vite. */
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

export const site = {
  name: 'LEGAL SOURCE',
  legalName: 'LEGAL SOURCE',
  tagline: 'Votre partenaire pour une performance durable',
  baseline: 'Consulting • Management • Certification QHSE',
  description:
    "Cabinet de conseil et de formation, LEGAL SOURCE accompagne les organisations dans la gestion de leurs risques, le renforcement de leurs compétences et la mise en conformité aux standards internationaux.",
  /** Origine du déploiement (ex. https://kemuel744.github.io). */
  url: siteOrigin,
  /** Chemin de base (ex. /LOCAL-SOURCES ou chaîne vide à la racine). */
  basePath,
  /** URL absolue de la racine du site, avec slash final. */
  get absoluteUrl() {
    return `${siteOrigin}${basePath}/`
  },
  email: 'contact@legal-source.com',
  phone: {
    display: '+242 06 123 45 67',
    href: '+242061234567',
  },
  whatsapp: {
    number: '242061234567',
    display: '+242 06 123 45 67',
  },
  address: {
    line: 'Brazzaville',
    country: 'Congo',
    full: 'Brazzaville, Congo',
    region: 'Congo – Afrique – International',
    /** Adresse physique précise à confirmer. */
    street: null as string | null,
  },
  /**
   * Aucune URL de réseau social n’a été fournie.
   * Les icônes ne sont affichées que lorsqu’une URL est renseignée
   * (aucun lien fictif n’est rendu).
   */
  socials: [] as { label: string; href: string }[],
  /** Numéro utilisé pour les appels et messages (source unique). */
  get phoneHref() {
    return `tel:${this.phone.href}`
  },
  get emailHref() {
    return `mailto:${this.email}`
  },
}

export type NavChild = {
  label: string
  to: string
}

export type NavItem = {
  label: string
  to: string
  children?: NavChild[]
}

export const navigation: NavItem[] = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  {
    label: 'Nos activités',
    to: '/activites',
    children: [
      { label: "Domaines d’intervention", to: '/activites' },
      { label: 'Nos services', to: '/services' },
      { label: 'Projets & réalisations', to: '/projets' },
    ],
  },
  {
    label: 'Nos formations',
    to: '/formations',
    children: [
      { label: 'Catalogue des formations', to: '/formations' },
      { label: 'Boutique EPI & Kits', to: '/boutique' },
    ],
  },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Contact', to: '/contact' },
]
