import { CircularProgress } from "@material-ui/core";
import React from "react";
import img from "./compraExitosa.jpg";
import "./Checkout.css";

const Success = ({ data }) => {
  return (
    <>
      {!data ? (
        <CircularProgress />
      ) : (
        <div className="success">
          <img src={img} alt="compra enviada" />
          <h3>¡Muchas gracias por elegirnos!</h3>
          <p>El ID de tu orden es: {data}</p>
        </div>
      )}
    </>
  );
};

export default Success;
