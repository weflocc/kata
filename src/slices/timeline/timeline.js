import { list } from './timelineFields'
import { title } from '../shared'
import { defaultOptions, links } from 'part:@weflocc/kata/partials/index'

const timeline01 = {
  name: 'timeline01',
  type: 'object',
  title: 'Timeline #1',
  options: defaultOptions,
  fields: [title, list],
}

export { timeline01 }
