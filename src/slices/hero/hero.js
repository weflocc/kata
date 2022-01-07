import { title, text, superHeading } from './heroFields'
import { links } from 'part:@weflocc/kata/partials/links'
import { media } from 'part:@weflocc/kata/partials/media'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'
import { basicTextEditor } from 'part:@weflocc/kata/partials/textEditor'

const hero01 = {
  name: 'hero01',
  type: 'object',
  title: 'Hero #1',
  options: defaultOptions,
  fields: [media(), superHeading, title, basicTextEditor, links()],
}

const hero02 = {
    name: 'hero02',
    type: 'object',
    title: 'Hero #2',
    options: defaultOptions,
    fields: [media(), superHeading, title, links()],
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
  fields: [media(), superHeading, title, text, links()],
}

const hero06 = {
  name: 'hero06',
  type: 'object',
  title: 'Hero #6',
  options: defaultOptions,
  fields: [media(), superHeading, title, text, links()],
}

const hero09 = {
  name: 'hero09',
  type: 'object',
  title: 'Hero #9',
  options: defaultOptions,
  fields: [media(), superHeading, title, text, links()],
}

const hero10 = {
  name: 'hero10',
  type: 'object',
  title: 'Hero #10',
  options: defaultOptions,
  fields: [media(), superHeading, title, text, links()],
}

const hero11 = {
  name: 'hero11',
  type: 'object',
  title: 'Hero #11',
  options: defaultOptions,
  fields: [
    title,
    text,
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

export { hero01, hero02, hero04, hero05, hero06, hero09, hero10, hero11 }
