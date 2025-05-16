import React from 'react'

function CartCount(props) {
  const {itemCount} = props
  return (
    <div>Cartcount : {itemCount}</div>
  )
}

export default CartCount
