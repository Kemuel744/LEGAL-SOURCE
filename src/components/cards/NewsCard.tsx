import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { NewsPost } from '@/types'
import { ContentCover } from '@/components/common/ContentCover'

function newsIcon(post: NewsPost) {
  return post.category.toLowerCase().includes('vie') ? 'building' : 'lightbulb'
}

type NewsCardProps = {
  post: NewsPost
  featured?: boolean
}

export function NewsCard({ post, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <article className="group grid overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm transition-shadow hover:shadow-card lg:grid-cols-[1fr_1.1fr]">
        <div className="relative h-56 overflow-hidden lg:h-auto">
          {post.image ? (
            <img
              src={post.image}
              alt={post.imageAlt ?? ''}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width={360}
              height={180}
            />
          ) : (
            <ContentCover
              variant="card"
              icon={newsIcon(post)}
              kicker={post.category}
              toneKey={post.slug}
              className="h-full min-h-56 w-full"
            />
          )}
          <span className="absolute left-4 top-4 rounded bg-brand-green-dark px-2.5 py-1 font-display text-[11px] font-semibold text-white">
            {post.category}
          </span>
        </div>
        <div className="flex flex-col justify-center p-7 lg:p-9">
          <p className="flex items-center gap-1.5 text-xs text-brand-muted">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {post.displayDate}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-brand-ink">
            {post.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">{post.excerpt}</p>
          <Link
            to={`/actualites/${post.slug}`}
            className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-green-dark hover:text-brand-green-darker"
          >
            Lire l’article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-brand-border bg-white shadow-sm transition-shadow hover:shadow-card">
      <div className="relative">
        {post.image ? (
          <img
            src={post.image}
            alt={post.imageAlt ?? ''}
            className="h-48 w-full object-cover"
            loading="lazy"
            width={180}
            height={72}
          />
        ) : (
          <ContentCover
            variant="card"
            icon={newsIcon(post)}
            kicker={post.category}
            toneKey={post.slug}
            className="h-48 w-full"
          />
        )}
        <span className="absolute left-3 top-3 rounded bg-brand-green-dark px-2.5 py-1 font-display text-[11px] font-semibold text-white">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-xs text-brand-muted">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {post.displayDate}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-brand-ink">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{post.excerpt}</p>
        <Link
          to={`/actualites/${post.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-sm font-semibold text-brand-green-dark hover:text-brand-green-darker"
        >
          Lire l’article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
