import React from 'react'
import Cart from '../../../image/shoppingCart.png'
import '../../../style/style.scss'
export default function ShoppingCart() {
  return (
    <div className='carOutside'>
        <img src={Cart} alt='' className='shoppingCart'/>
    </div>
  )
}
