import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Activity } from '@/types'
import { AppIcon } from '@/components/common/AppIcon'
import { cn } from '@/utils/format'

const tones: Record<Activity['tone'], { panel: string; border: string; icon: string }> = {
  blue: { panel: 'bg-[#F1F7FC]', border: 'border-logo-blue', icon: 'bg-logo-blue' },
  green: { panel: 'bg-[#F1F8F0]', border: 'border-logo-green', icon: 'bg-brand-green' },
  purple: { panel: 'bg-[#F7F2FB]', border: 'border-logo-purple', icon: 'bg-logo-purple' },
  orange: { panel: 'bg-[#FFF6EC]', border: 'border-logo-orange', icon: 'bg-logo-orange' },
  red: { panel: 'bg-[#FDF2F1]', border: 'border-logo-red', icon: 'bg-logo-red' },
  teal: { panel: 'bg-[#EEF8F8]', border: 'border-logo-teal', icon: 'bg-logo-teal' },
  sky: { panel: 'bg-brand-sky', border: 'border-brand-navy', icon: 'bg-brand-navy' },
  lime: { panel: 'bg-[#F5FAEE]', border: 'border-logo-green', icon: 'bg-logo-green' },
}

type ActivityCardProps = {
  activity: Activity
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const tone = tones[activity.tone]

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-lg border-b-4 shadow-sm transition-shadow hover:shadow-card',
        tone.panel,
        tone.border,
      )}
    >
      <div className="relative">
        <img
          src={activity.image}
          alt={activity.imageAlt}
          className="h-32 w-full object-cover"
          loading="lazy"
          width={180}
          height={72}
        />
        <span
          className={cn(
            'absolute -bottom-6 left-4 flex h-12 w-12 items-center justify-center rounded-full text-white ring-4 ring-white',
            tone.icon,
          )}
        >
          <AppIcon name={activity.icon} className="h-6 w-6" strokeWidth={1.8} />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-9">
        <h3 className="font-display text-[15px] font-bold leading-snug text-brand-ink">
          {activity.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">
          {activity.shortDescription}
        </p>
        <Link
          to={`/activites#${activity.id}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 font-display text-xs font-semibold text-brand-green transition-colors hover:text-brand-green-dark"
          aria-label={`Découvrir ${activity.title}`}
        >
          Découvrir
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
