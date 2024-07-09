import React from 'react'
import {Tooltip, Box, Text} from '@sanity/ui'
import { studioTheme, ThemeProvider } from "@sanity/ui";

const InfoToolTip = ({children, message = 'Double click to edit content'}) => {
  return (
    <ThemeProvider theme={studioTheme}>
      <Tooltip
        content={
          <Box padding={2}>
            <Text muted size={1}>
              {message}
            </Text>
          </Box>
        }
        fallbackPlacements={['right', 'left']}
        placement="top"
        portal
      >
        {children}
      </Tooltip>
    </ThemeProvider>
  )
}

export default InfoToolTip
