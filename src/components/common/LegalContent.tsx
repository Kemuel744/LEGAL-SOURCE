import { ChevronRight, Info, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { legalLinks } from '@/config/links'
import type { LegalSection } from '@/data/legal'
import { formatDate } from '@/utils/format'

type LegalContentProps = {
  /** Titre du document, utilisé pour le H1 et le fil d’Ariane. */
  title: string
  /** Sections du document, rendues dans l’ordre fourni. */
  sections: LegalSection[]
  /** Date ISO de dernière mise à jour. */
  updatedAt: string
  /** Chemin courant, exclu des liens « autres documents ». */
  currentPath: string
}

/** Transforme un intitulé en identifiant stable pour les ancres. */
function sectionId(heading: string, index: number) {
  const slug = heading
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return `section-${slug || 'document'}-${index}`
}

const linkFocus =
  'rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2'

export function LegalContent({ title, sections, updatedAt, currentPath }: LegalContentProps) {
  const relatedLinks = legalLinks.filter((link) => link.to !== currentPath)

  return (
    <article aria-labelledby="legal-title" className="mx-auto max-w-3xl">
      <nav aria-label="Fil d’Ariane" className="mb-8 print:hidden">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-brand-muted">
          <li>
            <Link to="/" className={`hover:text-brand-green-dark ${linkFocus}`}>
              Accueil
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3 w-3" />
          </li>
          <li className="font-semibold text-brand-ink" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>

      <header>
        <h1
          id="legal-title"
          className="font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl"
        >
          {title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-brand-border py-3 text-xs text-brand-muted">
          <p>
            Dernière mise à jour :{' '}
            <time dateTime={updatedAt} className="font-medium text-brand-ink">
              {formatDate(updatedAt)}
            </time>
          </p>
          <button
            type="button"
            onClick={() => window.print()}
            className={`inline-flex items-center gap-2 rounded-md border border-brand-border px-3 py-1.5 font-display text-xs font-semibold text-brand-ink transition-colors hover:border-brand-green-dark hover:text-brand-green-dark print:hidden ${linkFocus}`}
          >
            <Printer className="h-3.5 w-3.5" aria-hidden="true" />
            Imprimer
          </button>
        </div>

        <p
          role="note"
          className="mt-6 flex items-start gap-2.5 rounded-md border-l-2 border-brand-green/60 bg-brand-sky px-4 py-3 text-xs leading-relaxed text-brand-muted"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-dark" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-brand-ink">Document provisoire.</strong> Ces
            informations sont indicatives et doivent être revues et validées par LEGAL SOURCE, avec
            le concours d’un conseil juridique compétent, avant la mise en production du site.
          </span>
        </p>
      </header>

      <div className="legal-content mt-10">
        {sections.map((section, index) => {
          const id = sectionId(section.heading, index)

          return (
            <section key={id} aria-labelledby={id}>
              <h2 id={id}>{section.heading}</h2>
              {section.content.map((paragraph, paragraphIndex) => (
                <p key={`${id}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </section>
          )
        })}
      </div>

      {relatedLinks.length > 0 && (
        <footer className="mt-12 border-t border-brand-border pt-8 print:hidden">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-brand-ink">
            Autres documents
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-brand-muted">
            {relatedLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`underline underline-offset-4 hover:text-brand-green-dark ${linkFocus}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      )}
    </article>
  )
}
