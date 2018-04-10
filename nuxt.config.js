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
      { hid: 'description', name: 'description', content: 'I don’t care.' },
      // Open Graph
      { property: 'og:image', content: 'https://www.interessiertmichni.ch/nocare-og-image-001.png' },
      { property: 'og:image:width', content: '2400px' },
      { property: 'og:image:height', content: '1260px' },
      { property: 'og:title', content: 'interessiertmichni.ch' },
      { property: 'og:description', content: '¯\\_(ツ)_/¯' }
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
