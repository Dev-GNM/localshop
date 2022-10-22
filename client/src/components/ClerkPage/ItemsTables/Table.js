import React, { useState, Fragment, useEffect } from "react";
import "../../../App.css";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
// import { useHistory } from 'react-router-dom';

const Table = () => {
  // const history = useHistory();



  //<<<<-----table functions---->>>
  
  
  const [items, setItems] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    quantity: "",
    inStock: "",
    spoilt: "",
    buyingPrice: "",
    sellingPrice: "",
    status:""
  });



  const [editFormData, setEditFormData] = useState({
    name: "",
    quantity: "",
    inStock: "",
    spoilt: "",
    buyingPrice: "",
    sellingPrice: "",
    status:""
  });


  //populating the table with data from database
  // useEffect(() => {
  //   // auto-login
  //   fetch("http://127.0.0.1:3000/items").then((r) => {
  //     if (r.ok) {
  //       r.json().then((item) => setItem(item));
  //     }
  //   });
  // },[]);

  //-----end

  const [editItemId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

//........
// function addMovieHandler(movieDetails){
//   fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json',
//   {
//    method:'POST',
//    body:JSON.stringify(movieDetails),
//    headers:{
//           'Content-Type':'application/json'
//    }
//   }
//   ).then(() => {
//     history.replace('/');
//   });
// }




  const handleAddFormSubmit = (event) => {
    //----POST---->>>>
    event.preventDefault();

    const newItem = {
      id: nanoid(),
      name: addFormData.name,
      quantity: addFormData.quantity,
      inStock: addFormData.inStock,
      spoilt: addFormData.spoilt,
      buyingPrice: addFormData.buyingPrice,
      sellingPrice: addFormData.sellingPrice
    };

    const newItems = [...items, newItem];

// ADDED POST FUNCTION


  // fetch("/events", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(formData),
    
  // })
  //   .then((r) => r.json())
  //   .then((newItem) => {
  //     setItems(newItem);
  //     // onAddSpice(newEvent);
  //   });

   
  //   fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json',
  // {
  //  method:'POST',
  //  body:JSON.stringify(newItems),
  //  headers:{
  //         'Content-Type':'application/json'
  //  }
  // }
  // ).then((r) => r.json()
  // .then(console.log(r)));
//--------->>>>
    setItems(newItems);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      id: editItemId,
      name: editFormData.name,
      quantity: editFormData.quantity,
      inStock: editFormData.inStock,
      spoilt: editFormData.spoilt,
      buyingPrice: editFormData.buyingPrice,
      sellingPrice: editFormData.sellingPrice
    };

    const newItems = [...items];

    const index = items.findIndex((item) => item.id === editItemId);

    newItems[index] = editedItem;

    setItems(newItems);
    setEditContactId(null);
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditContactId(item.id);

    const formValues = {
      name: item.name,
      quantity: item.quantity,
      inStock: item.inStock,
      spoilt: item.spoilt,
      buyingPrice: item.buyingPrice,
      sellingPrice: item.sellingPrice
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newItems = [...items];

    const index = items.findIndex((item) => item.id === contactId);

    newItems.splice(index, 1);

    setItems(newItems);
  };
  //<<<<<------end of table- functions------>>>>

  return (


    //<<<<<---table item--->>
    <div className="app-container">

            {/* //<<<<--- table input form-->> */}
          <div className="table-title">
            <h2>Add items</h2>
          </div>
          <form className="items-form" onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="name"
              required="required"
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
            />
            <input
              type="number"
              name="quantity"
              required="required"
              placeholder="Quantity"
              onChange={handleAddFormChange}
            />
            <input
              type="number"
              name="inStock"
              required="required"
              placeholder="available."
              onChange={handleAddFormChange}
            />
            <input
              type="number"
              name="spoilt"
              required="required"
              placeholder=" spoilt items..."
              onChange={handleAddFormChange}
            />
              <input
              type="number"
              name="buyingPrice"
              required="required"
              placeholder="Buying Price"
              onChange={handleAddFormChange}
            />
               <input
              type="number"
              name="sellingPrice"
              required="required"
              placeholder="Selling Price"
              onChange={handleAddFormChange}
            />
            <button type="submit">Add</button>
          </form>
          {/* end of table input form*/}

     {/* <<<--------------------->>>>> */}

                  {/* actual table */}
      <form className="actual-table" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            <th> Name</th>
            <th>Quantity</th>
            <th>inStock</th>
            <th>spoilt</th>
            <th>BuyingPrice</th>
            <th>SellingPrice</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <Fragment>
                {editItemId === item.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    items={item}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      {/* end of table  */}

    </div>
  );
};

export default Table;
