import React from 'react'
import '../../style/style.scss'
import LogoFirst from '../../image/logoFirst.png'
import logoSecond from '../../image/logoSecond.png'
import logoThird from '../../image/logoThird.png'
import logoForth from '../../image/logoForth.png'
import logoFifth from '../../image/logoFifth.png'
export default function Vectors() {
  return (
    <div className='Vector'>
        <p className='loginText'>Or continue with</p>
        <div className='loginLogoOutside'>
          <img src={LogoFirst} alt='' className='loginLogo'/> 
          <img src={logoSecond} alt='' className='loginLogo'/> 
          <img src={logoThird} alt='' className='loginLogo'/> 
          <img src={logoForth} alt='' className='loginLogo'/> 
          <img src={logoFifth} alt='' className='loginLogo'/> 
        </div>
    </div>
  )
}
