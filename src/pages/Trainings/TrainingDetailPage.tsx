import {
  ArrowLeft,
  ArrowRight,
  Check,
  ClipboardCheck,
  Award,
  Clock3,
  MessageCircle,
  Search,
  Users,
} from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TrainingCard } from '@/components/cards/TrainingCard'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { CtaBand } from '@/components/sections/CtaBand'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

const registrationSteps = [
  {
    number: '01',
    title: 'Vous nous écrivez',
    description:
      'Indiquez la formation qui vous intéresse, le nombre de participants et vos contraintes de calendrier.',
    Icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Nous précisons le programme',
    description:
      'Nous vous communiquons le programme détaillé, les modalités et le calendrier adaptés à votre contexte.',
    Icon: Search,
  },
  {
    number: '03',
    title: 'La session est organisée',
    description:
      'La formation est planifiée avec vos équipes, en tenant compte de vos impératifs opérationnels.',
    Icon: Users,
  },
]

export default function TrainingDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const training = slug ? catalogService.getTrainingBySlug(slug) : null

  useDocumentMeta({
    title: training ? `${training.title} – Formation au Congo` : 'Formation introuvable',
    description: training ? training.description : '',
    path: training ? `/formations/${training.slug}` : '/formations',
  })

  if (!training) {
    const legacyAliases: Record<string, string> = {
      nebosh: '/formations/catalogue/nebosh',
      iosh: '/formations/catalogue/iosh',
      'iso-9001': '/formations/iso-9001-lead-auditor',
      'iso-14001': '/formations/iso-14001-lead-auditor',
      'iso-45001': '/formations/iso-45001-lead-auditor',
      'haccp-globalgap': '/formations/haccp',
    }
    const target = slug ? legacyAliases[slug] : undefined
    return <Navigate to={target ?? '/formations'} replace />
  }

  const family = catalogService.getTrainingFamilyBySlug(training.familySlug)
  const familyTrainings = catalogService.getTrainingsByFamily(training.familySlug)
  const related = [
    ...familyTrainings.filter((item) => item.id !== training.id),
    ...catalogService.getTrainings().filter((item) => item.familySlug !== training.familySlug),
  ].slice(0, 3)

  const format = training.modalities.some((modality) =>
    modality.toLowerCase().includes('intra'),
  )
    ? 'Intra-entreprise'
    : 'À convenir'

  return (
    <>
      <PageHero
        kicker={training.category}
        title={training.title}
        description={training.description}
        image={training.image}
        imageAlt={training.imageAlt}
        crumbs={[
          { label: 'Accueil', to: '/' },
          { label: 'Nos formations', to: '/formations' },
          ...(family
            ? [{ label: family.shortName, to: `/formations/catalogue/${family.slug}` }]
            : []),
          { label: training.title },
        ]}
        compact
      >
        <Button
          href={whatsappLink(whatsappMessages.training(training.title))}
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

      {/* Repères pratiques */}
      <section className="border-b border-brand-border bg-white">
        <Container>
          <dl className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-5 sm:gap-6">
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Catalogue
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-ink">
                {family ? family.shortName : training.category}
              </dd>
            </div>
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Niveau
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-ink">{training.level}</dd>
            </div>
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Leçons
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-ink">
                {training.lessons !== null ? training.lessons : 'Non renseigné'}
              </dd>
            </div>
            <div>
              <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                Format
              </dt>
              <dd className="mt-1 text-sm font-semibold text-brand-ink">{format}</dd>
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
          <div className="grid gap-10 lg:grid-cols-[1.55fr_0.85fr] lg:gap-14">
            <div className="min-w-0">
              <Link
                to={family ? `/formations/catalogue/${family.slug}` : '/formations'}
                className="mb-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-green-dark hover:text-brand-green-darker"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {family ? `Retour au catalogue ${family.shortName}` : 'Retour au catalogue'}
              </Link>

              <section>
                <h2 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
                  Objectifs pédagogiques
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  À l’issue de cette formation, les participants seront amenés à :
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {training.objectives.map((objective) => (
                    <li
                      key={objective}
                      className="flex items-start gap-2.5 rounded-lg border border-brand-border bg-white p-4 text-sm leading-relaxed text-brand-muted"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark"
                        aria-hidden="true"
                      />
                      {objective}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
                  À qui s’adresse cette formation ?
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {training.audience.map((profile) => (
                    <li
                      key={profile}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-muted"
                    >
                      <Users
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy"
                        aria-hidden="true"
                      />
                      {profile}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
                  Programme indicatif
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  Les grandes séquences ci-dessous reprennent les thèmes publics du référentiel.
                  Elles sont adaptées à votre contexte, à votre secteur et au niveau des
                  participants avant chaque session.
                </p>

                <ol className="mt-5 space-y-3">
                  {training.program.map((module, index) => (
                    <li
                      key={module}
                      className="flex items-start gap-3 rounded-lg border border-brand-border bg-white p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green-light font-display text-xs font-bold text-brand-green-dark">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="pt-1 text-sm leading-relaxed text-brand-muted">{module}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 rounded-lg bg-brand-sky p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <ClipboardCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-dark"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-sm font-bold text-brand-ink">
                        Organisation de la session
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {training.modalities.map((modality) => (
                          <li
                            key={modality}
                            className="flex items-start gap-2 text-sm leading-relaxed text-brand-muted"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green-dark"
                              aria-hidden="true"
                            />
                            {modality}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {(training.qualification || training.duration || training.recognition) && (
                <section className="mt-10 rounded-lg border border-brand-border bg-brand-sky p-5 sm:p-6">
                  <h2 className="font-display text-xl font-bold text-brand-ink">
                    Repères sur la qualification
                  </h2>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    {training.qualification && (
                      <div className="sm:col-span-2">
                        <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                          Niveau
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-brand-ink">
                          {training.qualification}
                        </dd>
                      </div>
                    )}
                    {training.duration && (
                      <div>
                        <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                          Durée de référence
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-brand-ink">
                          {training.duration}
                        </dd>
                      </div>
                    )}
                    {training.recognition && (
                      <div>
                        <dt className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                          Reconnaissance
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-brand-ink">
                          {training.recognition}
                        </dd>
                      </div>
                    )}
                  </dl>
                </section>
              )}

              {training.units && training.units.length > 0 && (
                <section className="mt-10">
                  <h2 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
                    Structure et contenu de la qualification
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    Unités, modules ou éléments définis par le référentiel de l’organisme
                    certificateur.
                  </p>
                  <ol className="mt-5 grid gap-3">
                    {training.units.map((unit) => (
                      <li
                        key={unit.title}
                        className="rounded-lg border border-brand-border bg-white p-4"
                      >
                        <h3 className="font-display text-sm font-bold text-brand-ink">
                          {unit.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                          {unit.detail}
                        </p>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {training.highlights && training.highlights.length > 0 && (
                <section className="mt-10">
                  <h2 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
                    Points clés
                  </h2>
                  <ul className="mt-5 space-y-2.5">
                    {training.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-muted"
                      >
                        <Award
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-lg border border-brand-border bg-white p-5 sm:p-6">
                  <h2 className="font-display text-xl font-bold text-brand-ink">Prérequis</h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {training.prerequisites}
                  </p>
                </div>
                <div className="rounded-lg border border-brand-border bg-white p-5 sm:p-6">
                  <h2 className="font-display text-xl font-bold text-brand-ink">
                    Évaluation et certification
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {training.assessment}
                  </p>
                </div>
              </section>

              <section className="mt-10">
                <h2 className="font-display text-xl font-bold text-brand-ink sm:text-2xl">
                  Comment s’inscrire ?
                </h2>
                <ol className="mt-5 space-y-4">
                  {registrationSteps.map((step) => (
                    <li key={step.number} className="flex gap-4">
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
              </section>
            </div>

            {/* Fiche formation */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-brand-border bg-white p-6 shadow-card">
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand-green-dark">
                  Fiche formation
                </p>
                <h2 className="mt-2 font-display text-lg font-bold leading-snug text-brand-ink">
                  {training.title}
                </h2>

                <dl className="mt-5 divide-y divide-brand-border border-y border-brand-border">
                  <div className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-sm text-brand-muted">Catalogue</dt>
                    <dd className="text-right text-sm font-semibold text-brand-ink">
                      {family ? family.shortName : training.category}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-sm text-brand-muted">Niveau</dt>
                    <dd className="text-right text-sm font-semibold text-brand-ink">
                      {training.level}
                    </dd>
                  </div>
                  {training.duration && (
                    <div className="flex items-start justify-between gap-4 py-3">
                      <dt className="text-sm text-brand-muted">Durée de référence</dt>
                      <dd className="text-right text-sm font-semibold text-brand-ink">
                        {training.duration}
                      </dd>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-sm text-brand-muted">Nombre de leçons</dt>
                    <dd className="text-right text-sm font-semibold text-brand-ink">
                      {training.lessons !== null ? training.lessons : 'Non renseigné'}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-sm text-brand-muted">Format</dt>
                    <dd className="text-right text-sm font-semibold text-brand-ink">{format}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-sm text-brand-muted">Tarif</dt>
                    <dd className="text-right text-sm font-semibold text-brand-ink">Sur demande</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    href={whatsappLink(whatsappMessages.training(training.title))}
                    external
                    fullWidth
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Demander le programme
                  </Button>
                  <Button to="/contact" variant="outlineNavy" fullWidth>
                    Nous contacter
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>

                <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-brand-muted">
                  <Clock3 className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Programme détaillé, dates et tarifs communiqués sur demande.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="section bg-brand-sky">
          <Container>
            <SectionHeading
              kicker="Catalogue"
              title="D’autres formations peuvent compléter votre parcours"
              description="Découvrez les autres formations du catalogue LEGAL SOURCE."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <TrainingCard key={item.id} training={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  )
}
