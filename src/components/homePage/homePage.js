import React from 'react'
import LiveTypeHeader from './liveTypeHeader'
import LiveComponent from './liveComponent'
export default function homePage() {
  return (
    <div className='home-page'>
        
        <LiveTypeHeader  content='Live'/>
        <LiveComponent/>
        <LiveTypeHeader  content='Upcoming'/>
        <LiveComponent/>
        <LiveTypeHeader  content='Popular'/>
        <LiveComponent/>
    </div>
  )
}
