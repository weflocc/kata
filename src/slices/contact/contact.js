import {
  location,
  text,
  email,
  website,
  websiteText,
  address,
  telephone,
  thanks,
  openingTimes,
} from './contactFields'
import {
  defaultOptions,
  basicTextEditor,
} from 'part:@weflocc/kata/partials/index'
import { title } from '../shared'

const contact01 = {
  name: 'contact01',
  type: 'object',
  title: 'Contact #1',
  options: defaultOptions,
  fields: [title, basicTextEditor(), address, email, telephone, thanks],
}

const contact02 = {
  name: 'contact02',
  type: 'object',
  title: 'Contact #2',
  options: defaultOptions,
  fields: [
    title,
    location,
    basicTextEditor(),
    address,
    openingTimes,
    email,
    // website,
    // websiteText,
    telephone,
  ],
}

const contact03 = {
  name: 'contact03',
  type: 'object',
  title: 'Contact #3',
  options: defaultOptions,
  fields: [title, basicTextEditor(), address, email, telephone],
}

export { contact01, contact02, contact03 }
