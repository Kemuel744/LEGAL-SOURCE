import type { Training, TrainingLevel } from '@/types'
import { trainingFamilies } from '@/data/trainingFamilies'
import { trainingEnrichment } from '@/data/trainingEnrichment'

type Seed = {
  slug: string
  title: string
  level: TrainingLevel
  lessons?: number
  description: string
  objectives: string[]
  audience: string[]
  program: string[]
  featured?: boolean
  prerequisites?: string
  assessment?: string
}

function build(familySlug: string, seed: Seed): Training {
  const family = trainingFamilies.find((item) => item.slug === familySlug)
  if (!family) throw new Error(`Famille de formation inconnue : ${familySlug}`)

  return {
    id: seed.slug,
    slug: seed.slug,
    title: seed.title,
    familySlug,
    category: family.name,
    level: seed.level,
    lessons: seed.lessons ?? null,
    description: seed.description,
    objectives: seed.objectives,
    audience: seed.audience,
    program: seed.program,
    modalities: family.modalities,
    prerequisites: seed.prerequisites ?? family.prerequisites,
    assessment: seed.assessment ?? family.assessment,
    image: family.image,
    imageAlt: family.imageAlt,
    icon: family.icon,
    featured: seed.featured,
  }
}

const nebosh: Seed[] = [
  {
    slug: 'nebosh-health-safety-work-award',
    title: 'NEBOSH Health and Safety at Work Award',
    level: 'Débutant',
    lessons: 8,
    description:
      'Une première qualification NEBOSH pour comprendre les principes essentiels de la santé et de la sécurité au travail et les appliquer dans son poste.',
    objectives: [
      'Identifier les principaux dangers et risques présents sur le lieu de travail',
      'Comprendre le rôle de chacun dans la prévention',
      'Adopter les bons réflexes face à une situation à risque',
    ],
    audience: [
      'Tout salarié nouvellement exposé à des risques professionnels',
      'Membres d’équipes opérationnelles et d’ateliers',
      'Encadrants de proximité souhaitant une base solide',
    ],
    program: [
      'Enjeux de la santé et de la sécurité au travail',
      'Dangers et risques courants : chutes, machines, produits, électricité',
      'Évaluation simple des risques et mesures de maîtrise',
      'Comportements sûrs, remontée d’information et situations d’urgence',
    ],
    featured: true,
  },
  {
    slug: 'nebosh-incident-investigation',
    title: 'NEBOSH HSE Introduction to Incident Investigation',
    level: 'Débutant',
    lessons: 8,
    description:
      'Apprendre à conduire une enquête d’incident structurée, à identifier les causes réelles et à proposer des actions de prévention durables.',
    objectives: [
      'Comprendre les objectifs et le cadre d’une enquête d’incident',
      'Recueillir et analyser les faits de manière méthodique',
      'Distinguer causes immédiates, causes profondes et facteurs organisationnels',
      'Formuler des recommandations pertinentes et suivies',
    ],
    audience: [
      'Responsables HSE et animateurs prévention',
      'Managers et chefs d’équipe',
      'Membres de commissions d’enquête',
    ],
    program: [
      'Définitions : incident, accident, presqu’accident',
      'Cadre réglementaire et finalités de l’enquête',
      'Méthodes de collecte des faits et conduite d’entretiens',
      'Analyse des causes : arbre des causes et modèles organisationnels',
      'Rédaction du rapport et plan d’actions correctives',
    ],
  },
  {
    slug: 'nebosh-managing-risks',
    title: 'NEBOSH HSE Award in Managing Risks and Risk Assessment at Work',
    level: 'Débutant',
    lessons: 4,
    description:
      'Un award court et pratique pour réaliser des évaluations de risques Proportionnées et hiérarchiser les mesures de prévention.',
    objectives: [
      'Comprendre la logique d’une évaluation des risques',
      'Identifier les dangers et les personnes exposées',
      'Évaluer et prioriser les risques',
      'Définir des mesures de maîtrise adaptées et vérifiables',
    ],
    audience: [
      'Managers et encadrants',
      'Référents sécurité et animateurs prévention',
      'Toute personne chargée de mettre à jour des évaluations de risques',
    ],
    program: [
      'Principes et exigences de l’évaluation des risques',
      'Identification des dangers et des populations exposées',
      'Évaluation de la probabilité et de la gravité',
      'Hiérarchie de maîtrise et plan d’actions',
      'Documentation, révision et communication',
    ],
  },
  {
    slug: 'nebosh-working-wellbeing',
    title: 'NEBOSH Working with Wellbeing',
    level: 'Débutant',
    lessons: 8,
    description:
      'Comprendre les déterminants du bien-être au travail et mettre en place des actions concrètes pour préserver la santé des équipes.',
    objectives: [
      'Situer les enjeux du bien-être au travail',
      'Identifier les facteurs individuels, collectifs et organisationnels',
      'Construire un plan d’action réaliste à l’échelle de l’équipe',
    ],
    audience: [
      'Managers et responsables d’équipe',
      'Fonctions RH et QHSE',
      'Référents bien-être et qualité de vie au travail',
    ],
    program: [
      'Définition et dimensions du bien-être au travail',
      'Lien entre bien-être, santé et performance',
      'Facteurs de risque et signaux d’alerte',
      'Actions de prévention et d’accompagnement',
      'Indicateurs de suivi et démarche d’amélioration',
    ],
  },
  {
    slug: 'nebosh-leadership-excellence',
    title: 'NEBOSH HSE Certificate in Health and Safety Leadership Excellence',
    level: 'Intermédiaire',
    lessons: 6,
    description:
      'Un parcours destiné aux dirigeants et managers pour faire de la santé-sécurité un levier de performance et une responsabilité réellement portée par le leadership.',
    objectives: [
      'Comprendre l’impact du leadership sur la culture de sécurité',
      'Situer ses responsabilités et sa responsabilité visible',
      'Mobiliser les équipes autour d’objectifs de prévention',
      'Prendre des décisions intégrant les risques',
    ],
    audience: [
      'Dirigeants et membres de comité de direction',
      'Managers expérimentés',
      'Responsables HSE souhaitant renforcer leur influence',
    ],
    program: [
      'Leadership et culture de sécurité',
      'Responsabilités légales et morales',
      'Communication et engagement des équipes',
      'Décision, arbitrage et exemplarité',
      'Plan de progrès personnel et organisationnel',
    ],
  },
  {
    slug: 'nebosh-international-general-certificate',
    title: 'NEBOSH International General Certificate',
    level: 'Intermédiaire',
    lessons: 15,
    description:
      'Le certificat international de référence pour gérer les risques au quotidien et construire une carrière en santé-sécurité, fondé sur les standards internationaux.',
    objectives: [
      'Comprendre les principes et systèmes de management de la santé-sécurité',
      'Réaliser une évaluation des risques dans son environnement de travail',
      'Identifier et maîtriser les dangers physiques, chimiques, biologiques et organisationnels',
      'Contribuer à une culture de prévention durable',
    ],
    audience: [
      'Responsables et animateurs HSE',
      'Managers, superviseurs et chefs de projet',
      'Personnes visant une carrière en santé-sécurité',
    ],
    program: [
      'Pourquoi gérer la santé et la sécurité au travail',
      'Fonctionnement d’un système de management HSE',
      'Évaluation et maîtrise des risques',
      'Surveillance, mesure et retour d’expérience',
      'Santé physique et psychologique, troubles musculosquelettiques',
      'Agents chimiques et biologiques, équipements, incendie, électricité',
    ],
    featured: true,
  },
  {
    slug: 'nebosh-national-general-certificate',
    title: 'NEBOSH National General Certificate',
    level: 'Intermédiaire',
    lessons: 15,
    description:
      'Le certificat NEBOSH de référence au Royaume-Uni, adapté aux organisations qui appliquent la réglementation britannique en santé-sécurité.',
    objectives: [
      'Maîtriser les principes de management de la santé-sécurité',
      'Appliquer la réglementation britannique aux situations de travail',
      'Réaliser des évaluations de risques et proposer des mesures adaptées',
      'Contribuer à l’amélioration continue de la prévention',
    ],
    audience: [
      'Responsables HSE intervenant au Royaume-Uni',
      'Managers et encadrants',
      'Professionnels souhaitant une qualification reconnue au Royaume-Uni',
    ],
    program: [
      'Cadre juridique britannique de la santé-sécurité',
      'Systèmes de management et culture de sécurité',
      'Évaluation et maîtrise des risques',
      'Santé au travail et facteurs humains',
      'Incendie, électricité, équipements et substances dangereuses',
      'Surveillance, audit et amélioration',
    ],
  },
  {
    slug: 'nebosh-process-safety',
    title: 'NEBOSH HSE Certificate in Process Safety Management',
    level: 'Intermédiaire',
    lessons: 8,
    description:
      'Comprendre les principes de gestion de la sécurité des procédés pour prévenir les incidents majeurs dans les industries chimiques, pétrolières et gazières.',
    objectives: [
      'Situer les enjeux de la sécurité des procédés',
      'Identifier les dangers liés aux installations et aux procédés',
      'Comprendre les barrières de sécurité et leur performance',
      'Contribuer à une culture de sécurité des procédés',
    ],
    audience: [
      'Ingénieurs et responsables de production',
      'Responsables HSE de sites industriels',
      'Équipes de maintenance et de projet',
    ],
    program: [
      'Définition et enjeux de la sécurité des procédés',
      'Dangers des procédés et scénarios d’incident majeur',
      'Analyse de risques et études HAZOP',
      'Barrières de sécurité et gestion de l’intégrité',
      'Facteurs humains et culture de sécurité',
    ],
  },
  {
    slug: 'nebosh-construction-international',
    title: 'NEBOSH Health and Safety Management for Construction (International)',
    level: 'Intermédiaire',
    lessons: 17,
    description:
      'Une formation dédiée aux risques du secteur de la construction, fondée sur les bonnes pratiques internationales et les situations de chantier.',
    objectives: [
      'Comprendre les risques spécifiques aux chantiers',
      'Organiser la prévention dès la conception et la planification',
      'Maîtriser les risques liés aux travaux, aux engins et aux intervenants',
      'Mettre en place une surveillance efficace des chantiers',
    ],
    audience: [
      'Chefs de chantier et conducteurs de travaux',
      'Responsables HSE construction',
      'Maîtres d’ouvrage et maîtres d’œuvre',
    ],
    program: [
      'Enjeux et cadre de la sécurité en construction',
      'Organisation et responsabilités sur chantier',
      'Risques liés aux travaux en hauteur, aux fouilles et aux espaces confinés',
      'Engins, levage et circulation',
      'Coactivité, sous-traitance et coordination',
      'Surveillance, audits et retour d’expérience',
    ],
  },
  {
    slug: 'nebosh-construction-uk',
    title: 'NEBOSH Health and Safety Management for Construction (UK)',
    level: 'Intermédiaire',
    lessons: 17,
    description:
      'La version britannique de la formation construction NEBOSH, alignée sur la réglementation du Royaume-Uni et les obligations des acteurs du chantier.',
    objectives: [
      'Appliquer la réglementation britannique de la construction',
      'Identifier et maîtriser les risques de chantier',
      'Organiser la coordination et la coactivité',
      'Mettre en place une démarche de surveillance et d’amélioration',
    ],
    audience: [
      'Responsables et coordonnateurs sécurité construction',
      'Chefs de projet et de chantier au Royaume-Uni',
      'Maîtres d’ouvrage et bureau d’études',
    ],
    program: [
      'Cadre réglementaire britannique de la construction',
      'Rôles et responsabilités des acteurs',
      'Évaluation des risques et planification',
      'Travaux en hauteur, fouilles, espaces confinés et levage',
      'Coordination, coactivité et gestion des sous-traitants',
      'Surveillance, audit et culture sécurité',
    ],
  },
  {
    slug: 'nebosh-environmental-management',
    title: 'NEBOSH Environmental Management Certificate',
    level: 'Intermédiaire',
    lessons: 14,
    description:
      'Une qualification pour comprendre les enjeux environnementaux, identifier les impacts des activités et mettre en place un management environnemental efficace.',
    objectives: [
      'Comprendre les principes du management environnemental',
      'Identifier les aspects et impacts environnementaux',
      'Maîtriser les obligations et les bonnes pratiques',
      'Contribuer à un système de management environnemental',
    ],
    audience: [
      'Responsables environnement et QHSE',
      'Managers et chefs de projet',
      'Équipes impliquées dans une démarche ISO 14001',
    ],
    program: [
      'Enjeux et principes du développement durable',
      'Cadre réglementaire et parties intéressées',
      'Aspects et impacts environnementaux',
      'Pollutions, déchets, eau, énergie et biodiversité',
      'Système de management environnemental et amélioration continue',
    ],
  },
  {
    slug: 'nebosh-fire-safety',
    title: 'NEBOSH Certificate in Fire Safety',
    level: 'Intermédiaire',
    lessons: 11,
    description:
      'Apprendre à évaluer le risque incendie, à organiser la prévention et à préparer une organisation à réagir efficacement.',
    objectives: [
      'Comprendre le phénomène de combustion et la propagation du feu',
      'Réaliser une évaluation du risque incendie',
      'Définir les mesures de prévention et de protection',
      'Organiser la gestion des situations d’urgence',
    ],
    audience: [
      'Responsables HSE et sécurité incendie',
      'Managers responsables de bâtiments',
      'Référents incendie et membres d’équipes de sécurité',
    ],
    program: [
      'Principes de combustion et comportement du feu',
      'Cadre réglementaire et responsabilités',
      'Évaluation du risque incendie',
      'Moyens de prévention, de détection et de protection',
      'Évacuation, exercices et gestion de crise',
    ],
  },
  {
    slug: 'nebosh-international-diploma',
    title: 'NEBOSH International Diploma',
    level: 'Avancé',
    lessons: 47,
    description:
      'Le diplôme international NEBOSH pour les professionnels confirmés qui souhaitent approfondir la gestion stratégique de la santé-sécurité.',
    objectives: [
      'Maîtriser les fondements stratégiques de la santé-sécurité',
      'Concevoir et piloter un système de management performant',
      'Analyser les risques complexes et les facteurs organisationnels',
      'Développer une culture de sécurité à l’échelle de l’entreprise',
    ],
    audience: [
      'Responsables HSE expérimentés',
      'Consultants et auditeurs',
      'Managers visant une fonction de direction HSE',
    ],
    program: [
      'Stratégie et gouvernance de la santé-sécurité',
      'Systèmes de management et performance',
      'Évaluation et maîtrise avancée des risques',
      'Facteurs humains, culture et changement',
      'Santé au travail et enjeux émergents',
      'Audit, assurance et amélioration continue',
    ],
  },
  {
    slug: 'nebosh-national-diploma',
    title: 'NEBOSH National Diploma',
    level: 'Avancé',
    lessons: 49,
    description:
      'Le diplôme NEBOSH britannique de niveau avancé, destiné aux professionnels qui pilotent la santé-sécurité dans un cadre réglementaire du Royaume-Uni.',
    objectives: [
      'Maîtriser le cadre juridique britannique de la santé-sécurité',
      'Piloter la stratégie et le système de management HSE',
      'Analyser les risques complexes et les accidents majeurs',
      'Développer le leadership et la culture de sécurité',
    ],
    audience: [
      'Responsables HSE confirmés',
      'Consultants et formateurs',
      'Cadres dirigeants en charge de la prévention',
    ],
    program: [
      'Droit britannique de la santé-sécurité',
      'Gouvernance et management stratégique',
      'Évaluation et gestion avancée des risques',
      'Facteurs humains et organisationnels',
      'Santé au travail et surveillance médicale',
      'Audit, assurance et amélioration',
    ],
  },
  {
    slug: 'nebosh-international-environmental-diploma',
    title: 'NEBOSH International Diploma in Environmental Management',
    level: 'Avancé',
    lessons: 6,
    description:
      'Un diplôme avancé pour les professionnels qui pilotent la stratégie environnementale et le management des impacts à l’échelle internationale.',
    objectives: [
      'Élaborer une stratégie environnementale alignée sur les enjeux globaux',
      'Piloter un système de management environnemental avancé',
      'Évaluer et maîtriser les impacts significatifs',
      'Mobiliser les parties prenantes et la gouvernance',
    ],
    audience: [
      'Responsables environnement et RSE confirmés',
      'Consultants et auditeurs environnement',
      'Directions opérationnelles et HSE',
    ],
    program: [
      'Gouvernance et stratégie environnementale',
      'Cadres internationaux et parties prenantes',
      'Évaluation avancée des impacts',
      'Management des risques environnementaux',
      'Performance, reporting et amélioration continue',
    ],
  },
  {
    slug: 'nebosh-national-environmental-diploma',
    title: 'NEBOSH National Environmental Diploma',
    level: 'Avancé',
    lessons: 7,
    description:
      'La déclinaison britannique du diplôme environnemental NEBOSH, centrée sur la réglementation et les pratiques du Royaume-Uni.',
    objectives: [
      'Maîtriser le cadre réglementaire environnemental britannique',
      'Piloter la stratégie et le système de management environnemental',
      'Évaluer et maîtriser les impacts des activités',
      'Développer la performance environnementale',
    ],
    audience: [
      'Responsables environnement au Royaume-Uni',
      'Consultants et auditeurs',
      'Directions HSE et opérationnelles',
    ],
    program: [
      'Droit et politiques environnementales britanniques',
      'Gouvernance et stratégie',
      'Évaluation des impacts et des risques',
      'Management des pollutions, déchets et ressources',
      'Audit, reporting et amélioration continue',
    ],
  },
]

