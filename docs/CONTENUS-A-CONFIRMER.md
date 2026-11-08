# Contenus à confirmer avant mise en production

Ce document recense les informations provisoires ou non sourcées publiées sur le site. Chaque ligne doit être validée par LEGAL SOURCE avant diffusion commerciale.

Dernière mise à jour : 8 novembre 2026.

## 1. Coordonnées et identité

| Donnée | Valeur actuelle | Source | Statut | Action |
|---|---|---|---|---|
| Téléphone | `+242 06 123 45 67` | Validation LEGAL SOURCE (8 nov. 2026) | ✅ Officiel | Aucune |
| WhatsApp | `242061234567` | Validation LEGAL SOURCE (8 nov. 2026) | ✅ Officiel | Aucune |
| E-mail | `contact@legal-source.com` | Validation LEGAL SOURCE (8 nov. 2026) | ✅ Officiel | Aucune |
| Adresse physique | `Brazzaville, Congo` | Validation LEGAL SOURCE (8 nov. 2026) | ✅ Officiel | Compléter l'adresse précise si disponible |
| Horaires | « lundi au vendredi pendant les heures de bureau » | Rédaction interne | ⚠️ Non validé | Confirmer ou supprimer |
| Raison sociale / mentions | `LEGAL SOURCE` | Template | ⚠️ À confirmer | Fournir RCCM, NIU, siège, directeur de publication |
| Réseaux sociaux | Aucun | — | ⚠️ À fournir | Fournir les URL officielles |

Fichier concerné : `src/config/site.ts`, `index.html` (JSON-LD).

## 2. Domaine et hébergement

| Donnée | Valeur actuelle | Statut | Action |
|---|---|---|---|
| URL publique | `https://kemuel744.github.io/LOCAL-SOURCES/` | ✅ Technique | Remplacer par le domaine définitif |
| Domaine `legal-source.com` | Non acquis (redirige vers un placeur de domaine) | ❌ Bloquant SEO | Acquérir le domaine ou en choisir un autre |
| Hébergement | GitHub Pages | ✅ Technique | Décider de la cible finale (GitHub Pages, Netlify, Vercel…) |

Fichiers concernés : `.env`, `index.html`, `scripts/generate-static.mjs`.

## 3. Catalogue produits

| Élément | Statut | Action |
|---|---|---|
| Liste des 11 produits/kits | ⚠️ Reprise du template | Valider la liste définitive |
| Prix (`12 500`, `8 500`, `28 000` FCFA, etc.) | ⚠️ Indicatifs | Confirmer les prix de vente |
| Disponibilités (en stock / sur commande) | ⚠️ Indicatives | Confirmer les stocks réels |
| Descriptions et caractéristiques | ⚠️ Rédigées à partir du template | Faire valider techniquement |
| Photos produits | ⚠️ Extraites de captures basse résolution | Fournir des photos HD |
| Conditions de livraison | Non renseignées | Fournir les modalités |

Fichier concerné : `src/data/products.ts`.

## 4. Formations

| Élément | Statut | Action |
|---|---|---|
| Intitulés NEBOSH, IOSH, ISO 9001/14001/45001, HACCP, GLOBALG.A.P. | ⚠️ Repris du template | Valider le catalogue |
| Programmes, durées, prérequis, tarifs | Absents | Fournir les fiches détaillées |
| Modalités (intra, calendrier) | ⚠️ Formulations génériques | Confirmer |
| Accréditations et partenariats | Non mentionnés | Fournir les justificatifs si utilisés |

Fichier concerné : `src/data/trainings.ts`.

## 5. Réalisations et références

| Élément | Statut | Action |
|---|---|---|
| 4 projets présentés | ⚠️ Illustratifs, sans client nommé | Valider leur publication |
| Résultats qualitatifs | ⚠️ Non chiffrés | Confirmer ou compléter |
| Références clients / témoignages | Non publiés (volontairement) | Fournir des autorisations écrites si ajout |

Fichier concerné : `src/data/projects.ts`.

## 6. Contenus éditoriaux et juridiques

| Élément | Statut | Action |
|---|---|---|
| Textes « À propos », valeurs, histoire | ⚠️ Rédaction interne | Validation client |
| Formulations « expertise reconnue », « équipe d'experts expérimentés » | ⚠️ Non sourcées | Valider ou reformuler |
| Mentions légales | ⚠️ Document provisoire | Relecture juridique |
| Politique de confidentialité | ⚠️ Document provisoire | Relecture juridique |
| Conditions générales | ⚠️ Document provisoire | Relecture juridique |
| Article d'actualité de lancement | ✅ Publié | Vérifier la date |

Fichiers concernés : `src/pages/Legal/LegalPage.tsx`, `src/pages/About/AboutPage.tsx`, `src/data/news.ts`.

## 7. Images et droits

| Élément | Statut | Action |
|---|---|---|
| Visuels extraits des templates | ✅ Converties en WebP, redimensionnées (2,9 Mo au total) | Fournir si possible des originaux HD pour les supports print |
| Droit d'utilisation des photos | Non documenté | Obtenir les autorisations |
| Logo officiel | ✅ Fourni via template | Confirmer la version vectorielle (SVG) |

## 8. Validation finale

- [x] Coordonnées officielles intégrées et testées (appel, WhatsApp, e-mail) — validées le 8 novembre 2026.
- [ ] Domaine acheté et `VITE_SITE_URL` / `VITE_BASE_PATH` mis à jour.
- [ ] Contenus juridiques relus par un conseil compétent.
- [ ] Catalogue et prix validés.
- [ ] Images HD intégrées et optimisées.
- [ ] Liens profonds testés sur l'URL publique.
- [ ] Accord écrit pour les photos et références.
