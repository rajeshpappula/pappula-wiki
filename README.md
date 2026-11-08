# Pappula Wiki

A responsive, source-led knowledge portal for the Pappula community. Built with
Next.js App Router, React, TypeScript, Tailwind CSS, and local MDX articles.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Wiki content

Article content lives in `content/wiki/*.mdx`; article metadata, navigation,
search terms, table-of-contents links, and source URLs live in `lib/articles.ts`.
Each article is served at `/wiki/<slug>`. Update the metadata and the
corresponding MDX file together when adding or editing an article.

The current articles use the Pappula community website as their primary
reference. Keep claims limited to what sources establish; do not infer family
relationships, dates, biographies, or other historical details.
Only add photographs or other documentary images when they have a verifiable
source and appropriate permission. Captions should distinguish documentary
images from decorative illustrations.

## Checks

```bash
npm run lint
npm run build
```
