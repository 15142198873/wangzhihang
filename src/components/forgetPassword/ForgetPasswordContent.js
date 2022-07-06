import React from 'react'
import '../../style/style.scss'
import BackLogin from '../../image/backLogin.png'
import PasswordMainTitle from './PasswordMainTitle'
import InputComponent from '../login/loginMain/InputComponent'
import MultipleButton from '../multipleButton/MultipleButton'
import BottomText from '../../components/multipleText/BottomText'
export default function ForgetPasswordContent(props) {
  return (
    <div>
         <div className="login-main">
             <div className='login-main-box-forgetPassword'>
                <img src={BackLogin} alt='' className='backLogin'/>
                <div className='line'></div>
                <PasswordMainTitle/>
                <p className='passwordMainText'>Enter your email address and we will send you a link to reset your password.</p>
                <InputComponent content='Email' place='Enter Your Email' type='text'/>
                <MultipleButton content='Reset My Password'/>
                
             </div>
             <div  className='text'>
             <BottomText/>
             </div>
        </div>
    
    </div>
  )
}
