import React from "react"

import Order from "./Order";
// import { useHistory } from 'react-router-dom';

const OrderForm= () => {

  // const history = useHistory();

  function addOrderHandler(OrderDetails){
    fetch('https://localshop-bbbe2-default-rtdb.firebaseio.com/order.json',
    
    {
     method:'POST',
     body:JSON.stringify(OrderDetails),
     headers:{
            'Content-Type':'application/json'
     }
    }
    ).then(() => {
      // history.replace('/');
    });
}
  return (
    <>
      
      <Order onAddOrder={addOrderHandler}/>
    </>
  )
}

export default OrderForm
