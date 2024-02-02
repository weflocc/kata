import React, { useState } from 'react'
import { Card, Heading, Container } from '@sanity/ui'
import { fullTextEditor } from '#partials'
import InfoToolTip from './InfoTooltip'

const AccordionPreview = ({ value }) => {
  const { accordions } = value

  if (accordions) {
    return (
      <InfoToolTip>
        <Container padding={3}>
          {accordions.items.map((element) => (
            <Card
              key={element._key}
              border
              marginTop={2}
              padding={4}
              radius={2}
            >
              <Heading>{element.title}</Heading>
            </Card>
          ))}
        </Container>
      </InfoToolTip>
    )
  } else {
    return (
      <InfoToolTip>
        <Container padding={3}>
          <p>Double click to add (Accordion)</p>
        </Container>
      </InfoToolTip>
    )
  }
}

export default {
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  fields: [
    {
      name: 'wrapper',
      title: 'Accordion Content',
      type: 'object',
      fields: [
        {
          name: 'items',
          type: 'array',
          of: [
            {
              name: 'accordionItem',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                },
                fullTextEditor(),
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      accordions: 'wrapper',
    },
  },
  components: {
    preview: AccordionPreview,
  },
}
