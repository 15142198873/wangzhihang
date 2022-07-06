
import React from 'react'
import Login from './components/login/loginHeader/LoginHeader'
import MainContent from './components/login/loginMain/MainContent'
import ForgetPasswordMain from './components/forgetPassword/ForgetPasswordMain'
import CheckBoxMain from './components/chexkBox/checkBoxMain'
import Register from './components/register/registerMain'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <>
      <div className='loginOutside'>
        <Router>
         <Routes>
            <Route path='/' element={<Login/>,<MainContent/>}/>
            <Route path='/forgetPassword' element={<ForgetPasswordMain/>} /> 
            <Route path='/register' element={ <Register/>} /> 
            <Route path='/checkBox' element={ <CheckBoxMain/>} /> 
            <Route path='/loginCheck' element={<Login/>,<MainContent/>}/>
            <Route path='/loginBack' element={<Login/>,<MainContent/>}/>
         </Routes>
        </Router>
      </div>
    </>
  )
}

