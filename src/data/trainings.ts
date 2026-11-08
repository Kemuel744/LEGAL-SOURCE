import type { Training } from '@/types'

import formationsImg from '@/assets/images/activities/formations.webp'
import terrainImg from '@/assets/images/projects/formation-terrain.webp'
import auditsImg from '@/assets/images/activities/audits.webp'
import haccpImg from '@/assets/images/activities/haccp.webp'
import rseImg from '@/assets/images/activities/rse.webp'
import energiesImg from '@/assets/images/activities/energies.webp'

/**
 * Catalogue de formations.
 * Les référentiels cités proviennent du template officiel. Les programmes,
 * durées et tarifs ne sont pas fournis : ils sont donc renvoyés vers un
 * échange avec LEGAL SOURCE plutôt qu’inventés.
 */
export const trainings: Training[] = [
  {
    id: 'nebosh',
    slug: 'nebosh',
    title: 'NEBOSH — Santé et sécurité au travail',
    category: 'Sécurité & QHSE',
    description:
      'Une formation de référence pour comprendre les principes de la santé et de la sécurité au travail et leur application dans l’environnement professionnel.',
    objectives: [
      'Comprendre les principes fondamentaux de la santé et sécurité au travail',
      'Identifier et évaluer les risques professionnels',
      'Contribuer à la mise en place de mesures de prévention adaptées',
    ],
    audience: [
      'Responsables et animateurs QHSE',
      'Managers et encadrants de proximité',
      'Toute personne impliquée dans la prévention des risques',
    ],
    modalities: [
      'Programme détaillé communiqué sur demande',
      'Session en intra-entreprise',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    image: formationsImg,
    imageAlt: 'Session de formation NEBOSH animée par LEGAL SOURCE',
    icon: 'graduation',
    featured: true,
  },
  {
    id: 'iosh',
    slug: 'iosh',
    title: 'IOSH — Management de la sécurité',
    category: 'Management QHSE',
    description:
      'Un parcours orienté management pour outiller les responsables dans la gestion des risques et le développement d’une culture de sécurité durable.',
    objectives: [
      'Situer les responsabilités en matière de santé et sécurité',
      'Intégrer la prévention dans les décisions opérationnelles',
      'Développer une culture de sécurité au sein des équipes',
    ],
    audience: [
      'Managers et responsables d’équipe',
      'Responsables QHSE',
      'Encadrants souhaitant renforcer leurs pratiques',
    ],
    modalities: [
      'Programme détaillé communiqué sur demande',
      'Session en intra-entreprise',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    image: terrainImg,
    imageAlt: 'Formation LEGAL SOURCE en renforcement de capacités sur le terrain',
    icon: 'coaching',
    featured: true,
  },
  {
    id: 'iso-9001',
    slug: 'iso-9001',
    title: 'ISO 9001 — Management de la qualité',
    category: 'Qualité',
    description:
      'Comprendre les exigences du référentiel ISO 9001 et les principes d’un système de management de la qualité orienté satisfaction client et amélioration continue.',
    objectives: [
      'S’approprier la structure et les exigences de l’ISO 9001',
      'Comprendre l’approche processus et l’amélioration continue',
      'Préparer les équipes aux audits qualité',
    ],
    audience: [
      'Responsables qualité',
      'Pilotes de processus',
      'Auditeurs internes en formation',
    ],
    modalities: [
      'Programme détaillé communiqué sur demande',
      'Session en intra-entreprise',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    image: auditsImg,
    imageAlt: 'Documents et référentiels utilisés lors d’une formation ISO 9001',
    icon: 'badge',
    featured: true,
  },
  {
    id: 'iso-14001',
    slug: 'iso-14001',
    title: 'ISO 14001 — Management environnemental',
    category: 'Environnement',
    description:
      'Une formation pour structurer une démarche environnementale conforme à l’ISO 14001 et intégrer les enjeux environnementaux dans les pratiques de l’organisation.',
    objectives: [
      'Comprendre les exigences de l’ISO 14001',
      'Identifier les aspects environnementaux significatifs',
      'Structurer des actions de maîtrise et d’amélioration',
    ],
    audience: [
      'Responsables environnement et QHSE',
      'Managers concernés par les enjeux environnementaux',
      'Équipes impliquées dans un système de management',
    ],
    modalities: [
      'Programme détaillé communiqué sur demande',
      'Session en intra-entreprise',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    image: rseImg,
    imageAlt: 'Jeune pousse symbolisant le management environnemental',
    icon: 'leaf',
  },
  {
    id: 'iso-45001',
    slug: 'iso-45001',
    title: 'ISO 45001 — Santé et sécurité au travail',
    category: 'Sécurité',
    description:
      'Maîtriser les exigences du référentiel ISO 45001 pour construire un système de management de la santé et de la sécurité au travail efficace.',
    objectives: [
      'Comprendre la logique et les exigences de l’ISO 45001',
      'Identifier les dangers et évaluer les risques',
      'Mettre en place les mesures de prévention et de suivi',
    ],
    audience: [
      'Responsables QHSE et sécurité',
      'Encadrants et représentants du personnel',
      'Équipes de prévention',
    ],
    modalities: [
      'Programme détaillé communiqué sur demande',
      'Session en intra-entreprise',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    image: energiesImg,
    imageAlt: 'Site industriel et énergies renouvelables',
    icon: 'shield',
  },
  {
    id: 'haccp-globalgap',
    slug: 'haccp-globalgap',
    title: 'HACCP & GLOBALG.A.P. — Sécurité alimentaire',
    category: 'Agroalimentaire',
    description:
      'Une formation aux principes de la sécurité alimentaire et aux bonnes pratiques agricoles, en lien avec les référentiels HACCP et GLOBALG.A.P.',
    objectives: [
      'Comprendre les principes de l’analyse des dangers HACCP',
      'Appliquer les bonnes pratiques d’hygiène et de production',
      'Préparer une démarche de conformité GLOBALG.A.P.',
    ],
    audience: [
      'Responsables qualité et production agroalimentaire',
      'Exploitations et coopératives agricoles',
      'Équipes chargées de la sécurité des aliments',
    ],
    modalities: [
      'Programme détaillé communiqué sur demande',
      'Session en intra-entreprise',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    image: haccpImg,
    imageAlt: 'Produits agricoles et labels de bonnes pratiques',
    icon: 'badge',
  },
]
