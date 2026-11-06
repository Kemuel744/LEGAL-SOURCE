import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { NewsCard } from '@/components/cards/NewsCard'
import { CtaBand } from '@/components/sections/CtaBand'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'
import heroImage from '@/assets/images/heroes/hero-services.jpg'

export default function NewsPage() {
  useDocumentMeta({
    title: 'Actualités',
    description:
      'Retrouvez les actualités, fiches pratiques et publications de LEGAL SOURCE sur le QHSE, la sécurité, l’environnement et la performance durable.',
    path: '/actualites',
  })

  const posts = catalogService.getNews()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <PageHero
        kicker="Actualités"
        title="Informations, conseils et actualités QHSE"
        description="Publications, fiches pratiques et annonces de LEGAL SOURCE pour accompagner vos démarches de qualité, santé, sécurité et environnement."
        image={heroImage}
        imageAlt="Équipe LEGAL SOURCE lors d’une session de formation"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Actualités' }]}
      >
        <Button
          href={whatsappLink(whatsappMessages.general())}
          external
          size="lg"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Échanger avec nous
        </Button>
      </PageHero>

      <section className="section">
        <Container>
          {/* Article à la une */}
          {featured && (
            <div className="mb-10">
              <SectionHeading kicker="À la une" title="Dernière publication" />
              <div className="mt-6">
                <NewsCard post={featured} featured />
              </div>
            </div>
          )}

          {/* Autres articles */}
          {rest.length > 0 && (
            <div>
              <SectionHeading kicker="Publications" title="Fiches pratiques & conseils" />
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <NewsCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {posts.length === 0 && (
            <p className="py-20 text-center text-sm text-brand-muted">
              Aucune publication pour le moment. Revenez bientôt.
            </p>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
