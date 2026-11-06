import { CheckCircle2, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { productCategories } from '@/types'
import { Button } from '@/components/common/Button'
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon'
import { cn, formatPrice } from '@/utils/format'
import { whatsappLink, whatsappMessages } from '@/utils/whatsapp'

type ProductCardProps = {
  product: Product
  view?: 'grid' | 'list'
}

export function ProductCard({ product, view = 'grid' }: ProductCardProps) {
  const price = formatPrice(product.price)
  const category = productCategories.find((item) => item.id === product.category)?.label
  const inStock = product.availability === 'en-stock'
  const isList = view === 'list'

  return (
    <article
      className={cn(
        'group flex overflow-hidden rounded-lg border border-brand-border bg-white transition-shadow hover:shadow-card',
        isList ? 'flex-col sm:flex-row' : 'h-full flex-col',
      )}
    >
      <div className={cn('relative self-stretch bg-white p-3', isList ? 'sm:w-52 sm:shrink-0' : '')}>
        <Link
          to={`/boutique/${product.slug}`}
          className="block h-full overflow-hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
          aria-label={`Voir la fiche de ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            className={cn(
              'w-full object-contain transition-transform duration-300 group-hover:scale-105',
              isList ? 'h-40 sm:h-full sm:min-h-[160px]' : 'h-40',
            )}
            loading="lazy"
            width={135}
            height={92}
          />
        </Link>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded bg-brand-green px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div
        className={cn(
          'flex flex-1 flex-col border-brand-border p-4',
          isList ? 'sm:border-l sm:border-t-0' : 'border-t',
        )}
      >
        {category && (
          <p className="font-display text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
            {category}
          </p>
        )}
        <h3 className="mt-1 font-display text-[15px] font-bold leading-snug text-brand-ink">
          <Link
            to={`/boutique/${product.slug}`}
            className="hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
          >
            {product.name}
          </Link>
        </h3>
        <p
          className={cn(
            'mt-1.5 text-xs leading-relaxed text-brand-muted',
            isList ? '' : 'line-clamp-2',
          )}
        >
          {product.description}
        </p>

        <div className={cn('mt-3', isList && 'sm:mt-auto')}>
          <p className="font-display text-base font-extrabold text-brand-ink">
            {price ?? 'Prix sur demande'}
          </p>
          <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-brand-muted">
            {inStock ? (
              <CheckCircle2 className="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
            ) : (
              <Clock3 className="h-3.5 w-3.5 text-logo-orange" aria-hidden="true" />
            )}
            {inStock ? 'En stock' : 'Sur commande'}
          </p>
        </div>

        <div className={cn('pt-4', isList && 'sm:mt-auto')}>
          <Button
            href={whatsappLink(whatsappMessages.product(product.name))}
            external
            size="sm"
            fullWidth
            aria-label={`Commander ${product.name} sur WhatsApp`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Commander sur WhatsApp
          </Button>
        </div>
      </div>
    </article>
  )
}
