import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
//REAC ROUTER DOM para generar un link al ItemDetail
import { Link } from "react-router-dom";

//Mapeo de todos los productos y devuelvo un componen Item con una vista de los mismos
function ItemList({ data }) {
  return (
    <div className="ItemList">
      {data.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/detail/${product.id}`}>
              <Item data={product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
