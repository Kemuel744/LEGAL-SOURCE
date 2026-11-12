import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { CtaBand } from '@/components/sections/CtaBand'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'
import heroImage from '@/assets/images/heroes/legal-source-projets-chantier.webp'

export default function ProjectsPage() {
  useDocumentMeta({
    title: 'Projets et réalisations au Congo',
    description:
      'Découvrez les projets et réalisations de LEGAL SOURCE au Congo : audits, formations, agriculture durable et études d’impact environnemental.',
    path: '/projets',
  })

  const projects = catalogService.getProjects()

  return (
    <>
      <PageHero
        kicker="Nos réalisations"
        title="Nos réalisations au Congo : des interventions concrètes"
        description="LEGAL SOURCE accompagne les organisations dans des projets variés : audit et mise en conformité, formation, agriculture durable et études environnementales."
        image={heroImage}
        imageAlt="Chantier vu du ciel avec grues et engins de terrassement"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Projets & réalisations' }]}
      >
        <Button
          href={whatsappLink(whatsappMessages.quote('un projet'))}
          external
          size="lg"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Parler de votre projet
        </Button>
        <Button to="/contact" variant="outline" size="lg">
          Nous contacter
        </Button>
      </PageHero>

      <section className="section">
        <Container>
          <SectionHeading
            kicker="Réalisations"
            title="Quelques projets que nous avons accompagnés"
            description="Les réalisations présentées ci-dessous illustrent nos domaines d’intervention. Les détails des clients et des résultats chiffrés sont communiqués uniquement avec leur accord."
          />

          <div className="mt-10 space-y-10">
            {projects.map((project, index) => (
              <article
                key={project.id}
                id={project.slug}
                className="scroll-mt-32 overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm"
              >
                <div
                  className={`grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-0 ${
                    index % 2 !== 0 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Image */}
                  <div
                    className="relative h-56 overflow-hidden sm:h-64 lg:h-auto lg:[direction:ltr]"
                    style={{ minHeight: '240px' }}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width={270}
                      height={184}
                    />
                    <div
                      className={`absolute inset-0 ${
                        index % 2 !== 0
                          ? 'bg-gradient-to-l from-brand-navy/60 to-transparent'
                          : 'bg-gradient-to-r from-brand-navy/60 to-transparent'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-brand-green-dark px-3 py-1 font-display text-xs font-bold uppercase tracking-wide text-white lg:[direction:ltr]">
                      {project.sector}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 lg:[direction:ltr] lg:p-8">
                    <span className="font-display text-5xl font-extrabold text-brand-border">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-2 font-display text-xl font-bold text-brand-ink sm:text-2xl">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      {project.context}
                    </p>

                    <div className="mt-6 grid gap-5 sm:grid-cols-3">
                      <div>
                        <h3 className="font-display text-xs font-bold uppercase tracking-wider text-brand-ink">
                          Objectifs
                        </h3>
                        <ul className="mt-2 space-y-1.5">
                          {project.objectives.map((obj) => (
                            <li
                              key={obj}
                              className="flex items-start gap-1.5 text-xs leading-relaxed text-brand-muted"
                            >
                              <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green-dark"
                                aria-hidden="true"
                              />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-display text-xs font-bold uppercase tracking-wider text-brand-ink">
                          Interventions
                        </h3>
                        <ul className="mt-2 space-y-1.5">
                          {project.interventions.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-1.5 text-xs leading-relaxed text-brand-muted"
                            >
                              <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-logo-blue"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg bg-brand-sky p-4">
                        <h3 className="font-display text-xs font-bold uppercase tracking-wider text-brand-ink">
                          Résultats
                        </h3>
                        <ul className="mt-2 space-y-1.5">
                          {project.results.map((res) => (
                            <li
                              key={res}
                              className="flex items-start gap-1.5 text-xs leading-relaxed text-brand-muted"
                            >
                              <ArrowRight
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green-dark"
                                aria-hidden="true"
                              />
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button
                        href={whatsappLink(whatsappMessages.project(project.title))}
                        external
                        size="sm"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        Parler d’un projet similaire
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
