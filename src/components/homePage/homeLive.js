import React from 'react'

export default function homeLive({img,content}) {
  return (
    <div>
        <div className='live-video'>
            <div >
                <img src={img} alt=''/>
            </div>
            <p className='live-video-text'>{content}</p>
        </div>
    </div>
  )
}
