import {linkText, linkStyle} from '../partials/links'

import {BiLink} from 'react-icons/bi'
import {GiPartyFlags} from 'react-icons/gi'
import {FaHotel, FaHome} from 'react-icons/fa'
import {MdLocalHotel} from 'react-icons/md'

const allTypesFallback = [
  {type: 'page'}
  // {type: 'pageStaycations', icon: FaHotel},
  // {type: 'pageWeddings', icon: GiPartyFlags},
  // {type: 'pageHub', icon: FaHome},
  // {type: 'pageCambridgeHotel', icon: MdLocalHotel}
]

const internalLink = (allTypes = allTypesFallback) => {
  return {
    name: 'internalLink',
    type: 'object',
    title: 'Internal Link',
    fields: [
      {
        name: 'internalLink',
        type: 'reference',
        to: allTypes
      },
      linkText,
      linkStyle
    ],
    preview: {
      select: {
        title: 'linkText',
        subtitle: 'internalLink.title'
      },
      prepare (selection) {
        const {title, subtitle} = selection
        return {
          title: title,
          subtitle: subtitle,
          media: BiLink
        }
      }
    }
  }
}

export {internalLink}