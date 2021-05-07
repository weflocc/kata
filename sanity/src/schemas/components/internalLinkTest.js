// import {linkText, linkStyle} from '../partials/links'
// import {BiLink} from 'react-icons/bi'
import config from 'config:kata'
const allTypes = config.allTypes.map( (item) => {
  return {
    type: item
  }
})

export default  {
  name: 'internalLinkTest',
  type: 'object',
  title: 'Internal Link Test',
  fields: [
    {
      name: 'internalLink',
      type: 'reference',
      to: allTypes
    },
  ],
}