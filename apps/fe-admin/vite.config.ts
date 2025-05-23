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
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@styles': path.resolve(__dirname, '../../libs/ui/ui-shared/src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (source: string, id: string) => {
          // Skip global imports for reset.scss and css-variables.scss
          if (id.endsWith('reset.scss') || id.endsWith('css-variables.scss')) {
            return source;
          }
          return `@use "@styles/variables" as *; ${source}`;
        },
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
