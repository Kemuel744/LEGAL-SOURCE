import type { Activity } from '@/types'

import formationsImg from '@/assets/images/activities/formations.webp'
import auditsImg from '@/assets/images/activities/audits.webp'
import rhImg from '@/assets/images/activities/rh-securite.webp'
import hygieneImg from '@/assets/images/activities/hygiene-tri-dechets.webp'
import energiesImg from '@/assets/images/activities/energies-solaire.webp'
import conseilImg from '@/assets/images/activities/conseil.webp'
import rseImg from '@/assets/images/activities/rse.webp'
import haccpImg from '@/assets/images/activities/haccp.webp'
import epiImg from '@/assets/images/activities/epi.webp'
import agricoleImg from '@/assets/images/activities/agricole.webp'

/**
 * Domaines d’intervention — contenus issus du template officiel d’accueil.
 * Aucun domaine n’a été inventé.
 */
export const activities: Activity[] = [
  {
    id: 'formations',
    title: 'Formations internationales',
    shortDescription:
      'NEBOSH, IOSH, ISO et autres certifications : des parcours adaptés aux réalités de vos équipes.',
    description:
      'Des formations aux référentiels internationaux pour renforcer les compétences QHSE, la culture de la sécurité et la capacité de vos équipes à conduire leurs propres démarches de conformité.',
    image: formationsImg,
    imageAlt: 'Participants à une formation LEGAL SOURCE sur les référentiels NEBOSH',
    icon: 'graduation',
    tone: 'blue',
    serviceSlug: 'formation',
  },
  {
    id: 'audits-certification',
    title: 'Audits & Certification',
    shortDescription:
      'Audits à blanc et accompagnement aux audits de certification ISO.',
    description:
      'Nous préparons votre organisation aux exigences des référentiels ISO : diagnostic initial, audits à blanc, plan d’actions correctives et accompagnement jusqu’à l’audit de certification.',
    image: auditsImg,
    imageAlt: 'Documents de certification ISO utilisés lors d’un audit',
    icon: 'clipboard',
    tone: 'green',
    serviceSlug: 'accompagnement-certifications',
  },
  {
    id: 'rh-securite',
    title: 'Ressources humaines & Sécurité',
    shortDescription:
      'Mise à disposition de personnel QHSE, agents d’hygiène et gardiens.',
    description:
      'Nous mettons à disposition des profils qualifiés pour renforcer vos équipes : personnel QHSE, agents d’hygiène et de sécurité, avec un accompagnement adapté à vos besoins opérationnels.',
    image: rhImg,
    imageAlt: 'Agents de sécurité en service sur un site',
    icon: 'users',
    tone: 'blue',
    serviceSlug: 'conseil-consulting',
  },
  {
    id: 'hygiene-environnement',
    title: 'Hygiène, assainissement & environnement',
    shortDescription:
      'Nettoyage, gestion des déchets, prévention et assainissement.',
    description:
      'Des prestations d’hygiène et d’assainissement pour préserver la santé au travail et limiter l’impact environnemental de vos activités : nettoyage, gestion des déchets et actions de prévention.',
    image: hygieneImg,
    imageAlt: 'Agent d’hygiène assurant le tri des déchets sur un site',
    icon: 'leaf',
    tone: 'purple',
    serviceSlug: 'strategie-developpement-durable',
  },
  {
    id: 'energies-durables',
    title: 'Énergies renouvelables & Développement durable',
    shortDescription:
      'Solutions énergétiques propres et projets durables.',
    description:
      'Nous vous accompagnons dans la réflexion et la mise en œuvre de solutions énergétiques propres et de projets intégrant les enjeux du développement durable.',
    image: energiesImg,
    imageAlt: 'Panneaux solaires et éoliennes dans un paysage',
    icon: 'energy',
    tone: 'orange',
    serviceSlug: 'strategie-developpement-durable',
  },
  {
    id: 'conseil-coaching',
    title: 'Conseil, consulting & coaching',
    shortDescription:
      'Expertise QHSE et accompagnement sur mesure.',
    description:
      'Une expertise QHSE et un accompagnement sur mesure pour structurer vos démarches, relever vos défis et optimiser vos ressources, à travers le conseil, le consulting et le coaching des équipes.',
    image: conseilImg,
    imageAlt: 'Réunion de travail entre consultants et dirigeants',
    icon: 'handshake',
    tone: 'red',
    serviceSlug: 'conseil-consulting',
  },
  {
    id: 'rse-esg',
    title: 'RSE, ESG & Études d’impact',
    shortDescription:
      'Responsabilité sociétale, études environnementales et sociales.',
    description:
      'Nous réalisons des études d’impact environnemental et social et accompagnons la construction de démarches RSE et ESG alignées sur vos enjeux et ceux de vos parties prenantes.',
    image: rseImg,
    imageAlt: 'Jeune pousse tenue dans des mains, symbole de développement durable',
    icon: 'sprout',
    tone: 'green',
    serviceSlug: 'strategie-developpement-durable',
  },
  {
    id: 'securite-alimentaire',
    title: 'HACCP, ISO, FEFO/PACF & GLOBALG.A.P.',
    shortDescription:
      'Sécurité alimentaire, gestion forestière et bonnes pratiques agricoles.',
    description:
      'Des prestations d’accompagnement autour de la sécurité alimentaire, de la gestion forestière et des bonnes pratiques agricoles, notamment HACCP, ISO, FEFO/PACF et GLOBALG.A.P.',
    image: haccpImg,
    imageAlt: 'Panier de produits agricoles frais et labels de certification',
    icon: 'badge',
    tone: 'orange',
    serviceSlug: 'accompagnement-certifications',
  },
  {
    id: 'epi-equipements',
    title: 'Fourniture d’EPI & équipements',
    shortDescription:
      'Équipements de protection individuelle et matériel de sécurité.',
    description:
      'Une gamme d’équipements de protection individuelle et de matériel de sécurité pour protéger vos équipes et soutenir la réussite de vos activités.',
    image: epiImg,
    imageAlt: 'Casque, bottes, gants et chaussures de sécurité',
    icon: 'epi',
    tone: 'purple',
    serviceSlug: 'formation',
  },
  {
    id: 'produits-agricoles',
    title: 'Produits agricoles & prestations diverses',
    shortDescription:
      'Fourniture de produits agricoles, entretien et services associés.',
    description:
      'Une offre de produits agricoles et de prestations associées, avec un accompagnement sur les bonnes pratiques de production, de conditionnement et d’entretien.',
    image: agricoleImg,
    imageAlt: 'Panier de fruits et légumes frais',
    icon: 'basket',
    tone: 'blue',
    serviceSlug: 'strategie-developpement-durable',
  },
]
