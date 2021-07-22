import React, { useState } from "react";
import Checkout from "./Checkout";
import { dbOrders } from "../../firebase";
import Success from "./Success";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState();

  //Funcion para enviar los datos a la base
  const sendOrder = async (order) => {
    await dbOrders.doc().set(order);
    const orderId = dbOrders.doc(order.id).id;
    setOrderId(orderId);
  };
  return (
    <>
      {!orderId ? (
        <div>
          <Checkout sendOrder={sendOrder} />
        </div>
      ) : (
        <div>
          <Success data={orderId} />
        </div>
      )}
    </>
  );
};

export default CheckoutContainer;
