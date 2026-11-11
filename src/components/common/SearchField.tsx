import { Search, X } from 'lucide-react'
import { useId } from 'react'
import { cn } from '@/utils/format'

type SearchFieldProps = {
  value: string
  onChange: (value: string) => void
  label: string
  placeholder?: string
  /** Texte annoncé aux lecteurs d’écran, par exemple le nombre de résultats. */
  status?: string
  className?: string
}

/** Champ de recherche accessible avec bouton d’effacement. */
export function SearchField({
  value,
  onChange,
  label,
  placeholder,
  status,
  className,
}: SearchFieldProps) {
  const id = useId()

  return (
    <div className={cn('w-full', className)} role="search">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted"
          aria-hidden="true"
        />
        <input
          id={id}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="h-11 w-full rounded-md border border-brand-border bg-white pl-10 pr-10 text-sm text-brand-ink placeholder:text-brand-muted focus:border-brand-green-dark focus:outline-none focus:ring-2 focus:ring-brand-green [&::-webkit-search-cancel-button]:appearance-none"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Effacer la recherche"
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-brand-muted hover:text-brand-ink"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
      {status !== undefined && (
        <p className="mt-2 text-xs text-brand-muted" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </div>
  )
}
