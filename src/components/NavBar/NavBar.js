import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import img from "./logo.png";
//CartContext para renderizado condicional del CartWidget
import { CartContext } from "../../context/CartContext";

function NavBar() {
  const cartContent = useContext(CartContext).cart;
  return (
    <div className="navBar">
      <NavLink to="/">
        <img src={img} className="logo" alt="logo" />
      </NavLink>
      <div className="navigation">
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid white",
            fontSize: "x-large",
          }}
          to="/category/pc"
          className="NavLink"
        >
          PC
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid white",
            fontSize: "x-large",
          }}
          to="/category/notebooks"
          className="NavLink"
        >
          Notebooks
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid white",
            fontSize: "x-large",
          }}
          to="/category/lcd"
          className="NavLink"
        >
          Monitores
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid white",
            fontSize: "x-large",
          }}
          to="/category/accessories"
          className="NavLink"
        >
          Accesorios
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid white",
            fontSize: "x-large",
          }}
          to="/category/videocard"
          className="NavLink"
        >
          Placas de video
        </NavLink>
        {cartContent.length < 1 ? null : (
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              border: "5px solid white",
              borderRadius: "50%",
            }}
            to="/cart"
          >
            <CartWidget />
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default NavBar;
