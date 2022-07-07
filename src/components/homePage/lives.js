import React from 'react'
import HomeHeader from './homeHeader'
import Sidebar from '../homePage/sidebarMain'
import TopButton from './homeTopButton'
import HomeLiveDetails from './homeLiveDetails'
import Details from './details'

export default function lives() {
  return (
    <div >
        <HomeHeader/>
        <Sidebar/>
        <TopButton/>
        <HomeLiveDetails/>
        <Details/>
    </div>
  )
}
