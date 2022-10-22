import React from "react"
import Inventory from "./Inventory";
import { useHistory } from 'react-router-dom';

const InventoryForm = () => {

  const history = useHistory();

  function addInventoryHandler(InventoryDetails){
    fetch('https://contact-us-bfcd2-default-rtdb.firebaseio.com/contact.json',
    {
     method:'POST',
     body:JSON.stringify(InventoryDetails),
     headers:{
            'Content-Type':'application/json'
     }
    }
    ).then(() => {
      history.replace('/');
    });
}
  return (
    <>
    
      <Inventory onAddInventory={addInventoryHandler}/>
    </>
  )
}

export default InventoryForm
