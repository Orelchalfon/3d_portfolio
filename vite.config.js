import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({

  base:"/3d-portfolio/",
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
});
