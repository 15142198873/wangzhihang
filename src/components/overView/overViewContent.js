import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function overViewContent() {
    return (
        <Box className='over-outside'>
            <Box className='over-view-content'>
                <p className='details'>Details</p>
                <p className='performance-name'>Performance Name</p>
                <TextField  defaultValue="2020 DJ Equipment Review" />
                <Box className='content-text'>
                <span className='Description'>Description</span>
                <span className='Description-right'>0/400</span>
                </Box>
                <Box className='content'>
                  <TextField placeholder='Provide a summary of your performance'/>
                </Box>
                <Box className='content-text'>
                <span className='Description-data'>Data</span>
                <span className='Description-right-data'>Time</span>
                </Box>
                
            </Box>
        </Box>
    )
}
