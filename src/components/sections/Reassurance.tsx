import { Globe2, Handshake, Leaf, ShieldCheck, Users } from 'lucide-react'
import { Container } from '@/components/common/Container'

const items = [
  { label: 'Expertise reconnue', Icon: ShieldCheck },
  { label: 'Accompagnement personnalisé', Icon: Users },
  { label: 'Standards internationaux', Icon: Globe2 },
  { label: 'Solutions durables', Icon: Leaf },
  { label: 'Votre partenaire de confiance', Icon: Handshake },
]

export function Reassurance() {
  return (
    <section aria-label="Nos engagements" className="bg-brand-sky py-8">
      <Container>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-brand-border">
          {items.map(({ label, Icon }) => (
            <li key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-8 w-8 text-brand-navy" strokeWidth={1.4} aria-hidden="true" />
              <span className="font-display text-xs font-semibold leading-snug text-brand-ink sm:text-sm">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
