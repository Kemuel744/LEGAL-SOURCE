import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'

import '@/styles/index.css'
import App from '@/App'

// Active les états masqués des animations au défilement uniquement si le
// navigateur les supporte et que l'utilisateur ne demande pas de réduire les
// animations. Sinon, tout le contenu reste visible immédiatement.
if (
  typeof IntersectionObserver !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  document.documentElement.classList.add('motion-ok')
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
