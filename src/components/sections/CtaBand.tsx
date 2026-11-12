import { Mail, Phone } from 'lucide-react'
import { site } from '@/config/site'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-brand-navy">
      <Container className="relative">
        <div className="flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <Reveal className="max-w-2xl">
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
          </Reveal>
          <Reveal delay={150} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
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
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
