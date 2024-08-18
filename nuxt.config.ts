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
  $production: {
    scripts: {
      registry: {
        googleAnalytics: {
          id: 'G-05WM72X1T2'
        }
      }
    },
  },
  imports: {
    dirs: ['utils'],
  }
})
