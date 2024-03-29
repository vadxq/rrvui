import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import Markdown from 'vite-plugin-md';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";@import "@/sites/styles/reset.scss";@import "@/sites/styles/md-style.scss";`
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    target: 'es2015',
    outDir: './dist/',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        mobile: resolve(__dirname, 'mobile.html'),
        doc: resolve(__dirname, 'index.html')
      }
    }
  }
});
