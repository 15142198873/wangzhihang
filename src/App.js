
import React from 'react'
import ForgetPasswordMain from './components/forgetPassword/ForgetPasswordMain'
import CheckBoxMain from './components/chexkBox/checkBoxMain'
import Register from './components/register/registerMain'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/login/login'
import HomeMain from './components/homePage/homeMain'
import Lives from './components/homePage/lives'
export default function App() {
  return (
    <>
          <div className='login-outside'>
            {/* <Router>
            <Routes>
                <Route path='/forgetPassword' element={<ForgetPasswordMain/>} /> 
                <Route path='/register' element={ <Register/>} /> 
                <Route path='/checkBox' element={ <CheckBoxMain/>} /> 
                <Route path='/loginCheck' element={<Login/>}/>
                <Route path='/loginBack' element={<Login/>}/>
            </Routes>
            </Router> */}
            <Router>
            <Routes>
         
          <Route path='/lives' element={<Lives/>} /> 
          <Route path='/' element={<HomeMain/>} /> 
          </Routes>
            </Router> 
         </div>
    </>
  )
}

