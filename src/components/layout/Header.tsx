import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '@/assets/logos/legal-source-logo.png'
import { navigation, site } from '@/config/site'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { cn } from '@/utils/format'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'
import { TopBar } from '@/components/layout/TopBar'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileOpen])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (mobileOpen) {
          setMobileOpen(false)
          setOpenGroup(null)
          triggerRef.current?.focus()
          return
        }
        // Desktop : les sous-menus s'ouvrent via :focus-within. Échap retire
        // le focus du sous-menu pour le refermer.
        const active = document.activeElement as HTMLElement | null
        if (active?.closest('nav[aria-label="Navigation principale"] .group')) {
          active.blur()
        }
        return
      }

      if (!mobileOpen || event.key !== 'Tab') return

      const trigger = triggerRef.current
      const panel = panelRef.current
      if (!trigger || !panel) return

      const focusables = [
        trigger,
        ...panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ]
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      // Focus perdu ou sorti du menu : on le ramène dans le piège.
      if (!active || !focusables.includes(active)) {
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
        return
      }

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    // Place le focus sur le premier lien du panneau. La tabulation boucle
    // entre le bouton d’ouverture et les liens du menu (voir ci-dessus).
    const frame = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>('a[href], button:not([disabled])')?.focus()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [mobileOpen])

  const isGroupActive = (to: string) => location.pathname.startsWith(to)

  return (
    <header className="sticky top-0 z-40 bg-white shadow-header print:hidden">
      <TopBar />
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4 lg:h-[86px]">
          <Link
            to="/"
            className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-4"
            aria-label="LEGAL SOURCE — Accueil"
          >
            <img
              src={logo}
              alt="LEGAL SOURCE — Consulting, Management, Certification QHSE"
              className="h-12 w-auto sm:h-14 lg:h-16"
              width={370}
              height={92}
            />
          </Link>

          {/* Navigation desktop */}
          <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = isGroupActive(item.to) && item.to !== '/'
              return (
                <div key={item.to} className="group relative">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-1 border-b-2 px-3 py-6 font-display text-[13px] font-semibold text-brand-ink transition-colors hover:text-brand-green-dark',
                        isActive || (active && item.to !== '/')
                          ? 'border-brand-green-dark text-brand-green-dark'
                          : 'border-transparent',
                      )
                    }
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                        aria-hidden="true"
                      />
                    )}
                  </NavLink>

                  {item.children && (
                    <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-md border border-brand-border bg-white p-2 opacity-0 shadow-card transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            cn(
                              'block rounded px-3 py-2 text-sm transition-colors',
                              isActive
                                ? 'bg-brand-sky font-semibold text-brand-green-dark'
                                : 'text-brand-ink hover:bg-brand-sky hover:text-brand-green-dark',
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <Button to="/contact" size="sm" className="ml-3">
              Nous contacter
            </Button>
          </nav>

          {/* Bouton mobile */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-border text-brand-navy transition-colors hover:border-brand-green-dark hover:text-brand-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Panneau mobile */}
      {mobileOpen && (
        <div
          ref={panelRef}
          id="menu-mobile"
          className="fixed inset-x-0 top-[108px] z-30 max-h-[calc(100vh-108px)] overflow-y-auto border-t border-brand-border bg-white pb-6 shadow-card lg:hidden"
        >
          <Container className="pt-3">
            <nav aria-label="Navigation mobile" className="divide-y divide-brand-border">
              {navigation.map((item) => {
                const submenuId = item.children
                  ? `mobile-submenu-${item.to.replace(/[^a-z0-9]+/gi, '-')}`
                  : undefined

                return (
                  <div key={item.to} className="py-1">
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                          cn(
                            'flex-1 rounded-sm py-2.5 font-display text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2',
                            isActive ? 'text-brand-green-dark' : 'text-brand-ink',
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                      {item.children && (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenGroup((current) => (current === item.to ? null : item.to))
                          }
                          aria-expanded={openGroup === item.to}
                          aria-controls={submenuId}
                          aria-label={
                            openGroup === item.to
                              ? `Masquer les sous-pages de ${item.label}`
                              : `Afficher les sous-pages de ${item.label}`
                          }
                          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-brand-muted hover:bg-brand-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
                        >
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform',
                              openGroup === item.to && 'rotate-180',
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>
                    {item.children && openGroup === item.to && (
                      <div
                        id={submenuId}
                        className="mb-2 ml-3 border-l border-brand-border pl-3"
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              cn(
                                'block rounded-sm py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2',
                                isActive
                                  ? 'font-semibold text-brand-green-dark'
                                  : 'text-brand-muted',
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            <div className="mt-4 grid gap-2">
              <Button to="/contact" fullWidth>
                Nous contacter
              </Button>
              <Button
                href={whatsappLink(whatsappMessages.contact())}
                external
                variant="outlineNavy"
                fullWidth
              >
                <WhatsAppIcon className="h-4 w-4 text-brand-green-dark" />
                Écrire sur WhatsApp
              </Button>
            </div>

            <div className="mt-4 space-y-2 border-t border-brand-border pt-4 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 rounded-sm text-brand-ink"
              >
                <Phone className="h-4 w-4 text-brand-green-dark" aria-hidden="true" />
                {site.phone.display}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2 rounded-sm text-brand-ink"
              >
                <Mail className="h-4 w-4 text-brand-green-dark" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
