import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    // Development
    return {
      plugins: [],
    };
  } else if (command === 'build') {
    // Production: library that can be imported in other apps
    return {
      build: {
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve(__dirname, 'src/main.ts'),
          name: 'blue',
          format: ['es', 'umd'],
          // the proper extensions will be added
          fileName: (format) => `blue.${format}.js`,
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['@xenova/transformers'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: { transformers: '@xenova/transformers' },
          },
        },
      },
      plugins: [dts()],
    };
  }
});
