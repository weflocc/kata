const title = {
  name: 'title',
  type: 'string',
}

const location = {
  title: 'Location',
  name: 'location',
  type: 'geopoint',
  validation: (Rule) => Rule.required('Please enter a location.'),
}

const text = {
  title: 'Text',
  name: 'text',
  type: 'text',
  rows: 4,
}

const address = {
  title: 'Address',
  name: 'address',
  type: 'text',
  rows: 4,
}
const openingTimes = {
  title: 'Opening Times',
  name: 'openingTimes',
  type: 'text',
  rows: 4,
}

const website = {
  name: 'website',
  type: 'url',
}

const websiteText = {
  name: 'websiteText',
  type: 'string',
  title: 'Website Text to show on the site',
}

const email = {
  name: 'email',
  type: 'string',
}

const telephone = {
  name: 'telephone',
  type: 'string',
}

const thanks = {
  name: 'thanks',
  type: 'string',
  title: 'Thanks text',
}

export {
  title,
  location,
  text,
  email,
  website,
  websiteText,
  address,
  telephone,
  thanks,
  openingTimes,
}
