import { ArrowRight, Check, Clock3, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Training } from '@/types'
import { Button } from '@/components/common/Button'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

type TrainingCardProps = {
  training: Training
  variant?: 'compact' | 'detailed'
}

export function TrainingCard({ training, variant = 'compact' }: TrainingCardProps) {
  if (variant === 'compact') {
    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-brand-border bg-white shadow-sm transition-shadow hover:shadow-card">
        <div className="relative">
          <img
            src={training.image}
            alt={training.imageAlt}
            className="h-44 w-full object-cover"
            loading="lazy"
            width={180}
            height={70}
          />
          <span className="absolute left-3 top-3 rounded bg-brand-green-dark px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wide text-white">
            {training.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-base font-bold leading-snug text-brand-ink">
            {training.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">{training.description}</p>
          <Link
            to={`/formations#${training.slug}`}
            className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-sm font-semibold text-brand-green-dark hover:text-brand-green-darker"
          >
            Voir la formation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article
      id={training.slug}
      className="scroll-mt-32 overflow-hidden rounded-lg border border-brand-border bg-white shadow-sm"
    >
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[220px]">
          <img
            src={training.image}
            alt={training.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={180}
            height={70}
          />
          <span className="absolute left-3 top-3 rounded bg-brand-green-dark px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wide text-white">
            {training.category}
          </span>
        </div>

        <div className="flex flex-col p-6">
          <h2 className="font-display text-xl font-bold leading-snug text-brand-ink">
            {training.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">{training.description}</p>

          <div className="mt-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-brand-ink">
              Objectifs
            </h3>
            <ul className="mt-2 space-y-1.5">
              {training.objectives.map((objective) => (
                <li key={objective} className="flex items-start gap-2 text-sm text-brand-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" aria-hidden="true" />
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 space-y-2 border-t border-brand-border pt-4 text-sm">
            <p className="flex items-start gap-2 text-brand-muted">
              <Users className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" aria-hidden="true" />
              <span>
                <span className="font-semibold text-brand-ink">Public : </span>
                {training.audience.join(' · ')}
              </span>
            </p>
            <p className="flex items-start gap-2 text-brand-muted">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" aria-hidden="true" />
              <span>
                <span className="font-semibold text-brand-ink">Modalités : </span>
                {training.modalities.join(' · ')}
              </span>
            </p>
          </div>

          <div className="mt-5">
            <Button
              href={whatsappLink(whatsappMessages.training(training.title))}
              external
              size="sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              S’informer sur WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
