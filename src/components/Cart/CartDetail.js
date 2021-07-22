import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
//Tabla de Material-UI para armar detalle del carrito
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CartDetail({ product }) {
  const classes = useStyles();
  //Me traigo el cartContext
  const cartContent = useContext(CartContext).cart;
  console.log(cartContent);
  //Handle para eliminar item del carrito
  const { deleteItem } = useContext(CartContext);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Detalle de tu compra
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio unitario</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartContent.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Avatar alt={product.title} src={product.pictureUrl} />
                {product.title}
              </TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">
                ${product.price.toLocaleString("es")}
              </TableCell>
              <TableCell align="right">
                ${(product.price * product.quantity).toLocaleString("es")}
              </TableCell>
              <TableCell align="right">
                <Button
                  id={product.id}
                  onClick={() => deleteItem(product.id)}
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  X
                </Button>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">
              $
              {cartContent
                .reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)
                .toLocaleString("es")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
