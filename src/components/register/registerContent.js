import React from 'react'
import Button from '../multipleButton/MultipleButton'
import BottomText from '../../components/multipleText/BottomText'
import InputComponent from '../login/loginMain/InputComponent'
import '../../style/style.scss'
import Vectors from '../multipleButton/Vectors'
import { Link } from 'react-router-dom'
export default function registerContent() {
  return (
 
    <div className="login-main">
        <div className='login-main-register-box'>
        <p className='check-main-title'>Create an account</p>
            <InputComponent place='Enter Your Email' content='Email'/>
      
            <InputComponent place='Enter Your Password' content='Password' type='password'/>
         
            <div className='check-input'>
            <InputComponent place='Confirm Your Password'  type='password'/>
            </div>
            <Link to='/registerLogin'>
            <Button content='Register'/>
            </Link>
            <Vectors/>
        </div>
        <div className='login-main-bottom-text'>         
           <p className='login-main-bottom-text-left'>Already have an account?</p> 
           <Link to='registerLogin'>
           <p className='login-main-bottom-text-right'>Login here</p>   
           </Link>
        </div>       
           <BottomText/>
       
    </div>
    
  )
}
