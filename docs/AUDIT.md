# RAPPORT D'AUDIT — LEGAL SOURCE
**Étape 1 — Analyse des ressources et templates existants**
Date : 05/11/2026

## 1. Ressources disponibles dans le dossier

| Fichier | Type | Rôle |
|---|---|---|
| `PROMPT MAÎTRE local sources.pdf` | PDF (14 p.) | Cadre méthodologique et fonctionnel |
| `CAHIER DES CHARGES LOCAL SOURCES.pdf` | PDF (12 p.) | Exigences contractuelles, périmètre, critères de validation |
| `page d'accueil.jpeg` | Image 1024×1536 | Template officiel — page d'accueil |
| `page boutique.jpeg` | Image 853×1280 | Template officiel — boutique EPI & Kits |
| `page actualités.jpeg` | Image 853×1280 | Template officiel — activités / services / réalisations |

## 2. Templates identifiés

1. **Accueil** : barre utilitaire, header logo + menu, hero photo/navy, 10 cartes d'activités, bandeau de réassurance, section À propos, footer institutionnel.
2. **Boutique** : hero produits, filtres par catégories, catalogue de produits, encarts kits, réassurance, footer commercial.
3. **Activités / Services** : hero, 6 domaines d'intervention, bloc « Pourquoi choisir », réalisations, footer.

> Remarque : le fichier nommé `page actualités.jpeg` illustre en réalité une page **services / activités**. Aucun template dédié aux actualités, formations, projets, contact ou pages légales n'est fourni. Ces pages seront construites à partir du **même design system**, sans nouvelle identité.

## 3. Éléments graphiques réutilisables

- **Logo officiel** présent dans l'en-tête (version couleur) et le pied de page (version blanche). Il sera **extrait des templates**, jamais redessiné.
- **Photographies** : hero home, hero boutique, hero services, 10 visuels d'activités, image À propos, 4 visuels de réalisations, 8 photos produits + 4 visuels de kits. Toutes seront découpées depuis les templates fournis.
- **Composants visuels** : cartes à icône circulaire débordante, bandeaux de réassurance, boutons verts, liens fléchés, pastilles de catégories, badges « Nouveau ».
- **Icônes** : pictogrammes linéaires bleu marine → remplacés par **Lucide React** (même graisse, même registre), conformément aux technologies demandées.

## 4. Technologies existantes

Aucun code source, aucun HTML/CSS/JS, aucune police, aucun fichier de configuration n'est fourni. Les templates sont des **images de référence**. Il n'y a donc aucune migration technologique à préserver : la stack recommandée est applicable telle quelle.

## 5. Contraintes techniques

| Point | Constat | Traitement |
|---|---|---|
| Logo | Uniquement en raster (~360×90 px) | Extraction PNG + version blanche transparente ; favicon dérivé du symbole |
| Photos | Basse résolution (vignettes 135–180 px) | Affichage à taille native ou légèrement agrandie, `object-cover`, `loading="lazy"` |
| Polices | Non fournies | **Montserrat** (titres) + **Open Sans** (texte), auto-hébergées via Fontsource |
| Couleurs | Non fournies en code | Échantillonnage des templates (voir §6) |
| Coordonnées | `contact@legal-source.com`, `+242 06 813 88 52`, Brazzaville — issus des templates | Centralisées dans `src/config/site.ts`, signalées « à confirmer » |
| WhatsApp | Aucun numéro officiel dédié fourni | Numéro du template utilisé par défaut, centralisé et documenté comme **provisoire** |
| Réseaux sociaux | Aucune URL fournie | Icônes rendues uniquement si une URL est configurée (aucun lien fictif) |
| Catalogue | 8 produits + 4 kits visibles dans le template | Repris à l'identique ; aucun produit/prix inventé |
| Témoignages | Présents dans le template mais non sourcés | **Non repris** (interdiction d'inventer des références clients) |

## 6. Palette échantillonnée sur les templates

| Rôle | HEX |
|---|---|
| Bleu institutionnel (footer, top bar) | `#01325B` |
| Bleu profond (hero) | `#003D66` |
| Vert institutionnel (CTA) | `#2E8D29` |
| Vert foncé (hover) | `#24701F` |
| Bleu texte / titres | `#0B2A4A` |
| Texte secondaire | `#5A6B7B` |
| Fond de section | `#F3F8FC` |
| Bordures | `#E2EAF2` |
| Accents logo | jaune `#F4B400`, orange `#E8752A`, rouge `#D94A3D`, violet `#7B4EA3`, bleu `#2C7FB8`, turquoise `#1E9AA0` |

## 7. Architecture recommandée

- **React 18 + TypeScript + Vite**, **React Router**, **Tailwind CSS**, **Lucide React**, polices Fontsource.
- Séparation stricte : `pages/`, `components/`, `data/`, `config/`, `services/`, `hooks/`, `utils/`, `assets/`.
- Couche `services/` asynchrone dès maintenant (retourne les données locales) pour brancher une API sans toucher aux composants.
- Modèles TypeScript cohérents (`Product`, `Service`, `Training`, `Project`, `NewsPost`, `Activity`).
- Aucun backend, panier, paiement ou compte client (hors périmètre V1).
- Pages prévues : Accueil, À propos, Activités, Services, Formations, Boutique, Projets, Actualités, Contact, Mentions légales, Confidentialité, CGV, 404.

## 8. Contenus manquants (à confirmer par LEGAL SOURCE)

- Numéro WhatsApp officiel et numéro de téléphone définitif.
- Adresse e-mail officielle définitive et adresse physique complète.
- URLs des réseaux sociaux.
- Catalogue produits définitif, prix, stocks, photos haute résolution.
- Catalogue de formations (programmes, durées, modalités, tarifs).
- Références / réalisations validées et témoignages autorisés.
- Nom de domaine, hébergement, informations légales de l'éditeur.

Ces éléments sont soit issus des templates (donc provisoires), soit absents. Aucune donnée officielle n'a été inventée.
