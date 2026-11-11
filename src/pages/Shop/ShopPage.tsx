import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import heroImage from '@/assets/images/heroes/legal-source-boutique-epi-congo.webp'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SearchField } from '@/components/common/SearchField'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ProductCard } from '@/components/cards/ProductCard'
import { CtaBand } from '@/components/sections/CtaBand'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'
import { catalogService } from '@/services/catalogService'
import { productCategories } from '@/types'
import { matchesQuery } from '@/utils/search'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'
import { cn } from '@/utils/format'
import type { ProductCategory } from '@/types'

export default function ShopPage() {
  useDocumentMeta({
    title: 'Boutique EPI et kits de sécurité au Congo',
    description:
      'Catalogue de produits professionnels au Congo : équipements de protection individuelle et kits pour les entreprises. Casques, gilets, chaussures, gants, hygiène, premiers secours et nettoyage. Commandez via WhatsApp.',
    path: '/boutique',
  })

  const allProducts = catalogService.getProducts()
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all')

  const [query, setQuery] = useState('')

  const filtered = allProducts
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) =>
      matchesQuery(query, [p.name, p.description, p.longDescription, p.badge, ...p.features]),
    )

  return (
    <>
      <PageHero
        kicker="Boutique EPI & Kits"
        title="Boutique EPI au Congo : équipements de protection pour vos équipes"
        description="Une sélection d’équipements de protection individuelle et de kits thématiques pour travailler en toute sécurité. Toute commande se fait directement via WhatsApp."
        image={heroImage}
        imageAlt="Équipements de protection individuelle LEGAL SOURCE"
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Boutique' }]}
      >
        <Button
          href={whatsappLink(whatsappMessages.general())}
          external
          size="lg"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Commander via WhatsApp
        </Button>
        <Button to="/contact" variant="outline" size="lg">
          Nous contacter
        </Button>
      </PageHero>

      <section className="section bg-brand-sky">
        <Container>
          <div className="rounded-lg border border-brand-border bg-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <ShoppingBag className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-dark" aria-hidden="true" />
              <div>
                <p className="font-display text-sm font-bold text-brand-ink">
                  Comment commander ?
                </p>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                  Notre boutique fonctionne comme un catalogue. Repérez le produit souhaité,
                  cliquez sur « Commander via WhatsApp » et notre équipe prend en charge votre
                  demande : disponibilité, prix définitif, modalités de livraison.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            kicker="Catalogue"
            title="Nos produits"
            description="Filtrez par catégorie pour trouver rapidement l’équipement dont vous avez besoin."
          />

          <div className="mt-6 max-w-xl">
            <SearchField
              value={query}
              onChange={setQuery}
              label="Rechercher un produit"
              placeholder="Rechercher un produit : casque, gants, kit premiers secours…"
              status={
                query.trim()
                  ? `${filtered.length} produit${filtered.length > 1 ? 's' : ''} trouvé${filtered.length > 1 ? 's' : ''}`
                  : undefined
              }
            />
          </div>

          {/* Filtres par catégorie */}
          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={cn(
                'rounded-full border px-4 py-1.5 font-display text-xs font-semibold transition-colors',
                activeCategory === 'all'
                  ? 'border-brand-green-dark bg-brand-green-dark text-white'
                  : 'border-brand-border bg-white text-brand-ink hover:border-brand-green-dark hover:text-brand-green-dark',
              )}
            >
              Tout voir ({allProducts.length})
            </button>
            {productCategories.map((cat) => {
              const count = allProducts.filter((p) => p.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'rounded-full border px-4 py-1.5 font-display text-xs font-semibold transition-colors',
                    activeCategory === cat.id
                      ? 'border-brand-green-dark bg-brand-green-dark text-white'
                      : 'border-brand-border bg-white text-brand-ink hover:border-brand-green-dark hover:text-brand-green-dark',
                  )}
                >
                  {cat.label} ({count})
                </button>
              )
            })}
          </div>

          {/* Grille produits */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-brand-muted">
              Aucun produit ne correspond à votre recherche ou à cette catégorie.
            </p>
          )}

          <p className="mt-8 text-xs text-brand-muted">
            Catalogue provisoire. Prix et disponibilités indicatifs, à confirmer avec LEGAL SOURCE
            lors de votre demande via WhatsApp.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
