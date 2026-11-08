import { Container } from '@/components/common/Container'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { site } from '@/config/site'
import { Link } from 'react-router-dom'

type LegalSection = {
  heading: string
  content: string[]
}

type LegalPageType = 'mentions' | 'confidentialite' | 'cgv'

type PageConfig = {
  title: string
  path: string
  description: string
  sections: LegalSection[]
}

const year = new Date().getFullYear()

const pages: Record<LegalPageType, PageConfig> = {
  mentions: {
    title: 'Mentions légales',
    path: '/mentions-legales',
    description: 'Mentions légales du site web de LEGAL SOURCE.',
    sections: [
      {
        heading: 'Éditeur du site',
        content: [
          'Raison sociale : ' + site.legalName,
          'Adresse : ' + site.address.full,
          'Téléphone : ' + site.phone.display,
          'E-mail : ' + site.email,
        ],
      },
      {
        heading: 'Directeur de la publication',
        content: [
          'Le directeur de la publication est le représentant légal de LEGAL SOURCE. (à confirmer)',
        ],
      },
      {
        heading: 'Hébergement',
        content: [
          'Le site est hébergé par GitHub Pages (GitHub, Inc.). Cette mention devra être mise à jour en cas de changement d’hébergement.',
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        content: [
          'L’ensemble du contenu du présent site (textes, images, graphismes, logo, icônes) est la propriété exclusive de ' +
            site.legalName +
            ', sauf mention contraire.',
          'Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l’autorisation écrite préalable de ' +
            site.legalName +
            '.',
        ],
      },
      {
        heading: 'Responsabilité',
        content: [
          site.legalName +
            ' s’efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour.',
          'Les informations présentes sur le site sont données à titre indicatif et sont susceptibles d’évoluer.',
        ],
      },
      {
        heading: 'Liens hypertextes',
        content: [
          'Le site peut contenir des liens vers d’autres sites internet. ' +
            site.legalName +
            ' n’exerce aucun contrôle sur ces sites et n’assume aucune responsabilité quant à leur contenu.',
        ],
      },
      {
        heading: 'Droit applicable',
        content: [
          'Les présentes mentions légales sont soumises au droit en vigueur dans le pays d’établissement de LEGAL SOURCE.',
        ],
      },
    ],
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    path: '/politique-de-confidentialite',
    description:
      'Politique de confidentialité et de protection des données personnelles de LEGAL SOURCE.',
    sections: [
      {
        heading: 'Responsable du traitement',
        content: [
          'Le responsable du traitement des données à caractère personnel collectées via ce site est ' +
            site.legalName +
            ', joignable à l’adresse : ' +
            site.email +
            '.',
        ],
      },
      {
        heading: 'Données collectées',
        content: [
          'Ce site vitrine ne collecte pas de données personnelles de manière directe via un formulaire en ligne dans sa version initiale.',
          'Les interactions commerciales sont réalisées via WhatsApp ou par e-mail, en dehors du présent site.',
          'Les données que vous communiquez volontairement lors de contacts par WhatsApp ou e-mail sont traitées exclusivement pour répondre à votre demande.',
        ],
      },
      {
        heading: 'Finalité des traitements',
        content: [
          'Les données personnelles éventuellement collectées sont utilisées aux fins suivantes : répondre à vos demandes d’information, établir des devis, assurer le suivi des formations ou des commandes.',
          'Aucune donnée personnelle n’est cédée, vendue ou louée à des tiers.',
        ],
      },
      {
        heading: 'Durée de conservation',
        content: [
          'Les données sont conservées le temps nécessaire à la réalisation de la finalité pour laquelle elles ont été collectées, dans le respect des obligations légales applicables.',
        ],
      },
      {
        heading: 'Vos droits',
        content: [
          'Conformément à la réglementation applicable en matière de protection des données, vous disposez d’un droit d’accès, de rectification, d’effacement et de limitation du traitement de vos données. Pour exercer ces droits, contactez-nous à : ' +
            site.email +
            '.',
        ],
      },
      {
        heading: 'Cookies',
        content: [
          'Ce site peut utiliser des cookies techniques nécessaires au bon fonctionnement des pages. Aucun cookie de suivi ou de publicité n’est déposé dans cette version initiale.',
        ],
      },
    ],
  },
  cgv: {
    title: 'Conditions générales',
    path: '/conditions-generales',
    description:
      'Conditions générales applicables aux produits et services de LEGAL SOURCE.',
    sections: [
      {
        heading: 'Objet',
        content: [
          'Les présentes conditions générales régissent les relations entre ' +
            site.legalName +
            ' et ses clients dans le cadre de la fourniture de services, formations et produits.',
        ],
      },
      {
        heading: 'Produits et services',
        content: [
          'Les produits présentés dans la boutique constituent un catalogue indicatif. Les prix affichés sont donnés à titre informatif et peuvent varier. Tout achat fait l’objet d’une confirmation par échange direct avec l’équipe LEGAL SOURCE.',
          'Les services et formations font l’objet d’une proposition commerciale détaillée avant tout engagement.',
        ],
      },
      {
        heading: 'Commandes et devis',
        content: [
          'Les commandes de produits et les demandes de services ou de formations sont traitées par échange direct via WhatsApp ou par e-mail. Aucun paiement en ligne n’est disponible dans cette version du site.',
          'Toute commande n’est définitive qu’après confirmation écrite par les deux parties.',
        ],
      },
      {
        heading: 'Prix',
        content: [
          'Les prix des produits et services sont communiqués en Francs CFA (FCFA) et sont susceptibles d’être modifiés sans préavis. ' +
            site.legalName +
            ' s’engage à communiquer le prix définitif avant toute transaction.',
        ],
      },
      {
        heading: 'Livraison et prestations',
        content: [
          'Les modalités de livraison des produits (délais, frais, zone géographique) sont précisées lors de chaque commande. Les modalités d’intervention pour les services et formations sont définies dans les propositions commerciales.',
        ],
      },
      {
        heading: 'Responsabilité',
        content: [
          site.legalName +
            ' s’engage à fournir les prestations et produits conformément aux conditions convenues. Sa responsabilité ne saurait être engagée en cas de force majeure ou d’événements indépendants de sa volonté.',
        ],
      },
      {
        heading: 'Droit applicable',
        content: [
          'Les présentes conditions générales sont soumises au droit en vigueur dans le pays d’établissement de ' +
            site.legalName +
            '. Tout litige sera soumis aux juridictions compétentes correspondantes.',
        ],
      },
      {
        heading: 'Mise à jour',
        content: [
          'Les présentes conditions générales peuvent être mises à jour à tout moment. Dernière mise à jour : ' +
            year +
            '.',
        ],
      },
    ],
  },
}

type LegalPageProps = {
  page: LegalPageType
}

export default function LegalPage({ page }: LegalPageProps) {
  const config = pages[page]

  useDocumentMeta({
    title: config.title,
    description: config.description,
    path: config.path,
  })

  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Fil d’Ariane" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-brand-muted">
              <li>
                <Link to="/" className="hover:text-brand-green-dark">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">
                ›
              </li>
              <li className="font-semibold text-brand-ink">{config.title}</li>
            </ol>
          </nav>

          <h1 className="font-display text-3xl font-extrabold text-brand-ink sm:text-4xl">
            {config.title}
          </h1>

          <p className="mt-3 rounded-lg border border-orange-200 bg-orange-50 p-4 text-xs leading-relaxed text-orange-700">
            <strong>Document provisoire.</strong> Les présentes informations légales sont indicatives
            et doivent être revues et validées par LEGAL SOURCE, avec le concours d’un conseil
            juridique compétent, avant la mise en production du site.
          </p>

          <div className="mt-10 space-y-8">
            {config.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-lg font-bold text-brand-ink">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-sm leading-relaxed text-brand-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-brand-border pt-8 text-sm text-brand-muted">
            <Link to="/mentions-legales" className="hover:text-brand-green-dark">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="hover:text-brand-green-dark">
              Politique de confidentialité
            </Link>
            <Link to="/conditions-generales" className="hover:text-brand-green-dark">
              Conditions générales
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
