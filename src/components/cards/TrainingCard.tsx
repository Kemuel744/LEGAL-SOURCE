import { ArrowRight, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Training } from '@/types'

type TrainingCardProps = {
  training: Training
}

/**
 * Carte de synthèse du catalogue.
 * Aucune photo n’est affichée : le catalogue ne dispose pas d’une image dédiée
 * par formation, et une image ne doit jamais illustrer plusieurs contenus.
 * Le détail complet est présenté sur la page dédiée `/formations/:slug`.
 */
export function TrainingCard({ training }: TrainingCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-brand-border bg-white shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-card motion-reduce:transform-none">
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-brand-muted">
            {training.category}
          </p>
          <span className="shrink-0 rounded bg-brand-green-dark px-2.5 py-1 font-display text-[11px] font-bold uppercase tracking-wide text-white">
            {training.level}
          </span>
        </div>
        <h3 className="mt-2 font-display text-base font-bold leading-snug text-brand-ink">
          <Link to={`/formations/${training.slug}`} className="hover:text-brand-green-dark">
            {training.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{training.description}</p>

        {training.lessons !== null && (
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-muted">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            {training.lessons} leçon{training.lessons > 1 ? 's' : ''}
          </p>
        )}

        <Link
          to={`/formations/${training.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-sm font-semibold text-brand-green-dark hover:text-brand-green-darker"
        >
          Voir la fiche détaillée
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  )
}
