import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import mkcert from 'vite-plugin-mkcert'
// import { viteSingleFile } from 'vite-plugin-singlefile'
import ssr from 'vite-plugin-ssr/plugin'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    publicDir: 'public',
    // server: {
    //   https: true,
    // },
    plugins: [
      // mkcert(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        ],
        imports: ['react'],
        dirs: [
          './src/core/**', // all nested modules
        ],
        dts: true,
        eslintrc: {
          enabled: true,
        },
      }),
      react(),
      ssr(),
      eslintPlugin({
        failOnError: false,
        cache: false,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      svgLoader(),

      // process?.env?.ODR ? viteSingleFile() : null,
    ],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@c': fileURLToPath(new URL('./src/components', import.meta.url)),

        '@ui': fileURLToPath(new URL('./src/components/Ui', import.meta.url)),
        '@interface': fileURLToPath(new URL('./src/core/interface', import.meta.url)),
        '@utils': fileURLToPath(new URL('./src/core/utils', import.meta.url)),
        '@store': fileURLToPath(new URL('./src/core/store', import.meta.url)),
      },
    },

    ssr: {
      noExternal: ['@reduxjs/toolkit'],
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/utils/index.scss";`,
        },
      },
    },
  })
}
