import {
  Award,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  GraduationCap,
  Globe2,
  Handshake,
  HardHat,
  Leaf,
  Lightbulb,
  Scale,
  Settings2,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  SunMedium,
  Target,
  TrendingUp,
  UserCheck,
  UsersRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconName } from '@/types'

const icons: Record<IconName, LucideIcon> = {
  graduation: GraduationCap,
  clipboard: ClipboardCheck,
  users: UsersRound,
  leaf: Leaf,
  energy: SunMedium,
  handshake: Handshake,
  sprout: Sprout,
  badge: BadgeCheck,
  epi: HardHat,
  basket: ShoppingBasket,
  shield: ShieldCheck,
  target: Target,
  trending: TrendingUp,
  award: Award,
  globe: Globe2,
  lightbulb: Lightbulb,
  scale: Scale,
  building: Building2,
  coaching: UserCheck,
  settings: Settings2,
}

type AppIconProps = {
  name: IconName
  className?: string
  strokeWidth?: number
  'aria-hidden'?: boolean
}

export function AppIcon({ name, className, strokeWidth = 1.75, ...rest }: AppIconProps) {
  const Icon = icons[name] ?? ShieldCheck
  return (
    <Icon
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden={rest['aria-hidden'] ?? true}
    />
  )
}