const iosh: Seed[] = [
  {
    slug: 'iosh-managing-safely',
    title: 'IOSH Managing Safely',
    level: 'Débutant',
    lessons: 12,
    description:
      'La formation IOSH de référence pour les managers et superviseurs : comprendre leurs responsabilités et intégrer la santé-sécurité dans la gestion quotidienne.',
    objectives: [
      'Comprendre les responsabilités des managers en santé-sécurité',
      'Évaluer les risques et mettre en place des mesures de maîtrise',
      'Investiguer les incidents et en tirer des enseignements',
      'Mesurer la performance et mobiliser les équipes',
    ],
    audience: [
      'Managers, superviseurs et chefs d’équipe',
      'Responsables de site ou d’unité',
      'Toute personne encadrant des équipes',
    ],
    program: [
      'Introduire la gestion de la santé-sécurité',
      'Évaluer les risques',
      'Maîtriser les risques',
      'Comprendre les responsabilités',
      'Investiguer les incidents',
      'Mesurer la performance',
      'Mobiliser et communiquer',
    ],
    featured: true,
  },
  {
    slug: 'iosh-managing-safely-refresher',
    title: 'IOSH Managing Safely Refresher',
    level: 'Intermédiaire',
    lessons: 4,
    description:
      'Une mise à jour des fondamentaux de IOSH Managing Safely pour actualiser les pratiques et reconnecter les managers aux enjeux actuels de prévention.',
    objectives: [
      'Actualiser ses connaissances en management de la sécurité',
      'Revoir les principes d’évaluation et de maîtrise des risques',
      'Renforcer ses pratiques de leadership et de communication',
    ],
    audience: [
      'Titulaires d’un certificat IOSH Managing Safely',
      'Managers souhaitant actualiser leurs pratiques',
      'Encadrants responsables de la prévention',
    ],
    program: [
      'Rappel des principes et responsabilités',
      'Actualités et évolutions de la prévention',
      'Évaluation des risques : bonnes pratiques',
      'Incidents, apprentissage et amélioration',
      'Leadership et culture de sécurité',
    ],
  },
  {
    slug: 'iosh-working-safely',
    title: 'IOSH Working Safely',
    level: 'Débutant',
    lessons: 9,
    description:
      'Une formation de sensibilisation pour tous les collaborateurs, centrée sur les comportements sûrs et la contribution de chacun à la prévention.',
    objectives: [
      'Comprendre pourquoi la santé-sécurité concerne chacun',
      'Identifier les risques courants et les bons réflexes',
      'Contribuer à améliorer la sécurité dans son équipe',
    ],
    audience: [
      'Tous les collaborateurs',
      'Équipes opérationnelles et intérimaires',
      'Nouveaux arrivants',
    ],
    program: [
      'Enjeux et responsabilités',
      'Dangers et risques courants',
      'Comportements sûrs et prévention',
      'Situations d’urgence',
      'Contribution individuelle et collective',
    ],
  },
  {
    slug: 'iosh-safety-executives-directors',
    title: 'IOSH Safety for Executives and Directors',
    level: 'Intermédiaire',
    description:
      'Un parcours conçu pour les dirigeants afin de comprendre leurs obligations, piloter la performance sécurité et donner le cap à l’organisation.',
    objectives: [
      'Situer ses responsabilités de dirigeant en santé-sécurité',
      'Comprendre les leviers de performance et de culture',
      'Intégrer la prévention dans la gouvernance et les décisions',
      'Donner l’exemple et rendre compte',
    ],
    audience: [
      'Dirigeants et membres de conseil',
      'Directeurs opérationnels',
      'Membres de comités de direction',
    ],
    program: [
      'Responsabilités juridiques et gouvernance',
      'Enjeux économiques et humains',
      'Leadership et culture de sécurité',
      'Indicateurs et pilotage',
      'Plan d’action à l’échelle de l’organisation',
    ],
  },
  {
    slug: 'iosh-managing-occupational-health-wellbeing',
    title: 'IOSH Managing Occupational Health and Wellbeing',
    level: 'Intermédiaire',
    description:
      'Comprendre les enjeux de santé au travail et de bien-être pour prévenir l’absentéisme, les risques psychosociaux et les maladies professionnelles.',
    objectives: [
      'Comprendre les principaux enjeux de santé au travail',
      'Identifier les facteurs de risque et les signaux d’alerte',
      'Mettre en place des actions de prévention et d’accompagnement',
      'Favoriser le retour au travail et le maintien dans l’emploi',
    ],
    audience: [
      'Managers et responsables RH',
      'Fonctions HSE et santé au travail',
      'Référents bien-être',
    ],
    program: [
      'Santé au travail : concepts et responsabilités',
      'Risques psychosociaux et charge mentale',
      'Troubles musculosquelettiques et ergonomie',
      'Prévention, dépistage et accompagnement',
      'Retour au travail et culture de santé',
    ],
  },
  {
    slug: 'iosh-leading-safely',
    title: 'IOSH Leading Safely',
    level: 'Intermédiaire',
    description:
      'Un parcours de leadership pour aligner la stratégie sécurité sur les objectifs de l’entreprise et créer les conditions d’une performance durable.',
    objectives: [
      'Comprendre le lien entre leadership, culture et performance',
      'Définir une vision et des priorités claires',
      'Mobiliser les équipes et les parties prenantes',
      'Suivre et valoriser les progrès',
    ],
    audience: [
      'Dirigeants et managers',
      'Responsables HSE',
      'Chefs de projet',
    ],
    program: [
      'Leadership et culture de sécurité',
      'Vision, stratégie et objectifs',
      'Communication et influence',
      'Décision et gestion des tensions',
      'Mesure et amélioration continue',
    ],
  },
  {
    slug: 'iosh-she-construction-site-managers',
    title: 'IOSH Safety, Health and Environment for Construction Site Managers',
    level: 'Intermédiaire',
    description:
      'Une formation dédiée aux managers de chantier pour intégrer la santé, la sécurité et l’environnement dans la conduite quotidienne des travaux.',
    objectives: [
      'Situer les responsabilités du manager de chantier',
      'Identifier et maîtriser les risques de construction',
      'Organiser la coactivité et la coordination',
      'Intégrer les enjeux environnementaux au chantier',
    ],
    audience: [
      'Chefs de chantier et conducteurs de travaux',
      'Managers de projet construction',
      'Responsables HSE chantier',
    ],
    program: [
      'Cadre et responsabilités du manager de chantier',
      'Risques majeurs de la construction',
      'Travaux en hauteur, fouilles et espaces confinés',
      'Coordination, sous-traitance et coactivité',
      'Environnement et gestion des nuisances de chantier',
      'Surveillance et amélioration',
    ],
  },
  {
    slug: 'iosh-managing-safely-aviation',
    title: 'IOSH Managing Safely in Airports and Aviation',
    level: 'Intermédiaire',
    description:
      'Une déclinaison de IOSH Managing Safely aux environnements aéroportuaires et à l’aviation, marqués par la coactivité et les risques spécifiques.',
    objectives: [
      'Appliquer les principes de management de la sécurité au contexte aéroportuaire',
      'Identifier les risques liés aux opérations au sol',
      'Organiser la prévention en environnement complexe',
      'Développer une culture de sécurité partagée',
    ],
    audience: [
      'Managers et superviseurs aéroportuaires',
      'Responsables HSE aviation',
      'Encadrants d’opérations au sol',
    ],
    program: [
      'Enjeux et cadre de la sécurité aéroportuaire',
      'Évaluation des risques opérationnels',
      'Coactivité, circulation et interfaces',
      'Incidents et retour d’expérience',
      'Culture de sécurité et facteurs humains',
    ],
  },
]

