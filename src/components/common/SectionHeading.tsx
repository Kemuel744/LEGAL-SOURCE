import type { ReactNode } from 'react'
import { cn } from '@/utils/format'

type SectionHeadingProps = {
  kicker?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  light = false,
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {kicker && (
        <p
          className={cn(
            'mb-3 font-display text-xs font-bold uppercase tracking-[0.18em]',
            light ? 'text-[#A8DC97]' : 'text-brand-green-dark',
          )}
        >
          {kicker}
        </p>
      )}
      <Heading
        className={cn(
          'font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[2.4rem]',
          light ? 'text-white' : 'text-brand-ink',
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            'mt-3 text-sm leading-relaxed sm:text-base',
            light ? 'text-white/75' : 'text-brand-muted',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
