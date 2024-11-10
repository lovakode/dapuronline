// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {
        enabled: true
    },
    ssr: false,
    postcss: {
        plugins: {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/scss/app.scss'],
    modules: [
        '@nuxtjs/tailwindcss', '@element-plus/nuxt',
    ],
    nitro: {
      prerender: {
        crawlLinks: false,
      },
    },
  
    
})