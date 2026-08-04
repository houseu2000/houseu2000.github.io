# 侯佳乐 / Jiale Hou — Academic Homepage

Personal academic homepage for Jiale Hou, a Ph.D. candidate in civil engineering at Tsinghua University.

The site is a single-page bilingual (Chinese / English) research portfolio covering structural health monitoring, computer vision, bridge monitoring, education, publications, and honors.

## Local development

Requirements: Node.js `>=22.13.0`

```bash
npm ci
npm run dev
```

Build and validate the site:

```bash
npm run build
npm run export:static
npm test
npm run lint
```

The static GitHub Pages artifact is written to `dist/client/`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds the site and deploys `dist/client/` to GitHub Pages on every push to `main`.

For the cleanest public address, use a personal site repository named `<github-username>.github.io`, then enable GitHub Pages with **GitHub Actions** as the source.

## Content updates

The academic content and publication records live in `app/page.tsx`. Publication titles are kept in their original published language, with verified DOI or source links where available. The Google Scholar profile remains the external source for the complete, continuously updated publication record.
