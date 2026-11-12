import { Mail, Phone } from 'lucide-react'
import { site } from '@/config/site'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(46,141,41,0.32),transparent_45%),radial-gradient(circle_at_85%_85%,rgba(44,127,184,0.32),transparent_45%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-2xl">
            <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-[#A8DC97]">
              Restons en contact
            </p>
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Ensemble pour une performance durable !
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
              Vous avez un projet ? Une question ? Notre équipe est à votre écoute pour vous
              conseiller et vous accompagner.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <Button href={whatsappLink(whatsappMessages.contact())} external size="lg">
              <WhatsAppIcon className="h-5 w-5" />
              Contactez-nous
            </Button>
            <Button href={site.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone.display}
            </Button>
            <Button href={site.emailHref} variant="outline" size="lg">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Nous écrire
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
