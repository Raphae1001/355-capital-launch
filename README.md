# 355 Capital

Marketing/showcase website for 355 Capital, a venture capital fund. It presents the fund's investment thesis, sourcing approach, risk management framework, track record, and team, plus a gated investor portal for limited partners.

## Tech stack

- **React 18 + TypeScript**, built with **Vite**
- **Tailwind CSS** + **shadcn/ui** (Radix UI primitives)
- **React Router** for client-side routing
- **Framer Motion** for page transitions and scroll animations
- **React Hook Form + Zod** for form handling/validation
- **Recharts** for charts
- **Vitest** + **React Testing Library** for unit tests, **Playwright** for end-to-end tests

## Project structure

```
src/
  pages/        One component per route (Index, InvestmentProcess, PerformanceAndRisk,
                 People, Insights, Login, NotFound)
  components/    Homepage sections (HeroSection, SourcingSection, RiskSection,
                 InvestmentProcessSection, TrackRecordSection, InvestorsSection),
                 shared layout (Navbar, Footer, PageTransition, AnimatedRoutes,
                 ScrollToTop, ScrollReveal), and small utilities (CountUpNumber,
                 GlassCard, TacticalBackground)
  components/ui/ shadcn/ui component library (generated; not all components are
                 used by the site — only import what you need)
  lib/           navigation config and the `cn()` class-merging helper
  hooks/         shared hooks (use-mobile, use-toast)
  test/          Vitest setup and example test
e2e/             Playwright end-to-end tests
public/          static assets (favicons, app icons, images)
```

Routing lives in `src/components/AnimatedRoutes.tsx`. A few legacy paths (`/strategy`, `/team`) redirect to their current equivalents (`/investment-process`, `/people`).

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:8080` (see `vite.config.ts` / `playwright.config.ts`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run build:dev` | Development-mode build (unminified, useful for debugging) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests once (Vitest) |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:e2e` | Run end-to-end tests (Playwright); this starts the dev server automatically |

## Deployment

Deployed on [Vercel](https://vercel.com). `vercel.json` configures cache headers for static assets, redirects for touch-icon requests, and an SPA rewrite so all non-asset routes fall through to `index.html`.

## Investor portal

`/login` (the "Investor Portal") is currently a **static UI mockup only**. The form does not call any backend, there is no authentication, session handling, or access control — submitting it does nothing. It exists purely to show the intended flow and would need a real auth backend before going live.
