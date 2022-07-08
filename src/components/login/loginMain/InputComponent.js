import React from 'react'
import Box from '@mui/material/Box';
export default function InputComponent({content,place,type,value,email,password,registerEmail,registerPassword}) {
  return (
    <Box>
        <Box>
        <p className='input-title'>{content}</p>
         <input placeholder={place} className='input-component' type={type} onChange={email||password || registerEmail ||registerPassword} ></input> 
        </Box>
    </Box>
  )
}
