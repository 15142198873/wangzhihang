import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
export default function HeaderInput() {
  return (
    <Box className='header-input'>       
        <TextField id="outlined-basic"  variant="outlined" placeholder='Search'/>   
    </Box>
  )
}
