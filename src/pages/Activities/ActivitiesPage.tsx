import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '@/assets/images/heroes/hero-home.jpg'
import { AppIcon } from '@/components/common/AppIcon'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { CtaBand } from '@/components/sections/CtaBand'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { cn } from '@/utils/format'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

export default function ActivitiesPage() {
  useDocumentMeta({
    title: 'Nos activités — domaines d’intervention',
    description:
      'Découvrez les domaines d’intervention de LEGAL SOURCE : formations, audits et certifications, RH et sécurité, hygiène, énergies durables, conseil, RSE, sécurité alimentaire et fourniture d’EPI.',
    path: '/activites',
  })

  const activities = catalogService.getActivities()
  const services = catalogService.getServices()

  return (
    <>
      <PageHero
        kicker="Nos activités"
        title="Des domaines d’intervention complémentaires"
        description="LEGAL SOURCE regroupe ses expertises par famille d’activités pour vous accompagner de manière globale, du diagnostic jusqu’à la mise en œuvre sur le terrain."
        image={heroImage}
        imageAlt="Équipe LEGAL SOURCE sur un site industriel"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Nos activités' }]}
      >
        <Button to="/services">
          Découvrir nos services
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button to="/contact" variant="outline">
          Nous contacter
        </Button>
      </PageHero>

      <section className="border-b border-brand-border bg-white py-6">
        <Container>
          <nav aria-label="Accès rapide aux domaines">
            <ul className="flex flex-wrap gap-2">
              {activities.map((activity) => (
                <li key={activity.id}>
                  <a
                    href={`#${activity.id}`}
                    className="inline-flex rounded-full border border-brand-border px-3 py-1.5 text-xs font-medium text-brand-muted transition-colors hover:border-brand-green hover:text-brand-green"
                  >
                    {activity.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            title="Des solutions complètes pour tous vos besoins"
            description="Chaque domaine est présenté avec son périmètre et renvoie vers le service correspondant ou vers un échange direct avec notre équipe."
            align="center"
          />
        </Container>
      </section>

      <div>
        {activities.map((activity, index) => {
          const service = services.find((item) => item.slug === activity.serviceSlug)
          const reversed = index % 2 === 1

          return (
            <section
              key={activity.id}
              id={activity.id}
              className={cn('scroll-mt-32 py-10', reversed ? 'bg-brand-sky' : 'bg-white')}
            >
              <Container>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={cn(reversed && 'lg:order-2')}>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white">
                      <AppIcon name={activity.icon} className="h-6 w-6" />
                    </span>
                    <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight text-brand-ink sm:text-[1.7rem]">
                      {activity.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                      {activity.description}
                    </p>
                    {service && (
                      <p className="mt-4 text-sm text-brand-muted">
                        <span className="font-semibold text-brand-ink">Prestation associée : </span>
                        <Link
                          to={`/services#${service.slug}`}
                          className="font-medium text-brand-green hover:text-brand-green-dark"
                        >
                          {service.title}
                        </Link>
                      </p>
                    )}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button
                        href={whatsappLink(whatsappMessages.activity(activity.title))}
                        external
                        size="sm"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        En savoir plus sur WhatsApp
                      </Button>
                      <Button to="/services" variant="outlineNavy" size="sm">
                        Voir les services
                      </Button>
                    </div>
                  </div>

                  <div className={cn(reversed && 'lg:order-1')}>
                    <img
                      src={activity.image}
                      alt={activity.imageAlt}
                      className="h-64 w-full rounded-xl object-cover shadow-card sm:h-80"
                      loading="lazy"
                      width={180}
                      height={72}
                    />
                  </div>
                </div>
              </Container>
            </section>
          )
        })}
      </div>

      <CtaBand />
    </>
  )
}
