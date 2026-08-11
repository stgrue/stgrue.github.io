import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts. Plain prose posts are `.md`; posts embedding an interactive
// visualization are `.mdx`, which lets them import components from
// `src/components/viz/`.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Shown under the title on the blog index, and used as the page's
    // <meta name="description">.
    description: z.string(),
    // Required: a post with no tags fails the build rather than slipping
    // through untagged. There are no tag listing pages yet, but the data
    // will be there when there is.
    tags: z.array(z.string()).min(1, "Every post needs at least one tag."),
  }),
});

export const collections = { blog };
