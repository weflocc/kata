import React from 'react'
import {Card, Stack, Text, Container} from '@sanity/ui'
import InfoToolTip from './InfoTooltip'
import {media} from '../partials/media'
import { studioTheme, ThemeProvider } from "@sanity/ui";

const MediaPreview = () => {
  return (
    <ThemeProvider theme={studioTheme}>
      <InfoToolTip>
        <Container padding={3}>
          <p>Double click edit. (Media)</p>
        </Container>
      </InfoToolTip>
    </ThemeProvider>
  )
}

export default {
  name: 'mediaPreview',
  title: 'Media',
  type: 'object',
  fields: [
    {
      type: 'boolean',
      name: 'noCrop',
      title: 'Disable automatic scaling and cropping of this image?',
      description:
        'This only applies if you select image or image slideshow from the options below.',
      initialValue: false,
    },
    media(),
  ],
  preview: {
    select: {
      media: 'media',
    },
  },
  components: {
    preview: MediaPreview,
  },
}
