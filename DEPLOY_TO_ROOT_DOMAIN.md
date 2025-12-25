# Deploy to Root Domain: arsukhadiya.github.io

This guide will help you deploy your portfolio to `https://arsukhadiya.github.io/` (without the repository name).

## Step 1: Create New Repository on GitHub

1. **Go to GitHub and create a new repository:**
   - Visit: `https://github.com/new`
   - **Repository name**: `arsukhadiya.github.io` (MUST match your username exactly)
   - **Description**: (optional) "My Portfolio Website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
   - Click **Create repository**

## Step 2: Add the New Remote

After creating the repository, add it as a remote:

```bash
# Add the new repository as a remote named 'pages'
git remote add pages https://github.com/ARSukhadiya/arsukhadiya.github.io.git

# Verify remotes
git remote -v
```

You should see:
- `origin` → points to `abhishek-sukhadiya`
- `pages` → points to `arsukhadiya.github.io`

## Step 3: Push Code to New Repository

```bash
# Push the gh-pages branch to the new repo's main branch
git push pages gh-pages:main --force
```

This will push all your code to the new repository.

## Step 4: Enable GitHub Pages

1. **Go to the new repository:**
   ```
   https://github.com/ARSukhadiya/arsukhadiya.github.io
   ```

2. **Navigate to Settings:**
   - Click **Settings** tab

3. **Enable GitHub Pages:**
   - Scroll to **Pages** in the left sidebar
   - Under **Source**, select:
     - **Source**: `GitHub Actions` (if workflow exists) or `Deploy from a branch`
     - If using branch: `main` branch, `/ (root)` folder
   - Click **Save**

## Step 5: Wait for Deployment

- Wait 2-5 minutes for GitHub Pages to build and deploy
- Your site will be live at: `https://arsukhadiya.github.io/`

## Step 6: Set Up EmailJS Secrets (If Needed)

If you want the contact form to work on the new site:

1. Go to: `https://github.com/ARSukhadiya/arsukhadiya.github.io/settings/secrets/actions`
2. Add the same three secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## Step 7: Update GitHub Actions Workflow (Optional)

If you want automatic deployments to the new repository, you can:

1. Update `.github/workflows/deploy.yml` to push to both repositories
2. Or create a separate workflow for the new repository

## Quick Commands Summary

```bash
# 1. Add remote
git remote add pages https://github.com/ARSukhadiya/arsukhadiya.github.io.git

# 2. Push to new repo
git push pages gh-pages:main --force

# 3. For future updates, push to both:
git push origin gh-pages
git push pages gh-pages:main
```

## Important Notes

⚠️ **Repository Name Must Match:**
- The repository MUST be named exactly `arsukhadiya.github.io`
- GitHub uses this naming convention to serve it at the root domain

⚠️ **Base Path:**
- The `vite.config.js` has been updated to use `base: '/'`
- This is correct for root domain deployment

⚠️ **Both Repositories:**
- You can keep both repositories
- `abhishek-sukhadiya` → `https://arsukhadiya.github.io/abhishek-sukhadiya/`
- `arsukhadiya.github.io` → `https://arsukhadiya.github.io/`

## Troubleshooting

### Site shows 404
- Wait 5-10 minutes after creating repository
- Verify repository name is exactly `arsukhadiya.github.io`
- Check that repository is public

### Assets not loading
- Verify `vite.config.js` has `base: '/'`
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for 404 errors

### Workflow not running
- Make sure `.github/workflows/deploy.yml` exists in the new repo
- Check that GitHub Pages is set to "GitHub Actions" source

---

Once deployed, your portfolio will be live at the clean URL: `https://arsukhadiya.github.io/` 🎉

