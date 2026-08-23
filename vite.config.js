import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

// Auto-discover every folder starting with "part" that has an index.html
const parts = readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.startsWith('part'))
  .map((d) => d.name)

const input = Object.fromEntries(
  parts.map((name) => [name, resolve(root, name, 'index.html')])
)

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: { input },
  },
})