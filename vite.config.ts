import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/shared/styles/_variables.scss" as *;`,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        ssr: './src/entry-server.tsx',
      },
      output: {
        format: 'es',
      },
    },
  },
  ssr: {
    external: ['react-router-dom', 'react-router', 'react'],
  },
});
