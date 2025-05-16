import React from 'react'
import CardCount from './CartCount'

function Header() {
  return (
    <div className='flex justify-between h-15 bg-info'>
      <div>
        Logo, Brand
      </div>
      < CardCount />
    </div>
  )
}

export default Header 