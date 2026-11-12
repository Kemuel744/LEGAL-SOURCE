import type { TrainingFamily } from '@/types'


/**
 * Catalogues thématiques de formations.
 *
 * Chaque famille regroupe les formations d’un même référentiel ou d’un même
 * domaine. Les programmes présentés sont indicatifs : ils reprennent les
 * intitulés publics des référentiels cités et sont adaptés par LEGAL SOURCE
 * lors de la préparation de la session.
 */
export const trainingFamilies: TrainingFamily[] = [
  {
    id: 'nebosh',
    slug: 'nebosh',
    name: 'Formations NEBOSH',
    shortName: 'NEBOSH',
    tagline: 'Santé, sécurité et environnement au travail',
    description:
      'NEBOSH est un organisme britannique de référence en santé et sécurité au travail. Ce catalogue couvre les awards d’initiation, les certificats professionnels et les diplômes de niveau avancé, avec des parcours nationaux (Royaume-Uni) et internationaux.',
    icon: 'award',
    order: 1,
    modalities: [
      'Formation en intra-entreprise, sur site ou dans un cadre défini avec LEGAL SOURCE',
      'Programme et calendrier adaptés à vos équipes',
      'Supports de formation remis aux participants',
    ],
    prerequisites:
      'Aucun prérequis formel pour les awards et certificats. Un niveau d’anglais ou de français permettant de comprendre et d’exprimer les concepts du programme est recommandé.',
    assessment:
      'Les modalités d’évaluation et de certification sont celles du référentiel NEBOSH retenu. Elles sont confirmées avec LEGAL SOURCE avant l’inscription.',
  },
  {
    id: 'iosh',
    slug: 'iosh',
    name: 'Formations IOSH',
    shortName: 'IOSH',
    tagline: 'Management de la santé et de la sécurité',
    description:
      'IOSH est la plus grande organisation professionnelle mondiale dédiée à la santé et à la sécurité. Ce catalogue s’adresse aux managers, aux dirigeants et aux équipes opérationnelles qui souhaitent intégrer la prévention dans leurs décisions quotidiennes.',
    icon: 'coaching',
    order: 2,
    modalities: [
      'Formation en intra-entreprise, sur site ou en salle',
      'Calendrier construit avec vos responsables',
      'Supports et exercices pratiques adaptés à votre secteur',
    ],
    prerequisites:
      'Aucun prérequis formel. Les parcours sont adaptés au rôle des participants et à leur niveau de responsabilité.',
    assessment:
      'L’évaluation suit les exigences du référentiel IOSH retenu (exercices, évaluation finale ou portfolio selon le parcours). Les modalités exactes sont confirmées avec LEGAL SOURCE.',
  },
  {
    id: 'isep',
    slug: 'isep',
    name: 'Formations ISEP (ex-IEMA)',
    shortName: 'ISEP',
    tagline: 'Durabilité et management environnemental',
    description:
      'L’ISEP (Institute of Sustainability & Environmental Professionals, anciennement IEMA) propose des parcours reconnus pour développer les compétences environnementales et de durabilité, du niveau sensibilisation au niveau professionnel.',
    icon: 'leaf',
    order: 3,
    modalities: [
      'Formation en intra-entreprise ou en groupe inter-entreprises',
      'Programme adapté à votre secteur et à vos enjeux environnementaux',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    prerequisites:
      'Aucun prérequis pour les parcours de sensibilisation. Les certificats professionnels s’adressent aux personnes ayant des responsabilités environnementales ou de durabilité.',
    assessment:
      'L’évaluation dépend du parcours ISEP choisi. Les modalités de certification sont précisées avec LEGAL SOURCE avant l’inscription.',
  },
  {
    id: 'iso',
    slug: 'iso',
    name: 'Formations ISO',
    shortName: 'ISO',
    tagline: 'Systèmes de management, audit et amélioration continue',
    description:
      'Ce catalogue prépare les équipes à mettre en œuvre, auditer et améliorer les systèmes de management selon les normes ISO : qualité, environnement, santé-sécurité, sécurité alimentaire, risques et systèmes d’information.',
    icon: 'clipboard',
    order: 4,
    modalities: [
      'Formation en intra-entreprise, sur site ou en salle',
      'Études de cas et exercices d’audit ou de mise en œuvre',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    prerequisites:
      'Une connaissance de base du référentiel concerné et une expérience des systèmes de management sont recommandées pour les parcours lead auditor et lead implementer.',
    assessment:
      'Les modalités d’évaluation et, le cas échéant, de certification sont précisées avec LEGAL SOURCE selon le référentiel et le parcours retenus.',
  },
  {
    id: 'proqual',
    slug: 'proqual',
    name: 'Formations ProQual',
    shortName: 'ProQual',
    tagline: 'Qualifications professionnelles par portfolio',
    description:
      'ProQual propose des qualifications professionnelles reconnues, notamment des NVQ évaluées à partir de situations de travail réelles. Ce catalogue s’adresse aux professionnels qui souhaitent faire reconnaître leurs compétences par un certificat.',
    icon: 'badge',
    order: 5,
    modalities: [
      'Accompagnement individualisé et suivi du portfolio',
      'Entretiens et observations en situation de travail',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    prerequisites:
      'Les prérequis dépendent du niveau et du domaine de la qualification. Ils sont vérifiés avec LEGAL SOURCE lors de l’étude du dossier.',
    assessment:
      'L’évaluation est réalisée par portfolio de preuves issues du milieu professionnel, selon les exigences ProQual.',
  },
  {
    id: 'securite-operationnelle',
    slug: 'securite-operationnelle',
    name: 'Sécurité opérationnelle',
    shortName: 'Sécurité opérationnelle',
    tagline: 'Prévenir les risques sur le terrain',
    description:
      'Des formations courtes et pratiques pour maîtriser les risques rencontrés au quotidien : espaces confinés, travail en hauteur, manutention, produits chimiques, bruit, consignation et évaluation des risques.',
    icon: 'shield',
    order: 6,
    modalities: [
      'Formation en intra-entreprise, sur site industriel ou chantier',
      'Mises en situation et exercices pratiques',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    prerequisites:
      'Aucun prérequis pour les modules de sensibilisation. Les modules avancés supposent une expérience du poste ou des responsabilités de prévention.',
    assessment:
      'Évaluation des acquis par exercices, mises en situation et échanges avec le formateur. Une attestation de participation peut être délivrée selon le parcours.',
  },
  {
    id: 'incendie-urgences',
    slug: 'incendie-urgences',
    name: 'Incendie, secours et urgences',
    shortName: 'Incendie & urgences',
    tagline: 'Préparer les équipes à réagir',
    description:
      'Ce catalogue rassemble les formations liées à la prévention incendie, aux premiers secours et à la gestion des situations d’urgence, pour préparer vos équipes à réagir efficacement.',
    icon: 'shield',
    order: 7,
    modalities: [
      'Formation en intra-entreprise, sur site',
      'Exercices pratiques adaptés à vos installations',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    prerequisites:
      'Aucun prérequis pour les modules de sensibilisation. Les formations de secourisme peuvent nécessiter une aptitude physique compatible avec les gestes enseignés.',
    assessment:
      'Évaluation par exercices pratiques et mises en situation. Les modalités de certification dépendent du référentiel retenu.',
  },
  {
    id: 'sante-bien-etre',
    slug: 'sante-bien-etre',
    name: 'Santé, bien-être et facteurs humains',
    shortName: 'Santé & bien-être',
    tagline: 'Préserver la santé mentale et physique',
    description:
      'Des parcours pour comprendre les enjeux de santé mentale, de bien-être et de qualité de vie au travail, et outiller les managers et les équipes pour prévenir les risques psychosociaux.',
    icon: 'users',
    order: 8,
    modalities: [
      'Formation en intra-entreprise ou en groupe',
      'Ateliers participatifs et études de situations',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    prerequisites:
      'Aucun prérequis. Les contenus sont adaptés au rôle des participants et au contexte de l’organisation.',
    assessment:
      'Évaluation des acquis par exercices et échanges. Les modalités de certification dépendent du référentiel choisi.',
  },
  {
    id: 'environnement',
    slug: 'environnement',
    name: 'Environnement et études d’impact',
    shortName: 'Environnement',
    tagline: 'Maîtriser les impacts environnementaux',
    description:
      'Ce catalogue accompagne les organisations dans la compréhension de leurs impacts environnementaux, la réalisation d’études d’impact et la mise en place de bonnes pratiques de gestion.',
    icon: 'leaf',
    order: 9,
    modalities: [
      'Formation en intra-entreprise, sur site ou en salle',
      'Études de cas issues de votre secteur',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    prerequisites:
      'Aucun prérequis pour les modules de sensibilisation. Les modules avancés s’adressent aux responsables environnement, QHSE et aux équipes projet.',
    assessment:
      'Évaluation par exercices et études de cas. Les modalités exactes sont précisées avec LEGAL SOURCE.',
  },
  {
    id: 'agroalimentaire',
    slug: 'agroalimentaire',
    name: 'Agroalimentaire et sécurité des aliments',
    shortName: 'Agroalimentaire',
    tagline: 'HACCP, PRP et maîtrise sanitaire',
    description:
      'Des formations pour maîtriser les principes HACCP, les programmes prérequis (PRP) et les programmes prérequis opérationnels (PRPo), et sécuriser les processus agroalimentaires.',
    icon: 'sprout',
    order: 10,
    modalities: [
      'Formation en intra-entreprise, sur site de production',
      'Exercices appliqués à vos procédés et produits',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    prerequisites:
      'Aucun prérequis pour les modules d’initiation. Les modules avancés s’adressent aux responsables qualité, production et sécurité des aliments.',
    assessment:
      'Évaluation des acquis par exercices et études de cas. Les modalités de certification sont précisées avec LEGAL SOURCE.',
  },
  {
    id: 'management-conformite',
    slug: 'management-conformite',
    name: 'Management, leadership et conformité',
    shortName: 'Management & conformité',
    tagline: 'Faire vivre la prévention et la conformité',
    description:
      'Des parcours pour les dirigeants, managers et responsables conformité : leadership, management d’équipe, audit, réglementation du bâtiment, amiante et atmosphères explosives.',
    icon: 'target',
    order: 11,
    modalities: [
      'Formation en intra-entreprise ou en séminaire',
      'Études de cas et mises en situation managériales',
      'Calendrier à convenir avec LEGAL SOURCE',
    ],
    prerequisites:
      'Les prérequis varient selon le parcours. Les modules de conformité s’adressent en priorité aux responsables HSE, QHSE et aux encadrants.',
    assessment:
      'Évaluation par exercices et études de cas. Les modalités de certification dépendent du référentiel retenu.',
  },
]
