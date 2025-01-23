import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-seu-repositorio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
