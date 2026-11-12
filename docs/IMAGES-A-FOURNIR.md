# Images à fournir — formations et actualités

Ce document liste les photographies attendues pour illustrer **chaque contenu
par une image unique**. Tant qu’une photo n’est pas fournie, le contenu
correspondant s’affiche **sans visuel** (aucune photo réutilisée, aucun dégradé
de remplacement).

Règle : une photo = un contenu. Une même photo ne peut pas servir à deux
familles, deux fiches ou deux actualités.

## Format attendu

| Critère | Valeur |
|---|---|
| Format de fichier | JPEG (`.jpg`) — converti automatiquement en WebP |
| Dimensions | 1600 × 900 px minimum (16:9) |
| Poids | 300 Ko à 1 Mo par fichier |
| Contenu | photo réelle, nette, sans texte incrusté, sans logo, sans filigrane |
| Droits | photo dont LEGAL SOURCE détient les droits d’utilisation |
| Nommage | minuscules, sans accent, sans espace (voir slugs ci-dessous) |

## Où déposer les fichiers

```
src/assets/images/formations/familles/<slug>.jpg   → 11 visuels de famille
src/assets/images/formations/fiches/<slug>.jpg     → 1 visuel par fiche (optionnel)
src/assets/images/news/<slug>.jpg                  → actualités sans image
```

Puis convertir en WebP :

```bash
python scripts/optimize-images.py --prune
```

Les fichiers `.jpg` sont supprimés après conversion et les `.webp` générés au
même emplacement.

---

## 1. Visuels de famille (11 fichiers — priorité haute)

Ces photos apparaissent sur les cartes du catalogue `/formations`, dans les
résultats de recherche et en bandeau de chaque page famille.

| Fichier à fournir | Famille |
|---|---|
| `formations/familles/nebosh.jpg` | Formations NEBOSH — santé, sécurité et environnement au travail |
| `formations/familles/iosh.jpg` | Formations IOSH — management de la santé et de la sécurité |
| `formations/familles/isep.jpg` | Formations ISEP (ex-IEMA) — durabilité et management environnemental |
| `formations/familles/iso.jpg` | Formations ISO — systèmes de management, audit |
| `formations/familles/proqual.jpg` | Formations ProQual — qualifications professionnelles |
| `formations/familles/securite-operationnelle.jpg` | Sécurité opérationnelle — risques terrain |
| `formations/familles/incendie-urgences.jpg` | Incendie et urgences — prévention, évacuation, secours |
| `formations/familles/sante-bien-etre.jpg` | Santé et bien-être au travail |
| `formations/familles/environnement.jpg` | Environnement et études d’impact |
| `formations/familles/agroalimentaire.jpg` | Agroalimentaire — HACCP, PRP, sécurité des aliments |
| `formations/familles/management-conformite.jpg` | Management et conformité |

**Suggestion de contenu** : une photo de session de formation, de terrain ou de
site industriel réellement liée au thème (salle de formation pour NEBOSH/IOSH,
site industriel pour sécurité opérationnelle, exercice incendie, laboratoire
agroalimentaire, etc.). Éviter les visuels génériques « poignée de main » ou
« bureau » qui ne distinguent pas les familles.

---

## 2. Visuels de fiche formation (91 fichiers — optionnel)

Une photo par fiche permet d’illustrer les cartes du catalogue et le bandeau de
la page `/formations/:slug`. Sans photo, la fiche reste en texte seul.

Si vous ne fournissez pas les 91 photos, fournissez au minimum celles des
formations mises en avant (marquées ⭐) et les plus consultées.

### NEBOSH (16)

| Fichier | Formation |
|---|---|
| `fiches/nebosh-health-safety-work-award.jpg` ⭐ | NEBOSH Health and Safety at Work Award |
| `fiches/nebosh-incident-investigation.jpg` | NEBOSH HSE Introduction to Incident Investigation |
| `fiches/nebosh-managing-risks.jpg` | NEBOSH HSE Award in Managing Risks and Risk Assessment at Work |
| `fiches/nebosh-working-wellbeing.jpg` | NEBOSH Working with Wellbeing |
| `fiches/nebosh-leadership-excellence.jpg` | NEBOSH HSE Certificate in Health and Safety Leadership Excellence |
| `fiches/nebosh-international-general-certificate.jpg` ⭐ | NEBOSH International General Certificate |
| `fiches/nebosh-national-general-certificate.jpg` | NEBOSH National General Certificate |
| `fiches/nebosh-process-safety.jpg` | NEBOSH HSE Certificate in Process Safety Management |
| `fiches/nebosh-construction-international.jpg` | NEBOSH Health and Safety Management for Construction (International) |
| `fiches/nebosh-construction-uk.jpg` | NEBOSH Health and Safety Management for Construction (UK) |
| `fiches/nebosh-environmental-management.jpg` | NEBOSH Environmental Management Certificate |
| `fiches/nebosh-fire-safety.jpg` | NEBOSH Certificate in Fire Safety |
| `fiches/nebosh-international-diploma.jpg` | NEBOSH International Diploma |
| `fiches/nebosh-national-diploma.jpg` | NEBOSH National Diploma |
| `fiches/nebosh-international-environmental-diploma.jpg` | NEBOSH International Diploma in Environmental Management |
| `fiches/nebosh-national-environmental-diploma.jpg` | NEBOSH National Environmental Diploma |

