# Contenus à confirmer avant mise en production

Ce document recense les informations provisoires ou non sourcées publiées sur le site. Chaque ligne doit être validée par LEGAL SOURCE avant diffusion commerciale.

Dernière mise à jour : 11 novembre 2026.

## 1. Coordonnées et identité

| Donnée | Valeur actuelle | Source | Statut | Action |
|---|---|---|---|---|
| Téléphone | `+242 06 123 45 67` | Validation LEGAL SOURCE (8 nov. 2026) | ✅ Officiel | Aucune |
| WhatsApp | `242061234567` | Validation LEGAL SOURCE (8 nov. 2026) | ✅ Officiel | Aucune |
| E-mail | `contact@legal-source.com` | Validation LEGAL SOURCE (8 nov. 2026) | ✅ Officiel | Aucune |
| Adresse physique | `Brazzaville, Congo` | Validation LEGAL SOURCE (8 nov. 2026) | ✅ Officiel | Compléter l'adresse précise si disponible |
| Horaires | « lundi au vendredi pendant les heures de bureau » | Rédaction interne | ⚠️ Non validé | Confirmer ou supprimer |
| Raison sociale / mentions | `LEGAL SOURCE` | Template | ⚠️ À confirmer | Fournir RCCM, NIU, siège |
| Direction / directeur de publication | `Israël ELOYE ONDELE`, Directeur général | Validation LEGAL SOURCE | ✅ Officiel | Aucune |
| Réseaux sociaux | Aucun | — | ⚠️ À fournir | Fournir les URL officielles |

Fichier concerné : `src/config/site.ts`, `index.html` (JSON-LD).

## 2. Domaine et hébergement

| Donnée | Valeur actuelle | Statut | Action |
|---|---|---|---|
| URL publique | `https://kemuel744.github.io/LEGAL-SOURCE/` | ✅ Technique | Remplacer par le domaine définitif |
| Domaine `legal-source.com` | Non acquis (redirige vers un placeur de domaine) | ❌ Bloquant SEO | Acquérir le domaine ou en choisir un autre |
| Hébergement | GitHub Pages | ✅ Technique | Hébergement confirmé : GitHub Pages |

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

Source : fichier `Legal source.xlsx` (feuille `Formation`), retiré du dépôt (récupérable dans l’historique git).

| Élément | Statut | Action |
|---|---|---|
| Catalogue de 89 formations réparties en 11 catalogues thématiques | ✅ Intégré depuis l’Excel | Valider la liste publiée |
| Intitulés et nombre de leçons | ✅ Repris de l’Excel | Corriger les coquilles éventuelles |
| Niveaux (débutant, intermédiaire, avancé) | ⚠️ Repris de l’Excel (`Filters (level)`) | Valider les niveaux manquants |
| Descriptions, objectifs et programmes | ⚠️ Reformulés à partir des référentiels publics (NEBOSH, IOSH, ISEP, ISO, ProQual, HACCP) | Faire valider par les formateurs |
| Durées | Non renseignées | Fournir les durées par formation |
| Prix | Colonne vide dans l’Excel | Fournir la grille tarifaire |
| Prérequis et certification | ⚠️ Formulations génériques par famille | Confirmer selon chaque référentiel |
| Lignes exclues | Tests, extensions, doublons de version, unités DN/DI détachées | Confirmer les exclusions |

Fichiers concernés : `src/data/trainings.ts`, `src/data/trainingFamilies.ts`.

## 4 bis. Partenaires et équipe

Source : feuille `Partenaire` de l’Excel.

| Élément | Statut | Action |
|---|---|---|
| 6 organismes partenaires | ⚠️ Publiés depuis l’Excel | Valider les noms et descriptions |
| 10 membres de l’équipe / du réseau | ⚠️ Publiés depuis l’Excel | Obtenir l’accord des personnes citées |
| Rôles et orthographe des noms | ⚠️ Normalisés | Vérifier les intitulés exacts |

Fichier concerné : `src/data/partners.ts`.

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
| Mentions légales | ⚠️ Document provisoire | Relecture juridique ; hébergement GitHub Pages confirmé |
| Politique de confidentialité | ⚠️ Document provisoire | Relecture juridique |
| Conditions générales | ⚠️ Document provisoire | Relecture juridique |
| Article d'actualité de lancement | ✅ Publié | Vérifier la date |

Fichiers concernés : `src/data/legal.ts`, `src/components/common/LegalContent.tsx`, `src/pages/Legal/LegalPage.tsx`, `src/pages/About/AboutPage.tsx`, `src/data/news.ts`.

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
