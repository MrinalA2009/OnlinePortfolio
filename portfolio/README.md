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

## Deploying to GitHub Pages

### One-time setup (already done)

GitHub Pages source is set to **"GitHub Actions"** in your repo settings.

### How to deploy

Just push to `main` — the workflow runs automatically:

```bash
git add .
git commit -m "your message"
git push origin main
```

Then go to the **Actions** tab on GitHub, wait for the green ✅, and visit:

```
https://mrinala2009.github.io/OnlinePortfolio/
```

### Manual trigger

Actions tab → **Deploy Next.js site to Pages** → **Run workflow**

---

## How it works

```
Push to main
     │
     ▼
GitHub Actions (.github/workflows/nextjs.yml)
  ├── npm ci              (install from portfolio/package-lock.json)
  ├── npm run build       (Next.js static export → portfolio/out/)
  ├── touch .nojekyll     (prevents Jekyll from ignoring _next/ assets)
  └── upload-pages-artifact + deploy-pages
     │
     ▼
https://mrinala2009.github.io/OnlinePortfolio/
```

`next.config.ts` auto-detects `GITHUB_ACTIONS=true` and reads `GITHUB_REPOSITORY` to set `basePath=/OnlinePortfolio` — links and assets work correctly under the subdirectory path.

---

## Local preview of the production build

```bash
cd portfolio
npm run build:gh     # build with GitHub Pages basePath
npm run preview      # serve out/ at localhost:3000
```

Open **http://localhost:3000/OnlinePortfolio/**

---

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Local dev server at localhost:3000 |
| `npm run build` | Build without basePath (local use) |
| `npm run build:gh` | Build with GitHub Pages basePath applied |
| `npm run preview` | Serve `out/` statically |
| `npm run lint` | Run ESLint |

---

## Project structure

```
OnlinePortfolio/
├── .github/workflows/nextjs.yml   ← GitHub Actions CI/CD
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
    ├── next.config.ts              ← output: export, auto basePath
    └── package.json
```
