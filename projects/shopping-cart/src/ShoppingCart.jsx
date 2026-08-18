import { useState } from "react";
import CartDetails from "./CartDetails";
import AddButton from "./AddButton";
const ShoppingCart = () => {
  const [cart, setCart] = useState({})
  const prices = {"Orange": 0.3, "Banana": 0.35, "Apple": 0.5}

  const getTotal = () => {
    return Object.entries(cart)
      .reduce((total, [item, quantity]) => {
        return total + prices[item] * quantity;
      }, 0)
      .toFixed(2);
  }
  
  console.log(getTotal())

  const addItem = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item]: (prevCart[item] || 0) + 1,
    }))
  }
  return (
    <div style={{ padding: "1rem", maxWidth: "400px", margin: "auto"}}>
      <h2 style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem", }}>Shopping Cart</h2>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem"}}>
           <AddButton item="Orange" prices={prices} color="orange" addItem={addItem} />
           <AddButton item="Banana" prices={prices} color="yellow" addItem={addItem} textColor="black"/>
           <AddButton item="Apple" prices={prices} color="red" addItem={addItem} />
      </div>
      <CartDetails cart={cart} prices={prices} getTotal={getTotal} />
    </div>
  )
}

export default ShoppingCart;