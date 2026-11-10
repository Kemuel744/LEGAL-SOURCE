import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { AppIcon } from '@/components/common/AppIcon'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { CtaBand } from '@/components/sections/CtaBand'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

export default function TrainingFamilyPage() {
  const { familySlug } = useParams<{ familySlug: string }>()
  const family = familySlug ? catalogService.getTrainingFamilyBySlug(familySlug) : null
  const familyTrainings = familySlug ? catalogService.getTrainingsByFamily(familySlug) : []

  useDocumentMeta({
    title: family
      ? `${family.name} – Catalogue de formations | LEGAL SOURCE`
      : 'Catalogue introuvable',
    description: family ? family.description : '',
    path: family ? `/formations/catalogue/${family.slug}` : '/formations',
  })

  if (!family) return <Navigate to="/formations" replace />

  return (
    <>
      <PageHero
        kicker="Catalogue de formations"
        title={family.name}
        description={family.description}
        image={family.image}
        imageAlt={family.imageAlt}
        crumbs={[
          { label: 'Accueil', to: '/' },
          { label: 'Nos formations', to: '/formations' },
          { label: family.shortName },
        ]}
        compact
      >
        <Button
          href={whatsappLink(
            whatsappMessages.training(`du catalogue ${family.name}`),
          )}
          external
          size="lg"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Demander le programme
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
                Famille
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-ink">{family.shortName}</dd>
            </div>
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Formations
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-ink">
                {familyTrainings.length}
              </dd>
            </div>
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Modalités
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-ink">Intra-entreprise</dd>
            </div>
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Tarif
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-ink">Sur demande</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Link
            to="/formations"
            className="mb-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-green-dark hover:text-brand-green-darker"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Tous les catalogues
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <SectionHeading
              kicker={family.tagline}
              title={`Les formations du catalogue ${family.shortName}`}
              description="Chaque fiche présente les objectifs, le public concerné, le programme indicatif et les modalités d’évaluation."
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light text-brand-green-dark">
              <AppIcon name={family.icon} className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {familyTrainings.map((training, index) => (
              <article
                key={training.id}
                className="rounded-xl border border-brand-border bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-brand-green-light px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-wide text-brand-green-dark">
                        {training.level}
                      </span>
                      {training.lessons !== null && (
                        <span className="rounded bg-brand-sky px-2 py-0.5 font-display text-[11px] font-semibold text-brand-muted">
                          {training.lessons} leçon{training.lessons > 1 ? 's' : ''}
                        </span>
                      )}
                      <span className="font-display text-[11px] font-semibold text-brand-muted">
                        Fiche {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-brand-ink">
                      <Link
                        to={`/formations/${training.slug}`}
                        className="hover:text-brand-green-dark"
                      >
                        {training.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      {training.description}
                    </p>

                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {training.objectives.slice(0, 4).map((objective) => (
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

                  <div className="flex shrink-0 flex-col gap-2 lg:w-52">
                    <Button to={`/formations/${training.slug}`} fullWidth>
                      Voir la fiche complète
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button
                      href={whatsappLink(whatsappMessages.training(training.title))}
                      external
                      variant="outlineNavy"
                      fullWidth
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Demander des informations
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-brand-border bg-brand-sky p-6">
            <h2 className="font-display text-lg font-bold text-brand-ink">
              Le programme ne correspond pas exactement à votre besoin ?
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-brand-muted">
              LEGAL SOURCE adapte les contenus, les exercices et le calendrier à votre secteur, à
              vos installations et au niveau de vos équipes. Parlons-en.
            </p>
            <Button href={whatsappLink(whatsappMessages.general())} external className="mt-4">
              <WhatsAppIcon className="h-4 w-4" />
              Construire une session sur mesure
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
