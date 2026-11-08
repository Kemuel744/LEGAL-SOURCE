import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/format'

type Variant = 'primary' | 'outline' | 'navy' | 'outlineNavy' | 'white' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  to?: string
  href?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  fullWidth?: boolean
  'aria-label'?: string
  title?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold leading-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-green-dark text-white hover:bg-brand-green-darker',
  outline: 'border border-white/70 text-white hover:bg-white/10 hover:border-white',
  navy: 'bg-brand-navy text-white hover:bg-brand-deep',
  outlineNavy:
    'border border-brand-border bg-white text-brand-ink hover:border-brand-green-dark hover:text-brand-green-dark',
  white: 'bg-white text-brand-navy hover:bg-brand-sky',
  ghost: 'text-brand-green-dark hover:text-brand-green-darker px-0',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-sm sm:text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  external,
  onClick,
  type = 'button',
  disabled,
  className,
  fullWidth,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    variant === 'ghost' && 'px-0',
    fullWidth && 'w-full',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}
