import * as React from 'react'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import src from '../assets/ari.jpeg'
import { motion } from "motion/react"
import { useMood } from '../context/useMood'

export default function UserAvatar () {
  const { mood } = useMood()

  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 30, -30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        mood={mood}
      >
        <Avatar alt="Remy Sharp" src={src} sx={{ width: 80, height: 80 }} title='ari' />    
      </StyledBadge>
      <p>ari</p>  
    </motion.div>
  )
}

const StyledBadge = styled(Badge)(({ theme, mood }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: `${mood === 'good' ? '#44b700' : 'red'}`,
    color: `${mood === 'good' ? '#44b700' : 'red'}`,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))
