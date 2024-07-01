import React from 'react'
import { Container, Inline, Button } from '@sanity/ui'
import { BiLink, BiLinkExternal } from 'react-icons/bi'
import { GoFileSymlinkFile } from 'react-icons/go'
import { links } from '#partials'
import InfoToolTip from './InfoTooltip'

const ButtonsPreview = (value) => {
  const { links } = value
  //create an object with icon values
  // add lightbox buttons and other link types here
  const icons = {
    internalLink: BiLink,
    externalLink: BiLinkExternal,
    fileLink: GoFileSymlinkFile,
  }
  if (links) {
    return (
      <InfoToolTip>
        <Container padding={3} style={{ textAlign: 'center' }}>
          <Inline space={[3, 3, 4]}>
            {links.map((element) => {
              if (element) {
                return (
                  <Button
                    key={element._key}
                    padding={4}
                    mode="ghost"
                    icon={icons[element._type]}
                    text={element.linkText ? element.linkText : '...'}
                  />
                )
              }
            })}
          </Inline>
        </Container>
      </InfoToolTip>
    )
  } else {
    return (
      <InfoToolTip>
        <Container padding={3} style={{ textAlign: 'center' }}></Container>
      </InfoToolTip>
    )
  }
}

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  description: 'Add one or two call-to-action links',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      validation: (Rule) =>
        Rule.max(2).warning('The maximum number of CTAs on this slice is 2'),
      editModal: 'popover',
      of: [
        { type: 'internalLink' },
        { type: 'fileLink' },
        { type: 'externalLink' },
      ],
    },
  ],
  preview: {
    select: {
      links: 'link',
    },
  },
}
