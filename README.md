# 侯佳乐 / Jiale Hou — Academic Homepage

Personal academic homepage for Jiale Hou, a Ph.D. candidate in civil engineering at Tsinghua University.

The site is a bilingual (Chinese / English) online CV with education, research, work experience, publications, honors and activities. Each research project has a dedicated detail page.

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

CV content lives in `app/resume-data.ts` and `app/research-projects.json`; publication records remain in `app/site-data.ts`. Publication titles retain their published language. Google Scholar links to the full author profile.

Legacy root `index.html` and `404.html` build artifacts have been removed because they shadow the application routes during local development. Publish only the generated `dist/client/` directory through the existing GitHub Actions workflow.

## Online CV and research pages

The homepage follows the CV's content order while keeping a responsive web layout.
- `app/resume-data.ts`: introduction, education, experience, honors and activities (Chinese / English).
- `app/research-projects.json`: research summaries, stable URL slugs and detail content.
- `app/page.tsx` and `app/globals.css`: homepage presentation.
- `app/site-data.ts`: existing publication archive; original research data is retained for reference.

Each research project has its own `/research/<slug>/` page. Keep the slug stable after publishing. An empty `details` array displays a "coming soon" message. Once content is ready, add blocks to that array (types are defined in `app/research-data.ts`):

```json
[
  { "type": "text", "heading": { "zh": "研究方法", "en": "Methods" }, "body": { "zh": "正文，支持 **加粗**。", "en": "Body with **bold emphasis**." } },
  { "type": "image", "src": "/research/example.jpg", "alt": { "zh": "图片描述", "en": "Image description" }, "caption": { "zh": "图注", "en": "Caption" } },
  { "type": "video", "src": "/research/example.mp4", "caption": { "zh": "实验演示", "en": "Experiment" }, "captionsSrc": "/research/example.zh.vtt", "captionsLanguage": "zh" },
  { "type": "link", "href": "https://doi.org/...", "label": { "zh": "阅读论文", "en": "Read paper" } }
]
```

Put media in `public/research/`; omit optional captions/poster fields when unused. Content in the example is illustrative and is not shown on the site. `npm run export:static` exports the homepage, every research page listed in the JSON file, and a genuine 404 page, so GitHub Pages supports direct links and refreshes. Navigation uses normal links and does not require a server or a SPA fallback.
