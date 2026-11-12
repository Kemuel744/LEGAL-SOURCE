import type { NewsPost } from '@/types'

import epiImg from '@/assets/images/activities/epi.webp'
import securiteImg from '@/assets/images/activities/rse.webp'
import haccpImg from '@/assets/images/activities/haccp.webp'

/**
 * Publications statiques de la première version.
 * Les articles de présentation ne portent pas de date de publication
 * inventée : ils sont identifiés comme fiches pratiques.
 * Seule l’ouverture du site est datée (jour de mise en ligne du projet).
 */
export const news: NewsPost[] = [
  {
    id: 'ouverture-site',
    slug: 'legal-source-renforce-sa-presence-en-ligne',
    title: 'LEGAL SOURCE renforce sa présence en ligne',
    excerpt:
      'Un nouveau site institutionnel pour découvrir les activités, les services, les formations et la boutique de LEGAL SOURCE, et échanger directement avec l’équipe.',
    category: 'Vie de l’entreprise',
    date: '2026-11-05',
    displayDate: '5 novembre 2026',
    image: epiImg,
    imageAlt: 'Équipements de protection individuelle proposés par LEGAL SOURCE',
    body: [
      'LEGAL SOURCE dispose désormais d’un site web institutionnel pensé pour présenter clairement ses domaines d’intervention, ses services, ses formations et ses réalisations.',
      'La boutique en ligne présente une sélection d’équipements de protection individuelle et de kits. Elle fonctionne comme un catalogue : chaque demande est orientée vers WhatsApp afin de permettre un échange direct sur les modalités de commande et de livraison.',
      'Ce site constitue également une base technique évolutive, préparée pour accueillir ultérieurement une gestion dynamique des contenus, des produits et des formations.',
    ],
  },
  {
    id: 'iso-45001',
    slug: 'iso-45001-les-fondamentaux',
    title: 'ISO 45001 : les fondamentaux de la santé et sécurité au travail',
    excerpt:
      'Comprendre la logique du référentiel ISO 45001, ses apports pour les organisations et les premières étapes d’une démarche structurée.',
    category: 'Conseils QHSE',
    displayDate: 'Fiche pratique',
    image: securiteImg,
    imageAlt: 'Jeune pousse symbolisant une démarche de progrès durable',
    body: [
      'L’ISO 45001 est un référentiel international consacré au management de la santé et de la sécurité au travail. Il propose un cadre structuré pour identifier les dangers, évaluer les risques et organiser la prévention.',
      'Une démarche ISO 45001 s’appuie sur plusieurs piliers : l’engagement de la direction, la participation des travailleurs, l’analyse du contexte, la planification des actions et l’évaluation régulière des résultats.',
      'Pour une organisation qui débute, la première étape consiste souvent à réaliser un état des lieux de ses pratiques et à prioriser les risques les plus significatifs. LEGAL SOURCE peut vous accompagner dans cette lecture et dans la construction d’un plan d’actions adapté.',
    ],
  },
  {
    id: 'haccp',
    slug: 'haccp-securite-alimentaire',
    title: 'HACCP et sécurité alimentaire : ce qu’il faut retenir',
    excerpt:
      'Les principes de la méthode HACCP et leur rôle dans la maîtrise des dangers sanitaires tout au long de la chaîne alimentaire.',
    category: 'Conseils QHSE',
    displayDate: 'Fiche pratique',
    image: haccpImg,
    imageAlt: 'Produits agricoles frais et labels de bonnes pratiques',
    body: [
      'La méthode HACCP (Hazard Analysis Critical Control Point) vise à identifier, évaluer et maîtriser les dangers significatifs pour la sécurité des aliments. Elle s’applique tout au long du processus de production et de distribution.',
      'Sa mise en œuvre repose sur une analyse des dangers, la détermination des points critiques, la définition de limites et de mesures de surveillance, puis la vérification de l’efficacité du système.',
      'Les bonnes pratiques d’hygiène constituent le socle de cette démarche. Leur appropriation par les équipes est déterminante pour garantir des résultats durables.',
    ],
  },
]
