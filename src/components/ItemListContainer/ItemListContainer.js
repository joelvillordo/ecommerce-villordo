import React, { useState, useEffect } from "react";
import "./ItemListContainer";
import ItemList from "../ItemList/ItemList";
import Container from "@material-ui/core/Container";
//Loader
import CircularProgress from "@material-ui/core/CircularProgress";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  //Api con productos de categoria Pc
  useEffect(() => {
    fetch(
      "https://joelvillordo.github.io/ecommerce-villordo/src/components/ItemList/products.json"
    )
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  //Loader
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="ItemList">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <Container>
        <ItemList data={products} />
      </Container>
    );
  }
}

export default ItemListContainer;
