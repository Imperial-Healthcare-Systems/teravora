# Teravora

Marketing and lead-generation site for **Teravora** — an India-based ESG advisory
specialising in SEBI **BRSR / BRSR-Core** assurance readiness, carbon & climate, and
environmental & social due diligence.

The site's job is to prove what Teravora does and remove friction along the path to a
single primary conversion: **request a proposal**. It pairs a dark, cinematic marketing
surface with a lighter, form-legible workspace for the proposal flow.

## Tech stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript** (strict)
- **CSS Modules + a layered design-token system** (`src/app/tokens.css`) — no Tailwind
- Self-hosted **Archivo** (display) + **Source Sans 3** (body) via `next/font`
- Fully static: every route prerenders at build time

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (typecheck + static generation)
npm run start    # serve the production build
```

## Design system

Tokens live in [`src/app/tokens.css`](src/app/tokens.css) as three cascading layers —
`ref` (raw palette + scale) → `sys` (semantic roles) → `cmp` (per-component). Consumers
read `sys`/`cmp` only; `ref` is the single edit surface.

The palette holds four brand roles: **navy** (ground), **teal** (connective / links &
data), **green** (result / success), and **gold** (the earned peak — CTAs, kept scarce).
A `[data-surface="dark"]` scope re-points the semantic roles onto the navy ground for the
cinematic marketing pages, so components theme without a rewrite. Motion is gated behind
`prefers-reduced-motion` at the token layer.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/solutions/esg-disclosure-assurance-readiness` | BRSR & assurance readiness |
| `/solutions/carbon-climate` | Carbon & climate |
| `/solutions/environmental-social-due-diligence` | Environmental & social due diligence |
| `/how-we-prove` | Method & standards |
| `/about` | About (brand + lineage) |
| `/start` | Request a proposal (3-step flow) |
| `/learn`, `/why-now`, legal | Supporting content |

## Structure

```
src/
  app/            App Router routes, global styles, design tokens
  components/     Reusable UI (Nav, Footer, Button, form, MethodEngine, …)
  lib/            SEO helpers, structured data, site data
public/           Static assets (brand marks, imagery under /v/<page>/, OG images)
```

Each marketing route renders its approved page body as a self-contained, page-scoped
island (styles scoped under a `.pg-<name>` root; comp tokens bridged to the `--trv-*`
graph) while the global Nav/Footer shell and per-route metadata + JSON-LD are shared.
