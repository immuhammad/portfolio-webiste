# TASKS.md — Portfolio Build Tracker

Tasks execute in order. Each task = one git commit. Never skip ahead.
Run `npm run build` before committing every task.

---

## Progress

| # | Task | Status | Commit |
|---|---|---|---|
| 0 | Bootstrap: git config, CLAUDE.md, TASKS.md | ✅ Done | `chore: bootstrap repo` |
| 1 | Scaffold Astro project | ✅ Done | `task(1): scaffold astro project` |
| 2 | Design tokens, fonts, base layout | ⬜ Pending | — |
| 3 | Content schema + placeholder markdown files | ⬜ Pending | — |
| 4 | Build all section components (wireframe-accurate) | ⬜ Pending | — |
| 5 | Compose index page + section toggles | ⬜ Pending | — |
| 6 | Replace placeholder content with real data | ⬜ Pending | — |
| 7 | Images: slots + graceful fallbacks | ⬜ Pending | — |
| 8 | Netlify setup + first real deploy | ⬜ Pending | — |
| 9 | Custom domain (optional) | ⬜ Pending | — |
| 10 | Final README cleanup | ⬜ Pending | — |

---

## Task Details

### Task 1 — Scaffold Astro project
- `npm create astro@latest . -- --template minimal --typescript strict --no-install`
- `npm install` + `npm install @astrojs/netlify`
- Create `netlify.toml` (build command, publish dir, NODE_VERSION=20)
- Create `astro.config.mjs` (static output + netlify adapter)
- **Must pass:** `npm run build`
- **Commit:** `task(1): scaffold astro project with netlify adapter`

### Task 2 — Design tokens, fonts, base layout
- Google Fonts: Caveat + JetBrains Mono in `Base.astro`
- Global CSS: all design tokens as CSS variables + reset
- Body: paper background, ink text
- **Must pass:** `npm run build`
- **Commit:** `task(2): design tokens, fonts, base layout`

### Task 3 — Content schema + placeholder markdown files
- `src/content/config.ts`: define `projects` and `services` collections
- `src/config.ts`: SITE global config with section toggles
- Create all placeholder `.md` files (mark replaceable content with `<!-- REPLACE -->`)
- **Must pass:** `npm run build`
- **Commit:** `task(3): content schema and placeholder markdown files`

### Task 4 — Build all section components
Build each to match Wireframe #3 exactly:
- `Header.astro` — mono nav + Caveat logo + bottom border
- `Hero.astro` — photo placeholder + H1 Caveat + squiggle SVG + CTA pills
- `Stats.astro` — 3-col grid, Caveat numbers, mono labels
- `NowNext.astro` — NOW box + arrow SVG + NEXT box
- `LearningLog.astro` — contribution graph (GitHub API) + log entries
- `Projects.astro` — tab UI (PHP | AI) + card grid from content collection
- `TechStack.astro` — 3-col grid with tech pills
- `Services.astro` — 3-col grid from content collection, numbered 01/02/03
- `Contact.astro` — 2-col: links + static form
- `Footer.astro` — copyright + tagline
- **Must pass:** `npm run build`
- **Commit:** `task(4): all section components built to wireframe spec`

### Task 5 — Compose index page + section toggles
- Wire all components into `src/pages/index.astro`
- Wrap each section in `{SITE.sections.X && <Section />}`
- Verify section order: Header → Hero → Stats → NowNext → LearningLog → Projects → Stack → Services → Contact → Footer
- **Must pass:** `npm run build`
- **Commit:** `task(5): index page composed, section toggles wired`

### Task 6 — Replace placeholder content with real data
- Update `src/config.ts`: real email + LinkedIn slug (confirm with Ahmad)
- Update all `src/content/projects/*.md`: real titles + descriptions
- Update all `src/content/services/*.md`: confirm copy matches wireframe
- Update Learning Log entries in `LearningLog.astro` (real study sessions)
- **Must pass:** `npm run build`
- **Commit:** `task(6): real content populated, placeholders replaced`

### Task 7 — Images
- Create `public/images/README.txt` with drop instructions
- `Hero.astro`: load `/images/profile.jpg` with fallback to placeholder div
- Project cards: load `/images/project-[slug].jpg` with SVG fallback
- Add placeholder SVGs so build never breaks if images missing
- **Must pass:** `npm run build`
- **Commit:** `task(7): image slots wired with graceful fallbacks`

### Task 8 — Netlify setup + first real deploy
- `git push -u origin main`
- `npm install -g netlify-cli`
- `netlify login` → Ahmad logs in / creates account
- `netlify init` → connect GitHub repo, set build command + publish dir
- `netlify deploy --prod`
- Verify auto-deploy webhook is active (push to main = auto deploy)
- Add live URL to README
- **Commit:** `task(8): netlify configured, site live`

### Task 9 — Custom domain (optional)
- Only if Ahmad provides a domain
- `netlify domains:add yourdomain.com`
- SSL is automatic
- **Commit:** `task(9): custom domain configured`

### Task 10 — Final README cleanup
- Document: local dev, content editing, section toggles, Learning Log, deploy flow, image drops
- **Commit:** `task(10): final readme, handoff complete`

---

## Blockers / Notes

_None yet._

---

## Legend

| Symbol | Meaning |
|---|---|
| ✅ Done | Task complete, committed |
| 🔄 In Progress | Currently being worked on |
| ⬜ Pending | Not started |
| ❌ Blocked | Blocked — see Notes |
