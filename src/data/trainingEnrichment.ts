import type { TrainingUnit } from '@/types'

/**
 * Compléments de fiches formation.
 *
 * Source : pages publiques du partenaire Astutis (centre de formation
 * accrédité) consultées en novembre 2026, reformulées par LEGAL SOURCE.
 * Les tarifs, taux de réussite, calendriers et lieux de session du
 * partenaire ne sont volontairement pas repris : ils concernent son offre
 * propre et non celle de LEGAL SOURCE.
 *
 * Les informations de référentiel (durée, évaluation, adhésion) sont celles
 * des organismes certificateurs et peuvent évoluer : elles sont confirmées
 * avec LEGAL SOURCE avant toute inscription.
 */
export type TrainingEnrichment = {
  /** Niveau de la qualification dans son référentiel. */
  qualification?: string
  /** Durée de référence du programme. */
  duration?: string
  /** Reconnaissance professionnelle ou adhésion associée. */
  recognition?: string
  prerequisites?: string
  assessment?: string
  /** Unités, modules ou éléments du référentiel. */
  units?: TrainingUnit[]
  /** Points d’attention propres à la formation. */
  highlights?: string[]
  /** Programme indicatif, lorsqu’il est précisé par le référentiel. */
  program?: string[]
}

export const trainingEnrichment: Record<string, TrainingEnrichment> = {
  'nebosh-national-general-certificate': {
    qualification: 'Niveau 3 — qualification NEBOSH de référence au Royaume-Uni',
    duration:
      '110 à 125 heures d’étude recommandées, soit environ 10 jours de formation encadrée',
    recognition:
      'Permet de demander l’adhésion Affiliate IOSH (AIOSH). Qualification reconnue pour des postes d’animateur, conseiller, coordonnateur ou responsable santé-sécurité.',
    prerequisites:
      'Aucune condition formelle d’entrée. Une bonne compréhension de l’anglais est recommandée, les supports et les évaluations du référentiel étant en anglais.',
    assessment:
      'Deux unités à réussir. GNC1 : évaluation en ligne à livre ouvert, fondée sur un scénario professionnel, à rendre dans une fenêtre de 24 heures ; la note de cette unité détermine la mention finale (réussite, mérite ou distinction). GNC2 : évaluation pratique des risques d’un lieu de travail choisi par le candidat, à remettre dans les 10 jours ouvrés suivant GNC1.',
    units: [
      {
        title: 'GNC1 — Management de la santé et de la sécurité',
        detail:
          'Les fondamentaux d’un système de management : responsabilités juridiques, évaluation et maîtrise des risques, culture de sécurité, enquête sur les incidents.',
      },
      {
        title: 'GNC2 — Évaluation des risques',
        detail:
          'Évaluation pratique d’un lieu de travail : repérer les dangers, estimer les risques et proposer des mesures de maîtrise adaptées.',
      },
    ],
    highlights: [
      'Évaluation entièrement en ligne, à livre ouvert',
      'Même structure et mêmes exigences que la version internationale ; seules les références réglementaires changent',
    ],
  },

  'nebosh-international-general-certificate': {
    qualification: 'Niveau 3 — qualification NEBOSH conçue pour s’appliquer partout dans le monde',
    duration:
      '110 à 125 heures d’étude recommandées, soit environ 10 jours de formation encadrée',
    recognition:
      'Permet de demander l’adhésion Affiliate IOSH (AIOSH). Qualification présentée comme reconnue par les employeurs et les organismes professionnels dans plus de 180 pays.',
    prerequisites:
      'Aucune condition formelle d’entrée. Une bonne compréhension de l’anglais est recommandée. Accessible à tout profil, quel que soit le stade de sa carrière en santé-sécurité.',
    assessment:
      'Deux unités à réussir. IGC1 : évaluation en ligne à livre ouvert, fondée sur un scénario, à rendre dans une fenêtre de 24 heures ; elle détermine la mention finale. IGC2 : évaluation pratique des risques d’un lieu de travail, à remettre dans les 10 jours ouvrés suivant IGC1.',
    units: [
      {
        title: 'IGC1 — Management de la santé et de la sécurité',
        detail:
          'Le modèle Planifier – Déployer – Contrôler – Agir, les stratégies de mise en œuvre d’un système de santé-sécurité et la réglementation internationale.',
      },
      {
        title: 'IGC2 — Évaluation des risques',
        detail:
          'Évaluation pratique d’un lieu de travail : identifier les dangers, évaluer les risques et proposer des mesures de maîtrise.',
      },
    ],
    highlights: [
      'Pensée pour les organisations situées hors du Royaume-Uni',
      'Applicable à tous les secteurs : industrie, construction, commerce, maintenance des bâtiments',
    ],
  },

  'nebosh-fire-safety': {
    qualification: 'Niveau 3 — certificat NEBOSH de sécurité incendie',
    duration: 'Environ 60 heures d’étude, soit 5 jours de formation encadrée, évaluation en plus',
    recognition:
      'Donne droit à l’adhésion Associate de l’International Institute of Risk and Safety Management (AIIRSM). Utile pour constituer une expertise incendie interne à l’entreprise.',
    prerequisites:
      'Aucune condition formelle d’entrée. Il est recommandé de pouvoir comprendre et exprimer en anglais les notions du programme.',
    assessment:
      'Deux unités à réussir. FSC1 : évaluation en ligne à livre ouvert sur un scénario de lieu de travail, à rendre dans une fenêtre de 24 heures. FSC2 : évaluation pratique du risque incendie d’un lieu de travail, remise par voie électronique avant la date limite. Les documents sont remis au format PDF.',
    units: [
      {
        title: 'Élément 1 — Gérer la sécurité incendie',
        detail:
          'Raisons morales et financières de gérer le risque incendie ; rôle des États et des organisations internationales dans la réglementation.',
      },
      {
        title: 'Élément 2 — Principes du feu et de l’explosion',
        detail:
          'Combustion, croissance et propagation du feu, inflammation des solides, liquides et gaz, explosions.',
      },
      {
        title: 'Élément 3 — Combustibles, comburant et sources d’inflammation',
        detail:
          'Sources de combustible, d’oxygène et d’inflammation ; mesures de maîtrise pour réduire le risque d’incendie et d’explosion.',
      },
      {
        title: 'Élément 4 — Protection incendie des bâtiments',
        detail:
          'Moyens de prévention et de protection, évacuation, détection et alarme, classes de feux, extincteurs et installations fixes, accès des secours.',
      },
      {
        title: 'Élément 5 — Sécurité des personnes en cas d’incendie',
        detail:
          'Plans d’urgence, évacuation, comportement des personnes face au feu, exigences de formation.',
      },
      {
        title: 'Élément 6 — Évaluation du risque incendie',
        detail:
          'Objectifs, principes et pratique de l’évaluation, points d’attention pour les substances pouvant alimenter un feu.',
      },
    ],
    highlights: [
      'Adaptée aux lieux de travail à risque faible ou moyen',
      'Cinq étapes de l’évaluation : repérer les dangers, identifier les personnes exposées, réduire et protéger, consigner et former, réexaminer',
    ],
  },

  'nebosh-national-diploma': {
    qualification: 'Niveau 6 — diplôme NEBOSH pour les professionnels du management de la santé-sécurité',
    duration:
      'Environ 415 heures d’étude, soit 6 semaines de formation encadrée (30 jours ouvrés) ; 5 ans maximum pour passer toutes les évaluations',
    recognition:
      'Répond aux exigences académiques pour devenir Graduate IOSH, première étape vers la qualité de membre chartered (CMIOSH). Accès à un portail d’apprentissage, à des événements de développement professionnel et à un réseau.',
    prerequisites:
      'Aucune condition formelle, mais le NEBOSH General Certificate (ou équivalent) ou au moins 5 ans d’expérience en santé-sécurité sont très fortement recommandés. Un bon niveau d’anglais et de communication est attendu.',
    assessment:
      'Trois unités à réussir, évaluées en ligne sur 2 à 4 semaines chacune : DN1 par un devoir (environ 40 heures de travail), DN2 et DN3 par des études de cas (environ 20 heures chacune). Le total des notes détermine la mention finale. Remise au format PDF.',
    units: [
      {
        title: 'DN1 — Principes de santé et de sécurité au travail',
        detail:
          'Enjeux moraux, économiques et sociétaux, droit de la santé-sécurité, systèmes de management.',
      },
      {
        title: 'DN2 — Maîtriser les risques pour la santé au travail',
        detail: 'Dangers chimiques, biologiques, physiques et physiologiques.',
      },
      {
        title: 'DN3 — Maîtriser les risques de sécurité au travail',
        detail:
          'Conditions de travail, incendie, substances dangereuses, équipements de travail, électricité, construction, transport.',
      },
    ],
    highlights: [
      'Parcours à portée stratégique, présenté comme équivalent à un diplôme universitaire britannique',
      'Version britannique : la réglementation du Royaume-Uni sert de cadre',
    ],
  },

  'nebosh-international-diploma': {
    qualification: 'Niveau 6 — diplôme NEBOSH international de management de la santé-sécurité',
    duration:
      'Environ 409 heures d’étude, soit 6 semaines de formation encadrée (30 jours ouvrés)',
    recognition:
      'Répond aux exigences académiques pour devenir Graduate IOSH, première étape vers la qualité de membre chartered (CMIOSH). Le diplôme s’appuie sur les normes internationales, notamment celles de l’OIT.',
    prerequisites:
      'Aucune condition formelle, mais le NEBOSH International General Certificate (ou équivalent) ou au moins 5 ans d’expérience en santé-sécurité sont fortement recommandés. De bonnes aptitudes de communication sont attendues.',
    assessment:
      'Trois unités, entièrement pratiques et fondées sur des scénarios, évaluées en ligne sur 2 à 4 semaines chacune. DI1 : devoir en deux parties (questions de scénario, activités en entreprise, réflexion personnelle et court projet de recherche, environ 40 heures). DI2 et DI3 : études de cas et questions de scénario (environ 20 heures chacune). Remise au format PDF.',
    units: [
      {
        title: 'DI1 — Principes de santé et de sécurité au travail',
        detail:
          'Enjeux moraux, économiques et sociétaux, normes de l’OIT, systèmes de management.',
      },
      {
        title: 'DI2 — Maîtriser les risques pour la santé au travail',
        detail: 'Dangers chimiques, biologiques, physiques et physiologiques.',
      },
      {
        title: 'DI3 — Maîtriser les risques de sécurité au travail',
        detail:
          'Conditions de travail, incendie, substances dangereuses, équipements de travail, électricité, construction, transport.',
      },
    ],
    highlights: [
      'Conçu pour les apprenants hors Royaume-Uni',
      'Aide à développer une culture de santé-sécurité positive dans l’organisation',
    ],
  },

  'nebosh-environmental-management': {
    qualification: 'Niveau 3 — certificat NEBOSH de management environnemental',
    duration: 'Environ 5 jours de formation encadrée, évaluations en plus',
    prerequisites:
      'Aucune condition d’entrée. Un niveau d’anglais suffisant est recommandé.',
    assessment:
      'Deux unités à réussir. EMC1 : évaluation à livre ouvert d’environ 5 heures, fondée sur un scénario réel, avec des questions théoriques et pratiques. EMC2 : évaluation pratique d’environ 3 heures sur un lieu de travail, à remettre dans les 14 jours. Remise au format PDF.',
    units: [
      {
        title: 'EMC1 — Management environnemental',
        detail:
          'Neuf éléments, des fondements du management environnemental jusqu’à la gestion des situations d’urgence environnementale.',
      },
      {
        title: 'EMC2 — Évaluer les aspects et les impacts environnementaux',
        detail:
          'Évaluation pratique des aspects environnementaux d’un lieu de travail et de leurs impacts.',
      },
    ],
    highlights: [
      'Bénéfices attendus : économies, conformité réglementaire, image renforcée, réduction des risques',
      'Convient aux managers, aux responsables de systèmes de management environnemental et à ceux qui débutent dans le secteur',
    ],
  },

  'nebosh-construction-uk': {
    qualification: 'Niveau SCQF 7, équivalent au niveau 4 RQF',
    duration:
      'Environ 116 heures d’étude, soit 10 jours de formation encadrée répartis sur deux semaines',
    recognition:
      'Reconnue par le dispositif britannique de certification des compétences de la construction (CSCS).',
    prerequisites:
      'Aucune condition d’entrée : le NEBOSH General Certificate n’est plus requis. Un niveau d’anglais suffisant est recommandé.',
    assessment:
      'Une seule unité à réussir (CN1, treize éléments). Évaluation numérique à livre ouvert : exercice d’évaluation des risques fondé sur un scénario, à remettre dans une fenêtre de 48 heures, suivi d’un entretien de clôture portant sur le travail remis.',
    units: [
      {
        title: 'CN1 — Gérer la santé et la sécurité en construction',
        detail:
          'Treize éléments : réglementation de la construction (dont CDM), évaluation et gestion des risques, culture de sécurité, maîtrise des dangers de chantier.',
      },
    ],
    highlights: [
      'Qualification de gestion du risque propre au secteur de la construction',
      'Utile aux managers, superviseurs, mais aussi aux fonctions de maintenance de bâtiments, de gestion immobilière, de gestion de projet et d’achats',
    ],
  },

  'iosh-managing-safely': {
    qualification: 'Certificat IOSH, formation de référence pour les managers',
    duration: '3 jours de formation encadrée, ou 20 à 25 heures d’étude à distance',
    prerequisites:
      'Aucun prérequis : ni connaissance préalable de la santé-sécurité, ni expérience de management.',
    assessment:
      'Deux parties à réussir. Partie 1 : QCM de 30 questions en 45 minutes (60 points, seuil de réussite de 36). Partie 2 : évaluation pratique des risques d’un lieu de travail, à remettre dans les 2 semaines suivant la fin des supports (seuil de 23 points sur 38). Les deux parties doivent être réussies pour obtenir le certificat.',
    units: [
      {
        title: 'Module 1 — Présentation de Managing Safely',
        detail:
          'Raisons morales, juridiques et financières de gérer la sécurité ; responsabilité des managers.',
      },
      {
        title: 'Module 2 — Évaluer les risques',
        detail:
          'Danger, événement dangereux et risque ; probabilité et gravité ; démarche d’évaluation et cotation.',
      },
      {
        title: 'Module 3 — Maîtriser les risques',
        detail:
          '« Raisonnablement faisable », matrice des risques, hiérarchie des mesures de maîtrise, risque résiduel ; exercice pratique de repérage de dangers.',
      },
      {
        title: 'Module 4 — Comprendre les responsabilités',
        detail:
          'Obligations légales, notion de prévisibilité raisonnable, droit pénal et civil, conséquences d’un manquement, éléments d’un système de management, leadership.',
      },
      {
        title: 'Module 5 — Dangers courants',
        detail:
          'Les six grandes catégories de dangers, leurs effets, leurs symptômes et leur gestion.',
      },
      {
        title: 'Module 6 — Enquêter sur les accidents et incidents',
        detail:
          'Accident, incident et presque-accident ; causes immédiates, sous-jacentes et profondes ; déclaration ; étapes d’une enquête structurée.',
      },
      {
        title: 'Module 7 — Mesurer la performance',
        detail:
          'Indicateurs avancés et retardés, qualités d’un bon indicateur, audits internes et externes.',
      },
      {
        title: 'Module complémentaire — Facteurs humains',
        detail:
          'Culture de sécurité, attitude, motivation, perception du risque, erreurs et violations.',
      },
    ],
    highlights: [
      'Ouverte à toute entreprise et à tout secteur',
      'Aide à intégrer une culture de sécurité et à réduire le risque de poursuites',
    ],
  },

  'iosh-working-safely': {
    qualification: 'Certificat IOSH de sensibilisation pour l’ensemble des collaborateurs',
    duration: '1 jour de formation, ou environ 5 heures d’étude à distance',
    prerequisites:
      'Aucun prérequis. Convient à tout collaborateur, quel que soit son niveau ou son secteur ; une bonne lecture de l’anglais est conseillée pour les supports.',
    assessment:
      'Deux parties : un QCM de 21 questions (environ 20 minutes) et un exercice de repérage de dangers de 8 questions (environ 10 minutes). Le certificat est délivré après réussite ; il est vérifié par l’IOSH.',
    units: [
      {
        title: 'Module 1 — Présentation de Working Safely',
        detail: 'Les principes de base pour travailler en sécurité.',
      },
      {
        title: 'Module 2 — Définir danger et risque',
        detail:
          'Les différents dangers et risques, les plus courants au travail, et comment les regrouper.',
      },
      {
        title: 'Module 3 — Repérer les dangers courants',
        detail:
          'Manutention, travail en hauteur, glissades, trébuchements et chutes, électricité, incendie : savoir les identifier.',
      },
      {
        title: 'Module 4 — Améliorer la performance sécurité',
        detail: 'Les gestes et initiatives qui améliorent la sécurité au quotidien.',
      },
    ],
    highlights: [
      'Formation de sensibilisation, complémentaire de Managing Safely pour les managers',
    ],
  },

  'isep-foundation-certificate': {
    qualification:
      'Niveau 3 — anciennement IEMA Foundation Certificate (ISEP, Institute of Sustainability and Environmental Professionals)',
    duration: 'Environ 5 jours de formation encadrée, évaluation en ligne en plus (environ 40 heures d’étude à distance)',
    recognition:
      'Donne accès à l’adhésion Associate de l’ISEP (AISEP), avec lettres post-nominales et réseau professionnel. Première année d’adhésion incluse dans la formation.',
    prerequisites:
      'Aucune expérience ni connaissance préalable. Idéale pour débuter dans une fonction environnementale ou durabilité.',
    assessment:
      'Test en ligne à livre ouvert : 30 questions en 1 heure, seuil de réussite de 21 bonnes réponses (70 %). Passé en une seule session, avec résultat immédiat.',
    units: [
      {
        title: 'Élément 1 — Principes environnementaux fondamentaux',
        detail:
          'Cycles naturels, services écosystémiques, biodiversité, impact humain, sources de pollution et voies de transfert, climat.',
      },
      {
        title: 'Élément 2 — Durabilité et grandes tendances',
        detail:
          'Développement durable, principes d’une entreprise durable, gouvernance d’entreprise.',
      },
      {
        title: 'Élément 3 — Politiques et législation',
        detail:
          'Principes des politiques environnementales, instruments, fondements de la législation, droit pénal, parties prenantes et autorités.',
      },
      {
        title: 'Élément 4 — Systèmes de management environnemental',
        detail: 'Introduction aux systèmes de management, éléments clés de l’ISO 14001.',
      },
      {
        title: 'Élément 5 — Évaluation de la performance',
        detail:
          'Gestion des données, suivi de la performance, inspections et audits environnementaux.',
      },
      {
        title: 'Élément 6 — Outils complémentaires de management et d’évaluation',
        detail: 'Outils utilisés pour évaluer et améliorer les performances environnementales.',
      },
      {
        title: 'Élément 7 — Communication et conduite du changement',
        detail: 'Communication, reporting d’entreprise, allégations environnementales, gestion du changement.',
      },
    ],
    highlights: ['Constitue la voie recommandée vers l’ISEP Certificate'],
  },

  'isep-certificate-sustainability-environmental-management': {
    qualification: 'Certificat professionnel ISEP (anciennement IEMA)',
    duration:
      'Environ 15 jours de formation encadrée répartis en 3 semaines, ou environ 120 heures d’étude à distance',
    recognition:
      'Peut conduire au statut de Practitioner de l’ISEP (PISEP), sous réserve de l’évaluation de compétences, et s’inscrit dans la voie vers le titre de Registered Environmental Practitioner (REnvP). Accès à des webinaires, un réseau et du mentorat.',
    prerequisites:
      'Le Foundation Certificate de l’ISEP, ou une connaissance ou une expérience équivalente de la durabilité et du management environnemental.',
    assessment:
      'Évaluation continue, sans examen final : trois devoirs écrits (un par module), à réussir tous les trois. Pour le statut PISEP, une évaluation de compétences fondée sur l’expérience professionnelle s’ajoute une fois les modules validés.',
    units: [
      {
        title: 'Module 1 — Fondamentaux de la durabilité, de l’entreprise et de la gouvernance',
        detail:
          'Grandes tendances mondiales, rôle du praticien, modèles de gouvernance d’entreprise durable.',
      },
      {
        title: 'Module 2 — Principes environnementaux, politiques et législation',
        detail:
          'Principes environnementaux et lien avec les organisations, produits et services ; politiques et lois significatives et leurs implications.',
      },
      {
        title: 'Module 3 — Management environnemental, outils d’évaluation et compétences',
        detail:
          'Outils et systèmes pour des produits et services durables, innovation, collecte, analyse et restitution de données, conduite du changement.',
      },
    ],
    highlights: [
      'Développe un leadership environnemental et des compétences de praticien',
      'Approche pratique pour réduire les impacts et améliorer la performance, au niveau stratégique comme opérationnel',
    ],
  },
}
