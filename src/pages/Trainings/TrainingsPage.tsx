import { useState } from 'react'
import { ArrowRight, GraduationCap, Search, Users } from 'lucide-react'
import heroImage from '@/assets/images/heroes/legal-source-formations-professionnelles-congo.webp'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { ContentCover } from '@/components/common/ContentCover'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { AppIcon } from '@/components/common/AppIcon'
import { SearchField } from '@/components/common/SearchField'
import { TrainingCard } from '@/components/cards/TrainingCard'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { CtaBand } from '@/components/sections/CtaBand'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { matchesQuery } from '@/utils/search'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

const steps = [
  {
    number: '01',
    title: 'Choisissez un catalogue',
    description:
      'Les formations sont regroupées par famille : NEBOSH, IOSH, ISEP, ISO, ProQual et parcours LEGAL SOURCE.',
    Icon: Search,
  },
  {
    number: '02',
    title: 'Consultez la fiche',
    description:
      'Chaque formation présente ses objectifs, son public, son programme indicatif et ses modalités.',
    Icon: GraduationCap,
  },
  {
    number: '03',
    title: 'Construisons la session',
    description:
      'Nous adaptons le contenu, le calendrier et les modalités à votre organisation et à vos équipes.',
    Icon: Users,
  },
]

export default function TrainingsPage() {
  useDocumentMeta({
    title: 'Formations professionnelles au Congo – Catalogues LEGAL SOURCE',
    description:
      'Catalogues de formations au Congo : NEBOSH, IOSH, ISEP, ISO, ProQual, sécurité opérationnelle, incendie, santé au travail, environnement et agroalimentaire. Découvrez les fiches détaillées LEGAL SOURCE.',
    path: '/formations',
  })

  const families = catalogService.getTrainingFamilies()
  const allTrainings = catalogService.getTrainings()
  const totalTrainings = allTrainings.length
  const [query, setQuery] = useState('')
  const searching = query.trim().length > 0
  const results = searching
    ? allTrainings.filter((training) =>
        matchesQuery(query, [
          training.title,
          training.category,
          training.level,
          training.description,
          training.qualification,
          ...training.objectives,
          ...training.program,
        ]),
      )
    : []

  return (
    <>
      <PageHero
        kicker="Nos formations"
        title="Des catalogues de formation organisés par famille de métiers"
        description="Santé-sécurité, environnement, qualité, agroalimentaire, management : retrouvez les formations LEGAL SOURCE regroupées par référentiel et par domaine, avec une fiche détaillée pour chacune."
        image={heroImage}
        imageAlt="Session de formation et d’accompagnement LEGAL SOURCE"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Nos formations' }]}
      >
        <Button href={whatsappLink(whatsappMessages.general())} external size="lg">
          <WhatsAppIcon className="h-5 w-5" />
          Demander le catalogue
        </Button>
        <Button to="/contact" variant="outline" size="lg">
          Nous contacter
        </Button>
      </PageHero>

      <section className="border-b border-brand-border bg-white">
        <Container>
          <dl className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 sm:gap-6">
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Catalogues
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-brand-ink">
                {families.length}
              </dd>
            </div>
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Formations référencées
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-brand-ink">
                {totalTrainings}
              </dd>
            </div>
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Référentiels
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-brand-ink">
                NEBOSH, IOSH, ISEP, ISO
              </dd>
            </div>
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Modalités
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-brand-ink">
                Intra-entreprise
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            kicker="Catalogues thématiques"
            title="Les formations de la même famille, réunies dans un même catalogue"
            description="Choisissez une famille pour découvrir ses formations, leurs niveaux, leur nombre de leçons et le détail de chaque programme."
            align="center"
          />

          <div className="mx-auto mt-8 max-w-2xl">
            <SearchField
              value={query}
              onChange={setQuery}
              label="Rechercher une formation"
              placeholder="Rechercher une formation : NEBOSH, ISO 45001, incendie, audit…"
              status={
                searching
                  ? `${results.length} formation${results.length > 1 ? 's' : ''} trouvée${results.length > 1 ? 's' : ''}`
                  : `${totalTrainings} formations référencées`
              }
            />
          </div>

          {searching ? (
            results.length > 0 ? (
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {results.map((training) => (
                  <TrainingCard key={training.id} training={training} />
                ))}
              </div>
            ) : (
              <p className="mt-10 text-center text-sm text-brand-muted">
                Aucune formation ne correspond à « {query.trim()} ». Essayez un autre mot-clé ou
                parcourez les catalogues.
              </p>
            )
          ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {families.map((family) => {
              const familyTrainings = catalogService.getTrainingsByFamily(family.slug)
              const preview = familyTrainings.slice(0, 3)

              return (
                <article
                  key={family.id}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm transition-shadow hover:shadow-card"
                >
                  <div className="relative overflow-hidden">
                    <ContentCover
                      variant="card"
                      icon={family.icon}
                      toneKey={family.slug}
                      className="h-40 w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/25 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-4 bottom-3 flex items-end justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/95 text-brand-green-dark">
                          <AppIcon name={family.icon} className="h-4 w-4" />
                        </span>
                        <h3 className="font-display text-base font-bold leading-tight text-white">
                          {family.shortName}
                        </h3>
                      </div>
                      <span className="rounded-full bg-white/95 px-2.5 py-1 font-display text-[11px] font-bold text-brand-navy">
                        {familyTrainings.length} formation{familyTrainings.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">
                      {family.tagline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      {family.description}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {preview.map((training) => (
                        <li
                          key={training.id}
                          className="flex items-start gap-2 text-xs leading-relaxed text-brand-ink"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-green-dark"
                            aria-hidden="true"
                          />
                          <span className="line-clamp-1">{training.title}</span>
                        </li>
                      ))}
                      {familyTrainings.length > preview.length && (
                        <li className="pl-3 text-xs text-brand-muted">
                          + {familyTrainings.length - preview.length} autres formations
                        </li>
                      )}
                    </ul>

                    <Button
                      to={`/formations/catalogue/${family.slug}`}
                      variant="outlineNavy"
                      className="mt-5 w-full"
                    >
                      Ouvrir le catalogue
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </article>
              )
            })}
          </div>
          )}

          <p className="mx-auto mt-10 max-w-4xl text-xs leading-relaxed text-brand-muted">
            Les intitulés et le nombre de leçons proviennent du catalogue de formations LEGAL
            SOURCE. Les programmes présentés sont indicatifs et reformulés à partir des référentiels
            publics cités (NEBOSH, IOSH, ISEP, ISO, ProQual) ; ils sont adaptés avec vous avant
            chaque session. Les durées, tarifs et modalités de certification sont communiqués sur
            demande.
          </p>
        </Container>
      </section>

      <section className="section bg-brand-sky">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <SectionHeading
              kicker="Comment ça marche ?"
              title="Du catalogue à votre session"
              description="Un parcours simple, sans engagement, pour construire la formation qui correspond réellement à vos besoins."
            />
            <ol className="space-y-4">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="flex gap-4 rounded-lg border border-brand-border bg-white p-5 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green-dark">
                    <step.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-brand-ink">
                      {step.number} — {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink(whatsappMessages.general())} external>
              <WhatsAppIcon className="h-4 w-4" />
              Échanger sur WhatsApp
            </Button>
            <Button to="/contact" variant="outlineNavy">
              Nous écrire
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
