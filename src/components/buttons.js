import React from 'react'
import { Container, Inline, Button } from '@sanity/ui'
import { BiLink, BiLinkExternal } from 'react-icons/bi'
import { GoFileSymlinkFile } from 'react-icons/go'
import { links } from 'part:@weflocc/kata/partials/links'
import InfoToolTip from './InfoTooltip'

// function linkType(type) {
//     if type
// }

const ButtonsPreview = ({ value }) => {
  const links = { ...value }
  delete links._type
  //create an object with icon values
  const icons = {
    internal: BiLink,
    external: BiLinkExternal,
    file: GoFileSymlinkFile,
  }
  return (
    <InfoToolTip>
      <Container padding={3} style={{ textAlign: 'center' }}>
        <Inline space={[3, 3, 4]}>
          {Object.values(links).map((element) => {
            if (element) {
              return (
                <Button
                  key={element._key}
                  padding={4}
                  mode="ghost"
                  icon={icons[element.linkType]}
                  text={element.linkText ? element.linkText : '...'}
                />
              )
            }
          })}
        </Inline>
      </Container>
    </InfoToolTip>
  )
}

export default {
  title: 'Buttons',
  name: 'buttons',
  type: 'object',
  fields: [links()],
  preview: {
    select: {
      link1: 'links.0',
      link2: 'links.1',
      link3: 'links.2',
      link4: 'links.4',
    },
    component: ButtonsPreview,
  },
}
