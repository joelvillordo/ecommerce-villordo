import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { clearCart } = useContext(CartContext);

  console.log(useContext(CartContext).cart);
  return (
    <div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
