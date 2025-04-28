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
          src: 'https://api-maps.yandex.ru/2.1/?apikey=8f546a6c-b991-4c5c-bace-9bff28781f24&lang=ru_RU',
          type: 'text/javascript',
        },
        {
          innerHTML: `(function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b31558902/crm/site_button/loader_2_suv692.js')`,
          type: 'text/javascript',
        },
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
