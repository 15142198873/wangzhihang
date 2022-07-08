import React from 'react'
import Button from '../multipleButton/MultipleButton'
import BottomText from '../../components/multipleText/BottomText'
import InputComponent from '../login/loginMain/InputComponent'
import '../../style/style.scss'
import Vectors from '../multipleButton/Vectors'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import store from '../../redux/store'
import { register } from '../../redux/action'
import Box from '@mui/material/Box';
export default function RegisterContent() {
  const [email,setEmails]=useState('');
  const [password,setPassword]=useState('');
  function registerEmail(e){
    setEmails(e.target.value)
  }
  function registerPassword(e){
    setPassword(e.target.value)
  }
  function onClick(){
    console.log(1111)
    store.dispatch(register({password:password,email:email}))
  }
  return (
 
    <Box className="login-main">
        <Box className='login-main-register-box'>
        <p className='check-main-title'>Create an account</p>
            <InputComponent place='Enter Your Email' content='Email' registerEmail={registerEmail}/>
      
            <InputComponent place='Enter Your Password' content='Password' type='password' registerPassword={registerPassword}/>
         
            <Box className='check-input'>
            <InputComponent place='Confirm Your Password'  type='password'/>
            </Box>
            <Link to='/registerLogin'>
            <Button content='Register' onClick={onClick}/>
            </Link>
            <Vectors/>
        </Box>
        <Box className='login-main-bottom-text'>         
           <p className='login-main-bottom-text-left'>Already have an account?</p> 
           <Link to='registerLogin'>
           <p className='login-main-bottom-text-right'>Login here</p>   
           </Link>
        </Box>       
           <BottomText/>
       
    </Box>
    
  )
}
