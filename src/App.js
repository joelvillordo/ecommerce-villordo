import React from "react";
import "./App.css";
//Componentes
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
//reac router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CheckoutContainer from "./components/Checkout/CheckoutContainer";
import Success from "./components/Checkout/Success";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <div>
            <Switch>
              <Route path="/" exact component={ItemListContainer} />
              <Route
                path="/category/:categoryName"
                component={ItemListContainer}
              />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={CheckoutContainer} />
              <Route path="/success" component={Success} />
            </Switch>
          </div>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
