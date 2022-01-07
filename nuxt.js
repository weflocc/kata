import { join } from 'path'
import path from 'path'

export default function () {
  console.log('Nuxt js called within @weflocc/kata')

  const ourDirs = [
    './components/articles',
    './components/articles/results',
    './components/articles/tease',
    './components/slices',
    './components/slices/article-block',
    './components/slices/call-to-action',
    './components/slices/contact',
    './components/slices/feature',
    './components/slices/hero',
    './components/slices/portfolio',
    './components/slices/statistics',
    './components/slices/team',
    './components/slices/team/parts',
    './components/slices/testimonial',
    './components/slices/testimonial/parts',
    './components/slices/text',
    './components/utilities',
    // './components/utilities/serializers', // not actually needed, directly imported in SanityEmbedContent
  ]

  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    ourDirs.forEach((dir) => {
      dirs.push({
        path: join(__dirname, dir),
      })
    })
  })

  const pluginFiles = [
    './plugins/global.js',
    // './plugins/images.js', //images can't access sanity object to pass in - probably just get client details from config and create in plugin
    './plugins/inview.client.js',
    './plugins/preview.client.js',
  ]

  pluginFiles.forEach((item) => {
    this.addPlugin(path.resolve(__dirname, item))
  })
  
}
