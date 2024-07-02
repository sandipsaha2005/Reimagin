import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      domains: ['api.microlink.io'],
      images: {
        default: {
          quality: 75,
        },
      },
    }),
  ],
});
