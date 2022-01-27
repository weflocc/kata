import React from 'react'
import { Flex, Grid, Card, Text } from '@sanity/ui'

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

const TablePreview = ({ value }) => {
  const { table } = value
  console.log(table)
  return (
    <Flex justify={'center'}>
      <Grid columns={table.rows[0].cells.length} padding={3}>
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
    </Flex>
  )
}

export default {
  title: 'Table',
  name: 'tablePreview',
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
    component: TablePreview,
  },
}
