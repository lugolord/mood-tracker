import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}))

export default function MoodGuide () {

  return (
    <Box 
      sx={{ 
        width: 100,
        position: 'fixed',
        bottom: 50,
        right: 50 
      }}
    >
      <Stack spacing={5}>
        <Tooltip title='todo bien 👍'>
          <Badge badgeContent={''} color="success"></Badge>
        </Tooltip>
        <Tooltip title='no me jodan 😠'>
          <Badge badgeContent={''} color="error"></Badge>
        </Tooltip>
      </Stack>
    </Box>
  )
}
