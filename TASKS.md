# TASKS.md — Portfolio Build Tracker

Tasks execute in order. Each task = one git commit. Never skip ahead.
Run `npm run build` before committing every task.

---

## Progress

| # | Task | Status | Commit |
|---|---|---|---|
| 0 | Bootstrap: git config, CLAUDE.md, TASKS.md | ✅ Done | `chore: bootstrap repo` |
| 1 | Scaffold Astro project | ✅ Done | `task(1): scaffold astro project` |
| 2 | Design tokens, fonts, base layout | ✅ Done | `task(2): design tokens, fonts, base layout` |
| 3 | Content schema + placeholder markdown files | ✅ Done | `task(3): content schema and placeholder markdown files` |
| 4 | Build all section components (wireframe-accurate) | ✅ Done | `task(4): all section components built to wireframe spec` |
| 5 | Compose index + section toggles + polish | ✅ Done | `task(5): index composed, smooth scroll, card hover polish` |
| 6 | Replace placeholder content with real data | ✅ Done | `task(6): real content, certs, AI projects, stack pills` |
| 7 | Images: profile photo + project screenshots + fallbacks | ✅ Done | `task(7): profile PNG, screenshots, Microlink fallback` |
| 8 | Mobile improvements | ✅ Done | `task(8): mobile layout improvements` |
| 9 | Polish pass (scroll offset, nav fixes, cert colors) | ✅ Done | `fix: scroll offset, no-hash nav, resume on mobile, cert stat colors` |
| 10 | Image compression + Netlify deploy | ⬜ Pending | — |
| 11 | Custom domain (optional) | ⬜ Pending | — |
| 12 | Final README cleanup | ⬜ Pending | — |

---

## Pending Tasks

### Task 10 — Image compression + Netlify deploy

**Image compression (do first — screenshots are currently ~1–3 MB each):**
- `npm install --save-dev sharp` or use `squoosh-cli`
- Compress `public/images/screenshots/*.jpg` → target ≤200 KB each
- Compress/convert `public/images/profile-nobg.png` → WebP if possible
- Verify images still load after compression (`npm run build`)

**Netlify deploy:**
- `git push -u origin main` (confirm GitHub remote is set: `git remote -v`)
- `npm install -g netlify-cli`
- `netlify login` → Ahmad logs in / creates account
- `netlify init` → connect GitHub repo, build command = `npm run build`, publish dir = `dist`
- `netlify deploy --prod`
- Verify auto-deploy webhook is active (push to main = auto deploy)
- Verify Netlify Forms dashboard shows the contact form receiving submissions
- Add live URL to README

**Commit:** `task(10): images compressed, netlify configured, site live`

---

### Task 11 — Custom domain (optional)

Only if Ahmad provides a domain name.
- `netlify domains:add yourdomain.com`
- SSL is automatic via Let's Encrypt
- Update `SITE.url` in `src/config.ts`

**Commit:** `task(11): custom domain configured`

---

### Task 12 — Final README cleanup

- Document: local dev setup, content editing guide, section toggles, deploy flow, image drop instructions
- Note the Learning Log is hidden (`learningLog: false` in `src/config.ts`) — enable when real study session data exists

**Commit:** `task(12): final readme, handoff complete`

---

## Deferred / Known Items

| Item | Notes |
|---|---|
| **Resume PDF** | Placeholder at `public/resume/Muhammad_Ahmad_Anwar_Resume.pdf` — Ahmad drops real PDF here |
| **Learning Log** | Hidden via `SITE.sections.learningLog: false` — enable once real study sessions exist |
| **GitHub Contributions graph** | Currently not shown (LearningLog hidden) — re-evaluate when section re-enabled |
| **Product Intelligence project** | AI tab, status `thinking` — Ahmad still deciding direction |

---

## Legend

| Symbol | Meaning |
|---|---|
| ✅ Done | Task complete, committed |
| 🔄 In Progress | Currently being worked on |
| ⬜ Pending | Not started |
| ❌ Blocked | Blocked — see Notes |
