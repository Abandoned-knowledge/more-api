// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "dayjs-nuxt",
  ],
  srcDir: "src",
  dir: {
    public: "../public",
    layouts: "app/layouts",
  },
  components: {
    dirs: ["~~/lib/ui-kit"],
    global: true,
  },
  tailwindcss: {
    viewer: false,
    disableHMR: true,
    quiet: true,
    cssPath: ["~/app/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
  },
  googleFonts: {},
  vite: {
    server: {
      hmr: false,
    },
  },
});
