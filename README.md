# gilchenzion.github.io

Personal site and blog for Gil Chen-Zion, who leads engineering teams at Tesla and is based in San Francisco. Writing on engineering leadership, management, and navigating a career in software; previously led mission-driven engineering teams in healthtech at Oscar and Thirty Madison. Deployed at [www.gilchen-zion.com](https://www.gilchen-zion.com).

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Development

Requires Node >= 22.12.0.

```sh
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.
