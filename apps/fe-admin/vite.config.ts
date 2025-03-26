import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
<<<<<<< HEAD
=======

dotenv.config();
>>>>>>> 3724e112cb747823932a276e1dcd4f27e75d371e

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/fe-admin',
  server: {
    port: process.env.FE_ADMIN_PORT,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md']), svgr()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, '../../libs/styles'),
      '@assets': path.resolve(__dirname, './src/assets/'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables";`,
      },
    },
  },
  build: {
    outDir: '../../dist/apps/fe-admin',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/fe-admin',
      provider: 'v8',
    },
  },
});
