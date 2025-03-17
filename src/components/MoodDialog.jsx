import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { useMood } from '../context/useMood'

const moods = ['good', 'bad']

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value) => {
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Cual es tu mood Ari?</DialogTitle>
      <List sx={{ pt: 0 }}>
        {moods.map((mood) => (
          <ListItem disablePadding key={mood}>
            <ListItemButton onClick={() => handleListItemClick(mood)}>
              <ListItemText primary={mood} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
}

export default function MoodDialog () {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(moods[0])
  const { changeMood } = useMood()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value) => {
    setOpen(false)
    setSelectedValue(value)
    changeMood(value)
  }

  return (
    <div className='fixed left-10 bottom-10'>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="contained" onClick={handleClickOpen}>
        Change mood
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}
