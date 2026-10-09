# joseguzman.dev

Source for my personal site.

## Stack

Astro 7 · static output · deployed on Vercel. The only client-side JavaScript is a few lines that
highlight the current section in the nav; fonts are self-hosted.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
```

Requires Node 24.

## Update GitHub activity

```bash
node scripts/github-contrib.mjs
```

Pulls the contribution calendar with the GitHub CLI (`gh` must be signed in) and writes it to
`src/data/github-contributions.json`. The site reads that file at build time and never calls
GitHub from the browser.

## Structure

```
src/pages/            index and 404
src/components/pv/    page sections: experience trace, role graphs, activity, systems, skills
src/data/             content (experience, highlights, profile) and date helpers
src/styles/           theme tokens
scripts/              data refresh
```
