import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { ContentCover } from '@/components/common/ContentCover'
import { SearchField } from '@/components/common/SearchField'
import { SectionHeading } from '@/components/common/SectionHeading'
import { NewsCard } from '@/components/cards/NewsCard'
import { CtaBand } from '@/components/sections/CtaBand'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { matchesQuery } from '@/utils/search'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

export default function NewsPage() {
  useDocumentMeta({
    title: 'Actualités QHSE et conseils aux entreprises au Congo',
    description:
      'Retrouvez les actualités et publications de LEGAL SOURCE sur le QHSE, la sécurité, l’environnement, les formations et la performance durable des entreprises au Congo.',
    path: '/actualites',
  })

  const allPosts = catalogService.getNews()
  const [query, setQuery] = useState('')
  const searching = query.trim().length > 0
  const posts = allPosts.filter((post) =>
    matchesQuery(query, [post.title, post.excerpt, post.category, ...post.body]),
  )
  const featured = searching ? undefined : posts[0]
  const rest = searching ? posts : posts.slice(1)

  return (
    <>
      <PageHero
        kicker="Actualités"
        title="Actualités QHSE et conseils aux entreprises au Congo"
        description="Publications, fiches pratiques et annonces de LEGAL SOURCE pour accompagner vos démarches de qualité, santé, sécurité et environnement."
        cover={
          <ContentCover
            icon="lightbulb"
            kicker="Conseils & actualités"
            title="QHSE, formations et vie de l’entreprise"
            toneKey="actualites"
            className="h-56 rounded-xl border border-white/10 sm:h-72 lg:h-[360px]"
          />
        }
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
          <div className="mb-10 max-w-xl">
            <SearchField
              value={query}
              onChange={setQuery}
              label="Rechercher une publication"
              placeholder="Rechercher une publication…"
              status={
                searching
                  ? `${posts.length} publication${posts.length > 1 ? 's' : ''} trouvée${posts.length > 1 ? 's' : ''}`
                  : undefined
              }
            />
          </div>

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
              {searching
                ? 'Aucune publication ne correspond à votre recherche.'
                : 'Aucune publication pour le moment. Revenez bientôt.'}
            </p>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
