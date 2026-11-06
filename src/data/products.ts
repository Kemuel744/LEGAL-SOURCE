import type { Product } from '@/types'

import casque from '@/assets/images/products/casque-securite.jpg'
import gilet from '@/assets/images/products/gilet-visibilite.jpg'
import chaussures from '@/assets/images/products/chaussures-securite.jpg'
import gants from '@/assets/images/products/gants-protection.jpg'
import masque from '@/assets/images/products/masque-respiratoire.jpg'
import antibruit from '@/assets/images/products/casque-antibruit.jpg'
import lunettes from '@/assets/images/products/lunettes-securite.jpg'
import kitAgricole from '@/assets/images/products/kit-agricole.jpg'
import kitHygiene from '@/assets/images/products/kit-hygiene.jpg'
import kitSecours from '@/assets/images/products/kit-premiers-secours.jpg'
import kitNettoyage from '@/assets/images/products/kit-nettoyage.jpg'

/**
 * Catalogue provisoire — produits, prix et mentions repris du template
 * officiel de la boutique. Aucun produit ni prix n’a été inventé.
 * Les fiches complètes et les stocks définitifs restent à confirmer.
 */
export const products: Product[] = [
  {
    id: 'casque-securite',
    slug: 'casque-de-securite',
    name: 'Casque de sécurité',
    category: 'epi',
    description:
      'Protection de la tête contre les chocs et les chutes d’objets. Conforme aux normes EN 397.',
    longDescription:
      'Le casque de sécurité protège la tête contre les chocs et les chutes d’objets sur les chantiers et en milieu industriel. Sa coque rigide et son système de réglage assurent un maintien stable tout au long de la journée. Modèle conforme à la norme EN 397.',
    price: 12500,
    availability: 'en-stock',
    image: casque,
    imageAlt: 'Casque de sécurité jaune avec logo LEGAL SOURCE',
    badge: 'Nouveau',
    featured: true,
    features: ['Conforme EN 397', 'Réglage ajustable', 'Usage chantier et industrie'],
  },
  {
    id: 'gilet-visibilite',
    slug: 'gilet-haute-visibilite',
    name: 'Gilet haute visibilité',
    category: 'epi',
    description:
      'Une visibilité optimale dans toutes les conditions. Conforme EN ISO 20471.',
    longDescription:
      'Le gilet haute visibilité rend les intervenants immédiatement repérables, de jour comme de nuit. Ses bandes réfléchissantes et sa couleur fluorescente répondent aux exigences de la norme EN ISO 20471.',
    price: 8500,
    availability: 'en-stock',
    image: gilet,
    imageAlt: 'Gilet de haute visibilité jaune fluo avec bandes réfléchissantes',
    featured: true,
    features: ['Conforme EN ISO 20471', 'Bandes réfléchissantes', 'Fermeture pratique'],
  },
  {
    id: 'chaussures-securite',
    slug: 'chaussures-de-securite',
    name: 'Chaussures de sécurité',
    category: 'epi',
    description:
      'Semelle anti-perforation, embout acier. Idéales pour les environnements à risques.',
    longDescription:
      'Conçues pour les environnements à risques, ces chaussures de sécurité associent un embout de protection en acier à une semelle anti-perforation. Elles offrent un bon maintien et un confort adapté aux longues journées de travail.',
    price: 28000,
    availability: 'en-stock',
    image: chaussures,
    imageAlt: 'Paire de chaussures de sécurité noires à embout de protection',
    features: ['Embout de protection', 'Semelle anti-perforation', 'Maintien et confort'],
  },
  {
    id: 'gants-protection',
    slug: 'gants-de-protection',
    name: 'Gants de protection',
    category: 'epi',
    description:
      'Résistants aux coupures, à l’abrasion et aux produits chimiques.',
    longDescription:
      'Ces gants de protection offrent une résistance appréciable aux coupures, à l’abrasion et aux produits chimiques. Leur conception favorise la préhension tout en protégeant les mains lors des manipulations à risque.',
    price: 5500,
    availability: 'en-stock',
    image: gants,
    imageAlt: 'Paire de gants de protection noirs et orange',
    featured: true,
    features: ['Résistance aux coupures', 'Bonne préhension', 'Protection chimique'],
  },
  {
    id: 'masque-respiratoire',
    slug: 'masque-respiratoire',
    name: 'Masque respiratoire',
    category: 'epi',
    description:
      'Protection contre les poussières, vapeurs et gaz. Filtration efficace et confortable.',
    longDescription:
      'Le masque respiratoire protège les voies respiratoires contre les poussières, vapeurs et gaz présents dans l’environnement de travail. Sa filtration efficace et sa conception confortable permettent un port prolongé.',
    price: 15000,
    availability: 'en-stock',
    image: masque,
    imageAlt: 'Masque respiratoire avec double cartouche filtrante',
    features: ['Double cartouche filtrante', 'Protection poussières et vapeurs', 'Port confortable'],
  },
  {
    id: 'casque-antibruit',
    slug: 'casque-antibruit',
    name: 'Casque antibruit',
    category: 'epi',
    description:
      'Réduit les nuisances sonores en milieu industriel. Confort et légèreté.',
    longDescription:
      'Le casque antibruit réduit les nuisances sonores en milieu industriel. Léger et confortable, il s’adapte à différents tours de tête et peut être porté sur de longues périodes.',
    price: 9500,
    availability: 'en-stock',
    image: antibruit,
    imageAlt: 'Casque antibruit jaune et noir',
    features: ['Réduction du bruit', 'Arceau réglable', 'Confort prolongé'],
  },
  {
    id: 'lunettes-securite',
    slug: 'lunettes-de-securite',
    name: 'Lunettes de sécurité',
    category: 'epi',
    description:
      'Protègent contre les projections, les poussières et les rayons UV.',
    longDescription:
      'Les lunettes de sécurité protègent les yeux des projections, des poussières et des rayons UV. Leur monture légère et leurs verres transparents offrent une bonne visibilité sans gêner le travail.',
    price: 4500,
    availability: 'en-stock',
    image: lunettes,
    imageAlt: 'Lunettes de sécurité à verres transparents',
    features: ['Protection UV', 'Verres transparents', 'Monture légère'],
  },
  {
    id: 'kit-agricole',
    slug: 'kit-agricole-complet',
    name: 'Kit agricole complet',
    category: 'kits-agricoles',
    description:
      'Pulvérisateur + EPI de base (gants, masque, lunettes, bottes). Idéal pour la protection des cultures.',
    longDescription:
      'Le kit agricole complet rassemble un pulvérisateur et les équipements de protection individuelle de base : gants, masque, lunettes et bottes. Il accompagne les travaux de traitement et de protection des cultures dans de bonnes conditions de sécurité.',
    price: 58000,
    availability: 'en-stock',
    image: kitAgricole,
    imageAlt: 'Kit agricole avec pulvérisateur, gants, lunettes et bottes de protection',
    featured: true,
    features: ['Pulvérisateur inclus', 'EPI de base fournis', 'Protection des cultures'],
  },
  {
    id: 'kit-hygiene',
    slug: 'kit-hygiene',
    name: 'Kit d’hygiène',
    category: 'kits-hygiene',
    description:
      'Un ensemble de produits d’hygiène pour l’entretien des espaces de travail.',
    longDescription:
      'Le kit d’hygiène regroupe les produits essentiels pour l’entretien et l’hygiène des espaces de travail. La composition exacte et les conditionnements sont communiqués sur demande.',
    price: null,
    availability: 'sur-commande',
    image: kitHygiene,
    imageAlt: 'Produits d’hygiène et de nettoyage conditionnés en flacons',
    features: ['Produits d’hygiène', 'Conditionnement adapté', 'Composition sur demande'],
  },
  {
    id: 'kit-premiers-secours',
    slug: 'kit-premiers-secours',
    name: 'Kit de premiers secours',
    category: 'kits-secours',
    description:
      'Une trousse de premiers secours pour les interventions d’urgence.',
    longDescription:
      'Le kit de premiers secours permet de disposer du matériel indispensable en cas d’urgence. Le contenu détaillé et les quantités sont précisés sur demande, selon les besoins de votre site.',
    price: null,
    availability: 'sur-commande',
    image: kitSecours,
    imageAlt: 'Trousse de premiers secours rouge',
    features: ['Trousse de secours', 'Contenu adapté au site', 'Détail sur demande'],
  },
  {
    id: 'kit-nettoyage',
    slug: 'kit-nettoyage',
    name: 'Kit de nettoyage',
    category: 'kits-nettoyage',
    description:
      'Un ensemble d’équipements et de produits pour le nettoyage professionnel.',
    longDescription:
      'Le kit de nettoyage réunit les équipements et produits nécessaires au nettoyage professionnel des locaux et des espaces de travail. Le contenu peut être ajusté selon vos besoins.',
    price: null,
    availability: 'sur-commande',
    image: kitNettoyage,
    imageAlt: 'Seau, gants et pulvérisateur pour le nettoyage professionnel',
    features: ['Équipements de nettoyage', 'Produits inclus', 'Contenu ajustable'],
  },
]
