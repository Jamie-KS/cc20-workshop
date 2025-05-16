import Header from "./components/Header"
import ProductList from "./components/ProductList"
import CartSummary from './components/CartSummary'
import { useState } from "react"

function App() {
  const [carts, setCarts] = useState([])


  return (
    
      <div className="h-screen flex flex-col">
          <Header itemCount={carts.length} />
          <div className="flex flex-1">
            <ProductList />
            <CartSummary  carts={carts}/>
          </div>
      </div>
  )
}

export default App
