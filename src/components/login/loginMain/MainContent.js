import '../../../style/style.scss'
import InputComponent from './InputComponent'
import MainTitle from './MainTitle'
import Multiple from '../../multipleButton/MultipleButton'
import Vectors from '../../multipleButton/Vectors'
import BottomText from '../../multipleText/BottomText'
import { Link } from 'react-router-dom'
import store from '../../../redux/store'
import { useState } from 'react'
import { login } from '../../../redux/action'
import stores from '../../../redux/store'
export default function MainContent() {
  const [emails,setEmails]=useState('');
  const [password,setPassword]=useState('');
 
  return (
    <div className="login-main">
      <div className='login-main-box'>
        <MainTitle />
        <InputComponent place='  Enter Your Email' content='Email'  email={email} />
        <Link to='forgetPassword'>
          <p className='forgot-password'>Forgot password?</p>
        </Link>
        <InputComponent place='  Enter Your Password' content='Password' type='password'  password={passwords} />
        <Link to={stores.getState().paths}>
          <Multiple content='Login' onClick={submit}/>
        </Link>
        <Vectors />
      </div>
      <div className='login-main-bottom-text'>
        <p className='login-main-bottom-text-left'> New to Perform Life?</p>
        <Link to='register'>
          <p className='login-main-bottom-text-right'>Create an account</p>
        </Link>
      </div>
      <BottomText />
    </div>
  )
function email(e){
  console.log(e.target.value)
    setEmails(e.target.value)
 }
function passwords(e){
console.log(e.target.value)
setPassword(e.target.value)
 }
 function submit(){
   console.log(111)
  store.dispatch(login({password:password,email:emails}))
 }
} 
