import React from 'react'
import {Card, Heading, Container} from '@sanity/ui'
import { studioTheme, ThemeProvider } from "@sanity/ui";

const FeaturePreview = (value) => {
  const {feature} = value
  console.log(feature)

  return (
    <ThemeProvider theme={studioTheme}>
      <Container padding={3}>
        <p>Double click to add (Text &amp; Image)</p>
      </Container>
    </ThemeProvider>
  )
}

export default {
  name: 'textAndImage',
  title: 'Text & Image',
  type: 'object',
  fields: [
    {
      name: 'reversed',
      title: 'Reverse Columns',
      description:
        'By default, text is left and image is right. If you enable this field, the columns will be reversed.',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'noCrop',
      title: 'No Crop?',
      description:
        'By default, images are cropped to fit the height of the text. If you enable this field, the image will display at its initial aspect ratio.',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'feature',
      title: 'Text and Image',
      type: 'feature01',
    },
  ],
  preview: {
    select: {
      feature: 'feature',
    },
  },
  components: {
    preview: FeaturePreview,
  },
}
