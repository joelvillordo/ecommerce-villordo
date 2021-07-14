import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./NavBar.css";

function CartWidget() {
  const cartContent = useContext(CartContext).cart.length;

  return (
    <div className="cart">
      <ShoppingCartIcon fontSize="large" />
      <p>{cartContent}</p>
    </div>
  );
}

export default CartWidget;
