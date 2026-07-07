# DESIGN.md

The visual language of the RACO AI Technologies concept site. This is a faithful
port of `reference/racoai-website concept.html` — every token, scale, and motion
below is encoded in `src/app/globals.css`.

## Aesthetic in one line

Editorial / brutalist: monochrome on warm paper, hairline borders, monospace
eyebrows, restrained gold accents, one animated "chrome sheen" running through
the headlines.

## Color tokens

All colors are CSS custom properties on `:root`. **Use the variables**, never
raw hex, so the system stays themable.

| Token       | Hex       | Use                                               |
| ----------- | --------- | ------------------------------------------------- |
| `--paper`   | `#F7F7F4` | Page background (warm off-white)                  |
| `--white`   | `#FFFFFF` | Card / panel surfaces                             |
| `--ink`     | `#0B0B0B` | Primary text, buttons, lines (near-black)         |
| `--line`    | `#111111` | Hairline borders (`--hair: 1px solid var(--line)`) |
| `--muted`   | `#6B6B6B` | Secondary text, eyebrows, captions                |
| `--gold`    | `#C8A45D` | Primary accent — bullets, tooltip bold, flags     |
| `--ember`   | `#D86F45` | Warning / "cost" eyebrows, placeholder-note text  |
| `--forest`  | `#29443A` | Positive / "online" status, role labels           |
| `--chrome`  | `#D8D8D8` | Mid-grey for bar-chart "frontier"/"baseline" bars |

Auxiliary hairline greys (defined inline): `#e3e3df`, `#e7e7e3`, `#dededa`,
`#e7e7e3` — used for inner dividers inside cards/grids.

## Typography

Three families, loaded with `next/font/google` in `src/app/layout.tsx` and
exposed as CSS variables:

| Token      | Family         | Weights   | Role                                   |
| ---------- | -------------- | --------- | -------------------------------------- |
| `--disp`   | Space Grotesk  | 400–600   | Headlines, stat values, logo           |
| `--body`   | Inter          | 400–600   | Body copy, leads, descriptions         |
| `--mono`   | Space Mono     | 400, 700  | Eyebrows, codes, labels, nav, ticker   |

Base: `font-family: var(--body); font-size: 16px; line-height: 1.6;`.

### Type scale (fluid via `clamp()`)

| Element | Size                                                       |
| ------- | ---------------------------------------------------------- |
| `h1`    | `clamp(2.6rem, 6.5vw, 5.4rem)` — `letter-spacing: -.03em`  |
| `h2`    | `clamp(1.9rem, 4vw, 3.2rem)`                                |
| `h3`    | `clamp(1.15rem, 2vw, 1.45rem)` — `letter-spacing: -.015em` |
| `.lead` | `clamp(1.05rem, 1.6vw, 1.25rem)` — `color: var(--muted)`   |
| `.eyebrow` | mono 11px, `.18em` tracking, UPPERCASE                  |

Headlines share `font-family: var(--disp); font-weight: 500; line-height: 1.04`.

### The eyebrow

```html
<p class="eyebrow"><span class="idx">01</span> The hidden tax</p>
```

A 24px hairline rule is generated via `::before`; the `.idx` index inherits ink
color while the rest is muted. The `01`, `02`, … numbering and the `XXX-NN`
codes (`COST-01`, `MDL-02`, `L-08`, `ART-07`, …) are part of the brand voice —
preserve them.

## Layout primitives

- **`.wrap`** — 1240px max content column, 24px gutters. Every section's
  content sits inside one.
- **`.section-pad`** — `padding: 88px 0`. The vertical rhythm between sections.
- **`.section-head`** — column-flexed eyebrow + h2 + lead, 56px bottom margin.
- **Hairline borders** everywhere: `section { border-bottom: var(--hair); }` and
  most grids are built from bordered cells (`.line-cell`, `.stack-cell`,
  `.research`, `.sector`, `.principle`, `.engage`, `.stat`, `.tile`).

### Grid components (all use the same hairline-grid pattern)

