const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: '云译通',
    meta: [
      {charset: 'utf-8'},
      { name: 'viewport',content: 'width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=1.0, user-scalable=0'},
      {hid: 'description', name: 'description',content: '云译通'},
      /* 优先使用 IE 最新版本和 Chrome  */
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      /* iOS 设备 */
      { name: 'author', content: '云译通' },
      { name: 'apple-mobile-web-app-title', content: '云译通' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-capable', content: '云译通' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#云译通' },
      /* fullscreen and app mode */
      { name: 'screen-orientation', content: '云译通' },
      { name: 'x5-orientation', content: '云译通' },
      { name: 'full-screen', content: '云译通' },
      { name: 'x5-fullscreen', content: '云译通' },
      { name: 'browsermode', content: '云译通' },
      { name: 'x5-page-mode', content: '云译通' },
      /* webkit */
      { name: 'theme-color', content: '云译通' }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script:[
      {src:'/js/common/rem.js'}
  ]
  },
  render: {
    resourceHints: false,
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    {
      src:'~/assets/css/main.less',
      lang: 'less'
    }    
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/mint-ui', ssr: true }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
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
    /*
     ** You can extend webpack config here
     */
    vendor: ['mint-ui','babel-polyfill'],
    extend(config, ctx) {

    }
  }
}
