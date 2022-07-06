import React, { Component } from 'react'
import '../../style/style.scss'
import SidebarContent from './sidebarContent'
export default class sidebar extends Component {
  render() {
    return (
      <div>
         <div className='sidebar'>
            <SidebarContent/>
         </div>
      </div>
    )
  }
}
