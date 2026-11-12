import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoWhite from '@/assets/logos/legal-source-logo-white.png'
import { site } from '@/config/site'
import { domainLinks, legalLinks, quickLinks } from '@/config/links'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

const footerLink =
  'footer-link rounded-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white print:hidden">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.1fr] lg:gap-8 lg:py-14">
          <Reveal variant="fade">
            <Link to="/" aria-label="LEGAL SOURCE — Accueil" className="inline-block">
              <img
                src={logoWhite}
                alt="LEGAL SOURCE — Votre partenaire pour une performance durable"
                className="h-16 w-auto sm:h-[72px]"
                width={291}
                height={85}
                loading="lazy"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Entreprise de conseil et de formation au Congo, LEGAL SOURCE accompagne les
              organisations dans la gestion de leurs risques, le renforcement de leurs compétences
              et la mise en conformité aux standards internationaux.
            </p>
            {site.socials.length > 0 && (
              <ul className="mt-5 flex gap-3" aria-label="Réseaux sociaux">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 rounded border border-white/20 px-3 py-1.5 text-xs hover:border-white/50 ${footerLink}`}
                    >
                      {social.label}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          <Reveal as="nav" delay={100} aria-label="Liens rapides">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Liens rapides
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="nav" delay={200} aria-label="Nos domaines">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Nos domaines
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {domainLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{site.address.full}</span>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className={`flex items-center gap-2.5 ${footerLink}`}
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(whatsappMessages.contact())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 ${footerLink}`}
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className={`flex items-center gap-2.5 ${footerLink}`}
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} – Congo. Tous droits réservés.
          </p>
          <nav aria-label="Informations légales">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
