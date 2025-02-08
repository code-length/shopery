import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic'
    }), 
    cssInjectedByJsPlugin({
      injectCode: (cssCode) => {
        return `try {
          if (typeof document !== 'undefined') {
            const style = document.createElement('style');
            style.innerHTML = ${cssCode};
            document.head.appendChild(style);
          }
        } catch (e) {
          console.error('vite-plugin-css-injected-by-js', e);
        }`
      }
    })
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SharedUI',
      fileName: (format) => `shared-ui.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});