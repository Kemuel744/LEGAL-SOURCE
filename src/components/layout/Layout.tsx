import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return undefined
    }

    let id = hash.slice(1)
    try {
      id = decodeURIComponent(id)
    } catch {
      // Hash malformé : on conserve la valeur brute.
    }
    let cancelled = false
    let observer: MutationObserver | undefined
    let timeoutId: number | undefined

    const scrollToTarget = () => {
      if (cancelled) return false
      const element = document.getElementById(id)
      if (!element) return false
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      observer?.disconnect()
      window.clearTimeout(timeoutId)
      return true
    }

    // Les routes sont chargées en lazy : la cible peut apparaître après le
    // montage du Layout. On réessaie sur les frames puis on observe le DOM.
    let frameId = 0
    let attempts = 0
    const retry = () => {
      if (scrollToTarget() || cancelled) return
      attempts += 1
      if (attempts < 120) frameId = requestAnimationFrame(retry)
    }
    frameId = requestAnimationFrame(retry)

    observer = new MutationObserver(scrollToTarget)
    observer.observe(document.body, { childList: true, subtree: true })

    // Filet de sécurité : on arrête l'observation au bout de 10 s et on
    // remonte en haut si la cible n'existe toujours pas.
    timeoutId = window.setTimeout(() => {
      observer?.disconnect()
      if (!cancelled && !document.getElementById(id)) {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    }, 10000)

    return () => {
      cancelled = true
      cancelAnimationFrame(frameId)
      observer?.disconnect()
      window.clearTimeout(timeoutId)
    }
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-brand-navy focus:shadow-lg"
      >
        Aller au contenu principal
      </a>
      <ScrollManager />
      <Header />
      <main id="contenu" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
