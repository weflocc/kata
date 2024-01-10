import { statistics } from './statsFields'
import { defaultOptions, links } from '../../partials'
import { title } from '../shared'

const stats01 = {
  name: 'stats01',
  type: 'object',
  title: 'Statistics #01',
  options: defaultOptions,
  fields: [title, statistics, links()],
}

export { stats01 }
