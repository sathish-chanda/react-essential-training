import ShoppingCart from "./ShoppingCart"
import {useState} from "react";
const App = () => {
  const [showCart,setShowCart] = useState(true)

  const removeCart = () => {
    setShowCart(prev => !prev)
  }
  return (
    <>
      <div>
        <button onClick={removeCart}>{showCart ? 'Remove' : 'Show' } ShoppingCart</button>
      </div>
      {showCart && <ShoppingCart />}
    </>
  )

}

export default App
