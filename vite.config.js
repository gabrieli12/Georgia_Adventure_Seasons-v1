import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    ViteImageOptimizer({
      /* 
         ეს კონფიგურაცია ავტომატურად გადაიყვანს ყველაფერს WebP-ში 
         და შეამცირებს ზომას ისე, რომ ხარისხი არ დაიკარგოს 
      */
      webp: {
        quality: 75,
      },
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 70,
      },
    }),
  ],
})
