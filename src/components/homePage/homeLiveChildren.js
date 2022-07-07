import React from 'react'
import '../../style/style.scss'
export default function homeLiveChildren({img,content}) {
  return (
    <div className='main-outside' >
         <div className='live-children'>
                <img src={img} alt=''/>
            </div>
            <p className='live-video-text'>{content}</p> 
    </div>
  )
}
