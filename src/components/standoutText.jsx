import React from 'react'
import { Card, Stack, Text, Container } from '@sanity/ui'
import InfoToolTip from './InfoTooltip'

const StandoutTextPreview = ({ value }) => {
  const { text, cite } = value
  if (text || cite) {
    return (
      <InfoToolTip>
        <Container padding={3}>
          <Card padding={4} shadow={1}>
            <Stack space={[3, 3, 4, 5]}>
              <Text size={[2, 2, 3, 4]} weight={'semibold'}>{`${text}`}</Text>
              <Text muted size={[1, 1, 2]}>
                {'- ' + cite}
              </Text>
            </Stack>
          </Card>
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

const standoutText = {
  name: 'standoutText',
  type: 'object',
  fields: [
    {
      type: 'text',
      name: 'text',
      title: 'Standout text',
    },
    {
      name: 'cite',
      title: 'Cite',
      type: 'string',
      instructions: 'Underneath the standout text',
    },
  ],
  preview: {
    select: {
      text: 'text',
      cite: 'cite',
    },
  },
  components: {
    preview: StandoutTextPreview,
  },
}

export { standoutText }
