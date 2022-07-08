import React from 'react'
import Box from '@mui/material/Box';
import Header from './overViewHeader'
import LoginHeader from '../login/loginHeader/LoginHeader'
import OverViewContent from './overViewContent';
export default function overViewMain() {
  return (
    <>
    <LoginHeader/>
        <Header/>
        <OverViewContent/>
    </>
  )
}
