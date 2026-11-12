import type { CSSProperties, ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { useParallax } from '@/hooks/useParallax'
import { cn } from '@/utils/format'

const delay = (ms: number) => ({ '--hero-delay': `${ms}ms` }) as CSSProperties

type Crumb = { label: string; to?: string }

type PageHeroProps = {
  kicker?: string
  title: ReactNode
  description?: ReactNode
  image?: string
  imageAlt?: string
  crumbs?: Crumb[]
  features?: string[]
  children?: ReactNode
  compact?: boolean
  className?: string
}

export function PageHero({
  kicker,
  title,
  description,
  image,
  imageAlt,
  crumbs,
  features,
  children,
  compact = false,
  className,
}: PageHeroProps) {
  const parallaxRef = useParallax<HTMLImageElement>(0.07)

  return (
    <section className={cn('relative overflow-hidden bg-brand-navy', className)}>
      <div
        className="hero-fade pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(46,141,41,0.28),transparent_42%),radial-gradient(circle_at_85%_90%,rgba(44,127,184,0.3),transparent_45%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div
          className={cn(
            'grid items-center gap-8',
            image ? 'lg:grid-cols-[1.05fr_0.95fr] lg:gap-12' : '',
            compact ? 'py-10 lg:py-12' : 'py-12 lg:py-16',
          )}
        >
          <div className="relative z-10 max-w-2xl">
            {crumbs && crumbs.length > 0 && (
              <nav aria-label="Fil d’Ariane" className="hero-fade mb-5" style={delay(100)}>
                <ol className="flex flex-wrap items-center gap-1 text-xs text-white/60">
                  {crumbs.map((crumb, index) => (
                    <li key={`${crumb.label}-${index}`} className="flex items-center gap-1">
                      {index > 0 && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
                      {crumb.to ? (
                        <Link to={crumb.to} className="hover:text-white">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-white/85">{crumb.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {kicker && (
              <p
                className="hero-rise mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#A8DC97]"
                style={delay(250)}
              >
                {kicker}
              </p>
            )}

            <h1
              className="hero-reveal font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.9rem] 3xl:text-[3.4rem] 4xl:text-[4rem]"
              style={delay(400)}
            >
              {title}
            </h1>

            {description && (
              <p
                className="hero-rise mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base"
                style={delay(750)}
              >
                {description}
              </p>
            )}

            {children && (
              <div className="hero-rise mt-7 flex flex-wrap items-center gap-3" style={delay(1000)}>
                {children}
              </div>
            )}
          </div>

          {image && (
            <div className="relative">
              <div
                className="hero-fade relative h-56 overflow-hidden rounded-xl border border-white/10 sm:h-72 lg:h-[360px]"
                style={delay(300)}
              >
                <img
                  ref={parallaxRef}
                  src={image}
                  alt={imageAlt ?? ''}
                  className="h-full w-full object-cover [image-rendering:high-quality] hero-image"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/15 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {features && features.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 lg:absolute lg:-right-2 lg:top-8 lg:mt-0 lg:block lg:space-y-2 lg:rounded-lg lg:bg-brand-navy/55 lg:px-5 lg:py-4 lg:backdrop-blur-sm">
                  {features.map((feature, index) => (
                    <li
                      key={feature}
                      className="hero-rise border-b border-[#A8DC97]/50 pb-1 font-display text-sm font-semibold italic text-white lg:text-right"
                      style={delay(1100 + index * 130)}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
