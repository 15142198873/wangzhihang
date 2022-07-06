import React from 'react'
import '../../style/style.scss'
import LoginHeaderMenu from '../login/loginHeader/LoginHeaderMenu';
import LoginHeaderLogo from '../login/loginHeader/LoginHeaderLogo';
import PerformLive from '../login/loginHeader/PerformLive'
import HeaderInput from '../login/loginHeader/HeaderInput';
import ShoppingCart from './homeCar'
import NewPerformance from './newPerformance';
export default function homeHeader() {
  return (
    <div className='header-outside'>
    <div className='login-header'>   
      <LoginHeaderMenu/>
      <LoginHeaderLogo/> 
      <PerformLive/>
      <HeaderInput/>
      <ShoppingCart/>
      <NewPerformance/>
    </div>
    </div>
  )
}
