import React from 'react'
import HomeLiveChildren from './homeLiveChildren'
import LiveVideo from '../../image/liveVideo.png'
export default function homeLive({img,content}) {
  return (   
        <div className='live-video'>
           <HomeLiveChildren img={LiveVideo} content='Top 10 DJ Equipment Picks!'/>
           <HomeLiveChildren img={LiveVideo} content='jkjk'/>
           <HomeLiveChildren img={LiveVideo} content='jkjk'/>
           <HomeLiveChildren img={LiveVideo} content='jkjk'/>
           <HomeLiveChildren img={LiveVideo} content='jkjk'/>
           
        </div>
  )
}
