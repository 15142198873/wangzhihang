import '../../../style/style.scss'
import InputComponent from './InputComponent'
import MainTitle from './MainTitle'
import Multiple from '../../multipleButton/MultipleButton'
import Vectors from '../../multipleButton/Vectors'
export default function MainContent() {
  return (
    <div className="login-main">
    <div className='login-main-box'>
      <MainTitle/>
      <InputComponent place='Enter Your Email' content='Email'/>
      <InputComponent place='Enter Your Password' content='Password'/>
      <Multiple content='Login'/>
      <Vectors/>
      
    </div>
</div>
  )
}
