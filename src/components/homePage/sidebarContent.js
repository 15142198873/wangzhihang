import React, { Component } from 'react'
import '../../style/style.scss'
import SidebarButton from './sidebarButton'
import BlackHome from '../../image/blackHome.png'
import Flame from '../../image/flame.png'
import Vcr from '../../image/vcr.png'
import Calendar from '../../image/calendar.png'
import Analytics from '../../image/analytics.png'
import Products from '../../image/products.png'
import Orders from '../../image/orders.png'
import Settings from '../../image/settings.png'
import Purchases from '../../image/Purchases.png'
import Payment from '../../image/payment.png'
import Photo from '../../image/photo.png'
import Move from '../../image/move.png'
import { Link } from 'react-router-dom'
export default class sidebarContent extends Component {
  render() {
    return (
      <div>
          <p className='sidebar-browse'>Browse</p>
          <Link to='/lives'>
          <SidebarButton img={BlackHome} content='Home'/>
          </Link>
          <SidebarButton img={Flame} content='Live'/>
          <SidebarButton img={Vcr} content='pcoming'/>
          <SidebarButton img={Calendar} content='Popular'/>
          <p className='sidebar-browse'>My Account</p>
          <SidebarButton img={Analytics} content='Analytics'/>
          <SidebarButton img={Products} content='Products'/>
          <SidebarButton img={Orders} content='Orders'/>
          <SidebarButton img={Settings} content='Popular'/>
          <p className='sidebar-browse'>SHOPPING</p>
          <SidebarButton img={Purchases} content='Purchases'/>
          <SidebarButton img={Payment} content='Payment'/>
          <div className='lifetime'>
            <p className='lifetime-title'>Your Lifetime Earnings</p>
            <p className='lifetime-money'>$335</p>
          </div>
          <div className='head-portrait'>
            <div className='photo'>
              <img src={Photo} alt=''/>
            </div>
            <span className='name'>Kenny Semba</span><br/>
            <span className='old'>13 Performances</span>
            <div className='move'>
              <img src={Move} alt=''/>
            </div>
          </div>
      </div>
    )
  }
}