const isep: Seed[] = [
  {
    slug: 'isep-environmental-sustainability-workforce',
    title: 'ISEP Environmental Sustainability Skills for the Workforce',
    level: 'Débutant',
    lessons: 4,
    description:
      'Une sensibilisation à la durabilité environnementale pour tous les collaborateurs, afin de comprendre les impacts de son activité et les gestes utiles.',
    objectives: [
      'Comprendre les enjeux environnementaux et la durabilité',
      'Identifier les impacts de son poste de travail',
      'Adopter des pratiques plus responsables',
    ],
    audience: [
      'Tous les collaborateurs',
      'Équipes opérationnelles',
      'Nouveaux arrivants',
    ],
    program: [
      'Enjeux planétaires et cadre du développement durable',
      'Impacts environnementaux des activités',
      'Énergie, eau, déchets et mobilité',
      'Bonnes pratiques au poste de travail',
    ],
  },
  {
    slug: 'isep-environmental-sustainability-managers',
    title: 'ISEP Environmental Sustainability Skills for Managers',
    level: 'Intermédiaire',
    lessons: 4,
    description:
      'Pour les managers : intégrer la durabilité dans les décisions, les projets et le pilotage de l’équipe.',
    objectives: [
      'Comprendre les leviers de durabilité à l’échelle managériale',
      'Intégrer les critères environnementaux dans les décisions',
      'Mobiliser son équipe autour d’objectifs durables',
    ],
    audience: [
      'Managers et responsables d’équipe',
      'Chefs de projet',
      'Fonctions support',
    ],
    program: [
      'Durabilité et performance de l’organisation',
      'Enjeux matériels et parties prenantes',
      'Décision et arbitrage environnemental',
      'Indicateurs et animation d’équipe',
      'Plan d’action managérial',
    ],
  },
  {
    slug: 'isep-foundation-certificate',
    title: 'ISEP Foundation Certificate in Sustainability & Environmental Management',
    level: 'Débutant',
    description:
      'Une base reconnue en management environnemental et durabilité, pour comprendre les principes et démarrer une démarche structurée.',
    objectives: [
      'Comprendre les principes du management environnemental',
      'Identifier les impacts et les obligations',
      'Contribuer à une démarche de durabilité',
    ],
    audience: [
      'Fonctions support et opérationnelles',
      'Responsables environnement débutants',
      'Managers souhaitant une base reconnue',
    ],
    program: [
      'Concepts de durabilité et d’environnement',
      'Cadre réglementaire et parties intéressées',
      'Aspects et impacts environnementaux',
      'Systèmes de management et amélioration',
    ],
  },
  {
    slug: 'isep-certificate-sustainability-environmental-management',
    title: 'ISEP Certificate in Sustainability & Environmental Management',
    level: 'Intermédiaire',
    description:
      'Un certificat professionnel pour concevoir et piloter une démarche de durabilité et de management environnemental au sein de son organisation.',
    objectives: [
      'Élaborer une stratégie environnementale et de durabilité',
      'Mettre en place un système de management environnemental',
      'Mobiliser les parties prenantes',
      'Mesurer et améliorer la performance',
    ],
    audience: [
      'Responsables environnement et RSE',
      'Consultants et chefs de projet',
      'Managers impliqués dans une démarche ISO 14001',
    ],
    program: [
      'Stratégie et gouvernance de la durabilité',
      'Cadre réglementaire et normatif',
      'Analyse des impacts et des risques',
      'Système de management environnemental',
      'Parties prenantes et reporting',
      'Performance et amélioration continue',
    ],
  },
  {
    slug: 'isep-carbon-footprinting-reporting',
    title: 'ISEP Carbon Footprinting and Reporting',
    level: 'Intermédiaire',
    description:
      'Apprendre à calculer un bilan carbone, à interpréter les résultats et à produire un reporting crédible pour ses parties prenantes.',
    objectives: [
      'Comprendre les principes du bilan carbone',
      'Définir le périmètre et collecter les données',
      'Calculer et analyser les émissions',
      'Construire un plan de réduction et un reporting',
    ],
    audience: [
      'Responsables environnement et RSE',
      'Équipes finance et achats',
      'Chefs de projet bas carbone',
    ],
    program: [
      'Enjeux climatiques et cadre international',
      'Périmètres et scopes d’émissions',
      'Méthodes de calcul et facteurs d’émission',
      'Qualité des données et incertitudes',
      'Plan de réduction et reporting',
    ],
  },
  {
    slug: 'isep-diploma-sustainable-business',
    title: 'ISEP Diploma in Sustainable Business Practice',
    level: 'Avancé',
    description:
      'Un diplôme avancé pour intégrer la durabilité au cœur de la stratégie, du modèle d’affaires et de la gouvernance.',
    objectives: [
      'Intégrer la durabilité dans la stratégie d’entreprise',
      'Évaluer les risques et opportunités ESG',
      'Concevoir un modèle d’affaires durable',
      'Piloter la transformation et le reporting',
    ],
    audience: [
      'Dirigeants et responsables RSE',
      'Directeurs de la stratégie',
      'Consultants en transformation durable',
    ],
    program: [
      'Durabilité et création de valeur',
      'Stratégie et gouvernance ESG',
      'Analyse de matérialité et parties prenantes',
      'Innovation et modèles d’affaires durables',
      'Mesure, reporting et assurance',
      'Conduite du changement',
    ],
  },
  {
    slug: 'isep-pathways-net-zero',
    title: 'ISEP Pathways to Net Zero',
    level: 'Intermédiaire',
    description:
      'Comprendre les trajectoires de décarbonation et construire une feuille de route net zéro réaliste pour son organisation.',
    objectives: [
      'Comprendre les engagements et trajectoires net zéro',
      'Évaluer la situation de son organisation',
      'Construire une feuille de route de décarbonation',
      'Suivre les progrès et éviter le greenwashing',
    ],
    audience: [
      'Responsables RSE et environnement',
      'Directions stratégie et opérations',
      'Chefs de projet climat',
    ],
    program: [
      'Climat, accords internationaux et net zéro',
      'Empreinte carbone et scopes',
      'Leviers de réduction et trajectoires',
      'Gouvernance et financement',
      'Indicateurs, reporting et transparence',
    ],
  },
  {
    slug: 'isep-leading-environmental-sustainability',
    title: 'ISEP Leading with Environmental Sustainability',
    level: 'Intermédiaire',
    description:
      'Un parcours de leadership pour porter la durabilité environnementale au plus haut niveau de l’organisation et entraîner l’ensemble des équipes.',
    objectives: [
      'Comprendre le rôle du leadership dans la transformation durable',
      'Définir une ambition et des priorités',
      'Mobiliser les équipes et les partenaires',
      'Ancrer la durabilité dans la culture',
    ],
    audience: [
      'Dirigeants et managers',
      'Responsables RSE et environnement',
      'Membres de comités de direction',
    ],
    program: [
      'Leadership et durabilité',
      'Vision, ambition et parties prenantes',
      'Influence et communication',
      'Décision et gestion des contradictions',
      'Culture et conduite du changement',
    ],
  },
  {
    slug: 'isep-iso-14001-lead-auditor',
    title: 'ISEP ISO 14001 Lead Environmental Auditor',
    level: 'Avancé',
    description:
      'Préparer les auditeurs à conduire des audits de systèmes de management environnemental conformes à l’ISO 14001 et aux principes d’audit.',
    objectives: [
      'Maîtriser les exigences de l’ISO 14001',
      'Planifier et conduire un audit de SME',
      'Collecter et analyser les preuves',
      'Rédiger le rapport et suivre les actions',
    ],
    audience: [
      'Auditeurs internes et externes',
      'Responsables environnement et QHSE',
      'Consultants en management environnemental',
    ],
    program: [
      'Structure et exigences de l’ISO 14001',
      'Principes et normes d’audit',
      'Préparation et plan d’audit',
      'Techniques d’entretien et de collecte de preuves',
      'Rapport, conclusions et suivi',
      'Compétences et déontologie de l’auditeur',
    ],
  },
  {
    slug: 'isep-iso-14001-internal-auditor',
    title: 'ISEP ISO 14001 Internal Auditor',
    level: 'Intermédiaire',
    description:
      'Former les auditeurs internes à évaluer la conformité et l’efficacité du système de management environnemental de leur organisation.',
    objectives: [
      'Comprendre les exigences de l’ISO 14001',
      'Préparer et réaliser un audit interne',
      'Identifier les écarts et formuler des constats',
      'Contribuer à l’amélioration continue',
    ],
    audience: [
      'Auditeurs internes',
      'Responsables environnement et QHSE',
      'Pilotes de processus',
    ],
    program: [
      'Exigences clés de l’ISO 14001',
      'Rôle et compétences de l’auditeur interne',
      'Préparation de l’audit',
      'Conduite de l’audit et collecte de preuves',
      'Constats, rapport et suivi des actions',
    ],
  },
]

