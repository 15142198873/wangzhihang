import React from 'react'
import Left from '../../image/left.png'
import Right from '../../image/right.png'
export default function liveTypeHeader() {
  return (
    <div>
        <div className='type-header'>
            <div className='typeName'>Live</div>
            <div className='view'>View All</div>
            <div className='lefe-and-right-logo'>
                <img src={Left} alt=''/>
                <img src={Right} alt=''/>
            </div>
        </div>
    </div>
  )
}

