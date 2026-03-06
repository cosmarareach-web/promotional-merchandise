# promotional-merchandise

Exported from Caffeine project: Promotional Merchandise.

## Landing page deployment

This repository includes a GitHub Actions workflow at
`.github/workflows/deploy-pages.yml` that builds `src/frontend` and deploys the
landing page to **GitHub Pages** on pushes to `main` (or manual dispatch).

### One-time setup

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.

### Result

After the workflow runs successfully, the page will be available at:

- `https://<your-github-username>.github.io/promotional-merchandise/`

The Vite config automatically sets the correct base path for GitHub Pages builds.
