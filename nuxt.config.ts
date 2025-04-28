// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  pinia: {
    // @ts-ignore
    autoImports: ['defineStore'],
  },
  app: {
    rootId: '__ProWriteDowns-app',
    head: {
      title: 'Pro.Списание | Федеральный сервис списания долгов',
      htmlAttrs: {
        lang: 'en',
        prefix: 'og:http://ogp.me/ns#',
        class: 'ui-scrollbars',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Наша команда занимается банкротством и урегулированием долгов',
        },
        {
          property: 'og:title',
          content: 'ProСписание | Федеральный сервис списания долгов',
        },
        {
          property: 'og:description',
          content:
            'Наша команда занимается банкротством и урегулированием долгов',
        },
      ],
      link: [],
      script: [
        {
          src: 'https://api-maps.yandex.ru/2.1/?apikey=f29a726a-2ec7-4dec-99e6-bd7ec89f441f&lang=ru_RU',
          type: 'text/javascript',
        },
        {
          innerHTML: `(function(w,d,u){
            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
          })(window,document,'https://cdn-ru.bitrix24.ru/b33474894/crm/site_button/loader_1_2xuckw.js');`,
          type: 'text/javascript',
        }
      ],
      // @ts-ignore
      pwa: {
        manifest: {
          lang: 'en',
          name: 'ProWriteDowns',
          short_name: 'PWD',
          description: '',
        },
      },
      robots: {
        UserAgent: '*',
        Disallow: [],
      },
    },
  },

  imports: {
    dirs: ['composables/**', 'stores/**'],
  },

  css: ['@/assets/css/main.css'],
  build: {
    transpile: ['@pinia/nuxt'],
  },
  vite: {},
  routes: {
    '/': {
      prerender: true,
    },
    '/*': {
      cors: true,
    },
  },
  compatibilityDate: '2024-08-27',
})
