import React from 'react'
import { Card, Stack, Text, Container } from '@sanity/ui'
import InfoToolTip from './InfoTooltip'
import { media } from '../partials/media'

const MediaPreview = ({ value }) => {
  return (
    <InfoToolTip>
      <Container padding={3}>
        <p>Double click edit. (Media)</p>
      </Container>
    </InfoToolTip>
  )
}

export default {
  name: 'mediaPreview',
  title: 'Media',
  type: 'object',
  fields: [media()],
  preview: {
    select: {
      media: 'media',
    },
    component: MediaPreview,
  },
}
