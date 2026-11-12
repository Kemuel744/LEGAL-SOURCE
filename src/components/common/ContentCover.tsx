import type { IconName } from '@/types'
import { AppIcon } from '@/components/common/AppIcon'
import { cn } from '@/utils/format'

/**
 * Visuel procédural : aucune photographie n'est réutilisée pour illustrer
 * plusieurs contenus. Chaque formation, famille ou article sans photo dédiée
 * reçoit une couverture générée à partir de son nom (teinte stable), de son
 * pictogramme et de son intitulé.
 */
const TONES = [
  {
    bg: 'from-brand-navy via-brand-deep to-[#03406F]',
    accent: 'text-[#A8DC97]',
    glow: 'bg-[#A8DC97]/25',
  },
  {
    bg: 'from-brand-green-dark via-[#1D5C19] to-[#2E8D29]',
    accent: 'text-[#D9F2CF]',
    glow: 'bg-[#D9F2CF]/25',
  },
  {
    bg: 'from-logo-blue via-[#1D5F8C] to-brand-navy',
    accent: 'text-[#CDE8FA]',
    glow: 'bg-[#CDE8FA]/25',
  },
  {
    bg: 'from-logo-teal via-[#147177] to-brand-navy',
    accent: 'text-[#C9F0F1]',
    glow: 'bg-[#C9F0F1]/25',
  },
  {
    bg: 'from-logo-purple via-[#5B357D] to-brand-navy',
    accent: 'text-[#E3D3F3]',
    glow: 'bg-[#E3D3F3]/25',
  },
  {
    bg: 'from-logo-orange via-logo-red to-[#8E2F26]',
    accent: 'text-[#FFE0C7]',
    glow: 'bg-[#FFE0C7]/25',
  },
] as const

function hash(value: string): number {
  let result = 0
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) % 997
  }
  return result
}

type ContentCoverProps = {
  /** Intitulé affiché dans le panneau (mode `panel`). */
  title?: string
  kicker?: string
  icon?: IconName
  /** Clé stable (slug, nom de famille…) qui détermine la teinte. */
  toneKey?: string
  /** Force une teinte précise (0-5). */
  tone?: number
  variant?: 'card' | 'panel'
  className?: string
}

export function ContentCover({
  title,
  kicker,
  icon = 'shield',
  toneKey = '',
  tone,
  variant = 'panel',
  className,
}: ContentCoverProps) {
  const palette = TONES[(tone ?? hash(toneKey)) % TONES.length]
  const isPanel = variant === 'panel'

  return (
    <div
      className={cn(
        'relative flex overflow-hidden bg-gradient-to-br',
        palette.bg,
        isPanel ? 'flex-col justify-end p-6 sm:p-8' : 'items-end p-5',
        className,
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl',
          palette.glow,
        )}
        aria-hidden="true"
      />
      <AppIcon
        name={icon}
        strokeWidth={1.2}
        className={cn(
          'pointer-events-none absolute -bottom-8 -right-6 opacity-15',
          palette.accent,
          isPanel ? 'h-44 w-44' : 'h-32 w-32',
        )}
        aria-hidden
      />
      <div className="relative">
        {kicker && (
          <p
            className={cn(
              'font-display text-[11px] font-bold uppercase tracking-[0.18em]',
              palette.accent,
            )}
          >
            {kicker}
          </p>
        )}
        {title && (
          <p
            className={cn(
              'font-display font-extrabold leading-snug text-white',
              isPanel ? 'mt-2 text-xl sm:text-2xl' : 'mt-1 text-sm',
            )}
          >
            {title}
          </p>
        )}
      </div>
    </div>
  )
}
