# Hitesh Thakur — Portfolio

Personal portfolio of Hitesh Thakur, full-stack developer at Xansr Media who also designs.
It showcases web apps, UI/UX case studies, games and 2D art.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS 3** + CSS Modules
- **GSAP** (ScrollTrigger, CustomEase) and **Framer Motion** for animation, **Lenis** for smooth scrolling
- **three.js** via React Three Fiber, drei and Rapier for the 3D lanyard card on the home page
- **Vercel Analytics** and **Speed Insights**

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # ESLint (flat config, eslint-config-next)
```

Use npm; `package-lock.json` is the only lockfile.

## Where things live

| What | Where |
|---|---|
| Projects on `/work` | `src/data/projects.ts` (newest first) |
| Home page "Work of Art" grid | `src/components/WorkArt/Work.tsx` |
| Case-study pages | `src/app/work/<slug>/page.tsx` |
| Games on `/games` | `src/data/gameProjects.ts` |
| 2D art on `/2d-gallery` | `src/utils/imageLoader.ts` |
| About copy | `src/components/About/About.tsx` |
| Skills grid | `src/components/Why/Why.tsx` |
| Site title / description | `src/app/layout.tsx` |

Projects without a public live link or repository simply omit `liveUrl` / `githubUrl`;
the card then shows no link or GitHub button.

## Adding images

Images are served through `next/image`, which caches optimized copies for 31 days
(`images.minimumCacheTTL` in `next.config.ts`).

- Export real AVIF or WebP (not a renamed PNG) and keep them at most **2560px wide**.
  Very large sources make the optimizer slow and, above 16,383px, it gives up and serves the original file.
- When replacing an image, **give it a new filename** so the old cached version isn't served.
- Give every `<Image>` a `sizes` prop that matches its layout width, and `priority` only for the
  first above-the-fold image on a page.
- Avoid spaces in filenames.

To re-encode a screenshot with the `sharp` copy that ships with Next.js:

```bash
node -e 'require("sharp")("in.png").resize({width:2560,withoutEnlargement:true}).avif({quality:62,chromaSubsampling:"4:4:4"}).toFile("public/projects/Name.avif")'
```

## Performance notes

- The 3D card (three.js + Rapier WASM) is loaded with `next/dynamic` after first paint and pauses
  rendering while off-screen. Keep it out of shared components so it isn't bundled into other routes.
- Videos on `/work` use `LazyVideo`, which only downloads and plays them near the viewport.
- The body font is a Latin-subset variable WOFF2 (`public/fonts/RedditSans.woff2`), preloaded in the root layout.
