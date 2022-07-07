import React from 'react'
import LiveTypeHeader from './liveTypeHeader'
import LiveComponent from './liveComponent'
import '../../style/style.scss'
export default function details() {
  return (
    <div  className='home-page'>
        <LiveTypeHeader  content='Live'/>
        <LiveComponent/>
    </div>
  )
}
