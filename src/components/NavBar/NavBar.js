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
            borderBottom: "5px solid white",
            fontSize: "x-large",
            transition: "0.2s",
          }}
          to="/category/pc"
          className="NavLink"
        >
          PC
        </NavLink>
        <NavLink
          activeStyle={{
            borderBottom: "5px solid white",
            fontSize: "x-large",
            transition: "0.2s",
          }}
          to="/category/notebooks"
          className="NavLink"
        >
          Notebooks
        </NavLink>
        <NavLink
          activeStyle={{
            borderBottom: "5px solid white",
            fontSize: "x-large",
            transition: "0.2s",
          }}
          to="/category/lcd"
          className="NavLink"
        >
          Monitores
        </NavLink>
        <NavLink
          activeStyle={{
            borderBottom: "5px solid white",
            fontSize: "x-large",
            transition: "0.2s",
          }}
          to="/category/accessories"
          className="NavLink"
        >
          Accesorios
        </NavLink>
        <NavLink
          activeStyle={{
            borderBottom: "5px solid white",
            fontSize: "x-large",
            transition: "0.2s",
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
              border: "2px solid white",
              borderRadius: "50%",
              transition: "0.3s",
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
