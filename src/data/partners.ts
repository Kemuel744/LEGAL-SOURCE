import apiciLogo from '@/assets/images/partners/apici.webp'
import aqcLogo from '@/assets/images/partners/aqc.webp'
import astutisLogo from '@/assets/images/partners/astutis.svg'
import egacLogo from '@/assets/images/partners/egac.webp'
import gesdLogo from '@/assets/images/partners/gesd.webp'
import qualicerteLogo from '@/assets/images/partners/qualicerte.webp'
import sheildsLogo from '@/assets/images/partners/sheilds.webp'
import uafLogo from '@/assets/images/partners/uaf.webp'
import kemuelImage from '@/assets/images/team/kemuel-zenas-bidikou.webp'
import merciaImage from '@/assets/images/team/mercia-ngoka.webp'
import type { Partner, TeamMember } from '@/types'

/**
 * Partenaires et réseau de LEGAL SOURCE.
 * Source : classeur « Legal source.xlsx », feuille « Partenaire ».
 * Les intitulés ont été normalisés (orthographe, casse) sans modifier les rôles.
 */
export const partners: Partner[] = [
  {
    id: 'international-gesd',
    name: 'International GESD',
    role: 'ONG partenaire',
    description:
      'Organisation non gouvernementale partenaire, engagée sur les enjeux de développement et de responsabilité sociétale.',
    logo: gesdLogo,
  },
  {
    id: 'astutis',
    name: 'Astutis',
    role: 'Centre de formation international',
    description:
      'Centre de formation international de référence, présent dans plus de 180 pays et basé au Royaume-Uni.',
    logo: astutisLogo,
  },
  {
    id: 'sheilds',
    name: 'SHEilds',
    role: 'Centre de formation international',
    description:
      'Centre de formation international de référence, implanté en Afrique du Sud, à Dubaï et au Royaume-Uni.',
    logo: sheildsLogo,
  },
  {
    id: 'aqc',
    name: 'AQC',
    role: 'Organisme de certification',
    description:
      'Organisme de certification international intervenant sur les référentiels ISO.',
    logo: aqcLogo,
    accreditations: [
      { name: 'EGAC', logo: egacLogo },
      { name: 'UAF — United Accreditation Foundation', logo: uafLogo },
    ],
  },
  {
    id: 'qualicerte',
    name: 'Qualicerte',
    role: 'Cabinet d’expertise QHSE',
    description:
      'Cabinet d’expertise QHSE ivoirien partenaire, mobilisé sur les missions de conseil et d’accompagnement.',
    logo: qualicerteLogo,
  },
  {
    id: 'apici',
    name: 'APICI',
    role: 'Cabinet d’expertise agricole',
    description:
      'Cabinet d’expertise agricole ivoirien partenaire, intervenant sur les projets et démarches agricoles durables.',
    logo: apiciLogo,
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: 'israel-eloye',
    name: 'Israël ELOYE ONDELE',
    role: 'Directeur général',
    group: 'direction',
  },
  {
    id: 'kemuel',
    name: 'Kemuel Zenas BIDIKOU',
    role: 'Partenaire — développement du réseau informatique et digital',
    group: 'réseau',
    image: kemuelImage,
  },
  {
    id: 'mercia-ngoka',
    name: 'Mercia Ngoka',
    role: 'Partenaire — développement commercial et marketing, francophonie',
    group: 'réseau',
    image: merciaImage,
  },
  {
    id: 'uju-ojingwa',
    name: 'Uju Obinsochuku Ojingwa',
    role: 'Formateur associé (Nigeria)',
    group: 'formateurs',
  },
  {
    id: 'muhammad-shahbaz',
    name: 'Muhammad Shahbaz',
    role: 'Formateur associé (Pakistan)',
    group: 'formateurs',
  },
  {
    id: 'james-king',
    name: 'James King',
    role: 'Business developer — Astutis',
    group: 'partenaires',
  },
  {
    id: 'rashmita-mishra',
    name: 'Rashmita Mishra',
    role: 'English business and marketing developer partner',
    group: 'partenaires',
  },
  {
    id: 'subhra-ghosh',
    name: 'Subhra Ghosh',
    role: 'Partenaire — AQC',
    group: 'partenaires',
  },
  {
    id: 'farheen-sheukh',
    name: 'Farheen Sheukh',
    role: 'Partenaire — AQC',
    group: 'partenaires',
  },
  {
    id: 'shyam',
    name: 'Shyam',
    role: 'Partenaire — AQC',
    group: 'partenaires',
  },
]

export const teamGroups: Array<{ key: TeamMember['group']; label: string }> = [
  { key: 'direction', label: 'Direction' },
  { key: 'réseau', label: 'Réseau de développement' },
  { key: 'formateurs', label: 'Formateurs associés' },
  { key: 'partenaires', label: 'Partenaires' },
]
