import { Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/config/site'
import { Container } from '@/components/common/Container'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

export function TopBar() {
  return (
    <div className="bg-brand-navy text-white">
      <Container>
        <div className="flex h-9 items-center justify-between gap-4 text-[11px] sm:text-xs">
          <div className="flex min-w-0 items-center gap-4">
            <span className="flex min-w-0 items-center gap-1.5 text-white/85">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{site.address.region}</span>
            </span>
            <a
              href={site.emailHref}
              className="hidden items-center gap-1.5 text-white/85 transition-colors hover:text-white sm:flex"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {site.email}
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-1.5 text-white/85 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phone.display}
            </a>
            <a
              href={whatsappLink(whatsappMessages.contact())}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Écrire à LEGAL SOURCE sur WhatsApp"
              className="hidden items-center gap-1.5 text-white/85 transition-colors hover:text-white sm:flex"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
