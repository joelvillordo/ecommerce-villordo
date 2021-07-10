import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Button } from "@material-ui/core";

//Card de Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 10,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function ItemDetail({ product }) {
  const classes = useStyles();

  const [toCart, setToCart] = useState(false);

  const { addItem } = useContext(CartContext);
  const onAdd = (quantity) => {
    addItem(product, quantity);
    setToCart(true);
  };

  const cartContent = useContext(CartContext).cart;
  console.log(cartContent);

  return (
    <Card className={classes.root}>
      <CardHeader title={product.title} />
      <CardMedia
        className={classes.media}
        image={product.pictureUrl}
        title={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="black" component="p">
          {product.description}
        </Typography>
        <h3>{product.price}</h3>
      </CardContent>
      {toCart ? (
        <Link to="/cart">
          <Button to="/cart" color="primary" variant="contained">
            Terminá tu compra
          </Button>
        </Link>
      ) : (
        <ItemCount product={product} onAdd={onAdd} />
      )}
    </Card>
  );
}
