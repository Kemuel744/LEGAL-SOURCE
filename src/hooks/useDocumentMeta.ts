import { useEffect } from 'react'
import { site } from '@/config/site'

type MetaOptions = {
  title: string
  description: string
  /** Chemin de la page, commençant par « / ». */
  path: string
  image?: string
  /** Type Open Graph de la page. */
  type?: 'website' | 'article'
  /** Date ISO de dernière mise à jour (pages éditoriales et légales). */
  updatedAt?: string
  /** Directives d’indexation. */
  robots?: string
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function removeMeta(attribute: 'name' | 'property', key: string) {
  document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)?.remove()
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

/** Applique les métadonnées SEO et Open Graph de la page courante. */
export function useDocumentMeta({
  title,
  description,
  path,
  image,
  type = 'website',
  updatedAt,
  robots = 'index, follow',
}: MetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
    const url = `${site.url}${site.basePath}${path === '/' ? '/' : path}`
    const imageUrl = image
      ? image.startsWith('http')
        ? image
        : `${site.url}${image}`
      : `${site.absoluteUrl}og-image.jpg`

    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', robots)
    upsertCanonical(url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:image:alt', fullTitle)
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)
    upsertMeta('name', 'twitter:image:alt', fullTitle)

    if (updatedAt) {
      upsertMeta('property', 'article:modified_time', updatedAt)
    } else {
      removeMeta('property', 'article:modified_time')
    }
  }, [title, description, path, image, type, updatedAt, robots])
}
