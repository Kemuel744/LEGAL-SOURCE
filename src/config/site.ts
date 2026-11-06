/**
 * Configuration centrale du site LEGAL SOURCE.
 *
 * ⚠️ COORDONNÉES PROVISOIRES
 * Les coordonnées ci-dessous sont reprises des templates graphiques fournis.
 * Elles doivent être confirmées par LEGAL SOURCE avant la mise en production.
 * Voir docs/CONTENUS-A-CONFIRMER.md.
 *
 * Pour changer de numéro WhatsApp, ne modifier QUE `whatsapp.number`
 * (format international, sans +, sans espaces ni tirets).
 */
export const site = {
  name: 'LEGAL SOURCE',
  legalName: 'LEGAL SOURCE',
  tagline: 'Votre partenaire pour une performance durable',
  baseline: 'Consulting • Management • Certification QHSE',
  description:
    "Cabinet de conseil et de formation, LEGAL SOURCE accompagne les organisations dans la gestion de leurs risques, le renforcement de leurs compétences et la mise en conformité aux standards internationaux.",
  url: 'https://www.legal-source.com', // À confirmer (nom de domaine)
  email: 'contact@legal-source.com',
  phone: {
    display: '+242 06 123 45 67',
    href: '+242061234567',
  },
  whatsapp: {
    number: '242061234567', // ⚠️ provisoire — à confirmer
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
