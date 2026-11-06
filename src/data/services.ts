import type { Service } from '@/types'

/**
 * Prestations — construites à partir des intitulés et descriptions
 * du template officiel « activités / services ».
 */
export const services: Service[] = [
  {
    id: 'conseil-consulting',
    slug: 'conseil-consulting',
    title: 'Conseil & Consulting',
    tagline: 'Des recommandations stratégiques et opérationnelles.',
    description:
      'Nous analysons votre organisation et vos pratiques pour proposer des recommandations concrètes, adaptées à vos enjeux QHSE, à vos ressources et à votre secteur d’activité.',
    objectives: [
      'Clarifier les priorités et les risques de votre organisation',
      'Structurer une démarche QHSE cohérente et applicable',
      'Aligner les pratiques opérationnelles sur vos objectifs',
    ],
    benefits: [
      'Une lecture indépendante de vos pratiques',
      'Des recommandations directement opérationnelles',
      'Un accompagnement adapté à votre maturité',
    ],
    icon: 'handshake',
  },
  {
    id: 'coaching',
    slug: 'coaching',
    title: 'Coaching',
    tagline: 'Développez vos talents et renforcez vos équipes.',
    description:
      'Le coaching accompagne les responsables et les équipes dans la prise en charge de leurs missions QHSE : posture, animation, communication et appropriation des outils de pilotage.',
    objectives: [
      'Renforcer les compétences managériales des responsables',
      'Favoriser l’adhésion des équipes aux démarches de prévention',
      'Ancrer les bonnes pratiques dans le quotidien',
    ],
    benefits: [
      'Un accompagnement personnalisé',
      'Une progression mesurable des pratiques',
      'Une meilleure mobilisation des équipes',
    ],
    icon: 'coaching',
  },
  {
    id: 'accompagnement-certifications',
    slug: 'accompagnement-certifications',
    title: 'Accompagnement aux certifications',
    tagline: 'ISO, HACCP, FEFO/PACF, GLOBALG.A.P. et plus.',
    description:
      'De l’état des lieux à l’audit de certification, nous vous accompagnons dans la mise en place des exigences du référentiel visé et dans la préparation de vos équipes.',
    objectives: [
      'Évaluer l’écart entre vos pratiques et le référentiel',
      'Construire et suivre un plan d’actions',
      'Préparer l’audit de certification dans de bonnes conditions',
    ],
    benefits: [
      'Une méthode progressive et documentée',
      'Un accompagnement jusqu’à l’audit',
      'Une meilleure maîtrise des exigences',
    ],
    icon: 'badge',
  },
  {
    id: 'audit-diagnostic',
    slug: 'audit-diagnostic',
    title: 'Audit & Diagnostic',
    tagline: 'Évaluez, améliorez, maîtrisez vos risques.',
    description:
      'Nos audits et diagnostics vous donnent une vision objective de votre niveau de conformité et de maîtrise des risques, avec des constats priorisés et un plan d’amélioration.',
    objectives: [
      'Identifier les forces et les axes d’amélioration',
      'Prioriser les actions selon le niveau de risque',
      'Disposer d’un plan d’actions suivi dans le temps',
    ],
    benefits: [
      'Un regard extérieur et objectif',
      'Des constats argumentés et hiérarchisés',
      'Une feuille de route claire pour progresser',
    ],
    icon: 'clipboard',
  },
  {
    id: 'formation',
    slug: 'formation',
    title: 'Formation',
    tagline: 'Des formations adaptées à vos besoins.',
    description:
      'Nous concevons et animons des formations QHSE, sécurité, qualité et environnement, en présentiel ou selon des formats adaptés à vos contraintes opérationnelles.',
    objectives: [
      'Transmettre les fondamentaux des référentiels concernés',
      'Développer les gestes et réflexes de prévention',
      'Permettre aux équipes de contribuer activement à la conformité',
    ],
    benefits: [
      'Des contenus orientés pratique',
      'Des formats ajustés à vos équipes',
      'Un ancrage progressif des compétences',
    ],
    icon: 'graduation',
  },
  {
    id: 'strategie-developpement-durable',
    slug: 'strategie-developpement-durable',
    title: 'Stratégie & Développement durable',
    tagline: 'Intégrez les enjeux ESG et RSE dans votre croissance.',
    description:
      'Nous accompagnons la définition et la mise en œuvre de stratégies intégrant la responsabilité sociétale, les enjeux environnementaux et les études d’impact.',
    objectives: [
      'Intégrer les enjeux RSE et ESG à votre stratégie',
      'Structurer vos engagements et vos indicateurs',
      'Concilier performance économique et durabilité',
    ],
    benefits: [
      'Une démarche structurée et lisible',
      'Des engagements reliés à vos activités réelles',
      'Une meilleure prise en compte des parties prenantes',
    ],
    icon: 'trending',
  },
]

/** Domaines courts affichés dans le bandeau « Nos domaines d’intervention ». */
export const domainHighlights = [
  {
    title: 'Conseil & Consulting',
    description: 'Des recommandations stratégiques et opérationnelles.',
    icon: 'handshake' as const,
  },
  {
    title: 'Coaching',
    description: 'Développez vos talents et renforcez vos équipes.',
    icon: 'coaching' as const,
  },
  {
    title: 'Accompagnement aux certifications',
    description: 'ISO, HACCP, FEFO/PACF, GLOBALG.A.P. et plus.',
    icon: 'badge' as const,
  },
  {
    title: 'Audit & Diagnostic',
    description: 'Évaluez, améliorez, maîtrisez vos risques.',
    icon: 'clipboard' as const,
  },
  {
    title: 'Formation',
    description: 'Des formations adaptées à vos besoins.',
    icon: 'graduation' as const,
  },
  {
    title: 'Stratégie & Développement durable',
    description: 'Intégrez les enjeux ESG et RSE dans votre croissance.',
    icon: 'trending' as const,
  },
]
