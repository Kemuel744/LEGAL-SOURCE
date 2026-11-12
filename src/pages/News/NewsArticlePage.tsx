import { ArrowLeft, ArrowRight, CalendarDays, Tag } from 'lucide-react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { NewsCard } from '@/components/cards/NewsCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { CtaBand } from '@/components/sections/CtaBand'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? catalogService.getNewsBySlug(slug) : null

  useDocumentMeta({
    title: post ? post.title : 'Article introuvable',
    description: post ? post.excerpt : '',
    path: post ? `/actualites/${post.slug}` : '/actualites',
  })

  if (!post) return <Navigate to="/actualites" replace />

  const others = catalogService.getNews().filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-brand-sky border-b border-brand-border">
        <Container>
          <nav aria-label="Fil d’Ariane" className="py-3">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-brand-muted">
              <li><Link to="/" className="hover:text-brand-green-dark">Accueil</Link></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><Link to="/actualites" className="hover:text-brand-green-dark">Actualités</Link></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="font-semibold text-brand-ink line-clamp-1 max-w-[220px]">{post.title}</li>
            </ol>
          </nav>
        </Container>
      </div>

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              to="/actualites"
              className="mb-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-green-dark hover:text-brand-green-darker"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Retour aux actualités
            </Link>

            {/* Header de l’article */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-brand-muted">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-light px-3 py-1 font-display font-semibold text-brand-green-dark">
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.displayDate}
                </span>
              </div>

              <h1 className="mt-4 font-display text-2xl font-extrabold leading-snug text-brand-ink sm:text-3xl lg:text-[2rem]">
                {post.title}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-brand-muted">
                {post.excerpt}
              </p>
            </header>

            {/* Image */}
            {post.image && (
              <figure className="mb-8 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.imageAlt ?? ''}
                  className="w-full object-cover"
                  loading="eager"
                  width={560}
                  height={280}
                />
              </figure>
            )}

            {/* Corps de l’article */}
            <div className="prose prose-sm prose-brand max-w-none sm:prose-base">
              {post.body.map((paragraph, i) => (
                <p key={i} className="mb-4 text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Encart CTA */}
            <div className="mt-10 rounded-xl bg-brand-navy p-6 sm:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-wider text-[#A8DC97]">
                Besoin d’un accompagnement ?
              </p>
              <p className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                Échangeons sur votre situation
              </p>
              <p className="mt-2 text-sm text-white/75">
                L’équipe LEGAL SOURCE est disponible pour répondre à vos questions et vous
                proposer un accompagnement adapté à votre contexte.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  href={whatsappLink(whatsappMessages.general())}
                  external
                  variant="white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-brand-green-dark" />
                  Nous écrire sur WhatsApp
                </Button>
                <Button to="/contact" variant="outline">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  Page contact
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Autres articles */}
      {others.length > 0 && (
        <section className="section bg-brand-sky">
          <Container>
            <SectionHeading kicker="Pour aller plus loin" title="Autres publications" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => (
                <NewsCard key={other.id} post={other} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  )
}
