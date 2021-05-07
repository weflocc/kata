import kataConfig from 'config:kata'

const camelCase = require('lodash.camelcase')

export default function internalLink(name = 'internalLink') {
  return {
      name: name,
      type: 'reference',
      to: kataConfig.allTypes
  }
}
