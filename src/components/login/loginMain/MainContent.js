import '../../../style/style.scss'
import InputComponent from './InputComponent'
import MainTitle from './MainTitle'
import Multiple from '../../multipleButton/MultipleButton'
import Vectors from '../../multipleButton/Vectors'
import BottomText from '../../multipleText/BottomText'
export default function MainContent() {
  return (
    <div className="login-main">
    <div className='login-main-box'>
      <MainTitle />
      <InputComponent place='  Enter Your Email' content='Email'/>
      <p className='forgotPassword'>Forgot password?</p>
      <InputComponent place='  Enter Your Password' content='Password' type='password'/>
      <Multiple content='Login'/>
      <Vectors/>
      
    </div>
    <div className='loginMainBottomText'>
    <p className='loginMainBottomTextLeft'> New to Perform Life?</p> <p className='loginMainBottomTextRight'>Create an account</p>
   
    </div>
    <BottomText/>
</div>
  )
}
