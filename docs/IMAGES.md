# Politique visuelle — une image, un contenu

Règle du projet : **un fichier image ne peut illustrer qu’un seul contenu**.
Une photo ne doit jamais être recyclée pour combler un manque.

Corollaire : **pas de photo dédiée = pas d’image**. On n’affiche ni une photo
déjà utilisée ailleurs, ni un décor de remplacement (dégradé, motif, visuel
généré). Une carte ou une page sans visuel propre reste une mise en page
typographique : titre, catégorie, contenu.

Cette règle est vérifiée automatiquement à chaque build.

## Vérification

```bash
npm run check:images               # échoue si doublon, réutilisation indirecte ou fichier mort
npm run check:images -- --report   # affiche le rapport sans échouer
```

Le contrôle est intégré à `npm run build` : un doublon bloque la publication.

Ce qui est détecté :

- une image importée et utilisée plus d’une fois ;
- la recopie d’une image d’un enregistrement vers d’autres (`image: family.image`) ;
- un fichier image jamais utilisé (fichier mort à supprimer).

Seuls les **logos** (`src/assets/logos`) échappent à la règle d’unicité : ce sont
des marques, réutilisées dans l’en-tête et le pied de page.

## Affectation actuelle

| Dossier | Fichiers | Contenu unique |
|---|---|---|
| `images/heroes/` | 6 | Bandeau de la page d’accueil, services, formations, projets, boutique et à propos |
| `images/activities/` | 12 | 10 domaines d’intervention + 2 illustrations d’actualités (ISO 45001, HACCP) |
| `images/projects/` | 4 | Les 4 réalisations (`src/data/projects.ts`) |
| `images/products/` | 11 | Les 11 produits et kits (`src/data/products.ts`) |
| `images/team/` | 3 | Direction et équipe (`src/data/partners.ts`, `src/pages/About`) |
| `images/partners/` | 8 | Logos des organismes partenaires (`src/data/partners.ts`) |
| `logos/` | 2 | Logo couleur (en-tête) et logo blanc (pied de page) |
| `public/` | 3 | Favicon, logo JSON-LD, image de partage social (`og-image.jpg`) |

Réattributions effectuées :

- Bandeau **formations** : `heroes/legal-source-formations-professionnelles-congo.webp`
  (auparavant inutilisé) remplace les bandeaux mutualisés.
- Bandeau **à propos** : `legal-source-accompagnement-entreprise-congo.webp`,
  retiré de la page d’accueil.
- **Actualités** : illustration propre pour ISO 45001 (prévention incendie) et
  HACCP (analyse en laboratoire). L’annonce de lancement n’a pas d’image et
  s’affiche en texte seul.
- **Familles et fiches de formation** : aucune photo partagée. En attendant les
  photographies dédiées (voir `docs/IMAGES-A-FOURNIR.md`), les cartes sont en
  texte et les pages de détail n’affichent pas de visuel.
- **Bandeaux d’appel à l’action** (`CtaBand`, sections « pourquoi nous choisir ») :
  mises en page de marque sans photo répétée sur toutes les pages.

Fichiers supprimés (morts ou doublons) : `products/kit-agricole-strip.webp`,
`projects/releve-terrain-environnement.webp`, `logos/legal-source-symbol.png`.

## Ajouter un visuel

1. Fournir un fichier **spécifique au contenu** (nom explicite, WebP optimisé).
2. L’importer dans **un seul** fichier de données ou de page.
3. Lancer `npm run check:images`.
4. S’il n’existe pas de visuel dédié : ne rien afficher. Ne jamais réutiliser
   une photo, ne jamais la remplacer par un dégradé.
