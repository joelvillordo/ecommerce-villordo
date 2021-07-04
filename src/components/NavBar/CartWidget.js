import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./NavBar.css";

function CartWidget() {
  return (
    <div className="cart">
      <ShoppingCartIcon fontSize="large" />
    </div>
  );
}

export default CartWidget;
