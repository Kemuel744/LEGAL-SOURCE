import { ArrowLeft, Check, CheckCircle2, Clock3 } from 'lucide-react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { ProductCard } from '@/components/cards/ProductCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { CtaBand } from '@/components/sections/CtaBand'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { productCategories } from '@/types'
import { formatPrice } from '@/utils/format'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? catalogService.getProductBySlug(slug) : null

  useDocumentMeta({
    title: product ? product.name : 'Produit introuvable',
    description: product ? product.description : '',
    path: product ? `/boutique/${product.slug}` : '/boutique',
  })

  if (!product) return <Navigate to="/boutique" replace />

  const price = formatPrice(product.price)
  const inStock = product.availability === 'en-stock'
  const category = productCategories.find((c) => c.id === product.category)?.label
  const related = catalogService.getRelatedProducts(product.id, 4)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-brand-sky border-b border-brand-border">
        <Container>
          <nav aria-label="Fil d’Ariane" className="py-3">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-brand-muted">
              <li>
                <Link to="/" className="hover:text-brand-green">Accueil</Link>
              </li>
              <li aria-hidden="true" className="select-none">›</li>
              <li>
                <Link to="/boutique" className="hover:text-brand-green">Boutique</Link>
              </li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="font-semibold text-brand-ink">{product.name}</li>
            </ol>
          </nav>
        </Container>
      </div>

      <section className="section">
        <Container>
          <Link
            to="/boutique"
            className="mb-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-green hover:text-brand-green-dark"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Retour à la boutique
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl border border-brand-border bg-white p-6 shadow-sm">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="mx-auto max-h-[400px] w-full object-contain"
                loading="eager"
                width={270}
                height={184}
              />
              {product.badge && (
                <span className="absolute left-4 top-4 rounded bg-brand-green px-2.5 py-1 font-display text-xs font-bold uppercase tracking-wide text-white">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Infos */}
            <div>
              {category && (
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  {category}
                </p>
              )}
              <h1 className="mt-2 font-display text-2xl font-extrabold text-brand-ink sm:text-3xl">
                {product.name}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {product.longDescription}
              </p>

              {/* Disponibilité & prix */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="font-display text-2xl font-extrabold text-brand-ink">
                  {price ?? 'Prix sur demande'}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-xs font-semibold ${
                    inStock
                      ? 'bg-brand-green-light text-brand-green'
                      : 'bg-orange-50 text-orange-600'
                  }`}
                >
                  {inStock ? (
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {inStock ? 'En stock' : 'Sur commande'}
                </span>
              </div>

              {/* Caractéristiques */}
              {product.features.length > 0 && (
                <div className="mt-6 rounded-lg bg-brand-sky p-5">
                  <h2 className="font-display text-xs font-bold uppercase tracking-wider text-brand-ink">
                    Caractéristiques
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm leading-relaxed text-brand-muted"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  href={whatsappLink(whatsappMessages.product(product.name))}
                  external
                  size="lg"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Commander sur WhatsApp
                </Button>
                <Button to="/boutique" variant="outlineNavy" size="lg">
                  Voir tous les produits
                </Button>
              </div>

              <p className="mt-4 text-xs text-brand-muted">
                Prix indicatif, à confirmer lors de votre demande. Livraison selon les modalités
                précisées par l’équipe LEGAL SOURCE.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="section bg-brand-sky">
          <Container>
            <SectionHeading
              kicker="Vous pourriez aussi aimer"
              title="D’autres produits disponibles"
            />
            <div className="mt-9 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  )
}
