import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { db } from "../../firebase";
//Loader
import CircularProgress from "@material-ui/core/CircularProgress";

//Aca deberia recibir la data desde el id donde se hace click para pasarla al ItemDetail
const ItemDetailContainer = ({ match }) => {
  //Tomo el id del item clickeado
  let id = match.params.id;
  //Tomo los productos de la API
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await db.doc(id).get();
      setProduct({ id: res.id, ...res.data() });
    })();
  }, [id]);

  //Renderizado condicional para mostrar un loader
  if (product.length < 1) {
    return (
      <div className="ItemDetailContainer">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className="ItemDetailContainer">
        <ItemDetail product={product} />
      </div>
    );
  }
};

export default ItemDetailContainer;
