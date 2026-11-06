import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/types'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-brand-border bg-white shadow-sm transition-shadow hover:shadow-card">
      <div className="relative">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-48 w-full object-cover"
          loading="lazy"
          width={172}
          height={80}
        />
        <span className="absolute left-3 top-3 rounded bg-brand-navy/90 px-2.5 py-1 font-display text-[11px] font-semibold text-white backdrop-blur-sm">
          {project.sector}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-brand-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{project.context}</p>
        <Link
          to={`/projets#${project.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-sm font-semibold text-brand-green hover:text-brand-green-dark"
        >
          En savoir plus
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
