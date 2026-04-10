# Personal Website (stgrue.net)

Astro-based personal/academic website, migrated from Jekyll (al-folio theme).

## Project conventions

### Layout

All pages use `src/layouts/BaseLayout.astro`, which handles:
- `<head>` with meta tags, Bootstrap 4.4.1 CSS, Font Awesome 5.13.0, Academicons 1.8.6
- `<Header>` and `<Footer>` components
- jQuery + Bootstrap JS (with `is:inline`)
- Global CSS import

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

### External scripts in Astro

Astro strips `<script>` tags by default. Use `is:inline` to keep them as-is (needed for jQuery/Bootstrap CDN scripts).

### Components

- `src/components/Header.astro` — navbar with about/cv/publications links; accepts `displayPageName` prop to show/hide the site title
- `src/components/Footer.astro` — shared footer (dynamic copyright year)

### Styles

- `src/styles/global.css` — all theme styles, imported by `BaseLayout.astro`
- Relies on Bootstrap 4.4.1 classes (grid, navbar, table, utility classes)
- CSS uses al-folio's color scheme: primary `#bb342f`, text `#060b11`, background `#f4f4f4`, footer `#424242`

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
