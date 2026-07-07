# RACO AI Technologies — Concept Website (Minimal)

A faithful Next.js 15 + TypeScript port of the original single-file HTML concept
(`reference/racoai-website concept.html`). Editorial / brutalist marketing site
for RACO AI Technologies — a Bristol × Dhaka AI company.

Six pages, one shared chrome (header / ticker / footer / tooltip), one global
stylesheet ported verbatim from the source HTML.

## Quick start

```bash
npm install        # node >= 18 required
npm run dev        # http://localhost:3000
```

## Scripts

| Script          | Purpose                                   |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack)          |
| `npm run build` | Production build                          |
| `npm run start` | Serve the production build                |
| `npm run lint`  | ESLint (Next core-web-vitals + TypeScript)|

## Project layout

```
src/
├── app/
│   ├── globals.css        # Verbatim port of the original <style> block
│   ├── layout.tsx         # Fonts (next/font), metadata, shared chrome
│   ├── page.tsx           # / (home)
│   ├── products/page.tsx  # /products — Lab & Products
│   ├── research/page.tsx  # /research — Model & agent evaluations
│   ├── services/page.tsx  # /services — The full catalog
│   ├── about/page.tsx     # /about — Company, mission, manifesto
│   ├── careers/page.tsx   # /careers — Open roles
│   └── not-found.tsx      # 404
└── components/
    ├── Header.tsx         # 'use client' — nav active state + burger
    ├── Ticker.tsx         # Server — CSS marquee (rendered ×2 for seamless loop)
    ├── Footer.tsx         # Server
    ├── Tooltip.tsx        # 'use client' — global [data-tip] hover tooltips
    └── ChromeWord.tsx     # Server — animated gradient text helper
reference/
└── racoai-website concept.html   # The original design source-of-truth
```

## Where to read next

- **[AGENTS.md](./AGENTS.md)** — build commands, conventions, and rules for AI
  agents working in this repo.
- **[DESIGN.md](./DESIGN.md)** — the design system: color tokens, typography,
  motion, components.
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** — folder structure, routing map,
  React Server Component boundaries, data flow, deployment.

## Deployment

Vercel is the default target (zero-config). Any static-friendly host that runs
`next build` + `next start` also works.

```bash
npm run build && npm run start   # local production preview
```

## License

© 2026 RACO AI Technologies Ltd. All rights reserved.
