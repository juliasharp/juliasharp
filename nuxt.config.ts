// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/app.scss'],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'url'
      }),
    ],
  },
})
