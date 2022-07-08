import React from 'react'
import Box from '@mui/material/Box';
import Back from '../../image/overViewBack.png'
export default function overViewHeader() {
  return (
    <>
        <Box className='over-view-header'>
            <Box className='over-view-header-back'>
                <img src={Back} alt=''/>
            </Box>
            <Box className='over-view-header-title'>
                <p>Schedule a Performance</p>
            </Box>
            <Box className='over-view-header-title-right'>
                <p>Step 1 of 3</p>
            </Box>
        </Box>
    </>
  )
}
