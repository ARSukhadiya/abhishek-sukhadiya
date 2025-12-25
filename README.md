# Abhishek Sukhadiya - Modern Portfolio

A modern, enthusiastic, and friendly portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean Bento Grid layout, smooth animations, and a welcoming design that reflects a positive and genuine personality.

## ✨ Features

- 🎨 **Modern Bento Grid Layout** - Clean, card-based aesthetic inspired by modern design trends
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 🎭 **Smooth Animations** - Framer Motion powered animations that make the site feel alive
- 📱 **Fully Responsive** - Polished mobile experience that matches desktop quality
- 🚀 **Floating Navigation** - Elegant navigation bar that adapts on scroll
- 💬 **Personal Contact Section** - Welcoming contact form that feels genuine, not corporate
- 🎯 **Optimized Projects** - Clear Live Demo and GitHub links for each project
- ⚡ **Fast & Modern** - Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful icon library

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed!

## 📝 Customization

### Update Your Information

1. **Personal Details:**
   - Edit `src/components/Hero.jsx` for your introduction
   - Update `src/components/About.jsx` with your story
   - Modify `src/components/Skills.jsx` with your skills

2. **Projects:**
   - Edit `src/components/Projects.jsx` with your actual projects
   - Update project images, descriptions, and links
   - Add your GitHub username and project URLs

3. **Contact:**
   - Update email and social links in `src/components/Contact.jsx`
   - Configure form submission (currently uses a mock handler)

4. **Colors & Styling:**
   - Customize colors in `tailwind.config.js`
   - Adjust animations in component files

### Project Images

Place your project images in the `public/static/media/` directory and update the paths in `Projects.jsx`.

## 🎨 Design Philosophy

This portfolio is designed to be:
- **Enthusiastic** - Positive, energetic tone throughout
- **Friendly** - Welcoming and approachable design
- **Genuine** - Authentic personality that shines through
- **Modern** - Clean, contemporary aesthetic
- **Interactive** - Smooth animations that respond to user interaction

## 📱 Mobile Responsive

The entire site is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Abhishek Sukhadiya - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

Made with ❤️ using React, Tailwind CSS, and Framer Motion
