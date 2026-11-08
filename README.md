# LEGAL SOURCE — Site vitrine

Site institutionnel et catalogue de LEGAL SOURCE : présentation des activités, services, formations, projets, actualités et boutique EPI. Les demandes sont orientées vers WhatsApp et l'e-mail, sans panier ni paiement en ligne.

## Stack

- React 18 + TypeScript
- Vite 6
- React Router 6
- Tailwind CSS 3
- Lucide React
- Fontsource (Montserrat / Open Sans)

## Prérequis

- Node.js **20 ou supérieur** (version utilisée en CI)
- npm

## Installation

```bash
npm ci
# Les valeurs par défaut sont dans .env ; adapter si nécessaire.
npm run dev
```

Le site de développement est servi sur `http://localhost:5173/LOCAL-SOURCES/` avec la configuration par défaut.

## Scripts

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement Vite |
| `npm run build` | Typecheck, build Vite, génération SEO et vérification des deep-links |
| `npm run preview` | Prévisualisation du build de production |
| `npm run typecheck` | Vérification TypeScript seule |
| `npm run seo` | Régénère uniquement les fichiers SEO dans `dist/` |
| `npm run check:spa` | Vérifie le fallback SPA (deep-links) dans `dist/` |
| `npm run optimize:images` | Régénère les WebP depuis les JPEG (nécessite Python + Pillow) |

## Configuration du déploiement (`.env`)

Toutes les URL publiques sont pilotées par deux variables, pour éviter les valeurs codées en dur :

```dotenv
VITE_SITE_URL=https://kemuel744.github.io
VITE_BASE_PATH=/LOCAL-SOURCES/
```

- **GitHub Pages (site de projet)** : conserver `VITE_BASE_PATH=/LOCAL-SOURCES/` et `VITE_SITE_URL=https://kemuel744.github.io`.
- **Domaine dédié / hébergement racine** : mettre `VITE_BASE_PATH=/` et `VITE_SITE_URL=https://www.le-domaine.fr`.

Après modification, relancer `npm run build`. Le canonical, les balises Open Graph, le JSON-LD, `robots.txt`, `sitemap.xml` et le fallback 404 sont alors alignés sur la nouvelle URL.

> ⚠️ Le domaine `legal-source.com` n'appartient pas encore au projet. Ne pas le renseigner dans `VITE_SITE_URL` avant acquisition.

## Routing et liens profonds

L'application utilise `BrowserRouter`. Sur GitHub Pages, un accès direct à `/boutique/casque-de-securite` renvoie le fichier `404.html`, qui restaure la route côté client via une query string.

- `404.html` est **généré au build** par `scripts/generate-static.mjs` (ne pas le recréer dans `public/`).
- Le script tient compte de `VITE_BASE_PATH` : le nombre de segments à conserver est calculé automatiquement.
- Limite connue : GitHub Pages renvoie un statut HTTP 404 avant l'exécution du script. Les robots sociaux ne verront donc pas les métadonnées des pages profondes. Pour un SEO complet, prévoir un pré-rendu statique ou un hébergement avec rewrites (Netlify, Vercel, Cloudflare Pages).

## Architecture

```text
src/
  assets/        images et logos
  components/    UI réutilisable (cards, common, layout, sections)
  config/        configuration centrale (site, navigation)
  data/          contenus statiques typés
  hooks/         hooks transverses (métadonnées SEO)
  pages/         une page par route
  services/      couche d'accès aux contenus (future API)
  styles/        Tailwind et styles globaux
  types/         modèles TypeScript
  utils/         formatage, WhatsApp, helpers
scripts/
  generate-static.mjs   génération 404 / robots / sitemap
  check-spa-fallback.mjs  test de non-régression des deep-links
  optimize-images.py    conversion des visuels en WebP dimensionné
  extract-assets.py     extraction des visuels depuis les templates
docs/
  AUDIT.md              analyse initiale des ressources
  CONTENUS-A-CONFIRMER.md  données à valider avant production
```

Les pages ne lisent pas directement `src/data` : elles passent par `src/services/catalogService.ts`, ce qui permettra de brancher une API sans réécrire les composants.

## Déploiement

Le workflow `.github/workflows/deploy.yml` construit et publie le site sur GitHub Pages à chaque push sur `main`.

Prérequis dans le dépôt GitHub : **Settings → Pages → Source = GitHub Actions**.

Pour un autre hébergeur :

```bash
npm ci
npm run build
# publier le contenu de dist/
```

## État qualité

- ✅ `npm run build` et `npm run typecheck` passent.
- ✅ Routes lazy, composants typés, données séparées.
- ⚠️ Aucun test automatisé, aucun lint/format pour l'instant.
- ✅ Coordonnées (téléphone, WhatsApp, e-mail, adresse) validées par LEGAL SOURCE le 8 novembre 2026.
- ⚠️ Catalogue, prix et contenus juridiques encore à valider : voir `docs/CONTENUS-A-CONFIRMER.md`.
- ✅ Images converties en WebP et redimensionnées (13,7 Mo → 2,9 Mo, soit −79 %), héros limités à 1920 px, favicon allégé (194 Ko → 33 Ko).
- ✅ Contrastes texte/boutons conformes WCAG AA : `brand-green-dark` (#24701F, 6,15:1) pour le texte, `brand-green` (#2E8D29) conservé en décoration.

## Checklist avant diffusion publique

- [x] Coordonnées officielles confirmées (téléphone, WhatsApp, e-mail, adresse) — 8 novembre 2026.
- [ ] Domaine et hébergement validés, `VITE_SITE_URL` mis à jour.
- [ ] Contenus juridiques relus et validés.
- [ ] Catalogue, prix et disponibilités confirmés.
- [ ] Test des liens profonds (produit, article, service) sur l'URL publique.
- [x] Images compressées et redimensionnées (WebP, −79 %).
- [x] Contrastes texte conformes WCAG AA (vert foncé pour le texte, vert officiel conservé en décoration).
- [ ] Tests et CI de validation ajoutés.
