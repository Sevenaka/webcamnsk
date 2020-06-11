module.exports = {
  head: {
    title: 'wmodel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/tet.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  css: [
    {src: "@/assets/bootstrap.min.css"},
    {src: "@/assets/main.scss", lang: 'scss'}
  ],
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],
  axios: {
    baseURL: 'https://form.mv2.agency/',
    credentials: false,
    debug: true
    //https: true
  },
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    {src: '~/plugins/swiper.js', ssr: false},
    {src: '~/plugins/bootstrap.js', ssr: false}
  ],
  build: {
    /*
    ** Run ESLint on save
    */
   extractCSS: process.env.NODE_ENV === 'production',
   filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].js?v=[hash:8]',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js?v=[hash:8]',
      css: ({ isDev }) => isDev ? '[name].css' : '[name].css?v=[hash:8]'
    },  
    vendor: [
      "vue-awesome-swiper"
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

