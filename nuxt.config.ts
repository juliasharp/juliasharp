// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';
import { GlobalSettings } from './environmentsettings.js'

const appEnv = process.env.ENV || 'development'

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
  },
  runtimeConfig: {
    public: {
      sitename: 'Julia Sharp | Portfolio',
      companyname: 'Julia Sharp',
      gtagId: 'G-1K9CBK4EH2',
      gtm_id: GlobalSettings[appEnv].googleTagManagerKey || 'GTM-TWCN6PG6',
      gtm_enabled: GlobalSettings[appEnv].googleTagManagerEnabled || true,
      gtm_debug: GlobalSettings[appEnv].googleTagManagerDebug || false,
    }
  }
})
