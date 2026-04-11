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

- `src/components/Header.astro` — navbar with about/cv/publications links; accepts `displayPageName` prop to show/hide the site title. Mobile toggle uses vanilla JS
- `src/components/Footer.astro` — shared footer (dynamic copyright year)

### Styles

- `src/styles/global.css` — all theme styles, imported by `BaseLayout.astro`
- Self-contained CSS with custom reset, grid, navbar, and utility classes (no Bootstrap dependency)
- Color scheme: primary `#bb342f`, text `#060b11`, background `#f4f4f4`, footer `#424242`

### Images

- Stored in `src/assets/img/`
- Use Astro's `<Image>` component for optimization: `import { Image } from "astro:assets";`
- Astro auto-converts to webp and adds width/height attributes

### Static assets

- `public/` directory for files served as-is (favicon.ico, favicon.svg, PDFs)

## Dev commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build
