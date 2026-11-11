# Stratégie SEO — LEGAL SOURCE

Ce document décrit le référencement intégré au site. Les métadonnées ne sont pas
ajoutées après coup : elles sont produites par l'architecture React (hook
`useDocumentMeta`), le HTML statique et les scripts de génération exécutés au build.

Dernière mise à jour : 11 novembre 2026.

## 1. Positionnement

LEGAL SOURCE est une entreprise de conseil et de formation basée à Brazzaville,
au Congo. Le site cible les recherches liées aux services professionnels, à la
formation, au QHSE et aux équipements de protection, au Congo et à l'international
francophone.

Requêtes prioritaires (utilisation naturelle, sans bourrage) :

- LEGAL SOURCE
- LEGAL SOURCE Congo
- LEGAL SOURCE Brazzaville
- entreprise au Congo
- services professionnels au Congo
- prestations professionnelles au Congo
- solutions professionnelles au Congo
- formations professionnelles au Congo
- catalogue de produits au Congo
- services aux entreprises au Congo

## 2. Métadonnées par page

| Page | URL | Balise Title | Meta description |
|---|---|---|---|
| Accueil | `/` | LEGAL SOURCE – Services et solutions professionnelles au Congo | Entreprise de conseil et de formation à Brazzaville : QHSE, audits, formations, certification, EPI et accompagnement de projets. |
| À propos | `/a-propos` | À propos de LEGAL SOURCE – Conseil et formation au Congo | Présentation de l'entreprise, de son expertise QHSE et de son accompagnement des organisations au Congo. |
| Activités | `/activites` | Nos activités et domaines d'intervention au Congo \| LEGAL SOURCE | Formations, audits, certification, RH et sécurité, hygiène, énergies durables, conseil, RSE, sécurité alimentaire et EPI. |
| Services | `/services` | Services professionnels au Congo – Conseil, audit et formation \| LEGAL SOURCE | Conseil, coaching, audit, formation et accompagnement à la certification pour les entreprises au Congo. |
| Formations | `/formations` | Formations professionnelles au Congo – Catalogues LEGAL SOURCE | NEBOSH, IOSH, ISEP, ISO, ProQual, sécurité opérationnelle, incendie, santé au travail, environnement et agroalimentaire. |
| Catalogue de formations | `/formations/catalogue/:familySlug` | Nom du catalogue – Catalogue de formations \| LEGAL SOURCE | Description de la famille de formations et liste des fiches associées. |
| Boutique | `/boutique` | Boutique EPI et kits de sécurité au Congo \| LEGAL SOURCE | Catalogue de produits professionnels au Congo : équipements de protection individuelle et kits pour les entreprises. |
| Projets | `/projets` | Projets et réalisations au Congo \| LEGAL SOURCE | Audits, formations, agriculture durable et études d'impact environnemental. |
| Actualités | `/actualites` | Actualités QHSE et conseils aux entreprises au Congo \| LEGAL SOURCE | Publications sur le QHSE, la sécurité, l'environnement et la performance durable au Congo. |
| Contact | `/contact` | Contact LEGAL SOURCE à Brazzaville, Congo \| LEGAL SOURCE | Téléphone, WhatsApp et e-mail pour les demandes de services, formations et produits. |
| Formation | `/formations/:slug` | Titre de la formation – Formation au Congo \| LEGAL SOURCE | Description issue du catalogue des formations. |
| Produit | `/boutique/:slug` | Nom du produit \| LEGAL SOURCE | Description du produit issue du catalogue. |
| Article | `/actualites/:slug` | Titre de l'article \| LEGAL SOURCE | Extrait de l'article. |
| Pages légales | `/mentions-legales`, etc. | Titre de la page \| LEGAL SOURCE | Description propre à chaque document, mise à jour via `useDocumentMeta` (`og:type=article`, `article:modified_time`, `robots=index, follow`). |

Le suffixe `| LEGAL SOURCE` est ajouté automatiquement par `useDocumentMeta`
sauf lorsque le titre contient déjà le nom du site.

## 3. Structure des titres

- Un seul `H1` par page, porté par `PageHero`.
- `H2` pour les grandes sections, `H3` pour les cartes et sous-sections.
- Accueil : `H1` « Bienvenue chez LEGAL SOURCE », puis `H2` « Nos activités, nos
  services et nos solutions ».
- Les titres décrivent le contenu réel ; aucun titre masqué ou dupliqué.

## 4. Données structurées Schema.org

Dans `index.html` :

- `Organization` + `ProfessionalService` : nom, URL, logo, image, e-mail,
  téléphone, adresse à Brazzaville, zone desservie (Congo, Brazzaville),
  `contactPoint`, `employee` (direction) et `knowsAbout` (QHSE, ISO, formations,
  EPI, RSE).
- Aucune certification, référence client ou note inventée.

Les données structurées par page (produit, article) peuvent être ajoutées via le
paramètre `structuredData` de `useDocumentMeta` sans modifier le HTML statique.

## 5. Technique

- `sitemap.xml` généré au build depuis les routes statiques et les slugs des
  données (`128` URL actuellement, catalogues et fiches formations incluses).
- `robots.txt` généré au build avec l'URL absolue du sitemap.
- Balise `canonical` mise à jour à chaque navigation.
- Open Graph et Twitter Cards avec image `og-image.jpg`.
- `lang="fr"`, `geo.region=CG`, `geo.placename=Brazzaville`.
- Fallback SPA pour les deep-links + test de non-régression au build.
- Images WebP, dimensions adaptées, `loading="lazy"` hors héros,
  `fetchPriority="high"` sur les héros, noms de fichiers descriptifs et
  attributs `alt` renseignés.

## 6. Google Search Console et Analytics 4

L'intégration est préparée mais reste inactive tant que les identifiants ne sont
pas fournis :

1. **Search Console** : ajouter la propriété `https://kemuel744.github.io/LOCAL-SOURCES/`
   (ou le domaine définitif), puis déposer le fichier de vérification dans
   `public/` ou ajouter la balise meta de vérification dans `index.html`.
2. **Analytics 4** : créer une propriété GA4, puis ajouter le script de mesure
   dans `index.html` ou un composant dédié chargé uniquement après consentement
   si nécessaire.
3. Soumettre `sitemap.xml` dans Search Console après chaque changement de domaine.
4. Vérifier les Core Web Vitals dans Search Console (rapport « Expérience sur la page »).

Aucun script de mesure n'est chargé actuellement : aucune donnée visiteur n'est
collectée.

## 7. Règles éditoriales

- Décrire uniquement les activités, formations, produits et références validés.
- Employer les mots-clés dans des phrases utiles, sans répétition artificielle.
- Rédiger des contenus originaux ; ne pas dupliquer les descriptions entre pages.
- Mettre à jour `docs/CONTENUS-A-CONFIRMER.md` avant de publier une nouvelle
  allégation commerciale.

## 8. Contrôle avant mise en ligne

- [ ] Un titre et une description uniques par page.
- [ ] Un seul `H1` par page.
- [ ] `sitemap.xml` et `robots.txt` accessibles sur l'URL publique.
- [ ] `canonical` correct sur chaque page.
- [ ] Données structurées valides (test Rich Results).
- [ ] Images avec `alt` pertinents.
- [ ] Test mobile et Core Web Vitals.
- [ ] Search Console et GA4 configurés si nécessaire.
