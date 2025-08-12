import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for Render deployment
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
  },
  server: {
    port: 5173, // Your dev server port
  },
  base: './', // Keep this for proper SPA routing in production
});
