import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";
import { Button } from "@material-ui/core";

const Cart = () => {
  const { clearCart } = useContext(CartContext);
  const cartContent = useContext(CartContext).cart;
  return (
    <>
      {cartContent.length < 1 ? (
        <div>
          <h2>¡Aun no has elegido tus productos!</h2>
          <Link to="/">
            <Button variant="contained" color="primary">
              Volver al inicio
            </Button>
          </Link>
        </div>
      ) : (
        <div className="cartDetail">
          <CartDetail />
          <Link to="/checkout">
            <Button
              style={{ marginTop: "20px" }}
              variant="contained"
              color="primary"
            >
              Finalizar compra
            </Button>
          </Link>
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            color="secondary"
            onClick={clearCart}
          >
            Eliminar todo
          </Button>
        </div>
      )}
    </>
  );
};

export default Cart;
