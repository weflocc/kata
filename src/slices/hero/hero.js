import { title, text, superHeading } from '../shared'
import {
  links,
  media,
  defaultOptions,
  basicTextEditor,
  liteTextEditor,
} from 'part:@weflocc/kata/partials/index'

const hero01 = {
  name: 'hero01',
  type: 'object',
  title: 'Hero #1',
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()],
}

const hero04 = {
  name: 'hero04',
  type: 'object',
  title: 'Hero #4',
  options: defaultOptions,
  fields: [media(), title],
}

const hero05 = {
  name: 'hero05',
  type: 'object',
  title: 'Hero #5',
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()],
}

const hero06 = {
  name: 'hero06',
  type: 'object',
  title: 'Hero #6',
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()],
}

const hero07 = {
  name: 'hero07',
  type: 'object',
  title: 'Hero #7',
  options: defaultOptions,
  fields: [media(), superHeading, title, links()],
}

const hero08 = {
  name: 'hero08',
  type: 'object',
  title: 'Hero #8',
  options: defaultOptions,
  fields: [superHeading, title, liteTextEditor(), links()],
}

const hero09 = {
  name: 'hero09',
  type: 'object',
  title: 'Hero #9',
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()],
}

const hero10 = {
  name: 'hero10',
  type: 'object',
  title: 'Hero #10',
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor(), links()],
}

const hero11 = {
  name: 'hero11',
  type: 'object',
  title: 'Hero #11',
  options: defaultOptions,
  fields: [
    title,
    basicTextEditor(),
    links(),
    {
      name: 'sideLinkText',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
    },
    media(),
  ],
}

export {
  hero01,
  hero04,
  hero05,
  hero06,
  hero07,
  hero08,
  hero09,
  hero10,
  hero11,
}
