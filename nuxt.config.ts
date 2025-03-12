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
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
      script: [
        {
          src: 'https://api-maps.yandex.ru/2.1/?apikey=f29a726a-2ec7-4dec-99e6-bd7ec89f441f&lang=ru_RU',
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
