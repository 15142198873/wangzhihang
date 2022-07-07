import React from 'react'
import HomeHeader from './homeHeader'
import Sidebar from '../homePage/sidebarMain'
import TopButton from './homeTopButton'
import HomeLiveDetails from './homeLiveDetails'
import HomePage from './homePage'
export default function home() {
  return (
    <div>
        <HomeHeader/>
        <Sidebar/>
        <TopButton/>
        <HomeLiveDetails/>
        <HomePage/>
    </div>
  )
}
