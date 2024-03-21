import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/chain-registry',
  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.json')
    })
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'chain-registry',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      output: {
        preserveModules: true
      },
      // External packages that should not be bundled into your library.
      external: ['@chain-registry/types']
    }
  }
});
