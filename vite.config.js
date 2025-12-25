import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to username.github.io, use base: '/'
// If deploying to username.github.io/repo-name, use base: '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/abhishek-sukhadiya/' if using a project repository
})

