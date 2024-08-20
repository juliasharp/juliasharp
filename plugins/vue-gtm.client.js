import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createGtm({
      id: 'G-1K9CBK4EH2',
      defer: false,
      compatibility: false,
      enabled: true,
      debug: true,
      loadScript: true,
      vueRouter: useRouter(),
      trackOnNextTick: false
    })
  )
})