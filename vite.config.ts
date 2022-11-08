import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true
    },
    resolve: {
        alias: [{ find: '@', replacement: '/src' }]
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/scss/prepends.scss";'
            }
        }
    },
    plugins: [react()]
});
