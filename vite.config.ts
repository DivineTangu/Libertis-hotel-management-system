import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './LIBERTIS-HOTEL-MANAGEMENT-SYSTEM',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
