import React from 'react'
import CardItem from './CartItem'

function CartSummary() {
  return (
    <div className='w-1/3 bg-orange-100' >
      <h2>Cart Item :</h2>
      <CardItem />
    </div>
  )
}

export default CartSummary