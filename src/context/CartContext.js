import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  //Setear el carrito
  const [cart, setCart] = useState([]);
  //Borrar carrito
  const clearCart = () => setCart([]);
  //Ver si el producto ya esta en el carrito
  const isInCart = (id) => cart.some((item) => item.id === id);
  //Logica para agregar producto al carrito, verificando si ya esta para solo modificar unidades
  const addItem = (item, quantity) => {
    //Primero miro si esta en el carrito
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        //Si ya esta solo sumo las cantidades a las ya añadidas
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCart(newCart);
    } else {
      //Si no esta, agrego el producto y las cantidades
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, clearCart, isInCart, addItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
