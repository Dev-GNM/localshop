
import React from 'react'
import {useRef} from 'react'
import "./inventory.css"

const Inventory = (props) => {
    const itemInputRef = useRef();
    const quantityInputRef = useRef();
    const item_stockInputRef = useRef();
    const buying_priceInputRef = useRef();
    const selling_prceInputRef = useRef();
    const payment_statusInputRef = useRef();
 


    function submitHandler(e){
      e.preventDefault();

       const entereditem = itemInputRef.current.value;
       const enteredquantity = quantityInputRef.current.value;
       const entereditem_stock = item_stockInputRef.current.value;
       const enteredbuying_price = buying_priceInputRef.current.value;
       const enteredselling_price = selling_prceInputRef.current.value;
       const enteredpayment_status= payment_statusInputRef .current.value;
      
    
       const InventoryDetails={
           Item:entereditem,
           Quantity:enteredquantity,
           Item_Stock:entereditem_stock,
           Buying_Price:enteredbuying_price,
           Selling_Price:enteredselling_price,
           Payment_Status:enteredpayment_status,
          
       };
      
       props.onAddInventory(InventoryDetails)
}
 
 
  return (
    <>
      <section className='contact mtop'>
      
          <div className='main-content'>
            <h2>Enter Inventory</h2>
            <form  onSubmit={submitHandler}>
              <div className='grid1'>
               
                  <span>
                    Item Name <label>*</label>
                  </span>
                  <input type='text' name='item_name' ref={itemInputRef} required />
              
                  <span>
                    Quantity <label>*</label>
                  </span>
                  <input type='number' name='quantity' ref={quantityInputRef} required />
              
                  <span>
                  Items in Stock <label>*</label>
                  </span>
                  <input type='number' name='Item_Stock' ref={item_stockInputRef} required  />
              
                  <span>
                  BuyingnPrice<label>*</label>
                  </span>
                  <input type='number' name='Buying_Price' ref={buying_priceInputRef} required />
              
                  <span>Selling Price</span>
                  <input type='number' name='Selling_Price' ref={selling_prceInputRef}  />
               
               
                  <span>Payment Status</span>
                  <input type='text' name='Payment_Status' ref={payment_statusInputRef}  />
          
             
              <button className ='primarybtn'>Submit Now</button>
              </div>
            </form>
          </div>

      
      </section>

     
    </>
  )
}

export default Inventory
