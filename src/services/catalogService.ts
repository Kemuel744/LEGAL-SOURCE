/**
 * Couche d’accès aux contenus.
 *
 * Les composants ne lisent jamais directement les fichiers de `src/data`.
 * Toutes les lectures passent par ce service : lors du passage à une API
 * (ou à une base de données), il suffira de remplacer l’implémentation
 * de ces fonctions par des appels HTTP, sans modifier les pages.
 *
 * Les signatures pourront devenir asynchrones (`Promise<...>`) ; les pages
 * consommeront alors les données via un hook avec état de chargement.
 */
import { activities } from '@/data/activities'
import { services } from '@/data/services'
import { trainings } from '@/data/trainings'
import { trainingFamilies } from '@/data/trainingFamilies'
import { products } from '@/data/products'
import { projects } from '@/data/projects'
import { news } from '@/data/news'

export const catalogService = {
  getActivities: () => activities,
  getActivityById: (id: string) => activities.find((activity) => activity.id === id) ?? null,
  getActivityBySlug: (slug: string) => activities.find((activity) => activity.id === slug) ?? null,

  getServices: () => services,
  getServiceBySlug: (slug: string) => services.find((service) => service.slug === slug) ?? null,

  getTrainings: () => trainings,
  getTrainingBySlug: (slug: string) => trainings.find((training) => training.slug === slug) ?? null,
  getFeaturedTrainings: () => trainings.filter((training) => training.featured),
  getTrainingFamilies: () =>
    [...trainingFamilies].sort((a, b) => a.order - b.order),
  getTrainingFamilyBySlug: (slug: string) =>
    trainingFamilies.find((family) => family.slug === slug) ?? null,
  getTrainingsByFamily: (familySlug: string) =>
    trainings.filter((training) => training.familySlug === familySlug),
  getTrainingsCountForFamily: (familySlug: string) =>
    trainings.filter((training) => training.familySlug === familySlug).length,

  getProducts: () => products,
  getProductBySlug: (slug: string) => products.find((product) => product.slug === slug) ?? null,
  getFeaturedProducts: () => products.filter((product) => product.featured),
  getRelatedProducts: (productId: string, limit = 3) =>
    products.filter((product) => product.id !== productId).slice(0, limit),

  getProjects: () => projects,
  getProjectBySlug: (slug: string) => projects.find((project) => project.slug === slug) ?? null,

  getNews: () => news,
  getNewsBySlug: (slug: string) => news.find((post) => post.slug === slug) ?? null,
}
