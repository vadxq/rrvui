import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import config from './package.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @vadxq.
* Released under the MIT License.
*/`;

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        banner,
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: 'src/rrvui.ts',
      name: 'rrvui',
      formats: ['es', 'umd']
    }
  }
});
