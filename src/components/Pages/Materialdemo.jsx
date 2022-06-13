import React from 'react'
import { AppBar, Button, Typography } from '@mui/material'
const Materialdemo = () => {
  return (
    <>
      <AppBar color='primary.dark'>
        <Typography variant='h2' textAlign={'center'} color={'secondary'}>
          Appbar heading
        </Typography>
        </AppBar>
        <Button>hi</Button>
    </>
  )
}

export default Materialdemo