const iso: Seed[] = [
  {
    slug: 'iso-9001-lead-auditor',
    title: 'ISO 9001 Lead Auditor',
    level: 'Avancé',
    lessons: 8,
    description:
      'Former des auditeurs capables de planifier, conduire et rapporter un audit du système de management de la qualité selon l’ISO 9001.',
    objectives: [
      'Maîtriser les exigences et principes de l’ISO 9001',
      'Planifier et conduire un audit qualité',
      'Collecter et évaluer les preuves objectivement',
      'Rédiger un rapport et suivre les actions correctives',
    ],
    audience: [
      'Auditeurs internes et externes',
      'Responsables qualité',
      'Consultants et chefs de projet qualité',
    ],
    program: [
      'Structure et exigences de l’ISO 9001',
      'Principes et vocabulaire de l’audit',
      'Programme et plan d’audit',
      'Techniques d’entretien et d’échantillonnage',
      'Constats, non-conformités et rapport',
      'Suivi et clôture de l’audit',
    ],
    featured: true,
  },
  {
    slug: 'iso-14001-lead-auditor',
    title: 'ISO 14001 Lead Auditor',
    level: 'Avancé',
    lessons: 8,
    description:
      'Préparer les auditeurs à évaluer un système de management environnemental conforme à l’ISO 14001 et à en améliorer l’efficacité.',
    objectives: [
      'Maîtriser les exigences de l’ISO 14001',
      'Préparer et conduire un audit environnemental',
      'Évaluer la conformité et l’efficacité du système',
      'Formuler des constats et suivre les plans d’action',
    ],
    audience: [
      'Auditeurs environnement',
      'Responsables QHSE et environnement',
      'Consultants',
    ],
    program: [
      'Exigences et logique de l’ISO 14001',
      'Cadre et principes de l’audit',
      'Préparation et planification',
      'Conduite de l’audit et preuves',
      'Rapport, non-conformités et suivi',
      'Déontologie de l’auditeur',
    ],
  },
  {
    slug: 'iso-45001-lead-auditor',
    title: 'ISO 45001 Lead Auditor',
    level: 'Avancé',
    lessons: 8,
    description:
      'Former des auditeurs de systèmes de management de la santé et de la sécurité au travail conformes à l’ISO 45001.',
    objectives: [
      'Comprendre les exigences de l’ISO 45001',
      'Planifier et réaliser un audit SST',
      'Évaluer les risques et les mesures de maîtrise',
      'Rapporter les constats et suivre les actions',
    ],
    audience: [
      'Auditeurs SST',
      'Responsables HSE',
      'Consultants et formateurs',
    ],
    program: [
      'Structure et exigences de l’ISO 45001',
      'Principes et programme d’audit',
      'Préparation et plan d’audit',
      'Entretiens, observation et preuves',
      'Non-conformités, rapport et suivi',
      'Compétences de l’auditeur',
    ],
    featured: true,
  },
  {
    slug: 'iso-22000-lead-auditor',
    title: 'ISO 22000 Lead Auditor',
    level: 'Avancé',
    lessons: 8,
    description:
      'Préparer les auditeurs à évaluer un système de management de la sécurité des denrées alimentaires selon l’ISO 22000.',
    objectives: [
      'Maîtriser les exigences de l’ISO 22000',
      'Comprendre les principes HACCP et les programmes prérequis',
      'Conduire un audit de sécurité alimentaire',
      'Rapporter et suivre les actions',
    ],
    audience: [
      'Auditeurs agroalimentaires',
      'Responsables qualité et sécurité des aliments',
      'Consultants HACCP',
    ],
    program: [
      'Exigences de l’ISO 22000',
      'HACCP, PRP et analyse des dangers',
      'Programme et préparation d’audit',
      'Conduite de l’audit sur site',
      'Constats, rapport et suivi',
      'Compétences de l’auditeur',
    ],
  },
  {
    slug: 'iso-9001-lead-implementer',
    title: 'ISO 9001 Lead Implementer',
    level: 'Avancé',
    lessons: 12,
    description:
      'Accompagner la mise en place d’un système de management de la qualité conforme à l’ISO 9001, de la conception à la certification.',
    objectives: [
      'Interpréter les exigences de l’ISO 9001',
      'Concevoir et déployer un système de management qualité',
      'Piloter les processus et les risques',
      'Préparer l’organisation à l’audit de certification',
    ],
    audience: [
      'Responsables qualité et chefs de projet',
      'Consultants en management',
      'Pilotes de processus',
    ],
    program: [
      'Enjeux et exigences de l’ISO 9001',
      'Cadrage et périmètre du système',
      'Approche processus et analyse des risques',
      'Déploiement, documentation et compétences',
      'Mesure, audit interne et revue de direction',
      'Préparation à la certification',
    ],
  },
  {
    slug: 'iso-14001-lead-implementer',
    title: 'ISO 14001 Lead Implementer',
    level: 'Avancé',
    lessons: 12,
    description:
      'Concevoir et déployer un système de management environnemental conforme à l’ISO 14001 et en piloter l’amélioration.',
    objectives: [
      'Interpréter les exigences de l’ISO 14001',
      'Structurer la démarche et le périmètre',
      'Identifier les aspects et impacts environnementaux',
      'Préparer la certification et l’amélioration continue',
    ],
    audience: [
      'Responsables environnement',
      'Chefs de projet certification',
      'Consultants QHSE',
    ],
    program: [
      'Exigences de l’ISO 14001',
      'Cadrage, contexte et parties intéressées',
      'Aspects environnementaux et conformité',
      'Objectifs, programmes et ressources',
      'Surveillance, audit interne et revue',
      'Préparation à la certification',
    ],
  },
  {
    slug: 'iso-45001-lead-implementer',
    title: 'ISO 45001 Lead Implementer',
    level: 'Avancé',
    lessons: 12,
    description:
      'Mettre en place un système de management de la santé et de la sécurité au travail conforme à l’ISO 45001 et le faire vivre au quotidien.',
    objectives: [
      'Interpréter les exigences de l’ISO 45001',
      'Organiser la démarche et la participation des travailleurs',
      'Évaluer les risques et définir les mesures de maîtrise',
      'Préparer la certification et l’amélioration continue',
    ],
    audience: [
      'Responsables HSE',
      'Chefs de projet certification',
      'Consultants et préventeurs',
    ],
    program: [
      'Exigences de l’ISO 45001',
      'Contexte, parties intéressées et participation',
      'Identification des dangers et évaluation des risques',
      'Objectifs, plans d’action et ressources',
      'Surveillance, audit interne et revue',
      'Préparation à la certification',
    ],
  },
  {
    slug: 'iso-22000-lead-implementer',
    title: 'ISO 22000 Lead Implementer',
    level: 'Avancé',
    lessons: 12,
    description:
      'Structurer et déployer un système de management de la sécurité des denrées alimentaires conforme à l’ISO 22000.',
    objectives: [
      'Interpréter les exigences de l’ISO 22000',
      'Organiser les PRP et l’analyse des dangers',
      'Déployer les mesures de maîtrise',
      'Préparer la certification et l’amélioration',
    ],
    audience: [
      'Responsables qualité agroalimentaire',
      'Chefs de projet certification',
      'Consultants HACCP et sécurité des aliments',
    ],
    program: [
      'Exigences de l’ISO 22000',
      'Programmes prérequis et HACCP',
      'Analyse des dangers et points de maîtrise',
      'Mise en œuvre et compétences',
      'Vérification, audit et revue',
      'Préparation à la certification',
    ],
  },
  {
    slug: 'iso-31000',
    title: 'ISO 31000 — Management du risque',
    level: 'Intermédiaire',
    description:
      'Comprendre le cadre et les principes de l’ISO 31000 pour structurer une démarche de management du risque cohérente avec la stratégie de l’organisation.',
    objectives: [
      'Comprendre les principes et le cadre de l’ISO 31000',
      'Identifier et analyser les risques',
      'Définir un traitement et un suivi adaptés',
      'Intégrer le risque dans la gouvernance',
    ],
    audience: [
      'Managers et responsables de processus',
      'Responsables QHSE et risques',
      'Chefs de projet',
    ],
    program: [
      'Principes et cadre de référence',
      'Gouvernance et appétence au risque',
      'Identification et analyse des risques',
      'Évaluation et traitement',
      'Communication, surveillance et revue',
    ],
  },
  {
    slug: 'iso-19011',
    title: 'ISO 19011 — Audit des systèmes de management',
    level: 'Intermédiaire',
    description:
      'Maîtriser les lignes directrices de l’ISO 19011 pour conduire des audits internes utiles et rigoureux, quel que soit le référentiel.',
    objectives: [
      'Comprendre les principes de l’audit',
      'Préparer et conduire un audit interne',
      'Développer les compétences relationnelles de l’auditeur',
      'Rapporter et suivre les conclusions',
    ],
    audience: [
      'Auditeurs internes',
      'Responsables qualité et QHSE',
      'Pilotes de processus',
    ],
    program: [
      'Principes et vocabulaire de l’audit',
      'Programme et gestion des audits',
      'Préparation et collecte de preuves',
      'Techniques d’entretien et gestion des situations difficiles',
      'Rapport, constats et suivi',
      'Compétences et évaluation de l’auditeur',
    ],
  },
  {
    slug: 'iso-27001',
    title: 'ISO 27001 — Management de la sécurité de l’information',
    level: 'Intermédiaire',
    description:
      'Comprendre les exigences de l’ISO 27001 et les bonnes pratiques pour protéger l’information et piloter un système de management de la sécurité.',
    objectives: [
      'Comprendre les exigences de l’ISO 27001',
      'Identifier les actifs et les risques informationnels',
      'Sélectionner et mettre en œuvre les mesures de sécurité',
      'Préparer l’organisation à un audit',
    ],
    audience: [
      'Responsables sécurité de l’information',
      'Directions des systèmes d’information',
      'Chefs de projet conformité',
    ],
    program: [
      'Enjeux et exigences de l’ISO 27001',
      'Analyse des risques et actifs',
      'Mesures de sécurité et annexe A',
      'Politiques, rôles et compétences',
      'Surveillance, audit et amélioration',
    ],
  },
]

