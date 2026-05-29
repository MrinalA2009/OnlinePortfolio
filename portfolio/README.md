# Mrinal Agarwal — Online Portfolio

Cinematic portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

**Live URL:** https://mrinala2009.github.io/OnlinePortfolio/

---

## Running Locally

```bash
cd portfolio
npm install
npm run dev
```

Open **http://localhost:3000**

---

## Deploy to GitHub Pages — Complete Guide

### How it works

Every push to `main` runs a GitHub Actions workflow that:
1. Builds the site as a static export (`out/` directory)
2. Pushes the output to the `gh-pages` branch
3. GitHub Pages serves the `gh-pages` branch publicly

---

### Step-by-step deployment

**Step 1 — Push the code to GitHub**

```bash
# From the repo root (OnlinePortfolio/)
git add .
git commit -m "Deploy portfolio"
git push origin main
```

**Step 2 — Wait for the workflow to run (~2 minutes)**

Go to your repo on GitHub → **Actions** tab.
You should see "Deploy Portfolio to GitHub Pages" running.
Wait for it to show a green checkmark ✅.

This creates a `gh-pages` branch in your repo automatically.

**Step 3 — Enable GitHub Pages (one time only)**

1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **"Build and deployment"**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `gh-pages` → `/ (root)`
3. Click **Save**

Wait ~1 minute. Your site will be live at:

```
https://mrinala2009.github.io/OnlinePortfolio/
```

---

### Re-deploying

After the initial setup, every `git push origin main` automatically rebuilds and deploys. No manual steps needed.

---

## Changing the repository name

If you rename your repo, update `package.json` → `build:gh` script:

```json
"build:gh": "GITHUB_ACTIONS=true GITHUB_REPOSITORY=MrinalA2009/NewRepoName next build"
```

The `next.config.ts` auto-reads `GITHUB_REPOSITORY` from the Actions environment to set the correct basePath — no other changes needed.

---

## Local preview of production build

```bash
cd portfolio

# Build with GitHub Pages basePath applied
npm run build:gh

# Serve the static output
npm run preview
```

Open **http://localhost:3000/OnlinePortfolio/**

---

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Local dev server at localhost:3000 |
| `npm run build` | Production build (no basePath, for local use) |
| `npm run build:gh` | Production build with GitHub Pages basePath |
| `npm run preview` | Serve `out/` statically for local preview |
| `npm run lint` | Run ESLint |

---

## Project structure

```
OnlinePortfolio/
├── .github/workflows/deploy.yml   ← GitHub Actions CI/CD
└── portfolio/                     ← Next.js app
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx            ← Home
    │   │   ├── about/page.tsx
    │   │   ├── resume/page.tsx
    │   │   ├── projects/page.tsx
    │   │   └── contact/page.tsx
    │   └── components/
    │       ├── Navbar.tsx
    │       ├── Footer.tsx
    │       ├── AnimatedSection.tsx
    │       ├── ParticleBackground.tsx
    │       ├── StatCounter.tsx
    │       └── CursorGlow.tsx
    ├── next.config.ts              ← Static export + basePath config
    └── package.json
```

---

## Tech stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework, routing, static export |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations and transitions |
| TypeScript | Type safety |
| GitHub Actions | CI/CD pipeline |
| GitHub Pages | Static hosting (gh-pages branch) |
