# Elvez — Site vitrine

Site vitrine de la société de sécurité privée Elvez, agréée CNAPS, intervenant dans les Bouches-du-Rhône
(BTP & chantiers, événementiel, gardiennage tertiaire).

## Stack

- Next.js 14 (App Router) · TypeScript
- Tailwind CSS avec design tokens dédiés (palette sombre + accent ambre)
- Framer Motion (micro-interactions au scroll)
- Lucide (icônes)

## Setup

```bash
npm install
npm run dev
```

Ouvre <http://localhost:3000>.

> Sur cet environnement, le fetch des polices Google (`next/font/google`) au build passe par le proxy
> réseau : lancer `NODE_USE_ENV_PROXY=1 npm run build` si le build ne récupère pas les polices.

## Pages

| Route                       | Contenu                                              |
| ---------------------------- | ----------------------------------------------------- |
| `/`                          | Accueil — hero, réassurance, secteurs, chiffres clés, témoignages, devis rapide |
| `/services/btp-chantiers`    | Secteur BTP & chantiers                              |
| `/services/evenementiel`     | Secteur événementiel                                 |
| `/services/gardiennage`      | Sécurité privée & gardiennage                        |
| `/a-propos`                  | Histoire, valeurs, encadrement, conformité Livre VI  |
| `/contact`                   | Formulaire de devis, coordonnées, zone d'intervention |
| `/mentions-legales`          | Mentions légales                                     |

## Design tokens

Définis dans `tailwind.config.ts` (couleurs `ink`/`bone`/`amber`, typographies `display`/`body`, échelle de
titres `hero`/`display-1..3`) et dans `app/globals.css` (utilitaires `container-elvez`, `glass-panel`, `bg-noise`).

## Composants

- `components/Hero.tsx`, `components/layout/PageHero.tsx` — bannières
- `components/ServiceCard.tsx`, `components/TrustBadge.tsx`, `components/UseCaseCard.tsx`
- `components/TestimonialCarousel.tsx`, `components/StatsCounter.tsx`
- `components/QuoteForm.tsx` — formulaire de devis pré-qualifié par type de prestation
- `components/StickyCTA.tsx` — CTA unique "Urgence 24/7" flottant
- `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`
- `components/Reveal.tsx` — wrapper d'apparition au scroll (Framer Motion)

## Contenu

Toutes les données (services, témoignages, villes desservies, chiffres clés, coordonnées) sont centralisées
dans `lib/data.ts`. Le numéro d'agrément CNAPS et les coordonnées sont des placeholders à remplacer par les
informations réelles de l'entreprise avant mise en production.

## Hors scope v1

Backend/CRM pour le formulaire de devis (actuellement simulé côté client), photographies réelles (remplacées
par des dégradés/motifs géométriques), intégration carte interactive tierce.
