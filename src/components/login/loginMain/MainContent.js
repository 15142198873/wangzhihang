import '../../../style/style.scss'
import InputComponent from './InputComponent'
import MainTitle from './MainTitle'
import Multiple from '../../multipleButton/MultipleButton'
import Vectors from '../../multipleButton/Vectors'
import BottomText from '../../multipleText/BottomText'
import { Link } from 'react-router-dom'
import store from '../../../redux/store'
import { useState ,useEffect} from 'react'
import { login } from '../../../redux/action'
import Box from '@mui/material/Box';
export default function MainContent() {
  const [emails,setEmails]=useState('');
  const [password,setPassword]=useState('');

  return (
    <Box className="login-main">
      <Box className='login-main-box'>
        <MainTitle />
        <InputComponent place='  Enter Your Email' content='Email'  email={email} />
        <Link to='forgetPassword'>
          <p className='forgot-password'>Forgot password?</p>
        </Link>
        <InputComponent place='  Enter Your Password' content='Password' type='password'  password={passwords} />
        <Link to={store.getState().paths}>
          <Multiple content='Login' onClick={submit}/>
        </Link>
        <Vectors />
      </Box>
      <Box className='login-main-bottom-text'>
        <p className='login-main-bottom-text-left'> New to Perform Life?</p>
        <Link to='register'>
          <p className='login-main-bottom-text-right'>Create an account</p>
        </Link>
      </Box>
      <BottomText />
    </Box>
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
