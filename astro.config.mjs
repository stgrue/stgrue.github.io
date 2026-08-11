// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://stgrue.github.io',
    integrations: [mdx()],
    markdown: {
        // Light theme so code blocks sit with the page background rather than against it.
        shikiConfig: {
            theme: 'github-light',
        },
    },
});
