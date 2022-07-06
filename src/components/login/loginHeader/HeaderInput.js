import React from 'react'
import TextField from '@mui/material/TextField';
import Magnifier from '../../../image/magnifier.png'
export default function HeaderInput() {
  return (
    <div className='header-input'>       
        <TextField id="outlined-basic"  variant="outlined" placeholder='Search'/>  
        {/* <img src={Magnifier} alt='' className='Magnifier'/>   */}       
    </div>
  )
}
