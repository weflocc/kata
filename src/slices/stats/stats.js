import { title, statistics } from './statsFields'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'
import { links } from 'part:@weflocc/kata/partials/links'

const stats01 = {
  name: 'stats01',
  type: 'object',
  title: 'Statistics #01',
  options: defaultOptions,
  fields: [title, statistics, links()],
}

export { stats01 }
