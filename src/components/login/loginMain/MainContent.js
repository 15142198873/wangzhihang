import '../../../style/style.scss'
import InputComponent from './InputComponent'
import MainTitle from './MainTitle'
import Multiple from '../../multipleButton/MultipleButton'
import Vectors from '../../multipleButton/Vectors'
import BottomText from '../../multipleText/BottomText'
import { Link } from 'react-router-dom'
export default function MainContent() {
  return (
    <div className="login-main">
    <div className='login-main-box'>
      <MainTitle />
      <InputComponent place='  Enter Your Email' content='Email'/>
      <Link to='forgetPassword'>
      <p className='forgot-password'>Forgot password?</p>
      </Link>
      <InputComponent place='  Enter Your Password' content='Password' type='password'/>

     
      <Multiple content='Login'/>
    
      <Vectors/>
      
    </div>
    <div className='login-main-bottom-text'>
    <p className='login-main-bottom-text-left'> New to Perform Life?</p> 
    <Link to='register'>
    <p className='login-main-bottom-text-right'>Create an account</p>
    </Link>
    </div>
    <BottomText/>
</div>
  )
}
