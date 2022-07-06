import React from 'react'
 import '../../style/style.scss'
 import Button from '../multipleButton/MultipleButton'
 import BottomText from '../../components/multipleText/BottomText'
import { Link } from 'react-router-dom'
export default function checkBoxContent() {
  return (
    
    <div className="login-main">
        <div className='login-main-check-box'>
        <p className='checkMainTitle'>Check Your Inbox!</p>
        <p className='checkBoxText'>Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.</p>
       <Link to='/loginCheck'>
        <Button content='Return to Login'/>
        </Link>
        </div>
        <div  className='text'>
             <BottomText/>
             </div>
    </div>
    
  )
}
