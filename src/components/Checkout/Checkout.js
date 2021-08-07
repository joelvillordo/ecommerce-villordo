import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css";
import { db } from "../../firebase";
//Inputs de Form de Material-UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Checkout = ({ sendOrder }) => {
  //Me traigo el cartContext y los datos del pedido
  const cartContent = useContext(CartContext).cart;
  const { clearCart } = useContext(CartContext);
  //Detalle de items agregados
  const cartData = cartContent.map((item) => ({
    title: `${item.title}`,
    id: `${item.id}`,
    price: `${item.price}`,
    quantity: `${item.quantity}`,
  }));
  //Total del carrito
  const totalCart = cartContent
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toLocaleString("es");
  //Logica para obtener la fecha del pedido
  const getOrderDate = () => {
    let newDate = new Date();

    return newDate.toLocaleDateString("es");
  };
  const orderDate = getOrderDate();
  //Logica del formulario para enviar orden a Firebase
  const initialState = {
    client: "",
    contact: "",
    email: "",
  };
  //Actualizacion de Stock en Firebase
  const updateStock = () => {
    cartContent.forEach((item) => {
      db.doc(item.id).update({
        stock: item.stock - item.quantity,
      });
    });
  };

  const [buyer, setBuyer] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  useEffect(() => {});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    sendOrder({ buyer, cartData, orderDate, totalCart });
    setBuyer({ ...initialState });
    updateStock();
    clearCart();
  };
  return (
    <form className="Checkout" onSubmit={handleOnSubmit}>
      <TextField
        style={{ margin: 10 }}
        fullWidth
        required
        label="Nombre y Apellido"
        onChange={handleOnChange}
        name="client"
        value={buyer.client}
      />
      <TextField
        style={{ margin: 10 }}
        fullWidth
        required
        label="Teléfono de contacto"
        onChange={handleOnChange}
        name="contact"
        value={buyer.contact}
      />
      <TextField
        style={{ margin: 10 }}
        fullWidth
        required
        label="Email"
        onChange={handleOnChange}
        name="email"
        value={buyer.email}
      />
      <TextField
        style={{ margin: 10 }}
        fullWidth
        disabled
        label="Fecha"
        defaultValue={getOrderDate()}
      />
      <TextField
        style={{ margin: 10 }}
        fullWidth
        disabled
        label="Total de compra"
        defaultValue={totalCart}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
      >
        Enviar orden de compra
      </Button>
      <p>* Campo requerido</p>
    </form>
  );
};

export default Checkout;
