import config from 'config:kata'
const allTypes = config.allTypes.map( (item) => {
  return {
    type: item
  }
})

const camelCase = require('lodash.camelcase')

export default function internalLink(name = 'internalLink') {
  return {
      name: name,
      type: 'reference',
      to: allTypes
  }
}
