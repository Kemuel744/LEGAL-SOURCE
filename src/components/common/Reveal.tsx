import { createElement, useCallback, type ElementType, type ReactNode } from 'react'
import { cn } from '@/utils/format'

/**
 * Révélation au défilement.
 * Un seul IntersectionObserver partagé ; la classe `is-visible` est posée
 * directement sur le DOM (aucun re-render React). L'état masqué n'existe que
 * si `html.motion-ok` est présent (voir main.tsx) : sans JavaScript ou avec
 * prefers-reduced-motion, le contenu reste visible.
 */
let sharedObserver: IntersectionObserver | null = null

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') return null
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          sharedObserver?.unobserve(entry.target)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )
  }
  return sharedObserver
}

type RevealProps = {
  children: ReactNode
  as?: ElementType
  variant?: 'up' | 'fade' | 'scale' | 'left'
  /** Délai en ms (stagger). */
  delay?: number
  className?: string
  'aria-label'?: string
}

export function Reveal({
  children,
  as = 'div',
  variant = 'up',
  delay = 0,
  className,
  'aria-label': ariaLabel,
}: RevealProps) {
  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return
    const observer = getObserver()
    if (!observer) {
      node.classList.add('is-visible')
      return
    }
    observer.observe(node)
  }, [])

  return createElement(
    as,
    {
      ref,
      className: cn('reveal', className),
      'data-reveal': variant,
      'aria-label': ariaLabel,
      style: delay ? { '--reveal-delay': `${delay}ms` } : undefined,
    },
    children,
  )
}

/** Délai de cascade plafonné pour éviter une attente trop longue. */
export function stagger(index: number, step = 90, max = 360): number {
  return Math.min(index * step, max)
}
