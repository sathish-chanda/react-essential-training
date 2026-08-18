const CartDetails = ({cart, prices, getTotal}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        padding: "1rem",
      }}>
        <h3 style={{
          fontSize: "1.125rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
        }}>Items in Cart</h3>
        {
          Object.keys(cart).length === 0 ? (
            <p style={{ color: "gray" }}>Your cart is empty.</p>
          ) : (
            <ul style={{ paddingLeft: "1.25rem" }}>
              {Object.entries(cart).map(([item, quantity]) => (
                <li key={item}>
                  {item}: {quantity} x {prices[item]*100}p
                </li>
              ))}
            </ul>
          )
        }
        <h3 style={{ marginTop: "1rem"}}>Total: ${getTotal()}</h3>
        <button style={{
          marginTop: "0.5rem",
          backgroundColor: "green",
          color: "white",
          padding: "0.5rem",
          border: "none",
          cursor: "pointer",
        }}>
        Checkout
        </button>
    </div>
  )
}

export default CartDetails;