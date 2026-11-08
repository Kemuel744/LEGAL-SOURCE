import { ArrowRight, Check } from 'lucide-react'
import aboutImage from '@/assets/images/legal-source-accompagnement-entreprise-congo.webp'
import heroImage from '@/assets/images/heroes/legal-source-services-professionnels-congo.webp'
import directorImage from '@/assets/images/team/israel-eloye-ondele.webp'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { CtaBand } from '@/components/sections/CtaBand'
import { site } from '@/config/site'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

const values = [
  {
    title: 'Expertise reconnue',
    description:
      'Une expertise pluridisciplinaire au service de la conformité, de la performance et de la prévention des risques.',
  },
  {
    title: 'Accompagnement personnalisé',
    description:
      'Des solutions construites avec vous, adaptées à votre organisation, vos contraintes et vos objectifs.',
  },
  {
    title: 'Standards internationaux',
    description:
      'Une approche alignée sur les référentiels internationaux de management, de qualité et de sécurité.',
  },
  {
    title: 'Solutions durables',
    description:
      'Des réponses qui intègrent la durabilité, la responsabilité sociétale et la protection de l’environnement.',
  },
  {
    title: 'Partenaire de confiance',
    description:
      'Une relation de proximité, fondée sur l’écoute, la transparence et l’engagement dans la durée.',
  },
]

const approach = [
  {
    step: '01',
    title: 'Écouter',
    description: 'Comprendre votre contexte, vos contraintes et vos priorités.',
  },
  {
    step: '02',
    title: 'Diagnostiquer',
    description: 'Évaluer les pratiques, identifier les écarts et prioriser les risques.',
  },
  {
    step: '03',
    title: 'Accompagner',
    description: 'Construire et mettre en œuvre des solutions adaptées à vos équipes.',
  },
  {
    step: '04',
    title: 'Ancrer',
    description: 'Faire vivre les bonnes pratiques et inscrire les progrès dans la durée.',
  },
]

export default function AboutPage() {
  useDocumentMeta({
    title: 'À propos de LEGAL SOURCE – Conseil et formation au Congo',
    description:
      'Découvrez LEGAL SOURCE, entreprise de conseil et de formation basée à Brazzaville, au Congo : expertise QHSE, accompagnement des organisations et prévention des risques.',
    path: '/a-propos',
  })

  return (
    <>
      <PageHero
        kicker="À propos"
        title="Une expertise QHSE au service de votre performance au Congo"
        description="LEGAL SOURCE accompagne les organisations dans la gestion de leurs risques, le renforcement de leurs compétences et la mise en conformité aux standards internationaux."
        image={heroImage}
        imageAlt="Échange entre une consultante LEGAL SOURCE et un responsable d’entreprise"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'À propos' }]}
      />

      <section className="section">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <SectionHeading
                kicker="Qui sommes-nous"
                title="Un cabinet de conseil et de formation tourné vers le terrain"
                description="Notre approche repose sur une conviction simple : la performance durable se construit en conciliant les exigences de conformité, les réalités opérationnelles et l’engagement des équipes."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                <p>
                  LEGAL SOURCE intervient dans le domaine du QHSE : qualité, hygiène, sécurité et
                  environnement. Nous accompagnons les organisations dans la structuration de leurs
                  démarches, la préparation de leurs certifications et le renforcement des
                  compétences de leurs équipes.
                </p>
                <p>
                  Notre intervention couvre également le conseil, le coaching, les audits, les
                  études d’impact, la fourniture d’équipements de protection individuelle et
                  l’accompagnement de projets agricoles durables.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-brand-border bg-brand-sky p-5">
                  <h3 className="font-display text-sm font-bold text-brand-ink">Notre mission</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    Vous apporter des solutions fiables, adaptées et innovantes pour un monde du
                    travail plus sûr et plus responsable.
                  </p>
                </div>
                <div className="rounded-lg border border-brand-border bg-brand-sky p-5">
                  <h3 className="font-display text-sm font-bold text-brand-ink">Notre vision</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    Contribuer à des organisations capables de conjuguer performance, conformité et
                    durabilité, avec des équipes réellement actrices de la prévention.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={aboutImage}
                alt="Agir aujourd’hui pour un avenir meilleur — LEGAL SOURCE"
                className="w-full rounded-xl shadow-card"
                width={300}
                height={180}
                loading="lazy"
              />
              <div className="mt-5 rounded-lg bg-brand-navy p-6 text-white">
                <p className="font-display text-lg font-bold">Notre histoire</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  LEGAL SOURCE s’est construit autour d’une expertise de terrain, au contact des
                  entreprises, des équipes et des réalités de production. Cette expérience nourrit
                  aujourd’hui une approche pragmatique du conseil et de la formation, orientée vers
                  des résultats concrets et durables.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-brand-sky">
        <Container>
          <SectionHeading
            kicker="Nos valeurs"
            title="Ce qui guide notre accompagnement"
            align="center"
          />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-brand-border bg-white p-6 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green-light text-brand-green-dark">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-brand-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-brand-navy">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div className="mx-auto w-full max-w-xs sm:max-w-sm">
              <div className="overflow-hidden rounded-xl border border-white/15 shadow-card">
                <img
                  src={directorImage}
                  alt={`Portrait de ${site.director.name}, ${site.director.role} de LEGAL SOURCE`}
                  className="h-auto w-full object-cover"
                  width={960}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div>
              <SectionHeading
                kicker="Notre direction"
                title={site.director.name}
                description={site.director.role}
                light
              />
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                La direction générale de LEGAL SOURCE est assurée par {site.director.name}.
              </p>
              <Button to="/contact" variant="outline" className="mt-7">
                Prendre contact
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <SectionHeading
              kicker="Notre approche"
              title="Une méthode claire, du diagnostic à l’ancrage"
              description="Chaque mission est conduite avec rigueur et transparence, en associant vos équipes à chaque étape."
            />
            <ol className="grid gap-4 sm:grid-cols-2">
              {approach.map((item) => (
                <li
                  key={item.step}
                  className="rounded-lg border border-brand-border bg-white p-5 shadow-sm"
                >
                  <span className="font-display text-2xl font-extrabold text-brand-border">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 rounded-lg border border-brand-border bg-brand-sky p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <h2 className="font-display text-lg font-bold text-brand-ink">
                Envie d’en savoir plus sur notre organisation ?
              </h2>
              <p className="mt-1 text-sm text-brand-muted">
                Échangeons directement sur vos enjeux et sur la manière dont nous pouvons vous
                accompagner.
              </p>
            </div>
            <Button to="/contact" className="mt-4 shrink-0 sm:mt-0">
              Nous contacter
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
