// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  /* Ui */
  ui: {
    safelistColors: ['orange']
  },



  /***
  Config
  ***/
  runtimeConfig: {
    // The private keys which are only available server-side
   
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
      NUXT_BASE_URL_BOILERPLATE_SERVER: process.env.NUXT_BASE_URL_BOILERPLATE_SERVER,

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
