# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to `https://arsukhadiya.github.io/`

## Option 1: Deploy from Current Repository (Recommended)

### Step 1: Enable GitHub Pages

1. Go to your repository: `https://github.com/ARSukhadiya/abhishek-sukhadiya`
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `gh-pages` or `main`
   - **Folder**: `/root` (for GitHub Actions) or `/ (root)` (for branch deployment)
5. Click **Save**

### Step 2: Configure GitHub Actions (Automatic Deployment)

The workflow is already set up! Just make sure:

1. Go to **Settings** > **Pages**
2. Select **Source**: `GitHub Actions` (if available)
3. The workflow will automatically deploy when you push to `main`, `master`, or `gh-pages` branches

### Step 3: Set Environment Variables (Optional)

If you want EmailJS to work on the deployed site:

1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret**
3. Add these secrets:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key

### Step 4: Your Site URL

After deployment, your site will be available at:
- `https://arsukhadiya.github.io/abhishek-sukhadiya/` (if using project repo)

**Note:** If you want `https://arsukhadiya.github.io/` (without repo name), see Option 2 below.

---

## Option 2: Deploy to Custom Domain (username.github.io)

To get `https://arsukhadiya.github.io/` (without the repo name), you need to:

### Step 1: Create New Repository

1. Create a new repository named exactly: `arsukhadiya.github.io`
2. Make sure it's public (required for free GitHub Pages)

### Step 2: Update Vite Config

Update `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/', // Already set correctly
})
```

### Step 3: Push Code to New Repository

```bash
# Add new remote
git remote add pages https://github.com/ARSukhadiya/arsukhadiya.github.io.git

# Push to new repo
git push pages gh-pages:main
```

Or push all files:
```bash
git push pages gh-pages:main --force
```

### Step 4: Enable GitHub Pages

1. Go to `https://github.com/ARSukhadiya/arsukhadiya.github.io`
2. **Settings** > **Pages**
3. Select **Source**: `main` branch, `/ (root)` folder
4. Click **Save**

Your site will be live at: `https://arsukhadiya.github.io/`

---

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Build and deploy
npm run deploy
```

This will build your site and push it to the `gh-pages` branch.

---

## Troubleshooting

### Site shows 404
- Wait 5-10 minutes after enabling Pages
- Check that the branch/folder is correct in Settings
- Make sure the repository is public

### Assets not loading
- Check `vite.config.js` base path
- For project repos, use: `base: '/repo-name/'`
- For username.github.io, use: `base: '/'`

### GitHub Actions failing
- Check the Actions tab for error messages
- Make sure Node.js version is compatible
- Verify all dependencies are in package.json

---

## Quick Deploy Commands

```bash
# Build locally
npm run build

# Deploy using GitHub Actions (automatic on push)
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Or deploy manually
npm run deploy
```