### IOSH (8)

| Fichier | Formation |
|---|---|
| `fiches/iosh-managing-safely.jpg` ⭐ | IOSH Managing Safely |
| `fiches/iosh-managing-safely-refresher.jpg` | IOSH Managing Safely Refresher |
| `fiches/iosh-working-safely.jpg` | IOSH Working Safely |
| `fiches/iosh-safety-executives-directors.jpg` | IOSH Safety for Executives and Directors |
| `fiches/iosh-managing-occupational-health-wellbeing.jpg` | IOSH Managing Occupational Health and Wellbeing |
| `fiches/iosh-leading-safely.jpg` | IOSH Leading Safely |
| `fiches/iosh-she-construction-site-managers.jpg` | IOSH Safety, Health and Environment for Construction Site Managers |
| `fiches/iosh-managing-safely-aviation.jpg` | IOSH Managing Safely in Airports and Aviation |

### ISEP (10)

| Fichier | Formation |
|---|---|
| `fiches/isep-environmental-sustainability-workforce.jpg` | ISEP Environmental Sustainability Skills for the Workforce |
| `fiches/isep-environmental-sustainability-managers.jpg` | ISEP Environmental Sustainability Skills for Managers |
| `fiches/isep-foundation-certificate.jpg` | ISEP Foundation Certificate in Sustainability & Environmental Management |
| `fiches/isep-certificate-sustainability-environmental-management.jpg` | ISEP Certificate in Sustainability & Environmental Management |
| `fiches/isep-carbon-footprinting-reporting.jpg` | ISEP Carbon Footprinting and Reporting |
| `fiches/isep-diploma-sustainable-business.jpg` | ISEP Diploma in Sustainable Business Practice |
| `fiches/isep-pathways-net-zero.jpg` | ISEP Pathways to Net Zero |
| `fiches/isep-leading-environmental-sustainability.jpg` | ISEP Leading with Environmental Sustainability |
| `fiches/isep-iso-14001-lead-auditor.jpg` | ISEP ISO 14001 Lead Environmental Auditor |
| `fiches/isep-iso-14001-internal-auditor.jpg` | ISEP ISO 14001 Internal Auditor |

### ISO (11)

| Fichier | Formation |
|---|---|
| `fiches/iso-9001-lead-auditor.jpg` ⭐ | ISO 9001 Lead Auditor |
| `fiches/iso-14001-lead-auditor.jpg` | ISO 14001 Lead Auditor |
| `fiches/iso-45001-lead-auditor.jpg` ⭐ | ISO 45001 Lead Auditor |
| `fiches/iso-22000-lead-auditor.jpg` | ISO 22000 Lead Auditor |
| `fiches/iso-9001-lead-implementer.jpg` | ISO 9001 Lead Implementer |
| `fiches/iso-14001-lead-implementer.jpg` | ISO 14001 Lead Implementer |
| `fiches/iso-45001-lead-implementer.jpg` | ISO 45001 Lead Implementer |
| `fiches/iso-22000-lead-implementer.jpg` | ISO 22000 Lead Implementer |
| `fiches/iso-31000.jpg` | ISO 31000 — Management du risque |
| `fiches/iso-19011.jpg` | ISO 19011 — Audit des systèmes de management |
| `fiches/iso-27001.jpg` | ISO 27001 — Management de la sécurité de l’information |

### ProQual (4)

| Fichier | Formation |
|---|---|
| `fiches/proqual-level-2-mental-health-first-aid.jpg` | ProQual Level 2 Award in Mental Health First Aid Awareness |
| `fiches/proqual-level-2-youth-mental-health-first-aid.jpg` | ProQual Level 2 Award in Youth Mental First Aid Awareness |
| `fiches/proqual-level-3-health-safety.jpg` | ProQual Level 3 Certificate in Health & Safety |
| `fiches/proqual-level-7-strategic-health-safety.jpg` | ProQual Level 7 Diploma in Strategic Health & Safety |

### Sécurité opérationnelle (14)

| Fichier | Formation |
|---|---|
| `fiches/espaces-confines.jpg` ⭐ | Espaces confinés — prévention et intervention |
| `fiches/travail-en-hauteur.jpg` | Travail en hauteur — prévention des chutes |
| `fiches/permis-de-travail.jpg` | Permis de travail et maîtrise des travaux dangereux |
| `fiches/substances-dangereuses.jpg` | Substances et mélanges dangereux — maîtrise du risque chimique |
| `fiches/bruit-evaluation-risque.jpg` | Bruit — évaluation et prévention du risque auditif |
| `fiches/manutention-manuelle.jpg` | Manutention manuelle et prévention des troubles musculosquelettiques |
| `fiches/glissades-trebuchements-chutes.jpg` | Glissades, trébuchements et chutes de plain-pied |
| `fiches/meules-abrasives.jpg` | Meules abrasives — sécurité et enquête après incident |
| `fiches/identification-des-dangers.jpg` | Techniques d’identification des dangers |
| `fiches/evaluation-des-risques.jpg` ⭐ | Évaluation des risques — de l’analyse au plan d’action |
| `fiches/securite-pour-managers.jpg` | Sécurité pour les managers |
| `fiches/securite-pour-representants.jpg` | Sécurité pour les représentants du personnel |
| `fiches/hazop.jpg` | HAZOP — analyse des risques des procédés |
| `fiches/gestion-des-entreprises-externes.jpg` | Gestion des entreprises extérieures et de la coactivité |

