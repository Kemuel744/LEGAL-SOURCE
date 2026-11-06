import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { site } from '@/config/site'
import { whatsappLink, whatsappMessages, mailtoLink } from '@/utils/whatsapp'

const channels = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: site.phone.display,
    href: site.phoneHref,
    description: 'Disponible du lundi au vendredi pendant les heures de bureau.',
    cta: 'Appeler maintenant',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: site.email,
    href: mailtoLink('Demande de renseignements — Site LEGAL SOURCE'),
    description: 'Pour toute demande écrite, devis ou renseignement non urgent.',
    cta: 'Envoyer un e-mail',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: site.address.full,
    href: null,
    description: site.address.region,
    cta: null,
  },
]

export default function ContactPage() {
  useDocumentMeta({
    title: 'Contact',
    description:
      'Contactez LEGAL SOURCE par téléphone, WhatsApp ou e-mail. Notre équipe répond à vos questions et prend en charge vos demandes.',
    path: '/contact',
  })

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Parlons de votre projet"
        description="Notre équipe est à votre écoute pour répondre à vos questions, établir un devis ou vous accompagner dans votre démarche."
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]}
        compact
      >
        <Button
          href={whatsappLink(whatsappMessages.contact())}
          external
          size="lg"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Écrire sur WhatsApp
        </Button>
      </PageHero>

      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            {/* Coordonnées */}
            <div>
              <SectionHeading
                kicker="Coordonnées"
                title="Plusieurs façons de nous joindre"
                description="Choisissez le canal de communication qui vous convient le mieux. Nous vous répondons dans les meilleurs délais."
              />

              <div className="mt-8 space-y-5">
                {channels.map(({ icon: Icon, label, value, href, description, cta }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-lg border border-brand-border bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-sky text-brand-navy">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-xs font-semibold uppercase tracking-wider text-brand-muted">
                        {label}
                      </p>
                      <p className="mt-0.5 font-display text-base font-bold text-brand-ink">
                        {value}
                      </p>
                      <p className="mt-1 text-xs text-brand-muted">{description}</p>
                      {cta && href && (
                        <a
                          href={href}
                          className="mt-2 inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-green hover:text-brand-green-dark"
                        >
                          {cta}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {site.socials.length > 0 && (
                <div className="mt-8">
                  <p className="font-display text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Réseaux sociaux
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-3">
                    {site.socials.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border border-brand-border px-4 py-2 font-display text-sm font-semibold text-brand-ink hover:border-brand-green hover:text-brand-green"
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* WhatsApp CTA + note provisoire */}
            <div className="space-y-5">
              <div className="rounded-xl bg-brand-navy p-6 sm:p-8">
                <WhatsAppIcon className="h-9 w-9 text-[#A8DC97]" />
                <h2 className="mt-4 font-display text-xl font-bold text-white">
                  La façon la plus rapide de nous contacter
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Envoyez-nous un message directement sur WhatsApp. Notre équipe prend en charge
                  votre demande et vous répond rapidement.
                </p>
                <Button
                  href={whatsappLink(whatsappMessages.contact())}
                  external
                  variant="white"
                  size="lg"
                  className="mt-6 w-full"
                >
                  <WhatsAppIcon className="h-5 w-5 text-brand-green" />
                  Ouvrir WhatsApp
                </Button>
              </div>

              <div className="rounded-lg border border-brand-border bg-brand-sky p-5">
                <p className="font-display text-sm font-bold text-brand-ink">
                  Demande de devis ou de renseignements
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                  Pour une demande de devis, précisez le service ou la formation qui vous intéresse
                  et décrivez brièvement votre contexte. Nous vous répondrons avec une proposition
                  adaptée.
                </p>
                <Button
                  href={mailtoLink(
                    'Demande de devis — LEGAL SOURCE',
                    'Bonjour,\n\nJe souhaite demander un devis pour...\n\nContexte :\n\nMerci.',
                  )}
                  variant="outlineNavy"
                  className="mt-4 w-full"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Envoyer une demande par e-mail
                </Button>
              </div>

              <p className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-xs leading-relaxed text-orange-700">
                <strong>Coordonnées provisoires.</strong> Le numéro de téléphone, l’adresse e-mail
                et l’adresse physique sont repris des modèles graphiques fournis. Ils seront mis à
                jour dès confirmation par LEGAL SOURCE.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
