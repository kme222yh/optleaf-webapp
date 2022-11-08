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
                // scss file to be added to each vue template
                additionalData: '@import "@/scss/prepends.scss";'
            }
        }
    },
    plugins: [react()]
});
