import React from 'react'
import HomeHeader from './homeHeader'
import Sidebar from '../homePage/sidebarMain'
import TopButton from './homeTopButton'
import LiveTypeHeader from './liveTypeHeader'
import HomeLive from './homeLive'
import LiveVideo from '../../image/liveVideo.png'
import HomeLiveChildren from './homeLiveChildren'
export default function home() {
  return (
    <div>
        <HomeHeader/>
        <Sidebar/>
        <TopButton/>
        
        <LiveTypeHeader/>
        <HomeLive img={LiveVideo} content='Top 10 DJ Equipment Picks!'/>
       
    </div>
  )
}
