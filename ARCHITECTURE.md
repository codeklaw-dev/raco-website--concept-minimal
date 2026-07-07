# ARCHITECTURE.md

How the RACO AI Technologies concept site is structured, routed, and rendered.
For build commands and editing rules see [AGENTS.md](./AGENTS.md); for the
visual system see [DESIGN.md](./DESIGN.md).

## High-level

A static marketing site built on the **Next.js App Router**. There is no
backend, no database, no auth — all content is hardcoded JSX in the page files.
The original artifact was a single HTML file that simulated a multi-page app by
toggling `<main>` visibility on hash changes; this port replaces that with real
file-based routing while preserving the exact look, copy, and interactions.

```
Browser
  └─ Next.js App Router (file-based routing)
       └─ RootLayout (src/app/layout.tsx)
            ├─ <Header/>   'use client' — nav, active state, burger
            ├─ <Ticker/>   server — CSS marquee
            ├─ <main>{children}</main>   ← the routed page
            ├─ <Footer/>   server
            └─ <Tooltip/>  'use client' — global [data-tip] handler
```

## Routing map

The original hash routes became first-class URL paths:

| Original hash | Route        | Page file                              | Page key (active nav) |
| ------------- | ------------ | -------------------------------------- | --------------------- |
| `#home`       | `/`          | `src/app/page.tsx`                     | `home`                |
| `#products`   | `/products`  | `src/app/products/page.tsx`            | `products`            |
| `#research`   | `/research`  | `src/app/research/page.tsx`            | `research`            |
| `#services`   | `/services`  | `src/app/services/page.tsx`            | `services`            |
| `#about`      | `/about`     | `src/app/about/page.tsx`               | `about`               |
| `#careers`    | `/careers`   | `src/app/careers/page.tsx`             | `careers`             |
| —             | any other    | `src/app/not-found.tsx`                | —                     |

The `#contact` anchor on the original home page is preserved as `id="contact"`
on the home page's final CTA section. Cross-page links to it use `/#contact`
(e.g. the header's "Talk to RACO" CTA). Same-page links use `#contact` and rely
on `html { scroll-behavior: smooth }`.

## React Server Component boundaries

The app is Server-Component-first. Only two files are client components, and
only because they need browser APIs:

| Component    | Why client                                              |
| ------------ | ------------------------------------------------------- |
| `Header.tsx` | `usePathname()` for active-nav state; `useState` + click handler for the burger menu |
| `Tooltip.tsx` | `useEffect` to attach delegated `mouseover`/`mousemove`/`mouseout` listeners and imperatively position the `#tip` element |

Everything else (`Ticker`, `Footer`, `ChromeWord`, all six pages, the root
layout) is a Server Component and renders to static HTML. Do not add
`"use client"` elsewhere unless a new component genuinely needs hooks/browser
APIs — see AGENTS.md rule 3.

## Fonts

Loaded once in `src/app/layout.tsx` via `next/font/google` and attached to
`<html>` as CSS variables:

```ts
Space_Grotesk  → --font-grotesk
Inter          → --font-inter
Space_Mono     → --font-mono
```

The `:root` tokens in `globals.css` reference them:

```css
--disp: var(--font-grotesk), system-ui, sans-serif;
--body: var(--font-inter),   system-ui, sans-serif;
--mono: var(--font-mono),    ui-monospace, monospace;
```

This replaces the original `<link>` to Google Fonts — same fonts, no render
blocking, no layout shift, self-hosted by Next at build time. **Never** add a
Google Fonts `<link>` or `@import` (AGENTS.md rule 2).

## Styling strategy

One global stylesheet: `src/app/globals.css`. It is a **verbatim port** of the
original HTML's `<style>` block with exactly two surgical edits:

1. The three `:root` font variables were rewired to the `next/font` variables
   (above).
2. The SPA toggle rules `.page { display: none }` / `.page.visible` were removed
   — file-based routing replaces them.

Everything else — every selector, token, clamp, keyframe, media query — is
byte-for-byte the original. There is **no Tailwind, no CSS-in-JS, no CSS
Modules**. New styles go in `globals.css` using the existing tokens. See
DESIGN.md for the system and AGENTS.md rule 1 for the constraint.

## Interactivity (how the original JS maps to React)

| Original JS behavior                              | This port                                            |
| ------------------------------------------------- | ---------------------------------------------------- |
| `show(page)` toggling `.page.visible` + hash      | Replaced by App Router file-based routing            |
| `data-page` click → `history.replaceState`        | Replaced by `<Link href="/products">` etc.           |
| Burger `classList.toggle('open')` + `aria-expanded` | `Header.tsx` `useState(open)` + `aria-expanded={open}` |
| `track.innerHTML += track.innerHTML` (ticker loop)| `Ticker.tsx` renders the item array **twice** in JSX |
| `#tip` global `mouseover`/`mousemove`/`mouseout`  | `Tooltip.tsx` `useEffect` attaches the same delegated listeners |
| `nav-links a.active` from `data-page`             | `Header.tsx` derives active from `usePathname()` via the `ACTIVE` map |

`prefers-reduced-motion` disables chrome-word, ticker, and all transitions via
the existing `@media` block in `globals.css` — no JS involved.

## Data flow

There is none at runtime. Each page is a static Server Component that returns
JSX. There is no `fetch`, no context, no client-side state shared between pages
(except the ephemeral burger `open` boolean, which is local to `Header`).

Metadata (title/description) is exported per-page via the `metadata` object —
Next.js generates the `<head>` tags at build time.

## Build & deploy

```bash
npm run build   # type-check + lint-on-build + static/edge generation
npm run start   # serve the production build
```

Default deployment target is **Vercel** (zero config). Because everything is
static Server Components, the site can also be exported to any static host if a
future `next.config.ts` opts into `output: 'export'` (not currently enabled).

## Why these choices

- **App Router over Pages Router** — the current Next.js standard; first-class
  layouts let the shared chrome live in exactly one place (`layout.tsx`).
- **Server-Component-first** — six static pages with no interactivity in their
  bodies have no reason to ship JS. Only the two genuinely interactive islands
  (`Header`, `Tooltip`) are client components.
- **Verbatim CSS over a rewrite** — the original `<style>` is the design. A
  Tailwind rewrite would trade fidelity and time for convention we don't need
  here.
- **`next/font` over `<link>`** — same typefaces, better performance, no
  external request, automatic preloading.
