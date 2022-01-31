import { title, statistics } from './statsFields'
import { defaultOptions } from 'part:@weflocc/kata/partials/index'
import { links } from 'part:@weflocc/kata/partials/index'

const stats01 = {
  name: 'stats01',
  type: 'object',
  title: 'Statistics #01',
  options: defaultOptions,
  fields: [title, statistics, links()],
}

export { stats01 }
