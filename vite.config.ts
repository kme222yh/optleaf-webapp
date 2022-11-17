import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';

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
    plugins: [react(), reactScopedCssPlugin(), htmlPlugin(loadEnv('dev', "."))]
});




/**
 * Replace env variables in index.html
 * @see https://github.com/vitejs/vite/issues/3105#issuecomment-939703781
 * @example `%VITE_MY_ENV%`
 * @see https://vitejs.dev/guide/api-plugin.html#transformindexhtml
 */
 function htmlPlugin(env: ReturnType<typeof loadEnv>) {
    return {
      name: "html-transform",
      transformIndexHtml: {
        enforce: "pre" as const,
        transform: (html: string): string =>
          html.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match),
      },
    };
  }