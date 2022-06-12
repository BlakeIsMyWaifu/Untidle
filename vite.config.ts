import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import { ViteTips } from 'vite-plugin-tips'

export default defineConfig({
	plugins: [
		react(),
		eslintPlugin(),
		ViteTips()
	]
})
