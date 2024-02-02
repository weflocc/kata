import React from 'react'
import { Container, Grid, Card, Text } from '@sanity/ui'
import InfoToolTip from './InfoTooltip'

const superscriptRender = (props) => (
  <span style={{ fontSize: '10px', verticalAlign: 'top' }}>
    {props.children}
  </span>
)
const subscriptRender = (props) => (
  <span style={{ fontSize: '10px', verticalAlign: 'bottom' }}>
    {props.children}
  </span>
)

const TableRow = (props) => {
  const { items, cols } = props
  let cells = []
  for (let i = 0; i < cols; i++) {
    if (items[i]) {
      cells.push(
        <Card padding={3} shadow={1}>
          <Text>{items[i]}</Text>
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
  if (table) {
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
  } else {
    return (
      <InfoToolTip>
        <Container padding={3}></Container>
      </InfoToolTip>
    )
  }
}

export {superscriptRender, subscriptRender}

export default TablePreview
