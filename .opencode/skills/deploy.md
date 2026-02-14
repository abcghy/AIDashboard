# Deploy Skill

## Description
Deploy the AI Dashboard project to GitHub Pages.

## Trigger
User says any of:
- "部署"
- "deploy"
- "发布"
- "上线"
- "push to production"

## Project Info
- **Type**: Astro static site
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Repository**: abcghy/AIDashboard
- **Deploy Target**: GitHub Pages
- **Deploy URL**: https://abcghy.github.io/AIDashboard
- **Git Branch**: master (triggers GitHub Actions)

## Prerequisites
- Node.js project with npm
- Git repository configured
- GitHub Actions workflow at `.github/workflows/deploy.yml`

## Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Commit changes if any**
   ```bash
   git add .
   git commit -m "<appropriate commit message>"
   ```

3. **Push to trigger deployment**
   ```bash
   git push origin master
   ```

4. **GitHub Actions auto-deploy**
   - Workflow file: `.github/workflows/deploy.yml`
   - Pushing to `master` triggers automatic build and deploy to `gh-pages` branch
   - Deployment typically takes 1-2 minutes

## Notes
- No manual upload needed; GitHub Actions handles everything
- Site will be live at https://abcghy.github.io/AIDashboard after deployment completes
- Check deployment status at: https://github.com/abcghy/AIDashboard/actions
