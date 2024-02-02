import {
  title,
  list
} from './timelineFields'
import { links } from '#partials'
import { defaultOptions } from '#partials'

const timeline01 = {
  name: 'timeline01',
  type: 'object',
  title: 'Timeline #1',
  options: defaultOptions,
  fields: [title, list],
}

export { timeline01 }
