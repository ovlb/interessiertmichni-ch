const images = require('./store/state/images')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'interessiertmichni.ch',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I don’t care.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/shrug-favicon.jpg' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  generate: {
    routes () {
      const imgArray = Object.values(images)
      return imgArray.map((img) => `/${img.id}`)
    }
  },
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
    }
  }
}
