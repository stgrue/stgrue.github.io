---
title: "How this blog works"
date: 2026-08-11
description: "A reference for my future self: frontmatter, file formats, and how to make a figure wider than the text."
tags: ["meta"]
---

This post is mostly a note to myself about how to add to this thing, written
while the details are still fresh. It doubles as a test of every bit of
formatting the stylesheet knows about.

## Adding a post

Drop a file in `src/content/blog/`. The filename becomes the URL, so
`how-this-blog-works.md` lands at `/blog/how-this-blog-works/`. Every post
needs four pieces of frontmatter:

```yaml
---
title: "How this blog works"
date: 2026-08-11
description: "One line, shown under the title on the index page."
tags: ["meta"]
---
```

All four are validated when the site builds. Leave one out — or write `tags: []` —
and the build stops with an error naming the offending file, rather than quietly
publishing something half-finished. `description` does double duty as the page's
meta description.

## The two file formats

A post is either `.md` or `.mdx`:

| Extension | Use it for | Can embed components |
| --- | --- | --- |
| `.md` | Ordinary prose posts | No |
| `.mdx` | Posts with a visualization | Yes |

`.mdx` is plain Markdown plus the ability to `import` a component and drop it
into the text. Since it's a superset, renaming a `.md` file to `.mdx` never
changes how it renders. Only two things behave differently: `{` becomes
meaningful and needs escaping as `\{` outside of code blocks, and a component
tag needs a blank line above and below it to be treated as its own block.

## Making things wider than the text

The text column is 680 pixels, which works out to roughly 75 characters per
line — the range where reading is comfortable. The empty space either side is
doing a job, so it stays.

Figures don't have to respect it. Any direct child of the post body can opt out
by taking a class:

- `wide` — about 1040 pixels, spilling past the text on both sides
- `full-bleed` — the entire width of the window

There's one rule to remember when writing a visualization: **it has to render a
single root element carrying that class.** Wrap the thing in an extra `<div>`
and the width class stops applying, because only direct children of the post
body are matched.

> The layout uses a CSS grid with named columns rather than the more common
> trick of `width: 100vw` and negative margins. That trick has a nasty edge:
> `100vw` includes the vertical scrollbar, so a full-bleed element ends up a
> scrollbar's width too wide and the whole page scrolls sideways.

## Everything else

Inline code like `getCollection("blog")` renders in a tinted box, and fenced
blocks get syntax highlighting:

```ts
const posts = (await getCollection("blog")).sort(
  (a, b) => b.data.date.getTime() - a.data.date.getTime()
);
```

Links are underlined inside posts — the site's usual colour-only treatment is
too easy to miss in a wall of text. Lists, tables, blockquotes and horizontal
rules all behave. That's the whole system.
