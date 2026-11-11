/** Modèles de données partagés — prêts pour un futur backend / API. */

export type IconName =
  | 'graduation'
  | 'clipboard'
  | 'users'
  | 'leaf'
  | 'energy'
  | 'handshake'
  | 'sprout'
  | 'badge'
  | 'epi'
  | 'basket'
  | 'shield'
  | 'target'
  | 'trending'
  | 'award'
  | 'globe'
  | 'lightbulb'
  | 'scale'
  | 'building'
  | 'coaching'
  | 'settings'

export interface Activity {
  /** Identifiant stable (utilisé comme ancre et clé de données). */
  id: string
  title: string
  shortDescription: string
  description: string
  image: string
  imageAlt: string
  icon: IconName
  /** Classe de teinte de la carte (identité du template). */
  tone: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal' | 'sky' | 'lime'
  /** Service associé pour l’appel à l’action. */
  serviceSlug: string
}

export interface Service {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  objectives: string[]
  benefits: string[]
  icon: IconName
}

/** Niveau indicatif d’une formation, repris du catalogue source. */
export type TrainingLevel = 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Tous niveaux'

/**
 * Catalogue thématique : regroupe les formations d’une même famille
 * (NEBOSH, IOSH, ISEP, ISO, etc.).
 */
export interface TrainingFamily {
  id: string
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  icon: IconName
  /** Ordre d’affichage dans le catalogue général. */
  order: number
  /** Texte commun de modalités, surchargeable formation par formation. */
  modalities: string[]
  /** Prérequis communs à la famille. */
  prerequisites: string
  /** Modalités d’évaluation communes à la famille. */
  assessment: string
}

export interface Training {
  id: string
  slug: string
  title: string
  /** Identifiant de la famille / du catalogue thématique. */
  familySlug: string
  category: string
  level: TrainingLevel
  /** Nombre de leçons issu du catalogue source, lorsqu’il est renseigné. */
  lessons: number | null
  description: string
  objectives: string[]
  audience: string[]
  program: string[]
  modalities: string[]
  prerequisites: string
  assessment: string
  image: string
  imageAlt: string
  icon: IconName
  featured?: boolean
}

/** Organisme partenaire de LEGAL SOURCE. */
export interface Partner {
  id: string
  name: string
  role: string
  description: string
  /** Logo optionnel de l’organisme. */
  logo?: string
  /** Accréditations reconnues de l’organisme (logos). */
  accreditations?: Array<{ name: string; logo: string }>
}

/** Membre de l’équipe ou réseau de partenaires. */
export interface TeamMember {
  id: string
  name: string
  role: string
  group: 'direction' | 'réseau' | 'formateurs' | 'partenaires'
  /** Portrait optionnel (sinon les initiales sont affichées). */
  image?: string
}

export type ProductCategory =
  | 'epi'
  | 'kits-agricoles'
  | 'kits-hygiene'
  | 'kits-secours'
  | 'kits-nettoyage'

export type Availability = 'en-stock' | 'sur-commande'

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  description: string
  longDescription: string
  /** Prix en francs CFA, lorsqu’il est communiqué. */
  price: number | null
  availability: Availability
  image: string
  imageAlt: string
  badge?: string
  featured?: boolean
  /** Caractéristiques indicatives, reprises du template. */
  features: string[]
}

export interface Project {
  id: string
  slug: string
  title: string
  sector: string
  context: string
  objectives: string[]
  interventions: string[]
  results: string[]
  image: string
  imageAlt: string
}

export interface NewsPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  /** Date ISO uniquement lorsque la publication est datée. */
  date?: string
  displayDate: string
  image?: string
  imageAlt?: string
  body: string[]
}

export interface SiteStat {
  value: string
  label: string
}

/** Libellés des catégories produits. */
export const productCategories: { id: ProductCategory; label: string }[] = [
  { id: 'epi', label: 'EPI' },
  { id: 'kits-agricoles', label: 'Kits agricoles' },
  { id: 'kits-hygiene', label: "Kits d’hygiène" },
  { id: 'kits-secours', label: 'Premiers secours' },
  { id: 'kits-nettoyage', label: 'Kits de nettoyage' },
]
