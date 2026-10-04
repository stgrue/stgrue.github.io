import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Fragments: short, half-formed pieces of writing. They are deliberately left
// out of the main navigation; /fragments/ is reachable only by direct link.
const fragments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fragments" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Optional: used as the page's <meta name="description"> when present.
    description: z.string().optional(),
  }),
});

export const collections = { fragments };
