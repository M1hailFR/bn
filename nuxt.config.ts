// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    // @ts-ignore
    autoImports: ["defineStore"],
  },
  app: {
    rootId: "__bankruptcyNo-app",
    head: {
      title: "Банкротсва.NET | Юридические услуги",
      htmlAttrs: {
        lang: "en",
        prefix: "og:http://ogp.me/ns#",
        class: "ui-scrollbars",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Наша команда занимается юридической помощью",
        },
        {
          property: "og:title",
          content: "Банкротсва.NET | Юридические услуги",
        },
        {
          property: "og:description",
          content: "Наша команда занимается юридической помощью",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
        },
      ],
      script: [],
      // @ts-ignore
      pwa: {
        manifest: {
          lang: "en",
          name: "BankruptcyNo",
          short_name: "BN",
          description: "",
        },
      },
      robots: {
        UserAgent: "*",
        Disallow: [],
      },
    },
  },

  imports: {
    dirs: ["composables/**", "stores/**"],
  },

  css: ["@/assets/css/main.css"],
  routes: {
    "/": {
      prerender: true,
    },
    "/*": {
      cors: true,
    },
  },
  compatibilityDate: "2024-08-27",
});
