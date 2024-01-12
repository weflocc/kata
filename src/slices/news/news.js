import { list } from './newsFields'
import { defaultOptions } from  '#partials'
import { title } from '../shared'

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
  fields: [title, list],
}

const news06 = {
  name: 'news06',
  type: 'object',
  title: 'News #6',
  options: defaultOptions,
  fields: [title],
}

export { news02, news03, news05, news06 }
