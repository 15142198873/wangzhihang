
import React from 'react'
import ForgetPasswordMain from './components/forgetPassword/ForgetPasswordMain'
import CheckBoxMain from './components/chexkBox/checkBoxMain'
import Register from './components/register/registerMain'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/login/login'
import HomeMain from './components/homePage/homeMain'
export default function App() {
  return (
    <>
          <div className='login-outside'>
            {/* <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/forgetPassword' element={<ForgetPasswordMain/>} /> 
                <Route path='/register' element={ <Register/>} /> 
                <Route path='/checkBox' element={ <CheckBoxMain/>} /> 
                <Route path='/loginCheck' element={<Login/>}/>
                <Route path='/loginBack' element={<Login/>}/>
            </Routes>
            </Router> */}
          <HomeMain/>
         </div>
    </>
  )
}

