
import React from 'react'
import LoginHeader from './components/login/loginHeader/LoginHeader'
import MainContent from './components/login/loginMain/MainContent'
import ForgetPasswordMain from './components/forgetPassword/ForgetPasswordMain'
export default function App() {
  return (
    <div>
      <div className='loginOutside'>
      {/* <LoginHeader/>
      <MainContent/> */}
    <ForgetPasswordMain/>
      </div>
    </div>
  )
}

