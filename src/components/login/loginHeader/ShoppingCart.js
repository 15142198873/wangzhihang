import React from 'react'
import Cart from '../../../image/shoppingCart.png'
import '../../../style/style.scss'
import Box from '@mui/material/Box';
export default function ShoppingCart() {
  return (
    <Box className='car-outside'>
        <img src={Cart} alt='' className='shopping-cart'/>
    </Box>
  )
}
