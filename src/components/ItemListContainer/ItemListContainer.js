import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ItemList from "../ItemList/ItemList";
//Loader
import CircularProgress from "@material-ui/core/CircularProgress";

function ItemListContainer() {
  //Api con productos, incluyendo filtrado por categoria, si no esta definida devuelve todos los productos
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);

  const inProgress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://mocki.io/v1/9bb5ee34-92dd-4a14-a352-d515c3f0b7f9"
      );
      if (!categoryName) return setProducts(data);
      const productsCategory = data.filter(
        (product) => product.category === categoryName
      );
      //Loading
      inProgress();
      setProducts(productsCategory);
    })();
  }, [categoryName]);

  //Loader
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    inProgress();
  }, []);

  if (loading) {
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
