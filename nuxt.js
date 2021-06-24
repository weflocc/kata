import { join } from 'path'

export default function () {
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
    './components/slices/testimonial',
    './components/slices/text',
    './components/utilities',
    // './components/utilities/serializers', // not actually needed, direcly imported in SanityEmbedContent
  ]

  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    ourDirs.forEach((dir) => {
      dirs.push({
        path: join(__dirname, dir),
        global: true,
      })
    })
  })
}
