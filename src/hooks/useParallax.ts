import { useEffect, useRef } from 'react'

/**
 * Parallax léger (translateY) sur un élément, desktop uniquement.
 * Désactivé sur mobile/tablette et avec prefers-reduced-motion.
 * `speed` : fraction du défilement répercutée (ex. 0.08).
 */
export function useParallax<T extends HTMLElement>(speed = 0.08) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const enabled = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)')
    if (!enabled.matches) return undefined

    const host = el.parentElement ?? el
    let frame = 0

    const update = () => {
      frame = 0
      const rect = host.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      el.style.transform = `translate3d(0, ${Math.round(window.scrollY * speed * 10) / 10}px, 0) scale(1.08)`
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [speed])

  return ref
}