const proqual: Seed[] = [
  {
    slug: 'proqual-level-2-mental-health-first-aid',
    title: 'ProQual Level 2 Award in Mental Health First Aid Awareness',
    level: 'Débutant',
    lessons: 1,
    description:
      'Une qualification courte pour comprendre les signes de détresse en santé mentale et adopter une première posture d’aide.',
    objectives: [
      'Reconnaître les signes de détresse psychologique',
      'Comprendre son rôle et ses limites',
      'Orienter vers les ressources adaptées',
    ],
    audience: [
      'Tous les collaborateurs',
      'Managers et référents',
      'Membres de l’équipe RH',
    ],
    program: [
      'Santé mentale : représentations et enjeux',
      'Signes d’alerte et facteurs de risque',
      'Première écoute et communication',
      'Orientation et confidentialité',
    ],
  },
  {
    slug: 'proqual-level-2-youth-mental-health-first-aid',
    title: 'ProQual Level 2 Award in Youth Mental First Aid Awareness',
    level: 'Débutant',
    lessons: 1,
    description:
      'Une sensibilisation aux enjeux de santé mentale des jeunes et aux premiers gestes d’accompagnement.',
    objectives: [
      'Comprendre les spécificités de la santé mentale des jeunes',
      'Identifier les signes d’alerte',
      'Adopter une posture d’écoute et orienter',
    ],
    audience: [
      'Encadrants et éducateurs',
      'Personnels au contact de jeunes',
      'Responsables associatifs',
    ],
    program: [
      'Santé mentale des jeunes : repères',
      'Signes d’alerte et facteurs de vulnérabilité',
      'Écoute et communication adaptée',
      'Orientation et protection',
    ],
  },
  {
    slug: 'proqual-level-3-health-safety',
    title: 'ProQual Level 3 Certificate in Health & Safety',
    level: 'Intermédiaire',
    lessons: 1,
    description:
      'Une qualification professionnelle pour renforcer les compétences des personnes chargées de la prévention au quotidien.',
    objectives: [
      'Comprendre les principes de la santé-sécurité',
      'Contribuer à l’évaluation et à la maîtrise des risques',
      'Participer à la surveillance et à l’amélioration',
    ],
    audience: [
      'Animateurs et référents prévention',
      'Encadrants de proximité',
      'Professionnels en reconversion',
    ],
    program: [
      'Principes et cadre de la santé-sécurité',
      'Dangers et évaluation des risques',
      'Mesures de prévention et de protection',
      'Surveillance, incidents et amélioration',
      'Communication et participation',
    ],
  },
  {
    slug: 'proqual-level-7-strategic-health-safety',
    title: 'ProQual Level 7 Diploma in Strategic Health & Safety',
    level: 'Avancé',
    lessons: 1,
    description:
      'Un diplôme avancé pour les professionnels qui pilotent la stratégie santé-sécurité et la performance organisationnelle.',
    objectives: [
      'Élaborer une stratégie santé-sécurité à l’échelle de l’organisation',
      'Piloter la gouvernance et la culture',
      'Évaluer et maîtriser les risques complexes',
      'Développer la performance et l’innovation',
    ],
    audience: [
      'Directeurs et responsables HSE',
      'Consultants seniors',
      'Cadres dirigeants',
    ],
    program: [
      'Stratégie et gouvernance HSE',
      'Culture, leadership et changement',
      'Gestion avancée des risques',
      'Performance, mesure et reporting',
      'Innovation et amélioration continue',
    ],
  },
]

