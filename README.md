# Kloob — Web (v0.1)

Frontend Next.js 14 du cercle privé d'entraide Kloob. Design system Apple-grade : SF Pro, navy `#0A1F44`, gold de statut `#C9A961`, dark mode dès la v1.

## Stack

- Next.js 14 (App Router) · TypeScript
- Tailwind CSS avec tokens (couleurs, typo, espacements, rayons, élévations)
- Framer Motion (springs)
- Lucide (icônes, stroke 1.5 px — proche de SF Symbols)

## Setup

```bash
npm install
npm run dev
```

Ouvre <http://localhost:3000> — redirige vers `/home`.

## Routes livrées

| Route        | État                                                   |
| ------------ | ------------------------------------------------------ |
| `/home`      | Accueil — score, demande du jour, rituel, top contributeurs, citation |
| `/join`      | Souscription — hero navy, pricing card, sheet paiement |
| `/charter`   | Placeholder (en attente de `kloob_club.md`)            |
| `/feed`, `/services`, `/messages`, `/profile`, `/score`, `/events` | À venir (cf. brief §4) |

## Design tokens

Définis dans `tailwind.config.ts` + variables CSS dans `app/globals.css`. Toggle clair/sombre via `ThemeToggle` (persisté en localStorage).

## Composants

- `components/ui/` : `Avatar`, `Button`, `Badge`, `Card`, `ScoreGauge`, `Sheet`
- `components/shell/` : `Sidebar` (web ≥1024 px), `TabBar` (mobile), `ThemeToggle`

## Structure

```
app/
  layout.tsx              # html + dark mode bootstrap
  page.tsx                # → redirect /home
  (app)/
    layout.tsx            # Sidebar + TabBar
    home/page.tsx
    charter/page.tsx
  join/page.tsx           # hors shell (parcours d'adhésion)
components/
lib/
  utils.ts                # cn, initials, pastel
  mock.ts                 # données de démo
```

## Hors scope v0.1

Mobile natif (Swift / Compose), backend, auth, Stripe réel, realtime — cf. brief §11.
