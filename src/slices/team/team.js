import { title, text, thumbnails, profiles } from './teamFields'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'

const team04 = {
  name: 'team04',
  type: 'object',
  title: 'Team #4',
  options: defaultOptions,
  fields: [title, text, thumbnails],
}

const team03 = {
  name: 'team03',
  type: 'object',
  options: defaultOptions,
  fields: [title, text, profiles],
}

export { team03, team04 }
