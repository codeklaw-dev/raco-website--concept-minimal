# AGENTS.md

Operating guide for AI agents (and humans pairing with them) working in this
repo. Read this before editing anything.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **npm** as the package manager (lockfile: `package-lock.json`)
- Styling: one global stylesheet (`src/app/globals.css`). **No Tailwind, no
  CSS-in-JS, no CSS Modules.** This is deliberate — see "Styling rules" below.
- Fonts via `next/font/google` (Space Grotesk, Inter, Space Mono).

## Commands

```bash
npm install
npm run dev        # dev server on :3000 (Turbopack)
npm run build      # production build — MUST pass before committing
npm run start      # serve the production build
npm run lint       # ESLint — MUST pass before committing
```

## Hard rules

1. **Do not add Tailwind, styled-components, emotion, or CSS Modules.** All
   styling lives in `src/app/globals.css` using the existing class names and
   CSS custom properties. New styles = new rules in that file using the
   existing tokens.
2. **Do not import Google Fonts via `<link>` or `@import`.** Fonts are loaded
   with `next/font` in `src/app/layout.tsx` and exposed as the
   `--font-grotesk` / `--font-inter` / `--font-mono` CSS variables. The
   `:root` font tokens already reference them.
3. **Client components are opt-in.** A file needs `"use client"` **only** if it
   uses hooks (`useState`, `useEffect`, `useRef`), browser APIs, or event
   handlers. Everything else stays a Server Component. Current client
   components: `Header.tsx`, `Tooltip.tsx`. Do not add `"use client"`
   gratuitously.
4. **Keep `data-tip` as a plain string attribute.** The `Tooltip` component
   reads it via `getAttribute("data-tip")` and renders it as HTML (it may
   contain `<b>`, `<br>`). Never pass it through React's `children`.
5. **Internal links use `next/link`'s `<Link>`.** External / `mailto:` / `tel:`
   links use plain `<a>`.
6. **Every page exports a `metadata` object** with at least `title` and
   `description`.
7. **No `<img>`** — there are no raster assets in this project. The logo dot is
   a CSS gradient. If you ever need an image, use `next/image`.

## File map

| Path                              | Responsibility                                              |
| --------------------------------- | ----------------------------------------------------------- |
| `src/app/layout.tsx`              | Fonts, root metadata, renders shared chrome + `<main>`      |
| `src/app/globals.css`             | All styles (verbatim port of the original HTML's `<style>`) |
| `src/app/page.tsx`                | Home route (`/`)                                            |
| `src/app/{products,research,services,about,careers}/page.tsx` | The other five routes           |
| `src/app/not-found.tsx`           | 404                                                         |
| `src/components/Header.tsx`       | Client. Sticky nav, `usePathname` active state, burger menu |
| `src/components/Ticker.tsx`       | Server. Marquee; renders items twice for seamless CSS loop  |
| `src/components/Footer.tsx`       | Server. Site footer                                          |
| `src/components/Tooltip.tsx`      | Client. Global `data-tip` hover tooltip                      |
| `src/components/ChromeWord.tsx`   | Server. `<span className="chrome-word">` helper              |
| `reference/racoai-website concept.html` | The original design — diff against this for fidelity  |

## Adding a new page

1. Create `src/app/<route>/page.tsx`.
2. Export a `metadata` object.
3. Return JSX sections using the existing class names (`.wrap`, `.section-pad`,
   `.section-head`, `.eyebrow`, `.stack-grid`, etc.). If you need a new layout,
   add the CSS to `globals.css` next to its siblings.
4. Add the route to `NAV_ITEMS` and `ACTIVE` in `src/components/Header.tsx`.
5. Link to it from the footer in `src/components/Footer.tsx` if it's top-level.

## Editing copy

Copy lives inline in each `page.tsx`. There is no CMS and no content layer.
Search the page file and edit directly. Preserve the apostrophe escaping
(`&apos;` in JSX text for `'`).

## Verification checklist before committing

```bash
npm run lint && npm run build
```

Then load each route in the browser and confirm nav active state, the ticker
animation, hover tooltips on `/research`, the burger menu under 960px, and
`prefers-reduced-motion` (chrome-word + ticker should stop animating).

## Do / Don't

- **Do** keep the editorial / hairline-border aesthetic. Monochrome with gold
  (`--gold`) accents; restrained use of `--ember` and `--forest`.
- **Do** preserve the `01`, `02`, … eyebrow numbering and the `XXX-NN` codes
  (`COST-01`, `MDL-02`, `L-08`, etc.) — they're part of the brand voice.
- **Don't** introduce component libraries (MUI, shadcn, Radix). Build with the
  existing primitives.
- **Don't** "modernize" the CSS into Tailwind without an explicit instruction.
  The verbatim port is the point.
- **Don't** commit `next-env.d.ts`, `.next/`, or `node_modules/` (already in
  `.gitignore`).
