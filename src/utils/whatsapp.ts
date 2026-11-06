import { site } from '@/config/site'

/** Construit un lien WhatsApp officiel avec message prérempli correctement encodé. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}

export const whatsappMessages = {
  general: () =>
    `Bonjour ${site.name}, je souhaite obtenir des informations sur vos services et vos formations.`,
  product: (name: string) =>
    `Bonjour ${site.name}, je souhaite obtenir des informations concernant le produit ${name}. Pourriez-vous me communiquer les modalités de commande et de livraison ?`,
  service: (title: string) =>
    `Bonjour ${site.name}, je souhaite obtenir des renseignements concernant votre service ${title}.`,
  training: (title: string) =>
    `Bonjour ${site.name}, je suis intéressé(e) par votre formation ${title}. Je souhaiterais obtenir davantage d’informations.`,
  project: (title: string) =>
    `Bonjour ${site.name}, je souhaite échanger avec vous au sujet d’un projet similaire à votre réalisation « ${title} ».`,
  activity: (title: string) =>
    `Bonjour ${site.name}, je souhaite obtenir davantage d’informations sur votre domaine d’intervention ${title}.`,
  quote: (subject = 'une prestation') =>
    `Bonjour ${site.name}, je souhaite demander un devis pour ${subject}.`,
  contact: () =>
    `Bonjour ${site.name}, je vous contacte depuis votre site web.`,
} as const

/** Lien mailto avec objet prérempli. */
export function mailtoLink(subject: string, body?: string): string {
  const params = new URLSearchParams()
  params.set('subject', subject)
  if (body) params.set('body', body)
  return `mailto:${site.email}?${params.toString().replace(/\+/g, '%20')}`
}
