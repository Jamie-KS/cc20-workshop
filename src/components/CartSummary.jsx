import React from 'react'
import CardItem from './CartItem'

function CartSummary(props) {
  const {carts} = props
  return (
    <div className='w-1/3 bg-orange-100' >
      <h2>Cart Items :</h2>
      <CardItem />
    </div>
  )
}

export default CartSummary