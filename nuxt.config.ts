// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules:[
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})