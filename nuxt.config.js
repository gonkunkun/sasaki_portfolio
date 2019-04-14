import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'spa',

  /*
   * * Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    title: "佐々木優太のポートフォリオ | Yuta's Portfolio",
    // TitleTemplate: '%s | 佐々木優太の',
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
      {
        hid: 'keywords',
        name: 'keywords',
        // Content: '佐々木優太,ポートフォリオ,skill,works',
        'xml:lang': 'ja',
        lang: 'ja'
      },
      { name: 'author', content: '佐々木優太' },
      // OGP
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '佐々木優太のポートフォリオ'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '佐々木優太のポートフォリオ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '佐々木優太と申します。普段はこんなものが欲しいな… と自分が感じたものを土日の休みを使って開発しています。欲しいものはあるけれども技術的に未熟で実現できないことばかりなので、日々勉強中です。'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://sasakiportfolio-2c22c.firebaseapp.com/'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://sasakiportfolio-2c22c.firebaseapp.com/portfolio.png'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '425218088280876'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: 'https://sasakiportfolio-2c22c.firebaseapp.com/'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://sasakiportfolio-2c22c.firebaseapp.com/portfolio.png'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://sasakiportfolio-2c22c.firebaseapp.com/'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   * * Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   * * Global CSS
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
   * * Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuetify',
    {
      src: '~plugins/ga.js',
      ssr: false
    }
  ],

  /*
   * * Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/font-awesome',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://sasakiportfolio-2c22c.firebaseapp.com/',
    generate: true
  },
  /*
   * * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   * * Build configuration
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
     * * You can extend webpack config here
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
