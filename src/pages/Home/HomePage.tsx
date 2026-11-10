import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '@/assets/images/heroes/legal-source-consultant-qhse-brazzaville.webp'
import aboutImage from '@/assets/images/legal-source-accompagnement-entreprise-congo.webp'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ActivityCard } from '@/components/cards/ActivityCard'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { TrainingCard } from '@/components/cards/TrainingCard'
import { ProductCard } from '@/components/cards/ProductCard'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { Reassurance } from '@/components/sections/Reassurance'
import { CtaBand } from '@/components/sections/CtaBand'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'

export default function HomePage() {
  useDocumentMeta({
    title: 'LEGAL SOURCE – Services et solutions professionnelles au Congo',
    description:
      'LEGAL SOURCE est une entreprise de conseil et de formation à Brazzaville, au Congo. Découvrez ses services professionnels pour les entreprises au Congo : QHSE, audits, formations, certification, EPI et accompagnement de projets.',
    path: '/',
  })

  const activities = catalogService.getActivities()
  const services = catalogService.getServices().slice(0, 3)
  const trainings = catalogService.getFeaturedTrainings().slice(0, 3)
  const products = catalogService.getFeaturedProducts()
  const projects = catalogService.getProjects().slice(0, 3)

  return (
    <>
      <PageHero
        kicker="Consulting · Management · Certification QHSE"
        title="Bienvenue chez LEGAL SOURCE"
        description="Entreprise de conseil et de formation à Brazzaville, LEGAL SOURCE met son expertise au service des organisations au Congo : services professionnels, solutions QHSE, formations et accompagnement à la certification."
        image={heroImage}
        imageAlt="Consultant LEGAL SOURCE sur un site industriel au Congo, équipé d’un casque et d’un gilet de sécurité"
        features={['Qualité', 'Santé & Sécurité', 'Environnement', 'Durabilité']}
      >
        <Button to="/services" size="lg">
          Découvrir nos services
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button to="/contact" variant="outline" size="lg">
          Nous contacter
        </Button>
      </PageHero>

      <section className="section">
        <Container>
          <SectionHeading
            kicker="Nos activités"
            title="Nos activités, nos services et nos solutions"
            description="Découvrez les activités, services professionnels et solutions de LEGAL SOURCE au Congo, regroupés par domaine d’expertise pour répondre à vos besoins."
          />

          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/activites" variant="outlineNavy">
              Tous nos domaines d’intervention
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={whatsappLink(whatsappMessages.general())}
              external
              variant="ghost"
              className="px-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Poser une question sur WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      <Reassurance />

      <section className="section">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Accompagnement LEGAL SOURCE : agir aujourd’hui pour un avenir meilleur"
                className="w-full rounded-xl object-cover shadow-card"
                width={300}
                height={180}
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading
                kicker="À propos de LEGAL SOURCE"
                title="Un partenaire engagé à vos côtés"
                description="Entreprise de conseil et de formation au Congo, LEGAL SOURCE met son expertise au service des organisations pour atteindre leurs objectifs de performance, de conformité et de développement durable."
              />
              <div className="mt-5 rounded-lg border-l-4 border-brand-green-dark bg-brand-sky p-5">
                <p className="font-display text-sm font-bold text-brand-ink">Notre mission</p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                  Vous apporter des solutions fiables, adaptées et innovantes pour un monde du
                  travail plus sûr et plus responsable.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/a-propos">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button to="/projets" variant="outlineNavy">
                  Voir nos réalisations
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-brand-sky">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Nos services"
              title="Des prestations adaptées à vos enjeux"
              description="Conseil, coaching, audit, formation et accompagnement à la certification : une expertise mobilisable selon vos besoins."
            />
            <Button to="/services" variant="outlineNavy" className="shrink-0">
              Tous nos services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Nos formations"
              title="Renforcez les compétences de vos équipes"
              description="Des formations aux référentiels internationaux, pensées pour être applicables au quotidien."
            />
            <Button to="/formations" variant="outlineNavy" className="shrink-0">
              Catalogue des formations
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainings.map((training) => (
              <TrainingCard key={training.id} training={training} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-brand-sky">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Boutique"
              title="EPI & kits pour travailler en toute sécurité"
              description="Une sélection d’équipements de protection individuelle et de kits, commandables directement via WhatsApp."
            />
            <Button to="/boutique" variant="outlineNavy" className="shrink-0">
              Voir la boutique
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-muted">
            Catalogue provisoire. Prix et disponibilités indicatifs, à confirmer avec LEGAL SOURCE
            lors de votre demande.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Nos réalisations"
              title="Des interventions concrètes sur le terrain"
              description="Audit et mise en conformité, formation, agriculture durable et études d’impact : découvrez quelques réalisations présentées par LEGAL SOURCE."
            />
            <Button to="/projets" variant="outlineNavy" className="shrink-0">
              Toutes nos réalisations
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/actualites"
              className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-green-dark hover:text-brand-green-darker"
            >
              Lire nos actualités
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
