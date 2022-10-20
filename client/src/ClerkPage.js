import React from 'react'
import {useState,useEffect} from "react"
import Table from './Table';


const initialState = {
  name: "",
  quantity: "",
  inStock: "",
  spoilt: "",
  buyingPrice: "",
  sellingPrice: "",
  status:""
};


function ClerkPage() {
  const[items,setItems]=useState(initialState)
  const[isTrue,setIsTrue]=useState(null)
  const[request,setRequest]=useState(null)

  function handleChange(e) {
    setItems({
      ...items,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
      
    })
      .then((r) => r.json())
      .then((newItem) => {
        setItems(initialState);
        // onAddItem(newItem);
      });
  }

  function handleClick(){
    setRequest(null)
    setIsTrue(!isTrue)
  }
  function handleRequest(){
    setIsTrue(null)
    setRequest(!request)
  }

  return (
        <div className="clerk">
          <div className="clerk-banner"><h1 className='clerk-title'>Clerk Page</h1></div>
                <div class="clerk-container">
          <div class="clerk-navbar">
            <button className="add-btn" onClick={handleClick}> Add Items +</button>
            <button className="add-btn" onClick={handleRequest}> Request Items +</button>
            <button className="add-btn"> Logout</button>
            </div>
          {isTrue ?<Table/>
          //     <div className="clerk-input">
          //     <h2>Add Items</h2>
          //     <form className="item-form" onSubmit={handleSubmit}>
          
          // <input
          //   type="text"
          //   id="name"
          //   value={items.name}
          //   onChange={handleChange}
          //   placeholder="name"
          // />
          //     <input
          // type="text"
          // id="quantity"
          // value={items.quantity}
          // onChange={handleChange}
          // placeholder="quantity"
          //     />
          // <input
          //   type="number"
          //   id="inStock"
          //   value={items.inStock}
          //   onChange={handleChange}
          //   placeholder="items in stock"
          // />
          // <input
          //   type="number"
          //   id="spoilt"
          //   value={items.spoilt}
          //   onChange={handleChange}
          //   placeholder="items spoilt"
          // />
          // <input
          //   type="number"
          //   id="buyingPrice"
          //   value={items.buyingPrice}
          //   onChange={handleChange}
          //   placeholder="buying price"
          // />
          // <input
          //   type="number"
          //   id="sellingPrice"
          //   value={items.sellingPrice}
          //   onChange={handleChange}
          //   placeholder="selling price"
          // />
          // <input
          //   type="text"
          //   id="status"
          //   value={items.status}
          //   onChange={handleChange}
          //   placeholder="payment status"
          // />
          // <button type="submit">Submit</button>
          //     </form>
          //   </div>
          :null}
            {request ?
              <div className="clerk-input">
              <h2>Request Item</h2>
              <form className="item-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            id="ClerkName"
            value={items.name}
            onChange={handleChange}
            placeholder="Clerk Name"
          />
              <input
          type="text"
          id="Item"
          value={items.Item}
          onChange={handleChange}
          placeholder="Item"
              />
          <input
            type="number"
            id="Quantity"
            value={items.quantity}
            onChange={handleChange}
            placeholder="Quantity"
          />
          <input
            type="date"
            id="date"
            value={items.date}
            onChange={handleChange}
            placeholder="Due Date"
          />
          <button type="submit">Submit</button>
              </form>
            </div>:null}
                </div>

                

        </div>
  )
}

export default ClerkPage