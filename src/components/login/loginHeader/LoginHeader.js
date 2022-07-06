import React from 'react'
import '../../../style/style.scss'
// import Box from '@mui/material/Box';
import LoginHeaderMenu from './LoginHeaderMenu';
import LoginHeaderLogo from './LoginHeaderLogo';
import PerformLive from './PerformLive'
import HeaderInput from './HeaderInput';
import ShoppingCart from './ShoppingCart';
export default function LoginHeader() {
  return (
    <div className='header-outside'>
    <div className='login-header'>   
      <LoginHeaderMenu/>
      <LoginHeaderLogo/> 
      <PerformLive/>
      <HeaderInput/>
      <ShoppingCart/>
    </div>
    </div>
  )
}
