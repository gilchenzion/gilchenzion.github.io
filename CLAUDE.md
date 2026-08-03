# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal blog/site for Gil Chen-Zion, built with Astro and deployed to GitHub Pages at https://www.gilchen-zion.com. The site was migrated from Jekyll to Astro (see commit "Migrate site from Jekyll to Astro"); layouts and class names in `src/styles/global.css` still follow the original Jekyll/Minima theme conventions.

## Commands

- `npm run dev` / `npm start` — start the Astro dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

There is no test suite, linter, or type-check script configured. `tsconfig.json` only extends `astro/tsconfigs/base` (no `astro check` script wired up).

Requires Node >= 22.12.0 (see `engines` in `package.json`); the Astro 7 dependency requires Node 22+.

## Architecture

- **Content collections**: Blog posts are Markdown files in `src/content/blog/*.md`, loaded via the `glob` loader and validated against a Zod schema defined in `src/content.config.ts` (`title`, `date`, optional `categories`, `author`, `meta`). Adding a post means dropping a new `.md` file with matching frontmatter into that directory — no other registration is needed.
- **Routing**: File-based routing under `src/pages/`.
  - `index.astro` lists all posts (sorted by date desc).
  - `blog/[...slug].astro` is a dynamic route rendering each blog post via `getStaticPaths()` + `getCollection("blog")`; the post `id` (derived from filename) becomes the URL slug at `/blog/<id>/`.
  - `feed.xml.js` generates the RSS feed from the same collection using `@astrojs/rss`.
  - `about.astro` and `404.astro` are static pages.
- **Layouts**: `src/layouts/Layout.astro` is the base HTML shell (head, Header, Footer, GoogleAnalytics, global CSS). `src/layouts/BlogPost.astro` wraps `Layout` and adds post header/meta formatting for individual posts.
- **Site metadata**: All site-wide constants (title, description, canonical URL, social/analytics handles) live in `src/site.config.ts` and are imported wherever needed — update this file rather than hardcoding values in components.
- **Sitemap**: generated automatically via the `@astrojs/sitemap` integration configured in `astro.config.mjs`, which also sets the canonical `site` URL used for RSS/sitemap/canonical links.
- **Styling**: Single global stylesheet at `src/styles/global.css`, imported once in `Layout.astro`. No CSS-in-JS or scoped component styles are used elsewhere.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `master` (`npm ci && npm run build`, then `actions/deploy-pages`). The production branch is `master`, not `main`.
