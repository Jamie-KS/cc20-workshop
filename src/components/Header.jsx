import React from 'react'
import CardCount from './CartCount'

function Header(props) {
  const {itemCount} = props
  return (
    <div className='flex justify-between h-15 bg-info'>
      <div>
        Logo, Brand
      </div>
      < CardCount itemCount={itemCount} />
    </div>
  )
}

export default Header 