import { legalPageOrder, legalPages } from '@/data/legal'

export type SiteLink = {
  label: string
  to: string
}

/**
 * Source unique des liens de navigation réutilisés dans le pied de page,
 * les pages légales et les blocs de raccourcis.
 */
export const quickLinks: SiteLink[] = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Nos activités', to: '/activites' },
  { label: 'Nos services', to: '/services' },
  { label: 'Nos formations', to: '/formations' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Contact', to: '/contact' },
]

export const domainLinks: SiteLink[] = [
  { label: 'QHSE', to: '/activites#audits-certification' },
  { label: 'Environnement', to: '/activites#hygiene-environnement' },
  { label: 'Sécurité alimentaire', to: '/activites#securite-alimentaire' },
  { label: 'RSE & ESG', to: '/activites#rse-esg' },
  { label: 'Développement durable', to: '/activites#energies-durables' },
  { label: 'Boutique EPI & Kits', to: '/boutique' },
]

/** Déduit des contenus légaux : ajouter une page met à jour tous les liens. */
export const legalLinks: SiteLink[] = legalPageOrder.map((key) => ({
  label: legalPages[key].title,
  to: legalPages[key].path,
}))
