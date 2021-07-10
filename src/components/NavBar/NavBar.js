import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import img from "./logo.png";

function NavBar() {
  return (
    <div className="navBar">
      <NavLink to="/">
        <img src={img} className="logo" alt="logo" />
      </NavLink>
      <div className="navigation">
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid black",
            fontSize: "x-large",
          }}
          to="/category/pc"
          classname="NavLink"
        >
          PC
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid black",
            fontSize: "x-large",
          }}
          to="/category/notebooks"
          classname="NavLink"
        >
          Notebooks
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid black",
            fontSize: "x-large",
          }}
          to="/category/lcd"
          classname="NavLink"
        >
          Monitores
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid black",
            fontSize: "x-large",
          }}
          to="/category/accessories"
          classname="NavLink"
        >
          Accesorios
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid black",
            fontSize: "x-large",
          }}
          to="/category/videocard"
          classname="NavLink"
        >
          Placas de video
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            borderBottom: "5px solid black",
            fontSize: "x-large",
          }}
          to="/cart"
        >
          <CartWidget />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
