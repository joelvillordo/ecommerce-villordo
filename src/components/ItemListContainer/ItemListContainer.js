import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../ItemList/ItemList";
import { db } from "../../firebase";
//Loader
import CircularProgress from "@material-ui/core/CircularProgress";

function ItemListContainer() {
  //Api con productos, incluyendo filtrado por categoria, si no esta definida devuelve todos los productos
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  console.log(products);

  useEffect(() => {
    (async () => {
      let categoryItems = db;
      if (categoryName)
        categoryItems = db.where("category", "==", categoryName);
      const response = await categoryItems.get();
      setProducts(
        response.docs.map((item) => ({ id: item.id, ...item.data() }))
      );
    })();
  }, [categoryName]);

  //Renderizado condicional para mostrar un loader
  if (products.length < 1) {
    return (
      <div className="ItemListContainer">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className="ItemListContainer">
        <ItemList data={products} />
      </div>
    );
  }
}

export default ItemListContainer;
