import React from 'react'
import Cart from '../../image/shoppingCart.png'
import '../../style/style.scss'
export default function ShoppingCart() {
  return (
    <div className='home-car-outside'>
        <img src={Cart} alt='' className='home-shopping-cart'/>
    </div>
  )
}
