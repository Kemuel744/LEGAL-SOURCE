import { Globe2, Handshake, Leaf, ShieldCheck, Users } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal, stagger } from '@/components/common/Reveal'

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
          {items.map(({ label, Icon }, index) => (
            <Reveal
              as="li"
              key={label}
              delay={stagger(index, 80)}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <Icon className="h-8 w-8 text-brand-navy transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110" strokeWidth={1.4} aria-hidden="true" />
              <span className="font-display text-xs font-semibold leading-snug text-brand-ink sm:text-sm">
                {label}
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