### Incendie et urgences (7)

| Fichier | Formation |
|---|---|
| `fiches/evaluation-risque-incendie.jpg` ⭐ | Évaluation du risque incendie |
| `fiches/gestion-securite-incendie.jpg` | Gestion de la sécurité incendie |
| `fiches/serre-file.jpg` | Serre-file et guide-file |
| `fiches/premiers-secours-travail.jpg` ⭐ | Premiers secours au travail |
| `fiches/premiers-secours-recyclage.jpg` | Recyclage premiers secours |
| `fiches/secours-urgence-vie.jpg` | Secours d’urgence et gestes qui sauvent |
| `fiches/exercices-evacuation-urgence.jpg` | Exercices d’évacuation et gestion d’urgence |

### Santé et bien-être (7)

| Fichier | Formation |
|---|---|
| `fiches/bien-etre-au-travail.jpg` | Bien-être au travail |
| `fiches/sante-mentale-au-travail.jpg` | Santé mentale et travail — prévenir et accompagner |
| `fiches/premiers-secours-sante-mentale.jpg` ⭐ | Premiers secours en santé mentale |
| `fiches/defenseur-sante-mentale.jpg` | Défenseur de la santé mentale en entreprise |
| `fiches/sante-mentale-securite-travail.jpg` | Santé mentale et sécurité au travail |
| `fiches/ergonomie-travail-ecran.jpg` | Ergonomie et travail sur écran |
| `fiches/legionelles.jpg` | Legionella — prévention et gestion du risque |

### Environnement (3)

| Fichier | Formation |
|---|---|
| `fiches/management-environnemental.jpg` | Management environnemental |
| `fiches/etude-impact-environnemental.jpg` | Étude d’impact environnemental |
| `fiches/sensibilisation-environnement.jpg` | Sensibilisation à l’environnement |

### Agroalimentaire (3)

| Fichier | Formation |
|---|---|
| `fiches/haccp.jpg` ⭐ | HACCP — analyse des dangers et maîtrise sanitaire |
| `fiches/prp-programmes-prerequis.jpg` | PRP — programmes prérequis en sécurité des aliments |
| `fiches/prpo-programmes-prerequis-operationnels.jpg` | PRPo — programmes prérequis opérationnels |

### Management et conformité (8)

| Fichier | Formation |
|---|---|
| `fiches/leadership-prevention.jpg` | Leadership en prévention |
| `fiches/management-equipes.jpg` | Management des équipes |
| `fiches/audit-awareness.jpg` | Sensibilisation à l’audit |
| `fiches/cdm-2015.jpg` | CDM 2015 — construction design and management |
| `fiches/cdm-awareness.jpg` | CDM 2015 — sensibilisation |
| `fiches/building-safety-act.jpg` | Building Safety Act 2022 — sensibilisation |
| `fiches/amiante.jpg` | Amiante — sensibilisation et prévention |
| `fiches/atex-dsear.jpg` | ATEX et DSEAR — atmosphères explosives |

---

## 3. Actualité sans image (1 fichier)

| Fichier à fournir | Contenu |
|---|---|
| `news/legal-source-renforce-sa-presence-en-ligne.jpg` | Lancement du site / vie de l’entreprise |

---

## 4. Autres visuels sans photo dédiée (optionnel)

| Emplacement | Fichier à fournir | Contenu |
|---|---|---|
| Accueil, section « À propos » | `heroes/legal-source-engagement-entreprise-congo.jpg` | Engagement QHSE de LEGAL SOURCE |
| Accueil, section « Pourquoi nous choisir » | `heroes/legal-source-pourquoi-nous-choisir.jpg` | Équipe ou intervention terrain |

---

## Si les noms de fichiers sont contraignants

Déposez simplement toutes les photos dans un dossier `photos-a-integrer/` à la
racine du projet, en indiquant pour chacune la famille ou la formation visée
(nom du fichier, ou un fichier `photos-a-integrer/mapping.txt`). Le tri, le
recadrage 16:9 et l’intégration seront faits à partir de cette liste.

## Après fourniture

1. Convertir en WebP : `python scripts/optimize-images.py --prune`
2. Vérifier l’unicité : `npm run check:images`
3. Construire : `npm run build`

Tant que ces photos ne sont pas fournies, le site reste conforme à la règle :
aucune image n’est utilisée deux fois.