const securiteOperationnelle: Seed[] = [
  {
    slug: 'espaces-confines',
    title: 'Espaces confinés — prévention et intervention',
    level: 'Débutant',
    lessons: 4,
    description:
      'Comprendre les dangers des espaces confinés et organiser une intervention sûre, de la préparation au sauvetage.',
    objectives: [
      'Identifier les espaces confinés et leurs dangers',
      'Comprendre les procédures d’entrée et de surveillance',
      'Réagir face à une situation d’urgence',
    ],
    audience: [
      'Techniciens et opérateurs',
      'Superviseurs de travaux',
      'Équipes de maintenance',
    ],
    program: [
      'Définition et dangers des espaces confinés',
      'Évaluation des risques et atmosphère',
      'Autorisation d’entrée et rôles',
      'Équipements de protection et de secours',
      'Procédures d’urgence et sauvetage',
    ],
    featured: true,
  },
  {
    slug: 'travail-en-hauteur',
    title: 'Travail en hauteur — prévention des chutes',
    level: 'Débutant',
    lessons: 4,
    description:
      'Prévenir les chutes de hauteur par l’organisation du travail, les protections collectives et l’usage maîtrisé des équipements.',
    objectives: [
      'Identifier les situations de travail en hauteur',
      'Choisir les protections collectives et individuelles adaptées',
      'Contrôler les équipements avant utilisation',
    ],
    audience: [
      'Opérateurs et techniciens',
      'Chefs d’équipe et superviseurs',
      'Personnels de maintenance',
    ],
    program: [
      'Enjeux et réglementation',
      'Hiérarchie des protections contre les chutes',
      'Échelles, échafaudages et plateformes',
      'Harnais, antichute et points d’ancrage',
      'Organisation, secours et vérifications',
    ],
  },
  {
    slug: 'permis-de-travail',
    title: 'Permis de travail et maîtrise des travaux dangereux',
    level: 'Intermédiaire',
    description:
      'Structurer un système de permis de travail pour sécuriser les interventions à risque et coordonner les différents métiers.',
    objectives: [
      'Comprendre les principes du permis de travail',
      'Identifier les travaux nécessitant un permis',
      'Organiser la préparation, la surveillance et la clôture',
    ],
    audience: [
      'Responsables de site et d’exploitation',
      'Superviseurs et chargés de travaux',
      'Responsables HSE',
    ],
    program: [
      'Quand et pourquoi un permis de travail',
      'Types de permis et champs d’application',
      'Préparation et analyse des risques',
      'Rôles, autorisations et communications',
      'Surveillance, clôture et retour d’expérience',
    ],
  },
  {
    slug: 'substances-dangereuses',
    title: 'Substances et mélanges dangereux — maîtrise du risque chimique',
    level: 'Débutant',
    lessons: 4,
    description:
      'Comprendre le risque chimique, lire les informations de sécurité et mettre en place les mesures de prévention adaptées.',
    objectives: [
      'Identifier les substances dangereuses présentes au poste',
      'Comprendre les pictogrammes et les fiches de données de sécurité',
      'Appliquer les mesures de prévention et de protection',
    ],
    audience: [
      'Opérateurs exposés aux produits chimiques',
      'Magasiniers et acheteurs',
      'Responsables HSE',
    ],
    program: [
      'Définitions et voies d’exposition',
      'Étiquetage, pictogrammes et FDS',
      'Évaluation du risque chimique',
      'Substitution, ventilation et protections',
      'Stockage, déchets et situations d’urgence',
    ],
  },
  {
    slug: 'bruit-evaluation-risque',
    title: 'Bruit — évaluation et prévention du risque auditif',
    level: 'Débutant',
    lessons: 4,
    description:
      'Évaluer l’exposition au bruit, comprendre ses effets sur la santé et mettre en place une prévention efficace.',
    objectives: [
      'Comprendre les effets du bruit sur l’audition',
      'Réaliser une évaluation simple de l’exposition',
      'Choisir et vérifier les protections auditives',
    ],
    audience: [
      'Responsables HSE',
      'Encadrants d’ateliers bruyants',
      'Techniciens de maintenance',
    ],
    program: [
      'Physique du bruit et effets sur la santé',
      'Mesure et interprétation des niveaux',
      'Valeurs limites et réglementation',
      'Réduction à la source et organisation',
      'Protections auditives et suivi audiométrique',
    ],
  },
  {
    slug: 'manutention-manuelle',
    title: 'Manutention manuelle et prévention des troubles musculosquelettiques',
    level: 'Débutant',
    lessons: 4,
    description:
      'Adopter les bonnes pratiques de manutention et comprendre les principes d’ergonomie pour préserver sa santé au travail.',
    objectives: [
      'Comprendre les risques liés à la manutention',
      'Adopter des gestes et postures adaptés',
      'Contribuer à l’amélioration ergonomique du poste',
    ],
    audience: [
      'Opérateurs et magasiniers',
      'Équipes logistiques',
      'Encadrants de proximité',
    ],
    program: [
      'Anatomie et troubles musculosquelettiques',
      'Gestes et postures de manutention',
      'Aides mécaniques et organisation',
      'Échauffement et récupération',
      'Analyse ergonomique du poste',
    ],
  },
  {
    slug: 'glissades-trebuchements-chutes',
    title: 'Glissades, trébuchements et chutes de plain-pied',
    level: 'Débutant',
    lessons: 4,
    description:
      'Identifier les causes des chutes de plain-pied et mettre en place des mesures simples pour sécuriser les circulations.',
    objectives: [
      'Identifier les situations à risque de chute',
      'Comprendre les principes d’ordre et de propreté',
      'Proposer des améliorations adaptées',
    ],
    audience: [
      'Tous les collaborateurs',
      'Équipes de nettoyage et de maintenance',
      'Encadrants',
    ],
    program: [
      'Statistiques et conséquences des chutes',
      'Causes : sols, encombrement, éclairage, chaussures',
      'Bonnes pratiques d’ordre et de propreté',
      'Signalisation et gestion des zones humides',
      'Analyse d’incidents et amélioration',
    ],
  },
  {
    slug: 'meules-abrasives',
    title: 'Meules abrasives — sécurité et enquête après incident',
    level: 'Intermédiaire',
    description:
      'Maîtriser les risques liés aux meules abrasives et conduire une enquête rigoureuse en cas d’accident.',
    objectives: [
      'Comprendre les dangers des meules abrasives',
      'Appliquer les règles de montage et d’utilisation',
      'Conduire une enquête après incident',
    ],
    audience: [
      'Opérateurs et techniciens',
      'Responsables d’atelier',
      'Enquêteurs HSE',
    ],
    program: [
      'Types de meules et dangers',
      'Montage, équilibrage et contrôle',
      'Protections et équipements de protection',
      'Causes d’éclatement et prévention',
      'Méthode d’enquête et actions correctives',
    ],
  },
  {
    slug: 'identification-des-dangers',
    title: 'Techniques d’identification des dangers',
    level: 'Intermédiaire',
    description:
      'Apprendre à repérer les dangers de manière systématique avant qu’ils ne se transforment en accident.',
    objectives: [
      'Comprendre les différentes familles de dangers',
      'Utiliser des méthodes d’identification structurées',
      'Prioriser les dangers et les actions',
    ],
    audience: [
      'Responsables HSE',
      'Managers et chefs de projet',
      'Membres de groupes de travail',
    ],
    program: [
      'Danger, risque et séquence accidentelle',
      'Observation de terrain et entretiens',
      'Méthodes : check-lists, arbre des causes, HAZOP',
      'Analyse des tâches et des interfaces',
      'Priorisation et plan d’action',
    ],
  },
  {
    slug: 'evaluation-des-risques',
    title: 'Évaluation des risques — de l’analyse au plan d’action',
    level: 'Débutant',
    lessons: 5,
    description:
      'Construire une évaluation des risques utile, compréhensible et réellement suivie par les équipes.',
    objectives: [
      'Comprendre la démarche d’évaluation des risques',
      'Identifier les dangers et les personnes exposées',
      'Définir des mesures de maîtrise proportionnées',
      'Suivre et réviser l’évaluation',
    ],
    audience: [
      'Managers et encadrants',
      'Référents prévention',
      'Pilotes de processus',
    ],
    program: [
      'Principes et exigences',
      'Préparation et découpage des activités',
      'Identification des dangers et des expositions',
      'Estimation et hiérarchisation',
      'Mesures de maîtrise et plan d’action',
      'Documentation, communication et révision',
    ],
    featured: true,
  },
  {
    slug: 'securite-pour-managers',
    title: 'Sécurité pour les managers',
    level: 'Intermédiaire',
    description:
      'Outiller les managers pour qu’ils assument leur rôle de prévention au quotidien et entraînent leurs équipes.',
    objectives: [
      'Comprendre ses responsabilités managériales',
      'Intégrer la sécurité dans les routines de management',
      'Réagir face aux écarts et aux incidents',
    ],
    audience: [
      'Managers et superviseurs',
      'Chefs d’équipe',
      'Responsables opérationnels',
    ],
    program: [
      'Responsabilités et exemplarité',
      'Animation sécurité et communication',
      'Observation des situations de travail',
      'Gestion des écarts et des comportements',
      'Incidents, apprentissage et amélioration',
    ],
  },
  {
    slug: 'securite-pour-representants',
    title: 'Sécurité pour les représentants du personnel',
    level: 'Intermédiaire',
    description:
      'Renforcer le rôle des représentants du personnel dans la prévention et le dialogue social sur la santé-sécurité.',
    objectives: [
      'Comprendre le cadre et les instances de prévention',
      'Participer à l’analyse des risques',
      'Formuler des propositions constructives',
    ],
    audience: [
      'Représentants du personnel',
      'Membres de commissions sécurité',
      'Délégués syndicaux',
    ],
    program: [
      'Cadre réglementaire et instances',
      'Rôle et moyens des représentants',
      'Analyse des situations de travail',
      'Dialogue social et construction de propositions',
      'Suivi des actions',
    ],
  },
  {
    slug: 'hazop',
    title: 'HAZOP — analyse des risques des procédés',
    level: 'Avancé',
    description:
      'Maîtriser la méthode HAZOP pour analyser les déviations des procédés et renforcer la sécurité des installations.',
    objectives: [
      'Comprendre les principes et le champ d’application du HAZOP',
      'Préparer et animer une étude HAZOP',
      'Formuler et prioriser les recommandations',
    ],
    audience: [
      'Ingénieurs procédés et sécurité',
      'Chefs de projet industriels',
      'Exploitants d’installations',
    ],
    program: [
      'Fondamentaux de l’analyse de risques',
      'Nœuds, paramètres et mots guides',
      'Préparation des données et de l’équipe',
      'Animation et documentation de l’étude',
      'Recommandations, suivi et revalidation',
    ],
  },
  {
    slug: 'gestion-des-entreprises-externes',
    title: 'Gestion des entreprises extérieures et de la coactivité',
    level: 'Intermédiaire',
    description:
      'Prévenir les risques liés aux interventions d’entreprises extérieures et à la coactivité sur un même site.',
    objectives: [
      'Comprendre les risques de la coactivité',
      'Organiser la sélection et l’accueil des prestataires',
      'Coordonner les plans de prévention et les permis',
    ],
    audience: [
      'Responsables de site et acheteurs',
      'Chargés de travaux',
      'Responsables HSE',
    ],
    program: [
      'Risques de la coactivité et cadre réglementaire',
      'Sélection et évaluation des prestataires',
      'Accueil, formation et communication',
      'Plans de prévention et permis de travail',
      'Surveillance, incidents et bilan',
    ],
  },
]

