import { title, statistics } from './statsFields'
import { defaultOptions } from '#partials'
import { links } from '#partials'

const stats01 = {
  name: 'stats01',
  type: 'object',
  title: 'Statistics #01',
  options: defaultOptions,
  fields: [title, statistics, links()],
}

export { stats01 }
