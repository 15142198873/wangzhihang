import React from 'react'
import '../../style/style.scss'
export default function sidebarButton({img,content}) {
  return (
    <div>
        <div className='sidebar-button'>
            <div className='sidebar-button-logo'>
                <img src={img} alt='' className='sidebar-button-logo-image'/>
            </div>
            <div  className='sidebar-button-title'>
                <span className='sidebar-button-title'> {content}</span>
            </div>
        </div>
    </div>
  )
}
