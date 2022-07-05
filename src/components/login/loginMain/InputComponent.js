import React from 'react'
import TextField from '@mui/material/TextField';
export default function InputComponent({content,place}) {
  return (
    <div>
        <div>
        <p className='inputTitle'>{content}</p>
         {/* <TextField id="outlined-basic"  variant="outlined" />  */}
         <input placeholder={place} className='inputComponent'></input> 
        </div>
    </div>
  )
}