| Class          | Columns | Used on                       |
| -------------- | ------- | ----------------------------- |
| `.lines-grid`  | 4       | Home — business lines         |
| `.stack-grid`  | 3 (or 5 with `.five`) | Home/Products — proof, models |
| `.layer-stack` | single column, 3-col rows | Operating layer         |
| `.research-grid` | 3     | Home pain points, applied R&D |
| `.sector-grid` | 5       | Home — industries             |
| `.principles`  | 2       | Methodology, why-RACO         |
| `.stat-band`   | 3       | About stats                   |
| `.tile-band`   | 4       | Home "what changes", research |
| `.hubs`        | 2       | Bristol / Dhaka               |

The pattern: outer container `border: var(--hair)`, each child
`border-right: var(--hair)`, `:last-child { border-right: none }`, plus
`:nth-child(Nn)` rules to clear right/bottom edges on grids. Don't hand-roll
new grids — reuse these.

## Buttons

```html
<a class="btn btn-solid" href="…">Primary CTA</a>
<a class="btn btn-ghost" href="…">Secondary</a>
```

Mono, 12px, `.14em` tracking, UPPERCASE, 15×28 padding, 1px ink border.
`.btn-solid` = ink fill / paper text, inverts on hover. `.btn-ghost` = transparent,
fills with ink on hover. The nav CTA (`.nav-cta`) is a smaller variant.

## Motion

Three motion sources, all CSS:

1. **`.chrome-word`** — a 7s linear gradient "sheen" sweeping across selected
   headline words (`@keyframes sheen`). Use sparingly (one per headline) via the
   `<ChromeWord>` component.
2. **`.ticker-track`** — 46s `translateX(0 → -50%)` marquee. The track is
   rendered **twice** so the `-50%` offset loops seamlessly. Don't remove the
   duplicate render.
3. **Hover transitions** — `transform: translateY(-3px)` on `.vbar`, `r` growth
   on `.linechart .pt`, color inversions on buttons. All `~.15–.18s ease`.

### `prefers-reduced-motion`

Handled globally in `globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  .chrome-word { animation: none; }
  .ticker-track { animation: none !important; }
  * { transition: none !important; }
}
```

When adding motion, make sure it's covered by this block (or add a specific
override). Never ship animation that ignores reduced-motion.

## Charts (`/research`)

All charts are CSS/SVG primitives — **no charting library**.

- **`.vbars` / `.vgroup` / `.vbar`** — vertical grouped bars (APOLO benchmark,
  CASPER WER). Each bar is a flex child with an inline `height: NN%`.
- **`.hbar-row` / `.hbar-track` / `.hbar-fill`** — horizontal bars (RACO-BEAST
  task completion). Fill width via inline `width: NN.N%`.
- **`.linechart`** — an inline `<svg viewBox="0 0 640 250">`. Series as
  `<polyline class="series">`, points as `<circle class="pt">`.

Every data element carries a `data-tip` string (may contain `<b>`/`<br>`) — the
global `Tooltip` client component reads it on hover. See `AGENTS.md` rule 4.

The swatches that pair with charts live in `.legend` and `.sw-*`
(`.sw-apolo`, `.sw-frontier`, `.sw-oss`, `.sw-casper`, `.sw-base`).

## Tooltip

A single fixed element `#tip` rendered once by `<Tooltip />` in the root layout.
Positioned via JS on `mousemove`, edge-flips near the viewport, fades in/out.
Bold text inside a tooltip is gold (`#tip b { color: var(--gold) }`).

## Responsive

One breakpoint: `@media (max-width: 960px)`. Key behaviors:

- All multi-column grids collapse to 1 or 2 columns; cell borders recompute via
  `:nth-child` rules.
- `.nav-links` becomes a dropdown toggled by the `.burger` button (state in
  `Header.tsx`).
- `.prod-row`, `.svc-row`, `.layer`, `.article-row`, `.role-row` reflow to
  single-column stacks.

Keep new layouts working across this breakpoint. If you add a grid, add the
matching `@media (max-width: 960px)` rules.
