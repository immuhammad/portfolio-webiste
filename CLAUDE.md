# CLAUDE.md — Muhammad Ahmad Anwar Portfolio

> Read this entire file before touching anything. Execute tasks in order. Commit after every completed task. Do not skip ahead.

---

## Project Summary

Building a personal portfolio for **Muhammad Ahmad Anwar** — MSc AI student and ex-backend PHP/Magento engineer transitioning into AI/Data Engineering. The site positions him as a "polymath" who bridges production PHP engineering and emerging AI/Data Engineering.

- **Live repo:** `git@github.com:immuhammad/portfolio-webiste.git`
- **Deploy target:** Netlify (free tier, static)
- **GitHub handle:** `immuhammad`

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Astro** (static output) |
| Content | **Markdown content collections** (`src/content/`) |
| Contributions | **GitHub Contributions API** (fetched at build time) |
| Adapter | `@astrojs/netlify` |
| TypeScript | Strict mode |

---

## Design Tokens — Wireframe #3 "Polymath: PHP + AI"

```css
--paper:    #fbf8f1   /* warm cream background */
--paper-2:  #f1ece0   /* slightly darker paper */
--ink:      #222018   /* near-black text */
--ink-soft: #6a6558   /* muted labels/meta */
--accent:   #b86348   /* terracotta/rust highlight */
```

**Fonts (Google Fonts):**
- `Caveat` — handwriting, used for display headlines and section titles
- `JetBrains Mono` — monospace, used for nav, meta, labels, code

---

## Section Order

```
Header → Hero → Stats → Now/Next → Learning Log → Projects → Stack → Hire Me → Contact → Footer
```

Each section is its own `.astro` component in `src/components/`.

---

## Rules

- **Commit after every task** — message format: `task(N): description`
- **Update README.md** after every task — what was done + what is next
- **Never skip a task** — if blocked, add a `TODO:` comment and note in README
- **Content goes in markdown files** — never hardcode real content inside `.astro` components
- **One file per section** — keep components small and focused
- **Verify before committing** — run `npm run build` before every commit
- **Never hardcode email/contact** — always pull from `src/config.ts` → `SITE`

---

## Project Structure

```
portfolio-webiste/
├── public/
│   └── images/               ← Ahmad drops real photos here
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── NowNext.astro
│   │   ├── LearningLog.astro
│   │   ├── Projects.astro
│   │   ├── TechStack.astro
│   │   ├── Services.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts         ← Astro content collection schemas
│   │   ├── projects/
│   │   │   ├── magento-module.md
│   │   │   ├── shopify-laravel.md
│   │   │   ├── php-cms.md
│   │   │   └── inventory-api.md
│   │   └── services/
│   │       ├── keep-php-running.md
│   │       ├── add-ai-layers.md
│   │       └── data-plumbing.md
│   ├── layouts/
│   │   └── Base.astro        ← wraps all pages, loads fonts + CSS
│   ├── pages/
│   │   └── index.astro       ← composes all sections
│   └── config.ts             ← SITE global config + section toggles
├── astro.config.mjs
├── netlify.toml
├── CLAUDE.md                 ← this file
├── TASKS.md                  ← task tracker
└── README.md
```

---

## SITE Config Shape (`src/config.ts`)

```ts
export const SITE = {
  name: 'Muhammad Ahmad Anwar',
  tagline: 'Two stacks. One engineer.',
  email: 'ahmad@example.com',    // REPLACE with real email
  github: 'immuhammad',
  linkedin: 'in/immuhammad',     // REPLACE with real slug
  sections: {
    nowNext: true,
    learningLog: true,
    projects: true,
    stack: true,
    services: true,
    contact: true,
  }
}
```

Toggle any section off by setting its key to `false` — it will not render.

---

## Content Collections

### `projects` schema
| Field | Type | Notes |
|---|---|---|
| `title` | string | Project name |
| `tag` | string | Short descriptor (e.g. "Magento 2 Module") |
| `category` | `'php' \| 'ai'` | Controls which tab it appears on |
| `screenshot` | string (optional) | Path under `/images/` |
| `order` | number | Sort order within tab |

### `services` schema
| Field | Type | Notes |
|---|---|---|
| `title` | string | Service name |
| `order` | number | 1–3, controls position |

---

## GitHub Contributions API

Primary endpoint (third-party, open-source):
```
https://github-contributions-api.jogruber.de/v4/immuhammad?y=last
```

**If the API is down at build time:** fall back to a static placeholder 26×7 grid and add a `TODO:` comment in `LearningLog.astro`.

Alternative: GitHub GraphQL API with `GITHUB_TOKEN` env var set in Netlify dashboard.

---

## How to Edit Content

| What to change | Where |
|---|---|
| Personal info, email, LinkedIn | `src/config.ts` |
| Projects | `src/content/projects/*.md` |
| Services copy | `src/content/services/*.md` |
| Learning Log entries | Array in `LearningLog.astro` (Task 6+) |
| Profile photo | `public/images/profile.jpg` |
| Project screenshots | `public/images/project-[slug].jpg` |

---

## Local Development

```bash
npm run dev     # start dev server at localhost:4321
npm run build   # production build to dist/
npm run preview # preview production build locally
```

---

*This file was generated by Claude (claude@anthropic.com) from the project handoff document.*
