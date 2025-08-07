import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'
import postcssPxToRem from 'postcss-pxtorem'
import fs from 'fs'

const pathResolve = (dir: string) => {
	return resolve(__dirname, '.', dir);
};

export default defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd());
	fs.writeFileSync('./public/config.js', `window.__env__ = ${JSON.stringify(env, null, 2)} `);
  return {
    css: {
      postcss: {
        plugins: [postcssPxToRem({
          rootValue: 192,
          propList: ['*'],
        })]
      }
    },
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src/'),
    },
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
    open: true
  },
  base: './',
  preview: {
    port: 5000,
    host: '0.0.0.0',
    strictPort: true
  }
}
})

