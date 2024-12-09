export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    return {
      provide: { logo: window.LogoFromDate }
    }
  }

})
