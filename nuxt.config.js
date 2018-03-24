require('dotenv').config()
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bh-market-poc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bh Market Front App POC' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    vendor: ['vue-i18n']
  },

  css : [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/sass/main.scss'
  ],

  loading: { color: 'cyan' },

  modules : [
    ['nuxt-sass-resources-loader', '~/assets/sass/variables.scss'],
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],

  router: {
    middleware: 'i18n'
  },

  plugins : [
    '~/plugins/i18n.js',
    '~/plugins/element',
    '~/plugins/cssCloud'
  ],

  axios: {
    baseURL : process.env.CONTAINER_MANAGER_API_URL
  }
}
