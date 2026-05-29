# Mrinal Agarwal — Online Portfolio

A cinematic, interactive portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

**Live URL:** https://mrinala2009.github.io/OnlinePortfolio/

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, achievement cards, stat counters |
| `/about` | About Me — bio, timeline, skills, interests |
| `/resume` | Resume — education, extracurriculars, awards, skills |
| `/projects` | Projects — DebateSim, MathSim, AI Safety Research |
| `/contact` | Contact — animated form, social links |

---

## Running Locally

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Navigate into the portfolio directory
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser. Hot-reloading is enabled.

---

## Deploying to GitHub Pages

Deployment is fully automated via GitHub Actions. Every push to `main` triggers a build and deploy.

### One-Time Setup (do this once)

**Step 1 — Push the repo to GitHub**

```bash
# From the root of the repository (OnlinePortfolio/)
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

**Step 2 — Enable GitHub Pages in your repository settings**

1. Go to your repository on GitHub → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

That's it. GitHub Pages is now configured to deploy from the Actions workflow.

**Step 3 — Trigger the first deployment**

The workflow runs automatically on every push to `main`. You can also trigger it manually:

1. Go to **Actions** tab in your GitHub repository
2. Click **Deploy Portfolio to GitHub Pages**
3. Click **Run workflow** → **Run workflow**

After ~2 minutes, your site will be live at:

```
https://mrinala2009.github.io/OnlinePortfolio/
```

---

## How Deployment Works

```
Push to main
     │
     ▼
GitHub Actions: build job
  ├── actions/checkout@v4          — clone the repo
  ├── actions/setup-node@v4        — Node.js 20
  ├── npm ci                       — install dependencies
  ├── npm run build                — Next.js static export → portfolio/out/
  ├── touch out/.nojekyll          — disable Jekyll processing
  └── actions/upload-pages-artifact — upload the out/ directory
     │
     ▼
GitHub Actions: deploy job
  └── actions/deploy-pages@v4      — publish to GitHub Pages
```

The `next.config.ts` automatically detects the GitHub Actions environment and sets the correct `basePath` (`/OnlinePortfolio`) so all assets, links, and routes work correctly under the subdirectory URL.

---

## Local Preview of the Production Build

To preview exactly what GitHub Pages will serve:

```bash
cd portfolio

# Build with the GitHub Pages basePath applied
npm run build:gh

# Serve the static output
npm run preview
```

Then open **http://localhost:3000/OnlinePortfolio/** — this matches the deployed URL structure.

---

## Changing the Repository Name

If you rename your GitHub repo or push to a different account, you only need to update two lines:

**1. `portfolio/package.json`** — update the `build:gh` script:
```json
"build:gh": "GITHUB_ACTIONS=true GITHUB_REPOSITORY=YourUsername/YourRepoName next build"
```

**2. The live URL comment** in `.github/workflows/deploy.yml`:
```
# Deployed URL: https://yourusername.github.io/YourRepoName/
```

The `next.config.ts` reads `GITHUB_REPOSITORY` automatically from the environment — no other changes needed.

---

## Project Structure

```
OnlinePortfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions CI/CD
└── portfolio/                  ← Next.js application root
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx        ← Home
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
    ├── next.config.ts          ← Static export + basePath config
    ├── package.json
    └── tailwind.config.ts
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework, routing, static export |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations and transitions |
| TypeScript | Type safety |
| GitHub Actions | CI/CD pipeline |
| GitHub Pages | Static hosting |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at `localhost:3000` |
| `npm run build` | Build for production (local, no basePath) |
| `npm run build:gh` | Build with GitHub Pages basePath applied |
| `npm run preview` | Serve `out/` directory for local static preview |
| `npm run lint` | Run ESLint |
