// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "pages", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  css: ["@/assets/css/main.css"],
});
