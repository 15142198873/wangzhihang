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
        <p className='checkMainTitle'>Create an account</p>
            <InputComponent place='Enter Your Email' content='Email'/>
      
            <InputComponent place='Enter Your Password' content='Password' type='password'/>
         
            <div className='checkInput'>
            <InputComponent place='Confirm Your Password'  type='password'/>
            </div>
            <Link to='/login'>
            <Button content='Register'/>
            </Link>
            <Vectors/>
        </div>
        <div className='loginMainBottomText'>         
           <p className='loginMainBottomTextLeft'>Already have an account?</p> 
           <Link to='login'>
           <p className='loginMainBottomTextRight'>Login here</p>   
           </Link>
        </div>
       
             <BottomText/>
       
    </div>
    
  )
}