const incendieUrgences: Seed[] = [
  {
    slug: 'evaluation-risque-incendie',
    title: 'Évaluation du risque incendie',
    level: 'Débutant',
    lessons: 4,
    description:
      'Identifier les causes et les facteurs de propagation du feu, évaluer le risque et définir les mesures de prévention.',
    objectives: [
      'Comprendre le comportement du feu',
      'Identifier les dangers et les personnes exposées',
      'Définir des mesures de prévention et de protection',
    ],
    audience: [
      'Responsables HSE',
      'Gestionnaires de bâtiments',
      'Référents incendie',
    ],
    program: [
      'Combustion et propagation',
      'Causes d’incendie et scénarios',
      'Évaluation du risque',
      'Prévention, détection et moyens de secours',
      'Documentation et mise à jour',
    ],
    featured: true,
  },
  {
    slug: 'gestion-securite-incendie',
    title: 'Gestion de la sécurité incendie',
    level: 'Intermédiaire',
    description:
      'Organiser la sécurité incendie au quotidien : rôles, consignes, maintenance et exercices.',
    objectives: [
      'Structurer l’organisation de la sécurité incendie',
      'Définir les rôles et les consignes',
      'Planifier la maintenance et les exercices',
    ],
    audience: [
      'Responsables sécurité et HSE',
      'Gestionnaires d’établissements',
      'Équipes de sécurité',
    ],
    program: [
      'Organisation et responsabilités',
      'Consignes et plans d’évacuation',
      'Maintenance des installations',
      'Exercices et retours d’expérience',
      'Coordination avec les secours',
    ],
  },
  {
    slug: 'serre-file',
    title: 'Serre-file et guide-file',
    level: 'Débutant',
    description:
      'Préparer les membres de l’organisation à encadrer une évacuation et à sécuriser les cheminements.',
    objectives: [
      'Comprendre son rôle de serre-file ou guide-file',
      'Connaître les cheminements et points de rassemblement',
      'Réagir efficacement lors d’un exercice ou d’une évacuation',
    ],
    audience: [
      'Membres des équipes de sécurité',
      'Référents d’étage ou de zone',
      'Encadrants',
    ],
    program: [
      'Organisation de l’évacuation',
      'Rôles et consignes',
      'Reconnaissance des cheminements',
      'Accompagnement des personnes',
      'Exercices pratiques',
    ],
  },
  {
    slug: 'premiers-secours-travail',
    title: 'Premiers secours au travail',
    level: 'Débutant',
    description:
      'Acquérir les gestes de premiers secours pour intervenir efficacement auprès d’une victime en attendant les secours.',
    objectives: [
      'Protéger et alerter',
      'Évaluer l’état d’une victime',
      'Réaliser les gestes de premiers secours adaptés',
    ],
    audience: [
      'Sauveteurs secouristes du travail',
      'Collaborateurs désignés',
      'Encadrants',
    ],
    program: [
      'Protection et alerte',
      'Examen de la victime',
      'Hémorragies et plaies',
      'Arrêt cardiaque et défibrillation',
      'Malaise, brûlure et traumatisme',
    ],
    featured: true,
  },
  {
    slug: 'premiers-secours-recyclage',
    title: 'Recyclage premiers secours',
    level: 'Intermédiaire',
    description:
      'Actualiser ses gestes de premiers secours et vérifier sa capacité à intervenir en situation réelle.',
    objectives: [
      'Réviser les gestes essentiels',
      'Corriger les pratiques et actualiser ses connaissances',
      'Maintenir sa capacité d’intervention',
    ],
    audience: [
      'Sauveteurs secouristes déjà formés',
      'Membres d’équipes de secours',
      'Encadrants',
    ],
    program: [
      'Retour sur les situations vécues',
      'Révision des gestes de secours',
      'Mises en situation',
      'Actualités et évolutions des recommandations',
    ],
  },
  {
    slug: 'secours-urgence-vie',
    title: 'Secours d’urgence et gestes qui sauvent',
    level: 'Débutant',
    description:
      'Un module pratique pour acquérir les réflexes essentiels face à une urgence vitale.',
    objectives: [
      'Alerter efficacement les secours',
      'Réaliser les gestes de survie',
      'Adopter une posture sécurisante',
    ],
    audience: [
      'Tous les collaborateurs',
      'Équipes isolées ou exposées',
      'Nouveaux arrivants',
    ],
    program: [
      'Alerte et transmission des informations',
      'Massage cardiaque et défibrillateur',
      'Étouffement et hémorragie',
      'Position d’attente et surveillance',
    ],
  },
  {
    slug: 'exercices-evacuation-urgence',
    title: 'Exercices d’évacuation et gestion d’urgence',
    level: 'Avancé',
    lessons: 10,
    description:
      'Concevoir, conduire et exploiter des exercices d’évacuation réalistes pour améliorer la préparation de l’organisation.',
    objectives: [
      'Concevoir un scénario d’exercice pertinent',
      'Organiser et sécuriser l’exercice',
      'Analyser les résultats et améliorer le plan',
    ],
    audience: [
      'Responsables sécurité et HSE',
      'Membres de cellules de crise',
      'Gestionnaires de sites',
    ],
    program: [
      'Objectifs et types d’exercices',
      'Conception du scénario et des moyens',
      'Rôles et communication',
      'Conduite de l’exercice et sécurité',
      'Débriefing, indicateurs et plan d’amélioration',
    ],
  },
]

const santeBienEtre: Seed[] = [
  {
    slug: 'bien-etre-au-travail',
    title: 'Bien-être au travail',
    level: 'Débutant',
    lessons: 4,
    description:
      'Comprendre les déterminants du bien-être et identifier des actions concrètes pour améliorer la qualité de vie au travail.',
    objectives: [
      'Comprendre les dimensions du bien-être',
      'Identifier les facteurs de risque et de protection',
      'Proposer des actions adaptées à son équipe',
    ],
    audience: [
      'Managers et RH',
      'Référents QVCT',
      'Tous les collaborateurs',
    ],
    program: [
      'Définitions et enjeux',
      'Bien-être physique, mental et social',
      'Facteurs organisationnels',
      'Actions individuelles et collectives',
      'Indicateurs et suivi',
    ],
  },
  {
    slug: 'sante-mentale-au-travail',
    title: 'Santé mentale et travail — prévenir et accompagner',
    level: 'Intermédiaire',
    lessons: 4,
    description:
      'Mieux comprendre les troubles de santé mentale au travail et adopter une posture adaptée face aux situations difficiles.',
    objectives: [
      'Comprendre les principaux troubles de santé mentale',
      'Repérer les signes d’alerte',
      'Adapter sa communication et orienter',
    ],
    audience: [
      'Managers et RH',
      'Référents santé et bien-être',
      'Encadrants',
    ],
    program: [
      'Représentations et réalité de la santé mentale',
      'Troubles fréquents et facteurs de risque',
      'Signes d’alerte et premiers échanges',
      'Accommodements et retour au travail',
      'Ressources et orientation',
    ],
  },
  {
    slug: 'premiers-secours-sante-mentale',
    title: 'Premiers secours en santé mentale',
    level: 'Débutant',
    description:
      'Apprendre à apporter une première aide à une personne confrontée à un problème de santé mentale ou à une crise.',
    objectives: [
      'Reconnaître les signes de détresse',
      'Engager une conversation aidante',
      'Orienter vers les professionnels et ressources',
    ],
    audience: [
      'Tous les collaborateurs',
      'Managers et référents',
      'Membres RH',
    ],
    program: [
      'Cadre et principes des premiers secours en santé mentale',
      'Troubles et crises',
      'Écoute et communication',
      'Protection et orientation',
      'Limites de son intervention',
    ],
    featured: true,
  },
  {
    slug: 'defenseur-sante-mentale',
    title: 'Défenseur de la santé mentale en entreprise',
    level: 'Intermédiaire',
    description:
      'Former des relais internes capables de sensibiliser, d’écouter et d’orienter sur les enjeux de santé mentale.',
    objectives: [
      'Comprendre le rôle de relais',
      'Sensibiliser et réduire la stigmatisation',
      'Accueillir et orienter en confidentialité',
    ],
    audience: [
      'Référents santé mentale',
      'Membres RH et managers',
      'Représentants du personnel',
    ],
    program: [
      'Santé mentale et stigmatisation',
      'Rôle et limites du défenseur',
      'Techniques d’écoute',
      'Orientation et confidentialité',
      'Animation d’actions de sensibilisation',
    ],
  },
  {
    slug: 'sante-mentale-securite-travail',
    title: 'Santé mentale et sécurité au travail',
    level: 'Intermédiaire',
    description:
      'Explorer les liens entre santé mentale, comportements et sécurité, et agir sur les facteurs organisationnels.',
    objectives: [
      'Comprendre l’impact de la santé mentale sur la sécurité',
      'Identifier les facteurs de risque organisationnels',
      'Intégrer la santé mentale dans la prévention',
    ],
    audience: [
      'Responsables HSE',
      'Managers',
      'Fonctions RH',
    ],
    program: [
      'Santé mentale et performance sécurité',
      'Stress, fatigue et prise de risque',
      'Facteurs organisationnels',
      'Prévention et actions concrètes',
      'Indicateurs et suivi',
    ],
  },
  {
    slug: 'ergonomie-travail-ecran',
    title: 'Ergonomie et travail sur écran',
    level: 'Débutant',
    description:
      'Aménager son poste et ses habitudes de travail pour prévenir les troubles liés au travail sur écran.',
    objectives: [
      'Comprendre les risques du travail sur écran',
      'Aménager un poste adapté',
      'Adopter des routines de prévention',
    ],
    audience: [
      'Utilisateurs d’écrans',
      'Managers et RH',
      'Référents ergonomie',
    ],
    program: [
      'Troubles visuels et musculosquelettiques',
      'Aménagement du poste',
      'Réglages de l’écran et éclairage',
      'Pauses et mouvements',
      'Organisation du travail',
    ],
  },
  {
    slug: 'legionelles',
    title: 'Legionella — prévention et gestion du risque',
    level: 'Intermédiaire',
    description:
      'Comprendre le risque lié aux légionelles et organiser la prévention sur les installations d’eau.',
    objectives: [
      'Comprendre le développement des légionelles',
      'Identifier les installations à risque',
      'Mettre en place un plan de prévention et de surveillance',
    ],
    audience: [
      'Responsables techniques et HSE',
      'Gestionnaires de bâtiments',
      'Prestataires de maintenance',
    ],
    program: [
      'Biologie et voies de contamination',
      'Installations et situations à risque',
      'Analyse et évaluation du risque',
      'Mesures de prévention et traitement',
      'Surveillance, prélèvements et gestion de crise',
    ],
  },
]

const environnement: Seed[] = [
  {
    slug: 'management-environnemental',
    title: 'Management environnemental',
    level: 'Débutant',
    lessons: 4,
    description:
      'Comprendre les principes du management environnemental et structurer une démarche adaptée à son organisation.',
    objectives: [
      'Comprendre les enjeux et les exigences',
      'Identifier les aspects et impacts',
      'Contribuer à un système de management environnemental',
    ],
    audience: [
      'Responsables environnement et QHSE',
      'Managers et chefs de projet',
      'Équipes impliquées dans une certification',
    ],
    program: [
      'Enjeux environnementaux',
      'Cadre réglementaire et parties intéressées',
      'Aspects et impacts',
      'Objectifs, actions et suivi',
      'Amélioration continue',
    ],
  },
  {
    slug: 'etude-impact-environnemental',
    title: 'Étude d’impact environnemental',
    level: 'Intermédiaire',
    lessons: 4,
    description:
      'Comprendre la démarche d’étude d’impact et les attentes des décideurs et des parties prenantes.',
    objectives: [
      'Comprendre le cadre et les finalités d’une EIE',
      'Identifier les impacts directs et indirects',
      'Proposer des mesures d’évitement, de réduction et de compensation',
    ],
    audience: [
      'Chefs de projet et bureaux d’études',
      'Responsables environnement',
      'Maîtres d’ouvrage',
    ],
    program: [
      'Cadre réglementaire et procédures',
      'Périmètre et état initial',
      'Identification et évaluation des impacts',
      'Mesures ERC et plan de gestion',
      'Consultation et suivi',
    ],
  },
  {
    slug: 'sensibilisation-environnement',
    title: 'Sensibilisation à l’environnement',
    level: 'Débutant',
    description:
      'Une sensibilisation pour comprendre les impacts environnementaux de l’activité et adopter les bons gestes.',
    objectives: [
      'Comprendre les grands enjeux environnementaux',
      'Identifier les impacts de son activité',
      'Adopter des pratiques responsables',
    ],
    audience: [
      'Tous les collaborateurs',
      'Équipes opérationnelles',
      'Nouveaux arrivants',
    ],
    program: [
      'Enjeux planétaires et locaux',
      'Impacts de l’activité',
      'Eau, énergie, déchets et biodiversité',
      'Bonnes pratiques et gestes utiles',
    ],
  },
]

