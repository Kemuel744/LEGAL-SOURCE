import { Container } from "@/components/common/Container"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { site } from "@/config/site"
import { Link } from "react-router-dom"

type LegalSection = {
  heading: string
  content: string[]
}

type LegalPageType = "mentions" | "confidentialite" | "cgv"

type PageConfig = {
  title: string
  path: string
  description: string
  sections: LegalSection[]
}

const year = new Date().getFullYear()

const pages: Record<LegalPageType, PageConfig> = {
  mentions: {
    title: "Mentions legales",
    path: "/mentions-legales",
    description: "Mentions legales du site web de LEGAL SOURCE.",
    sections: [
      {
        heading: "Editeur du site",
        content: [
          "Raison sociale : " + site.legalName,
          "Adresse : " + site.address.full + " (adresse a confirmer)",
          "Telephone : " + site.phone.display + " (a confirmer)",
          "E-mail : " + site.email + " (a confirmer)",
        ],
      },
      {
        heading: "Directeur de la publication",
        content: ["Le directeur de la publication est le representant legal de LEGAL SOURCE. (a confirmer)"],
      },
      {
        heading: "Hebergement",
        content: ["Le site est heberge par un prestataire a confirmer avant la mise en production."],
      },
      {
        heading: "Propriete intellectuelle",
        content: [
          "L'ensemble du contenu du present site (textes, images, graphismes, logo, icones) est la propriete exclusive de " + site.legalName + ", sauf mention contraire.",
          "Toute reproduction, representation, modification, publication ou adaptation de tout ou partie des elements du site est interdite sans l'autorisation ecrite prealable de " + site.legalName + ".",
        ],
      },
      {
        heading: "Responsabilite",
        content: [
          site.legalName + " s'efforce de fournir sur ce site des informations aussi precises que possible. Toutefois, il ne pourra etre tenu responsable des omissions, des inexactitudes et des carences dans la mise a jour.",
          "Les informations presentes sur le site sont donnees a titre indicatif et sont susceptibles d'evoluer.",
        ],
      },
      {
        heading: "Liens hypertextes",
        content: [
          "Le site peut contenir des liens vers d'autres sites internet. " + site.legalName + " n'exerce aucun controle sur ces sites et n'assume aucune responsabilite quant a leur contenu.",
        ],
      },
      {
        heading: "Droit applicable",
        content: [
          "Les presentes mentions legales sont soumises au droit en vigueur dans le pays d'etablissement de LEGAL SOURCE.",
        ],
      },
    ],
  },
  confidentialite: {
    title: "Politique de confidentialite",
    path: "/politique-de-confidentialite",
    description: "Politique de confidentialite et de protection des donnees personnelles de LEGAL SOURCE.",
    sections: [
      {
        heading: "Responsable du traitement",
        content: [
          "Le responsable du traitement des donnees a caractere personnel collectees via ce site est " + site.legalName + ", joignable a l'adresse : " + site.email + ".",
        ],
      },
      {
        heading: "Donnees collectees",
        content: [
          "Ce site vitrine ne collecte pas de donnees personnelles de maniere directe via un formulaire en ligne dans sa version initiale.",
          "Les interactions commerciales sont realisees via WhatsApp ou par e-mail, en dehors du present site.",
          "Les donnees que vous communiquez volontairement lors de contacts par WhatsApp ou e-mail sont traitees exclusivement pour repondre a votre demande.",
        ],
      },
      {
        heading: "Finalite des traitements",
        content: [
          "Les donnees personnelles eventuellement collectees sont utilisees aux fins suivantes : repondre a vos demandes d'information, etablir des devis, assurer le suivi des formations ou des commandes.",
          "Aucune donnee personnelle n'est cedee, vendue ou louee a des tiers.",
        ],
      },
      {
        heading: "Duree de conservation",
        content: [
          "Les donnees sont conservees le temps necessaire a la realisation de la finalite pour laquelle elles ont ete collectees, dans le respect des obligations legales applicables.",
        ],
      },
      {
        heading: "Vos droits",
        content: [
          "Conformement a la reglementation applicable en matiere de protection des donnees, vous disposez d'un droit d'acces, de rectification, d'effacement et de limitation du traitement de vos donnees. Pour exercer ces droits, contactez-nous a : " + site.email + ".",
        ],
      },
      {
        heading: "Cookies",
        content: [
          "Ce site peut utiliser des cookies techniques necessaires au bon fonctionnement des pages. Aucun cookie de suivi ou de publicite n'est depose dans cette version initiale.",
        ],
      },
    ],
  },
  cgv: {
    title: "Conditions generales",
    path: "/conditions-generales",
    description: "Conditions generales applicables aux produits et services de LEGAL SOURCE.",
    sections: [
      {
        heading: "Objet",
        content: [
          "Les presentes conditions generales regissent les relations entre " + site.legalName + " et ses clients dans le cadre de la fourniture de services, formations et produits.",
        ],
      },
      {
        heading: "Produits et services",
        content: [
          "Les produits presentes dans la boutique constituent un catalogue indicatif. Les prix affiches sont donnes a titre informatif et peuvent varier. Tout achat fait l'objet d'une confirmation par echange direct avec l'equipe LEGAL SOURCE.",
          "Les services et formations font l'objet d'une proposition commerciale detaillee avant tout engagement.",
        ],
      },
      {
        heading: "Commandes et devis",
        content: [
          "Les commandes de produits et les demandes de services ou de formations sont traitees par echange direct via WhatsApp ou par e-mail. Aucun paiement en ligne n'est disponible dans cette version du site.",
          "Toute commande n'est definitive qu'apres confirmation ecrite par les deux parties.",
        ],
      },
      {
        heading: "Prix",
        content: [
          "Les prix des produits et services sont communiques en Francs CFA (FCFA) et sont susceptibles d'etre modifies sans preavis. " + site.legalName + " s'engage a communiquer le prix definitif avant toute transaction.",
        ],
      },
      {
        heading: "Livraison et prestations",
        content: [
          "Les modalites de livraison des produits (delais, frais, zone geographique) sont precisees lors de chaque commande. Les modalites d'intervention pour les services et formations sont definies dans les propositions commerciales.",
        ],
      },
      {
        heading: "Responsabilite",
        content: [
          site.legalName + " s'engage a fournir les prestations et produits conformement aux conditions convenues. Sa responsabilite ne saurait etre engagee en cas de force majeure ou d'evenements independants de sa volonte.",
        ],
      },
      {
        heading: "Droit applicable",
        content: [
          "Les presentes conditions generales sont soumises au droit en vigueur dans le pays d'etablissement de " + site.legalName + ". Tout litige sera soumis aux juridictions competentes correspondantes.",
        ],
      },
      {
        heading: "Mise a jour",
        content: [
          "Les presentes conditions generales peuvent etre mises a jour a tout moment. Derniere mise a jour : " + year + ".",
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
          <nav aria-label="Fil d Ariane" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-brand-muted">
              <li><Link to="/" className="hover:text-brand-green">Accueil</Link></li>
              <li aria-hidden="true" className="select-none">{">"}</li>
              <li className="font-semibold text-brand-ink">{config.title}</li>
            </ol>
          </nav>

          <h1 className="font-display text-3xl font-extrabold text-brand-ink sm:text-4xl">
            {config.title}
          </h1>

          <p className="mt-3 rounded-lg border border-orange-200 bg-orange-50 p-4 text-xs leading-relaxed text-orange-700">
            <strong>Document provisoire.</strong>{" "}
            Les presentes informations legales sont indicatives et doivent etre revues et validees
            par LEGAL SOURCE, avec le concours d&apos;un conseil juridique competent, avant la
            mise en production du site.
          </p>

          <div className="mt-10 space-y-8">
            {config.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-lg font-bold text-brand-ink">
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.content.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed text-brand-muted">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-brand-border pt-8 text-sm text-brand-muted">
            <Link to="/mentions-legales" className="hover:text-brand-green">Mentions legales</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-brand-green">Politique de confidentialite</Link>
            <Link to="/conditions-generales" className="hover:text-brand-green">Conditions generales</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
