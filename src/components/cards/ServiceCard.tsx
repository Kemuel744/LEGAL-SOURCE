import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '@/types'
import { AppIcon } from '@/components/common/AppIcon'

type ServiceCardProps = {
  service: Service
  index?: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-brand-border bg-white p-6 shadow-sm transition-shadow hover:shadow-card">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-sky text-brand-navy">
          <AppIcon name={service.icon} className="h-6 w-6" />
        </span>
        {typeof index === 'number' && (
          <span className="font-display text-3xl font-extrabold text-brand-border">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-brand-ink">{service.title}</h3>
      <p className="mt-1 font-display text-sm font-semibold text-brand-green">{service.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted">{service.description}</p>
      <Link
        to={`/services#${service.slug}`}
        className="mt-auto inline-flex items-center gap-1.5 pt-5 font-display text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-dark"
      >
        Découvrir le service
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  )
}
