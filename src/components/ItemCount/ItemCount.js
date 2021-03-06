import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./ItemCount.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function ItemCount({ stock, onAdd }) {
  const [unit, setUnit] = useState(1);
  //Solo funciona hasta que llega al limite de stock que es pasado por props, por ahora es un numero fijo
  const handleAddItem = () => {
    if (unit < stock) {
      setUnit(unit + 1);
    }
  };
  //Solo funciona si las unidades son mayores a 0
  const handleDeleteItem = () => {
    if (unit > 1) {
      setUnit(unit - 1);
    }
  };
  return (
    <div className="itemCount">
      <div>
        <Button
          onClick={handleDeleteItem}
          variant="contained"
          color="secondary"
        >
          -
        </Button>
        <p>{unit}</p>
        <Button onClick={handleAddItem} variant="contained" color="primary">
          +
        </Button>
      </div>
      <Button variant="contained" color="primary" onClick={() => onAdd(unit)}>
        Agregar al carrito
        <ShoppingCartIcon fontSize="small" />
      </Button>
    </div>
  );
}

export default ItemCount;
