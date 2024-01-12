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
} from  '#partials'
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
    {
      name: 'what3Words',
      type: 'string',
      title: 'What 3 Words',
      description: 'Enter your three words here in the format one.two.three',
    },
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
