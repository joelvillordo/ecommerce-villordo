import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
//Loader
import CircularProgress from "@material-ui/core/CircularProgress";

//Aca deberia recibir la data desde el id donde se hace click para pasarla al ItemDetail
const ItemDetailContainer = ({ match }) => {
  //Tomo el id del item clickeado
  let item = match.params.id;
  //Tomo los productos de la API
  const [product, setProduct] = useState([]);

  //Loader
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("https://mocki.io/v1/9bb5ee34-92dd-4a14-a352-d515c3f0b7f9")
      .then((res) => res.json())
      .then((res) => setProduct(res[item]));
  }, []);

  console.log(product);

  if (loading) {
    return (
      <div className="ItemDetailContainer">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className="ItemDetailContainer">
        <ItemDetail data={product} />
      </div>
    );
  }
};

export default ItemDetailContainer;
