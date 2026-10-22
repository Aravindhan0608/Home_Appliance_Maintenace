import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { generateRouteHtmlFiles } from './scripts/generate-routes.js'

function prerenderRoutesPlugin() {
  return {
    name: 'prerender-routes',
    apply: 'build',
    closeBundle() {
      generateRouteHtmlFiles()
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), prerenderRoutesPlugin()],
})