const agroalimentaire: Seed[] = [
  {
    slug: 'haccp',
    title: 'HACCP — analyse des dangers et maîtrise sanitaire',
    level: 'Avancé',
    lessons: 10,
    description:
      'Maîtriser la méthode HACCP pour identifier les dangers, définir les points critiques et sécuriser les procédés agroalimentaires.',
    objectives: [
      'Comprendre les principes HACCP',
      'Réaliser une analyse des dangers',
      'Définir les points critiques et les limites',
      'Mettre en place la surveillance et les actions correctives',
    ],
    audience: [
      'Responsables qualité et production',
      'Équipes HACCP',
      'Consultants agroalimentaires',
    ],
    program: [
      'Cadre réglementaire et enjeux',
      'Programmes prérequis',
      'Analyse des dangers',
      'Détermination des CCP et limites critiques',
      'Surveillance, actions correctives et vérification',
      'Documentation et gestion des non-conformités',
    ],
    featured: true,
  },
  {
    slug: 'prp-programmes-prerequis',
    title: 'PRP — programmes prérequis en sécurité des aliments',
    level: 'Avancé',
    lessons: 10,
    description:
      'Construire et faire vivre les programmes prérequis indispensables à la maîtrise sanitaire des activités agroalimentaires.',
    objectives: [
      'Comprendre le rôle des PRP',
      'Identifier les PRP applicables à son activité',
      'Mettre en place la surveillance et les preuves',
    ],
    audience: [
      'Responsables qualité et production',
      'Équipes hygiène',
      'Consultants et auditeurs',
    ],
    program: [
      'Place des PRP dans le système HACCP',
      'Hygiène du personnel et des locaux',
      'Nettoyage et désinfection',
      'Lutte contre les nuisibles',
      'Maintenance, eau et fournisseurs',
      'Surveillance et vérification',
    ],
  },
  {
    slug: 'prpo-programmes-prerequis-operationnels',
    title: 'PRPo — programmes prérequis opérationnels',
    level: 'Avancé',
    lessons: 10,
    description:
      'Maîtriser les programmes prérequis opérationnels et leur articulation avec les CCP dans une démarche de sécurité des aliments.',
    objectives: [
      'Distinguer PRP, PRPo et CCP',
      'Identifier les PRPo pertinents',
      'Définir les mesures de maîtrise et les preuves',
    ],
    audience: [
      'Responsables qualité et sécurité des aliments',
      'Équipes HACCP',
      'Auditeurs agroalimentaires',
    ],
    program: [
      'Concepts et articulation PRP / PRPo / CCP',
      'Analyse des dangers et choix des mesures',
      'Critères d’action et limites',
      'Surveillance et corrections',
      'Vérification et documentation',
    ],
  },
]

const managementConformite: Seed[] = [
  {
    slug: 'leadership-prevention',
    title: 'Leadership en prévention',
    level: 'Avancé',
    lessons: 10,
    description:
      'Développer un leadership capable de porter la prévention, d’influencer les comportements et de créer une culture durable.',
    objectives: [
      'Comprendre son style de leadership et son impact',
      'Développer la confiance et l’exemplarité',
      'Conduire le changement en matière de sécurité',
    ],
    audience: [
      'Dirigeants et managers',
      'Responsables HSE',
      'Chefs de projet',
    ],
    program: [
      'Leadership et culture de sécurité',
      'Styles de leadership et influence',
      'Communication et feedback',
      'Gestion des résistances',
      'Plan de développement personnel',
    ],
  },
  {
    slug: 'management-equipes',
    title: 'Management des équipes',
    level: 'Avancé',
    lessons: 10,
    description:
      'Renforcer les compétences managériales pour fédérer les équipes, clarifier les rôles et améliorer la performance collective.',
    objectives: [
      'Comprendre les leviers de la performance collective',
      'Clarifier les rôles et responsabilités',
      'Gérer les tensions et développer les compétences',
    ],
    audience: [
      'Managers et chefs d’équipe',
      'Superviseurs',
      'Responsables de service',
    ],
    program: [
      'Rôles et posture du manager',
      'Objectifs, délégation et suivi',
      'Communication et réunions efficaces',
      'Gestion des conflits',
      'Développement des compétences',
    ],
  },
  {
    slug: 'audit-awareness',
    title: 'Sensibilisation à l’audit',
    level: 'Débutant',
    lessons: 4,
    description:
      'Comprendre le déroulement d’un audit, son utilité et le rôle des personnes auditées.',
    objectives: [
      'Comprendre les principes et le vocabulaire de l’audit',
      'Se préparer à un audit',
      'Contribuer efficacement aux échanges et au suivi',
    ],
    audience: [
      'Encadrants et pilotes de processus',
      'Équipes qualité et QHSE',
      'Tout collaborateur concerné par un audit',
    ],
    program: [
      'Principes et types d’audit',
      'Déroulement d’un audit',
      'Preuves et constats',
      'Rôle de l’audité',
      'Suivi des actions',
    ],
  },
  {
    slug: 'cdm-2015',
    title: 'CDM 2015 — construction design and management',
    level: 'Intermédiaire',
    description:
      'Comprendre les exigences britanniques CDM 2015 et les responsabilités des acteurs d’un projet de construction.',
    objectives: [
      'Situer les rôles des acteurs CDM',
      'Intégrer la prévention dès la conception',
      'Organiser la coordination et la communication',
    ],
    audience: [
      'Maîtres d’ouvrage et concepteurs',
      'Entreprises de construction',
      'Coordonnateurs sécurité',
    ],
    program: [
      'Cadre et principes de CDM 2015',
      'Rôles et responsabilités',
      'Notification et documentation',
      'Coordination et plan de construction',
      'Santé et sécurité à la conception',
    ],
  },
  {
    slug: 'cdm-awareness',
    title: 'CDM 2015 — sensibilisation',
    level: 'Débutant',
    description:
      'Une sensibilisation aux principes de CDM 2015 pour les intervenants occasionnels d’un projet de construction.',
    objectives: [
      'Comprendre les grands principes de CDM 2015',
      'Identifier les acteurs et leurs rôles',
      'Adopter les bons réflexes sur un projet',
    ],
    audience: [
      'Intervenants de projets construction',
      'Encadrants et techniciens',
      'Fonctions support',
    ],
    program: [
      'Pourquoi CDM 2015',
      'Acteurs et responsabilités',
      'Documents clés',
      'Coordination au quotidien',
      'Bonnes pratiques',
    ],
  },
  {
    slug: 'building-safety-act',
    title: 'Building Safety Act 2022 — sensibilisation',
    level: 'Intermédiaire',
    description:
      'Comprendre les nouvelles obligations de sécurité des bâtiments introduites par le Building Safety Act 2022.',
    objectives: [
      'Comprendre le cadre et les objectifs de la loi',
      'Identifier les rôles et obligations',
      'Anticiper les impacts sur les projets et la gestion des bâtiments',
    ],
    audience: [
      'Gestionnaires de bâtiments',
      'Maîtres d’ouvrage et promoteurs',
      'Responsables HSE et conformité',
    ],
    program: [
      'Contexte et principes du Building Safety Act',
      'Bâtiments concernés et obligations',
      'Rôles et responsabilités',
      'Gestion du risque et documentation',
      'Préparation et conformité',
    ],
  },
  {
    slug: 'amiante',
    title: 'Amiante — sensibilisation et prévention',
    level: 'Débutant',
    description:
      'Comprendre les dangers de l’amiante, savoir reconnaître les situations à risque et appliquer les règles de prévention.',
    objectives: [
      'Connaître les effets de l’amiante sur la santé',
      'Identifier les matériaux et situations suspectes',
      'Appliquer les mesures de prévention et d’alerte',
    ],
    audience: [
      'Personnels de maintenance et travaux',
      'Gestionnaires de bâtiments',
      'Encadrants',
    ],
    program: [
      'Amiante : histoire et effets sanitaires',
      'Matériaux et localisations fréquentes',
      'Cadre réglementaire et obligations',
      'Prévention, protection et confinement',
      'Conduite à tenir en cas de découverte',
    ],
  },
  {
    slug: 'atex-dsear',
    title: 'ATEX et DSEAR — atmosphères explosives',
    level: 'Intermédiaire',
    description:
      'Comprendre les risques d’atmosphères explosives et les exigences de prévention applicables aux installations.',
    objectives: [
      'Comprendre les mécanismes d’explosion',
      'Identifier les zones ATEX',
      'Appliquer les mesures de prévention et de protection',
    ],
    audience: [
      'Responsables HSE et maintenance',
      'Ingénieurs procédés',
      'Exploitants d’installations',
    ],
    program: [
      'Phénomènes d’explosion et sources d’inflammation',
      'Classification des zones ATEX',
      'Équipements et matériels adaptés',
      'Prévention, ventilation et contrôle',
      'Documentation DSEAR et gestion des modifications',
    ],
  },
]

/**
 * Catalogue de formations.
 *
 * Les intitulés et le nombre de leçons proviennent du classeur
 * « Legal source.xlsx ». Les contenus sont une reformulation des programmes
 * publics des référentiels cités ; ils restent indicatifs et sont adaptés
 * par LEGAL SOURCE avant chaque session.
 */
const baseTrainings: Training[] = [
  ...nebosh.map((seed) => build('nebosh', seed)),
  ...iosh.map((seed) => build('iosh', seed)),
  ...isep.map((seed) => build('isep', seed)),
  ...iso.map((seed) => build('iso', seed)),
  ...proqual.map((seed) => build('proqual', seed)),
  ...securiteOperationnelle.map((seed) => build('securite-operationnelle', seed)),
  ...incendieUrgences.map((seed) => build('incendie-urgences', seed)),
  ...santeBienEtre.map((seed) => build('sante-bien-etre', seed)),
  ...environnement.map((seed) => build('environnement', seed)),
  ...agroalimentaire.map((seed) => build('agroalimentaire', seed)),
  ...managementConformite.map((seed) => build('management-conformite', seed)),
]

/** Catalogue complet, enrichi des informations de référentiel lorsqu’elles existent. */
export const trainings: Training[] = baseTrainings.map((training) => ({
  ...training,
  ...trainingEnrichment[training.slug],
}))
