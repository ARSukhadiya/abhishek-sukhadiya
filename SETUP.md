# Quick Setup Guide

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit `http://localhost:5173`

## 📝 Important: Update Your Information

Before deploying, make sure to update:

### 1. Personal Information
- **Hero Section** (`src/components/Hero.jsx`): Update your name and tagline
- **About Section** (`src/components/About.jsx`): Write your personal story
- **Skills** (`src/components/Skills.jsx`): Update with your actual skills

### 2. Projects
- **Projects** (`src/components/Projects.jsx`): 
  - Replace placeholder projects with your real projects
  - Update `liveUrl` and `githubUrl` for each project
  - Update image paths to match your project images
  - Add/remove projects as needed

### 3. Contact Information
- **Contact** (`src/components/Contact.jsx`):
  - Update email address
  - Update social media links (GitHub, LinkedIn, Twitter)
  - Configure form submission (currently uses mock handler - integrate with your backend/email service)

### 4. Social Links
Update all social media links in:
- `src/components/Contact.jsx` (social links)
- `src/components/Projects.jsx` (GitHub link in footer)
- `README.md` (project links)

### 5. Form Submission
The contact form currently uses a mock submission. To make it functional:

**Option 1: Use EmailJS**
```bash
npm install @emailjs/browser
```

**Option 2: Use Formspree**
- Sign up at formspree.io
- Update form action URL

**Option 3: Use your own backend**
- Create an API endpoint
- Update the `handleSubmit` function in `Contact.jsx`

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the accent colors:
```js
colors: {
  accent: {
    // Your custom colors
  }
}
```

### Fonts
The project uses Inter, Poppins, and Outfit. Change in `index.html` if needed.

## 📦 Build for Production

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## 🌐 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Auto-deploys on push

### Netlify
1. Build: `npm run build`
2. Deploy `dist` folder
3. Set build command: `npm run build`

---

**Need help?** Check the main README.md for more details!

