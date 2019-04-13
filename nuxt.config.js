import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: '佐々木優太のポートフォリオ',
    // titleTemplate: '%s | 佐々木優太の',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'CifRO1Y4LDsCOt5Gqi5irV7Dryey1Z0jDFSjdp_zCJw'
      },
      // SEO
      {
        hid: 'description',
        name: 'description',
        content:
          '佐々木優太と申します。普段はこんなものが欲しいな… と自分が感じたものを土日の休みを使って開発しています。欲しいものはあるけれども技術的に未熟で実現できないことばかりなので、日々勉強中です。'
      },
      { name: 'author', content: '佐々木優太' },
      // OGP
      { property: 'og:site_name', content: '佐々木優太のポートフォリオ' },
      { property: 'og:title', content: '佐々木優太のポートフォリオ' },
      {
        property: 'og:description',
        content:
          '佐々木優太と申します。普段はこんなものが欲しいな… と自分が感じたものを土日の休みを使って開発しています。欲しいものはあるけれども技術的に未熟で実現できないことばかりなので、日々勉強中です。'
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: 'https://sasakiportfolio-2c22c.firebaseapp.com/'
      },
      { property: 'og:image', content: '/portfolio.png' },
      { property: 'fb:app_id', content: '425218088280876' },
      { property: 'twitter:card', content: '佐々木優太のポートフォリオです。' },
      {
        property: 'twitter:site',
        content: 'https://sasakiportfolio-2c22c.firebaseapp.com/'
      },
      {
        property: 'twitter:image',
        content: '/portfolio.png'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://sasakiportfolio-2c22c.firebaseapp.com/'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/app.styl',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
    '@/assets/css/font.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuetify',
    {
      src: '~plugins/ga.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/font-awesome'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
