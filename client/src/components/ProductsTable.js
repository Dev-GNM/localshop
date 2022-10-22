import React, { useState, useEffect } from "react";

function ProductsTable({storeId}) {
  console.log(storeId)
  const[products, setProducts]= useState([])


  useEffect(() => {
    fetch(`http://localhost:3000/stores/${storeId}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => 
        setProducts(data.items));
      }
    });
  });

  console.log(products)


  return (
    <div className="container">
      <h3>Product Table</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=>{

            return(
              <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.paymentstatus}</td>
            </tr>
            )

          })}
         
         
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
