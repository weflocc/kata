import React from 'react'
import { Card, Stack, Text, Container } from '@sanity/ui'
import InfoToolTip from './InfoTooltip'

const LogosPreview = ({ value }) => {
  const { cta07 } = value
  const testimonials = cta07?.list

  if (testimonials) {
    return (
      <InfoToolTip>
        <Container padding={3}>
          <Stack space={[2, 2, 3, 4]}>
            {testimonials.map((element) => {
              if (element) {
                return (
                  <Card key={element._key} padding={4} shadow={1}>
                    <Stack space={[3, 3, 4, 5]}>
                      <Text
                        size={[2, 2, 3, 4]}
                        weight={'semibold'}
                      >{`"${element.title}"`}</Text>
                    </Stack>
                  </Card>
                )
              }
            })}
          </Stack>
        </Container>
      </InfoToolTip>
    )
  } else {
    return (
      <InfoToolTip>
        <Container padding={3}>
          <p>Double click to add</p>
        </Container>
      </InfoToolTip>
    )
  }
}

export default {
  title: 'Logos',
  name: 'logos',
  type: 'object',
  fields: [
    {
      name: 'cta07',
      title: 'Logos',
      type: 'cta07',
      options: {
        collapsible: false,
      },
    },
  ],
  preview: {
    select: {
      cta07: 'cta07',
    },
    component: LogosPreview,
  },
}
