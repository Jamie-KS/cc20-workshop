import React ,{ useState }from 'react'
import ProductCard from './ProductCard'

function ProductList() {
const [product, setProduct] = useState([])
  return (
    <div className='w-2/3 bg-blue-400'>
      <h2>Product</h2>
      <ProductCard />
      </div>
  )
}

export default ProductList