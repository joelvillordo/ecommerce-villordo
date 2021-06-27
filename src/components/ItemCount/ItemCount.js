import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./ItemCount.css";

function ItemCount({ title, stock }) {
  const [unit, setUnit] = useState(0);
//Solo funciona hasta que llega al limite de stock que es pasado por props
  const handleAddItem = () => {
    if(unit<stock){
        setUnit(unit + 1);
    }
  };
//Solo funciona si las unidades son mayores a 0
  const handleDeleteItem = () => {
    if(unit>0){
        setUnit(unit - 1);
    }
  };
  return (
    <div className="itemCount">
      <h3>{title}</h3>
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
    </div>
  );
}

export default ItemCount;
