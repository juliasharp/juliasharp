// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  css: ['@/app.scss'],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'url'
      }),
    ],
  },
  imports: {
    dirs: ['utils'],
  }
})
