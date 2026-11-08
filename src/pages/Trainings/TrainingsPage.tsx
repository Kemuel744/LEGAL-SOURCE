import { ArrowRight, MessageCircle, Search, Users } from 'lucide-react'
import heroImage from '@/assets/images/heroes/hero-services.webp'
import classroomImage from '@/assets/images/projects/formation-terrain.webp'
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

const steps = [
  {
    number: '01',
    title: 'Vous nous écrivez',
    description:
      'Indiquez la formation qui vous intéresse, le nombre de participants et vos contraintes de calendrier via WhatsApp.',
    Icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Nous construisons la réponse',
    description:
      'Nous précisons le programme, les modalités et le calendrier adaptés à votre contexte.',
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

export default function TrainingsPage() {
  useDocumentMeta({
    title: 'Nos formations',
    description:
      'Formations NEBOSH, IOSH, ISO 9001, ISO 14001, ISO 45001, HACCP et GLOBALG.A.P. : découvrez le catalogue LEGAL SOURCE et demandez des informations sur WhatsApp.',
    path: '/formations',
  })

  const trainings = catalogService.getTrainings()

  return (
    <>
      <PageHero
        kicker="Nos formations"
        title="Renforcez les compétences de vos équipes"
        description="Des formations aux référentiels internationaux, conçues pour être comprises, appropriées et appliquées au quotidien par vos équipes."
        image={heroImage}
        imageAlt="Session de formation et d’accompagnement LEGAL SOURCE"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Nos formations' }]}
      >
        <Button
          href={whatsappLink(whatsappMessages.general())}
          external
          size="lg"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Demander le catalogue
        </Button>
        <Button to="/contact" variant="outline" size="lg">
          Nous contacter
        </Button>
      </PageHero>

      <section className="section">
        <Container>
          <SectionHeading
            kicker="Catalogue"
            title="Des parcours adaptés à vos enjeux"
            description="Les programmes détaillés, durées et modalités sont communiqués sur demande afin de construire une réponse adaptée à votre organisation."
            align="center"
          />

          <div className="mx-auto mt-9 max-w-4xl space-y-6">
            {trainings.map((training) => (
              <TrainingCard key={training.id} training={training} variant="detailed" />
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-xs leading-relaxed text-brand-muted">
            Les intitulés de formations présentés correspondent aux référentiels cités dans les
            supports officiels de LEGAL SOURCE. Les programmes, prérequis, durées et tarifs
            définitifs sont à confirmer auprès de l’équipe.
          </p>
        </Container>
      </section>

      <section className="section bg-brand-sky">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <img
              src={classroomImage}
              alt="Formation en salle animée par LEGAL SOURCE"
              className="w-full rounded-xl object-cover shadow-card"
              loading="lazy"
              width={169}
              height={90}
            />
            <div>
              <SectionHeading
                kicker="Comment s’inscrire ?"
                title="Un échange simple, une réponse adaptée"
                description="Nous privilégions un échange direct pour comprendre votre besoin avant de vous proposer une session."
              />
              <ol className="mt-6 space-y-4">
                {steps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm">
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
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  href={whatsappLink(
                    whatsappMessages.training('de votre catalogue de formations'),
                  )}
                  external
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Échanger sur WhatsApp
                </Button>
                <Button to="/contact" variant="outlineNavy">
                  Nous écrire
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
