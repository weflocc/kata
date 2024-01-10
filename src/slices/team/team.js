import { thumbnails, profiles, people } from './teamFields'
import { defaultOptions, links } from '../../partials'
import { title, text } from '../shared'

const team01 = {
  name: 'team01',
  type: 'object',
  title: 'Team #1',
  options: defaultOptions,
  fields: [title, text, people, links()],
}

const team03 = {
  name: 'team03',
  type: 'object',
  options: defaultOptions,
  fields: [title, text, profiles],
}

const team04 = {
  name: 'team04',
  type: 'object',
  title: 'Team #4',
  options: defaultOptions,
  fields: [title, text, thumbnails],
}

export { team01, team03, team04 }
