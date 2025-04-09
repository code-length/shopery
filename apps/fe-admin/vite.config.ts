import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

dotenv.config();

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/fe-admin',
  server: {
    port: Number(process.env.FE_ADMIN_PORT),
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md']), svgr()],
  resolve: {
    alias: {
      '@styles': path.resolve(
        __dirname,
        '../../libs/ui/ui-shared/src/styles/index.scss'
      ),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@styles-variables': path.resolve(
        __dirname,
        '../../libs/ui/ui-shared/src/styles/variables.scss'
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles-variables";`,
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
