# Personal Website (stgrue.net)

Astro-based personal/academic website, migrated from Jekyll (al-folio theme).

## Project conventions

### Layout

All pages use `src/layouts/BaseLayout.astro`, which handles:
- `<head>` with meta tags
- `<Header>` and `<Footer>` components
- Global CSS import (no external CSS/JS dependencies)

Pages just import the layout and provide content via the default `<slot />`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout>
  <div class="container mt-5">
    <!-- Page content here -->
  </div>
</BaseLayout>
```

### Components

- `src/components/Header.astro` — navbar with about/cv/publications/blog links; accepts `displayPageName` prop to show/hide the site title. Mobile toggle uses vanilla JS
- `src/components/Footer.astro` — shared footer (dynamic copyright year)
- `src/components/viz/` — interactive visualizations for blog posts (see below)

### Styles

- `src/styles/global.css` — all theme styles, imported by `BaseLayout.astro`
- `src/styles/post.css` — blog post prose styles and the figure break-out grid, imported by `PostLayout.astro` (kept separate because Astro's scoped styles don't reach Markdown-generated HTML)
- Self-contained CSS with custom reset, grid, navbar, and utility classes (no Bootstrap dependency)
- Color scheme: primary `#bb342f`, text `#060b11`, background `#f4f4f4`, footer `#424242`

### Images

- Stored in `src/assets/img/`
- Use Astro's `<Image>` component for optimization: `import { Image } from "astro:assets";`
- Astro auto-converts to webp and adds width/height attributes

### Static assets

- `public/` directory for files served as-is (favicon.ico, favicon.svg, PDFs)

## Blog

Posts live in `src/content/blog/`, defined as an Astro content collection in
`src/content.config.ts`. The filename becomes the slug, so
`square-waves-from-circles.mdx` is served at `/blog/square-waves-from-circles/`.
The index at `/blog/` groups posts by year, newest first.

### Frontmatter

All four fields are required and validated at build time — a post missing one
(or with an empty `tags` array) fails `npm run build` with an error naming the
file, rather than being published incomplete.

```yaml
---
title: "Square waves from circles"
date: 2025-12-14
description: "One line, shown under the title on the index and used as the page's meta description."
tags: ["mathematics", "visualization"]
---
```

There are no tag listing pages yet; `tags` is required so the data exists when
they're added.

### `.md` vs `.mdx`

Both live in the same collection. Use `.md` for ordinary prose. Use `.mdx` when
the post embeds a visualization — MDX is a superset of Markdown that can import
and render components:

```mdx
import FourierSquareWave from "../../components/viz/FourierSquareWave.astro";

<FourierSquareWave class="wide" />
```

Two MDX-only gotchas: `{` is meaningful and needs escaping as `\{` outside code
blocks, and a component tag needs a blank line above and below to be treated as
its own block.

### Layout widths

Post prose sits at 680px / 18px — roughly 72 characters per line. Figures can
break out of it via a class on a **direct child** of `.post-body`:

| Class | Width |
| --- | --- |
| *(none)* | 680px, the prose column |
| `wide` | up to 1040px |
| `full-bleed` | the full window width |

The grid is defined in `src/styles/post.css`. A visualization component must
render a **single root element** carrying the class — only direct children of
`.post-body` are matched, so an extra wrapper silently disables the break-out.

### Visualizations

Components in `src/components/viz/`, written as `.astro` files with plain
`<canvas>` and vanilla JS — no UI framework. `FourierSquareWave.astro` is a
working template covering the conventions that matter: initialising every
instance on the page (Astro bundles each component's script once, even when the
component is used twice), backing the canvas at `devicePixelRatio`, pausing the
animation off-screen, and honouring `prefers-reduced-motion`.

## Dev commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build
