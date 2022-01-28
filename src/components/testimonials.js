import React from 'react'
import { Card, Stack, Text, Container } from '@sanity/ui'
import InfoToolTip from './InfoTooltip'

const TestimonialsPreview = ({ value }) => {
  const { testimonialsParent } = value
  const testimonials = testimonialsParent.testimonials

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
                    >{`"${element.quote}"`}</Text>
                    <Text muted size={[1, 1, 2]}>
                      {'- ' + element.name}
                    </Text>
                  </Stack>
                </Card>
              )
            }
          })}
        </Stack>
      </Container>
    </InfoToolTip>
  )
}

export default {
  title: 'Testimonials',
  name: 'testimonials',
  type: 'object',
  fields: [
    {
      name: 'testimonial04',
      title: 'Testimonials',
      type: 'testimonial04',
      options: {
        collapsible: false,
      },
    },
  ],
  preview: {
    select: {
      testimonialsParent: 'testimonial04',
    },
    component: TestimonialsPreview,
  },
}
