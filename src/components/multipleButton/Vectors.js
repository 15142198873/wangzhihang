import React from 'react'
import '../../style/style.scss'
import LogoFirst from '../../image/logoFirst.png'
import logoSecond from '../../image/logoSecond.png'
import logoThird from '../../image/logoThird.png'
import logoForth from '../../image/logoForth.png'
import logoFifth from '../../image/logoFifth.png'
import Box from '@mui/material/Box';
export default function Vectors() {
  return (
    <Box className='vector'>
        <p className='login-text'>Or continue with</p>
        <Box className='login-logo-outside'>
          <img src={LogoFirst} alt='' className='login-logo'/> 
          <img src={logoSecond} alt='' className='login-logo'/> 
          <img src={logoThird} alt='' className='login-logo'/> 
          <img src={logoForth} alt='' className='login-logo'/> 
          <img src={logoFifth} alt='' className='login-logo'/> 
        </Box>
    </Box>
  )
}
