import React from 'react'
import Logo from '../../../image/headerLogo.png'
import '../../../style/style.scss'

export default function LoginHeaderLogo() {
  return (
    <div>
        <img src={Logo} className='login-header-logo' alt='' />
    </div>
  )
}


