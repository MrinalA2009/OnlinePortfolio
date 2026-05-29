import type { NextConfig } from "next";

// Auto-detect the repo name when running in GitHub Actions.
// GITHUB_REPOSITORY is set automatically to "owner/repo-name".
// Locally, basePath is empty so dev and local builds work as normal.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = process.env.GITHUB_ACTIONS && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",       // Emit fully-static HTML/CSS/JS to ./out
  trailingSlash: true,    // /about → /about/index.html — required for GitHub Pages
  basePath,               // Empty locally; /<repo-name> on GitHub Actions
  images: {
    unoptimized: true,    // Static export cannot use Next.js Image Optimization server
  },
};

export default nextConfig;
