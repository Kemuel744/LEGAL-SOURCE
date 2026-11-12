import type { Project } from '@/types'

import auditIso from '@/assets/images/projects/audit-qualite.webp'
import formation from '@/assets/images/projects/formation-terrain.webp'
import agriculture from '@/assets/images/projects/agriculture-durable.webp'
import impact from '@/assets/images/projects/etude-impact-eau.webp'

/**
 * Réalisations présentées dans le template officiel « activités / services ».
 * Aucune référence, aucun client et aucun résultat chiffré n’a été inventé.
 */
export const projects: Project[] = [
  {
    id: 'audit-conformite-iso',
    slug: 'audit-mise-en-conformite-iso',
    title: 'Audit & mise en conformité ISO',
    sector: 'Agro-industrie',
    context:
      'Accompagnement d’une entreprise agro-industrielle pour la mise en place de son système de management intégré.',
    objectives: [
      'Structurer un système de management intégré cohérent',
      'Aligner les pratiques sur les exigences ISO 9001, ISO 14001 et ISO 45001',
      'Préparer l’organisation aux audits de certification',
    ],
    interventions: [
      'État des lieux et analyse des écarts',
      'Construction du plan d’actions et accompagnement à la mise en œuvre',
      'Préparation des équipes et des processus aux audits',
    ],
    results: [
      'Un système de management intégré structuré et documenté',
      'Des équipes sensibilisées aux exigences des trois référentiels',
      'Une démarche de conformité pilotée dans la durée',
    ],
    image: auditIso,
    imageAlt: 'Contrôle qualité sur un chantier : classeur de suivi et fiches d’inspection',
  },
  {
    id: 'formation-renforcement-capacites',
    slug: 'formation-renforcement-de-capacites',
    title: 'Formation & renforcement de capacités',
    sector: 'QHSE / Sécurité au travail',
    context:
      'Formation des équipes sur la gestion des risques et la sécurité au travail, en lien avec les référentiels NEBOSH et IOSH.',
    objectives: [
      'Renforcer la culture de prévention des équipes',
      'Outiller les responsables sur l’évaluation des risques',
      'Ancrer les bons réflexes de sécurité au quotidien',
    ],
    interventions: [
      'Conception d’un programme adapté aux réalités opérationnelles',
      'Animation de sessions de formation',
      'Échanges et mises en situation autour des risques identifiés',
    ],
    results: [
      'Des équipes mieux informées sur les risques professionnels',
      'Des responsables outillés pour animer la prévention',
      'Une dynamique de renforcement continu des compétences',
    ],
    image: formation,
    imageAlt: 'Session de formation en salle avec les équipes LEGAL SOURCE',
  },
  {
    id: 'conseil-agriculture-durable',
    slug: 'conseil-en-agriculture-durable',
    title: 'Conseil en agriculture durable',
    sector: 'Agriculture',
    context:
      'Appui technique pour la mise en place de bonnes pratiques agricoles et d’une démarche de certification GLOBALG.A.P.',
    objectives: [
      'Diffuser les bonnes pratiques agricoles',
      'Préparer une démarche de conformité GLOBALG.A.P.',
      'Améliorer la traçabilité et la qualité de la production',
    ],
    interventions: [
      'Analyse des pratiques existantes',
      'Appui technique et accompagnement des équipes',
      'Structuration des démarches de conformité',
    ],
    results: [
      'Des pratiques agricoles mieux structurées',
      'Une meilleure appropriation des exigences de certification',
      'Un appui technique installé dans la durée',
    ],
    image: agriculture,
    imageAlt: 'Agriculteurs travaillant dans une exploitation maraîchère',
  },
  {
    id: 'etude-impact-environnemental',
    slug: 'etude-d-impact-environnemental-et-social',
    title: 'Étude d’impact environnemental et social',
    sector: 'Environnement',
    context:
      'Réalisation d’une étude d’impact environnemental et social pour un projet d’aménagement agricole et forestier.',
    objectives: [
      'Évaluer les impacts environnementaux et sociaux du projet',
      'Identifier les mesures de prévention et d’atténuation',
      'Fournir un cadre lisible pour la prise de décision',
    ],
    interventions: [
      'Collecte et analyse des données de terrain',
      'Évaluation des enjeux environnementaux et sociaux',
      'Formulation de mesures d’atténuation et de suivi',
    ],
    results: [
      'Une étude documentée et argumentée',
      'Des mesures d’atténuation identifiées',
      'Un support d’aide à la décision pour le porteur de projet',
    ],
    image: impact,
    imageAlt: 'Prélèvement d’eau par un technicien lors d’une étude d’impact environnemental',
  },
]
