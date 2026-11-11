import { ArrowLeft, Home } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export default function NotFoundPage() {
  useDocumentMeta({
    title: 'Page introuvable',
    description: "La page que vous recherchez n’existe pas ou a été déplacée.",
    path: '/404',
    robots: 'noindex, follow',
  })

  const navigate = useNavigate()

  return (
    <section className="section flex min-h-[60vh] items-center">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-8xl font-extrabold text-brand-border select-none sm:text-9xl">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-bold text-brand-ink sm:text-3xl">
            Page introuvable
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">
            La page que vous recherchez n&apos;existe pas ou a été déplacée. Vérifiez
            l&apos;URL ou retournez à l&apos;accueil pour continuer votre navigation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/" size="lg">
              <Home className="h-4 w-4" aria-hidden="true" />
              Retour à l&apos;accueil
            </Button>
            <Button
              onClick={() => navigate(-1)}
              variant="outlineNavy"
              size="lg"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Page précédente
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-brand-muted">
            <Link to="/services" className="hover:text-brand-green-dark">Nos services</Link>
            <Link to="/formations" className="hover:text-brand-green-dark">Nos formations</Link>
            <Link to="/boutique" className="hover:text-brand-green-dark">Boutique</Link>
            <Link to="/contact" className="hover:text-brand-green-dark">Contact</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
