import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(whatsappMessages.contact())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter LEGAL SOURCE sur WhatsApp"
      className="group fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-dark p-4 text-white shadow-lg transition-transform hover:scale-105 hover:bg-brand-green-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 print:hidden"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded bg-brand-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow transition-opacity group-hover:opacity-100 sm:block">
        Discuter sur WhatsApp
      </span>
    </a>
  )
}
