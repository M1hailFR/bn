export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('mask', {
    beforeMount(el) {
      el.oninput = function (e) {
        if (!e.isTrusted || el.getAttribute('type') !== 'tel') {
          return
        }

        const x = this.value
          .replace(/\D/g, '')
          .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
        if (!x[2] && x[1] !== '') {
          this.value = x[1] === '8' ? x[1] : '8' + x[1]
        } else {
          this.value = !x[3]
            ? x[1] + x[2]
            : x[1] +
              ' (' +
              x[2] +
              ') ' +
              x[3] +
              (x[4] ? '-' + x[4] : '') +
              (x[5] ? '-' + x[5] : '')
        }
      }
    },
  })
})
