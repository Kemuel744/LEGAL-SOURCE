import { ArrowRight, Check } from 'lucide-react'
import heroImage from '@/assets/images/heroes/legal-source-services-professionnels-congo.webp'
import { AppIcon } from '@/components/common/AppIcon'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { CtaBand } from '@/components/sections/CtaBand'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { domainHighlights } from '@/data/services'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

const reasons = [
  'Une expertise pluridisciplinaire reconnue',
  'Des solutions personnalisées selon vos besoins',
  'Une équipe d’experts expérimentés',
  'Un accompagnement de proximité',
  'Une approche orientée résultats et durabilité',
]

export default function ServicesPage() {
  useDocumentMeta({
    title: 'Services professionnels au Congo – Conseil, audit et formation',
    description:
      'Conseil, coaching, audit, formation, accompagnement à la certification et stratégie de développement durable : découvrez les services professionnels de LEGAL SOURCE pour les entreprises au Congo.',
    path: '/services',
  })

  const services = catalogService.getServices()

  return (
    <>
      <PageHero
        kicker="Nos services"
        title="Services professionnels au Congo : des solutions sur mesure"
        description="LEGAL SOURCE vous conseille, vous accompagne et vous forme pour relever vos défis, optimiser vos ressources et atteindre vos objectifs en toute conformité."
        image={heroImage}
        imageAlt="Consultante et responsable échangeant lors d’un accompagnement LEGAL SOURCE"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Nos services' }]}
      >
        <Button
          href={whatsappLink(whatsappMessages.quote('une prestation de conseil'))}
          external
          size="lg"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Demander un devis
        </Button>
        <Button to="/contact" variant="outline" size="lg">
          Nous contacter
        </Button>
      </PageHero>

      <section className="section">
        <Container>
          <SectionHeading
            title="Nos domaines d’intervention"
            description="Six expertises complémentaires, mobilisables séparément ou dans le cadre d’un accompagnement global."
            align="center"
          />
          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {domainHighlights.map((domain) => (
              <article
                key={domain.title}
                className="flex h-full flex-col items-center rounded-lg border border-brand-border bg-white p-4 text-center shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white">
                  <AppIcon name={domain.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-3 font-display text-sm font-bold leading-snug text-brand-ink">
                  {domain.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">
                  {domain.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-brand-sky">
        <Container>
          <SectionHeading
            kicker="Le détail de nos prestations"
            title="Un accompagnement construit autour de vos besoins"
            description="Chaque prestation est ajustée à votre contexte, à votre niveau de maturité et aux attentes de vos parties prenantes."
          />

          <div className="mt-9 space-y-6">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.slug}
                className="scroll-mt-32 rounded-lg border border-brand-border bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-sky text-brand-navy">
                        <AppIcon name={service.icon} className="h-6 w-6" />
                      </span>
                      <span className="font-display text-3xl font-extrabold text-brand-border">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-bold text-brand-ink sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-1 font-display text-sm font-semibold text-brand-green-dark">
                      {service.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Button
                        href={whatsappLink(whatsappMessages.service(service.title))}
                        external
                        size="sm"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        Demander des renseignements
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="rounded-lg bg-brand-sky p-5">
                      <h3 className="font-display text-xs font-bold uppercase tracking-wider text-brand-ink">
                        Objectifs
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.objectives.map((objective) => (
                          <li
                            key={objective}
                            className="flex items-start gap-2 text-sm leading-relaxed text-brand-muted"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark"
                              aria-hidden="true"
                            />
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-brand-navy p-5 text-white">
                      <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                        Bénéfices
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-sm leading-relaxed text-white/80"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#A8DC97]"
                              aria-hidden="true"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-navy">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(46,141,41,0.3),transparent_48%),radial-gradient(circle_at_82%_80%,rgba(44,127,184,0.3),transparent_48%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-center gap-10 py-14 lg:grid-cols-[1fr_0.85fr] lg:py-16">
            <div>
              <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-[#A8DC97]">
                Pourquoi choisir LEGAL SOURCE ?
              </p>
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                Vos défis d’aujourd’hui, nos solutions de demain
              </h2>
              <ul className="mt-6 space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#A8DC97]" aria-hidden="true" />
                    {reason}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button to="/contact" size="lg">
                  Parlons de votre projet
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button to="/formations" variant="outline" size="lg">
                  Voir les formations
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-7">
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#A8DC97]">
                  Notre approche
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    'Diagnostic partagé de vos pratiques',
                    'Plan d’actions priorisé et mesurable',
                    'Accompagnement de terrain',
                    'Transfert de compétences aux équipes',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#A8DC97]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
