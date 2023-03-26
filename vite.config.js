import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log('command-->' + command);
  console.log('mode-->' + mode);
  console.log('ssrBuild-->' + ssrBuild);
  if (mode == 'production') {
    return {
      base: '/cz-website-portal/',
      envDir: './env',
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      server: {
        proxy: {
          '/api/v1': {
            target: 'http://47.94.195.238:5012',
            changeOrigin: true,
          },
        },
      },
    };
  }
  return {
    base: '/cz-website-portal/',
    envDir: './env',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api/v1': {
          target: 'http://127.0.0.1:9000',
          changeOrigin: true,
        },
      },
    },
  };
});
