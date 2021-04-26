const { resolve, join } = require('path')

export default function () {
  
  // Components
  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    const ourDirs = [
      './components/articles',
      './components/articles/results',
      './components/articles/tease',
      './components/slices',
      './components/slices/call-to-action',
      './components/slices/feature',
      './components/slices/hero',
      './components/slices/portfolio',
      './components/slices/testimonial',
      './components/slices/text',
      './components/utilities',
    ]
    ourDirs.forEach( (dir) => {
      dirs.push({
        path: join(__dirname, dir)
      })
    })
  })


  // Plugins
  const pluginsToSync = [
    './plugins/preview.client.js'
  ]

  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
    })
  }

}

module.exports.meta = require('./package.json')