
import React from 'react'
import {useRef} from 'react'
import "../Order/order.css"

const Order = (props) => {
   const dateInputRef = useRef();
   const quantityInputRef = useRef();
   const itemInputRef = useRef();


    function submitHandler(e){
      e.preventDefault();

       const enteredDate = dateInputRef.current.value;
       const enteredquantity = quantityInputRef.current.value;
       const entereditem = itemInputRef.current.value;


       const OrderDetails={
           Date:enteredDate ,
           Item:entereditem,
           Quantity:enteredquantity,
      
       };

       props.onAddOrder(OrderDetails)

}
 
 
  return (
    <>
      <section className='contact mtop'>
      
          <div className='main-content'>
            <h2>Enter Order</h2>
            <form  onSubmit={submitHandler}>
              <div className='grid1'>
               
                  <span>
                   Date <label>*</label>
                  </span>
                  <input type='date' name='date' ref={dateInputRef} required />
                  
                  <span>
                    Item Name <label>*</label>
                  </span>
                  <input type='text' name='item_name' ref={itemInputRef} required />
              

                  <span>
                    Quantity <label>*</label>
                  </span>
                  <input type='number' name='quantity' ref={quantityInputRef} required />
                  
     
             
              <button className ='primarybtn'>Submit Now</button>
              </div>
            </form>
          </div>

      
      </section>

     
    </>
  )
}

export default Order
