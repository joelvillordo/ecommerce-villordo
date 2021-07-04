import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import img from "./logo.png";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src={img} className="logo" alt="logo" />
      </Link>
      <div>
        <ButtonGroup aria-label="outlined primary button group">
          <Link to="/pc" classname="Link">
            <Button variant="contained">PC</Button>
          </Link>
          <Link to="notebooks" classname="Link">
            <Button variant="contained">Notebooks</Button>
          </Link>
          <Link to="lcd" classname="Link">
            <Button variant="contained">Monitores</Button>
          </Link>
          <Link to="accessories" classname="Link">
            <Button variant="contained">Accesorios</Button>
          </Link>
          <Link to="videocard" classname="Link">
            <Button variant="contained">Placas de video</Button>
          </Link>
          <Link>
            <Button variant="contained" classname="Link">
              <CartWidget />
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default NavBar;
