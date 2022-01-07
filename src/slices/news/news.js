import { title, items } from './newsFields'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'

const news02 = {
  name: 'news02',
  type: 'object',
  title: 'News #2',
  options: defaultOptions,
  fields: [title],
}

const news03 = {
  name: 'news03',
  type: 'object',
  title: 'News #3',
  options: defaultOptions,
  fields: [title],
}

const news05 = {
  name: 'news05',
  type: 'object',
  title: 'News #5',
  options: defaultOptions,
  fields: [title, items],
}

export { news02, news03, news05 }
