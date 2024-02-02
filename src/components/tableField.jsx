import React from 'react'
import { Container, Grid, Card, Text } from '@sanity/ui'
import InfoToolTip from './InfoTooltip'

const TableRow = (props) => {
  const { items, cols } = props
  let cells = []
  for (let i = 0; i < cols; i++) {
    if (items[i]) {
      cells.push(
        <Card padding={3} shadow={1}>
          <Text weight={i === 0 ? 'semibold' : 'regular'}>{items[i]}</Text>
        </Card>
      )
    } else {
      cells.push(<Card padding={3} shadow={1}></Card>)
    }
  }
  return cells
}

export const TablePreview = ({ value }) => {
  const { table } = value
  if (table && table.rows.length) {
    return (
      <InfoToolTip>
        <Container padding={3}>
          <Grid columns={table.rows[0].cells.length}>
            {table.rows.map((element) => {
              return (
                <TableRow
                  cols={table.rows[0].cells.length}
                  items={element.cells}
                  key={element._key}
                />
              )
            })}
          </Grid>
        </Container>
      </InfoToolTip>
    )
  }
  return (
    <InfoToolTip>
      <Container padding={3}>
        <p>Double click to add.</p>
      </Container>
    </InfoToolTip>
  )
}

export default {
  title: 'Table',
  name: 'tableField',
  type: 'object',
  fields: [
    {
      name: 'table',
      type: 'table',
    },
  ],
  preview: {
    select: {
      table: 'table',
    },
  },
  components: {
    preview: TablePreview,
  },
}
