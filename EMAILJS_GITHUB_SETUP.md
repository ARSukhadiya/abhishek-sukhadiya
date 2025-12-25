# Setting Up EmailJS Secrets for GitHub Pages

This guide will help you configure EmailJS to work on your deployed GitHub Pages site.

## Prerequisites

You should already have:
- ✅ EmailJS account created
- ✅ Email service configured
- ✅ Email template created
- ✅ `.env` file with your credentials (local development)

## Step-by-Step Instructions

### Step 1: Get Your EmailJS Credentials

If you don't have them handy, you can find them in your `.env` file or from EmailJS dashboard:

1. **Service ID**: From EmailJS dashboard > Email Services
2. **Template ID**: From EmailJS dashboard > Email Templates  
3. **Public Key**: From EmailJS dashboard > Account > General > API Keys

### Step 2: Add Secrets to GitHub

1. **Go to your repository on GitHub:**
   ```
   https://github.com/ARSukhadiya/abhishek-sukhadiya
   ```

2. **Navigate to Settings:**
   - Click on the **Settings** tab (top menu bar)

3. **Go to Secrets:**
   - In the left sidebar, click **Secrets and variables**
   - Click **Actions**

4. **Add the first secret (SERVICE_ID):**
   - Click **New repository secret** button
   - **Name**: `VITE_EMAILJS_SERVICE_ID`
   - **Secret**: Paste your EmailJS Service ID (e.g., `service_abc123`)
   - Click **Add secret**

5. **Add the second secret (TEMPLATE_ID):**
   - Click **New repository secret** again
   - **Name**: `VITE_EMAILJS_TEMPLATE_ID`
   - **Secret**: Paste your EmailJS Template ID (e.g., `template_xyz789`)
   - Click **Add secret**

6. **Add the third secret (PUBLIC_KEY):**
   - Click **New repository secret** again
   - **Name**: `VITE_EMAILJS_PUBLIC_KEY`
   - **Secret**: Paste your EmailJS Public Key (e.g., `abcdefghijklmnop`)
   - Click **Add secret**

### Step 3: Verify Secrets Are Added

You should now see three secrets listed:
- ✅ `VITE_EMAILJS_SERVICE_ID`
- ✅ `VITE_EMAILJS_TEMPLATE_ID`
- ✅ `VITE_EMAILJS_PUBLIC_KEY`

### Step 4: Trigger a New Deployment

After adding the secrets, you need to trigger a new deployment:

1. **Option A: Push a new commit** (easiest)
   ```bash
   git commit --allow-empty -m "Trigger deployment with EmailJS secrets"
   git push origin gh-pages
   ```

2. **Option B: Manually trigger workflow**
   - Go to: `https://github.com/ARSukhadiya/abhishek-sukhadiya/actions`
   - Click on "Deploy to GitHub Pages" workflow
   - Click **Run workflow** button
   - Select branch: `gh-pages`
   - Click **Run workflow**

### Step 5: Verify It Works

1. Wait 2-5 minutes for deployment to complete
2. Visit your site: `https://arsukhadiya.github.io/abhishek-sukhadiya/`
3. Go to the Contact section
4. Fill out the form and submit
5. Check your email inbox - you should receive the message!

## Important Notes

⚠️ **Security:**
- Secrets are encrypted and only accessible during workflow runs
- Never commit your `.env` file to Git (it's already in `.gitignore`)
- Secrets are not visible in the repository or logs

⚠️ **Environment Variables:**
- The secrets are automatically injected as environment variables during build
- They're prefixed with `VITE_` so Vite can access them
- The workflow uses them in the build step

## Troubleshooting

### Contact form still not working?

1. **Check browser console:**
   - Open DevTools (F12) > Console
   - Look for any EmailJS errors
   - Check if credentials are being loaded

2. **Verify secrets are correct:**
   - Double-check the values in GitHub Secrets match your EmailJS dashboard
   - Make sure there are no extra spaces or quotes

3. **Check EmailJS template:**
   - Ensure "To Email" is set in your EmailJS template
   - Verify template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`

4. **Check workflow logs:**
   - Go to Actions tab
   - Click on the latest workflow run
   - Check if build completed successfully
   - Look for any errors in the build step

### Still having issues?

- Make sure your EmailJS service is connected and active
- Verify your EmailJS template has the recipient email set
- Check that you're using the correct Public Key (not Private Key)

## Quick Reference

**GitHub Secrets Location:**
```
Repository > Settings > Secrets and variables > Actions
```

**Workflow File:**
```
.github/workflows/deploy.yml
```

**Contact Form Component:**
```
src/components/Contact.jsx
```

---

Once you've added the secrets and triggered a new deployment, your contact form will work on the live site! 🎉

