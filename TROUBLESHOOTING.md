# GitHub Pages Troubleshooting Guide

## Issue: Site Not Loading Despite Successful Workflow

If your GitHub Actions workflow completes successfully but the site isn't accessible, follow these steps:

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to: `https://github.com/ARSukhadiya/abhishek-sukhadiya/settings/pages`

2. Under **Source**, you MUST select:
   - **Source**: `GitHub Actions` (NOT "Deploy from a branch")
   - This is critical! If you select "Deploy from a branch", it won't use your workflow.

3. Click **Save**

4. Wait 2-5 minutes for the first deployment

### Step 2: Verify Workflow Completed

1. Go to: `https://github.com/ARSukhadiya/abhishek-sukhadiya/actions`

2. Check the latest workflow run:
   - Should show a green checkmark ✅
   - Both "build" and "deploy" jobs should be completed
   - Look for "Deploy to GitHub Pages" step

3. If there are errors, check the logs

### Step 3: Check Deployment Status

1. Go to: `https://github.com/ARSukhadiya/abhishek-sukhadiya/settings/pages`

2. You should see:
   - "Your site is live at https://arsukhadiya.github.io/abhishek-sukhadiya/"
   - A green checkmark next to the deployment

### Step 4: Manual Trigger (If Needed)

If the workflow didn't run automatically:

1. Go to: `https://github.com/ARSukhadiya/abhishek-sukhadiya/actions`

2. Click on "Deploy to GitHub Pages" workflow

3. Click "Run workflow" button (top right)

4. Select branch: `gh-pages`

5. Click "Run workflow"

### Step 5: Alternative - Manual Deployment with gh-pages

If GitHub Actions isn't working, use manual deployment:

```bash
# Install gh-pages globally (if not already installed)
npm install -g gh-pages

# Build the project
npm run build

# Deploy to gh-pages branch
gh-pages -d dist
```

Then in repository settings:
- Go to Settings > Pages
- Source: `gh-pages` branch, `/ (root)` folder
- Save

## Common Issues

### Issue: "404 Not Found"
- **Solution**: Wait 5-10 minutes after enabling Pages
- Check that base path in `vite.config.js` is `/abhishek-sukhadiya/`
- Clear browser cache (Ctrl+Shift+R)

### Issue: "Assets not loading (CSS/JS 404)"
- **Solution**: Base path is wrong. Update `vite.config.js`:
  ```js
  base: '/abhishek-sukhadiya/'
  ```
- Rebuild and redeploy

### Issue: "Workflow not running"
- **Solution**: 
  - Make sure workflow file is in `.github/workflows/deploy.yml`
  - Check that you're pushing to `gh-pages`, `main`, or `master` branch
  - Manually trigger from Actions tab

### Issue: "Permission denied"
- **Solution**: 
  - Go to Settings > Actions > General
  - Under "Workflow permissions", select "Read and write permissions"
  - Save

## Quick Checklist

- [ ] GitHub Pages is enabled in Settings > Pages
- [ ] Source is set to "GitHub Actions" (not "Deploy from a branch")
- [ ] Workflow file exists at `.github/workflows/deploy.yml`
- [ ] Base path in `vite.config.js` is `/abhishek-sukhadiya/`
- [ ] Workflow has completed successfully (check Actions tab)
- [ ] Waited 5-10 minutes after first deployment
- [ ] Cleared browser cache

## Still Not Working?

1. Check the exact URL: `https://arsukhadiya.github.io/abhishek-sukhadiya/` (note the `/abhishek-sukhadiya/` at the end)

2. Try accessing via: `https://arsukhadiya.github.io/abhishek-sukhadiya/index.html`

3. Check browser console for errors (F12 > Console)

4. Verify repository is public (required for free GitHub Pages)

