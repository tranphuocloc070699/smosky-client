// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  /***
  Config
  ***/
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",

    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },

  /***
  Modules 
  ***/
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-rating"],
  /***
  Fonts 
  ***/
  googleFonts: {
    display: "swap",
    families: {
      Roboto: [100, 300, 400, 500, 600, 700, 900],
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Mulish: [300, 400, 500, 600, 700, 800],
    },
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
  },
  /***
  Css 
  ***/
  css: ["@/assets/css/styles.css"],
});
