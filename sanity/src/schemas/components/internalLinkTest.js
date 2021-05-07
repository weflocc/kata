// import {linkText, linkStyle} from '../partials/links'
// import {BiLink} from 'react-icons/bi'
import kataConfig from 'config:kata'

export default  {
  name: 'internalLinkTest',
  type: 'object',
  title: 'Internal Link Test',
  fields: [
    {
      name: 'internalLink',
      type: 'reference',
      to: kataConfig.allTypes
    },
  ],
}