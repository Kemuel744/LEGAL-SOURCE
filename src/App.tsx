import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const HomePage = lazy(() => import('@/pages/Home/HomePage'))
const AboutPage = lazy(() => import('@/pages/About/AboutPage'))
const ActivitiesPage = lazy(() => import('@/pages/Activities/ActivitiesPage'))
const ServicesPage = lazy(() => import('@/pages/Services/ServicesPage'))
const TrainingsPage = lazy(() => import('@/pages/Trainings/TrainingsPage'))
const TrainingDetailPage = lazy(
  () => import('@/pages/Trainings/TrainingDetailPage'),
)
const TrainingFamilyPage = lazy(
  () => import('@/pages/Trainings/TrainingFamilyPage'),
)
const ShopPage = lazy(() => import('@/pages/Shop/ShopPage'))
const ProductPage = lazy(() => import('@/pages/Shop/ProductPage'))
const ProjectsPage = lazy(() => import('@/pages/Projects/ProjectsPage'))
const NewsPage = lazy(() => import('@/pages/News/NewsPage'))
const NewsArticlePage = lazy(() => import('@/pages/News/NewsArticlePage'))
const ContactPage = lazy(() => import('@/pages/Contact/ContactPage'))
const LegalPage = lazy(() => import('@/pages/Legal/LegalPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'))

function PageFallback() {
  return (
    <div className="flex min-h-[45vh] items-center justify-center" role="status" aria-live="polite">
      <span className="font-display text-sm font-semibold text-brand-muted">Chargement…</span>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/activites" element={<ActivitiesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/formations" element={<TrainingsPage />} />
          <Route path="/formations/catalogue/:familySlug" element={<TrainingFamilyPage />} />
          <Route path="/formations/:slug" element={<TrainingDetailPage />} />
          <Route path="/boutique" element={<ShopPage />} />
          <Route path="/boutique/:slug" element={<ProductPage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/actualites" element={<NewsPage />} />
          <Route path="/actualites/:slug" element={<NewsArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<LegalPage page="mentions" />} />
          <Route
            path="/politique-de-confidentialite"
            element={<LegalPage page="confidentialite" />}
          />
          <Route path="/conditions-generales" element={<LegalPage page="cgv" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
