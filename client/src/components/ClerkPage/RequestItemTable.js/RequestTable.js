import React, { useState, useEffect, Fragment } from "react";

import { nanoid } from "nanoid";
import "../../../App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function RequestTable() {


  //<<<<-----table functions---->>>
  
  const [request, setRequest] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    item: "",
    quantity: "",
    date: "",

  });

  console.log(request)

  const [editFormData, setEditFormData] = useState({
    name: "",
    item:"",
    quantity: "",
    date: "",
  });

  // useEffect(() => {
  //   // auto-login
  //   fetch("http://127.0.0.1:3000/requests").then((r) => {
  //     if (r.ok) {
  //       r.json().then((item) => setRequest(item));
  //     }
  //   });
  // },[]);

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

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: nanoid(),
      name: addFormData.name,
      item: addFormData.item,
      quantity: addFormData.quantity,
      date: addFormData.date
    };

    const newItems = [...request, newItem];
    setRequest(newItems);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      id: editItemId,
      name: editFormData.name,
      item: editFormData.item,
      quantity: editFormData.quantity,
      date: editFormData.date
    };

    const newItems = [...request];

    const index = request.findIndex((item) => item.id === editItemId);

    newItems[index] = editedItem;

    setRequest(newItems);
    setEditContactId(null);
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditContactId(item.id);

    const formValues = {
      name: item.name,
      item: item.item,
      quantity: item.quantity,
      date: item.date,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newItems = [...request];

    const index = request.findIndex((item) => item.id === contactId);

    newItems.splice(index, 1);

    setRequest(newItems);
  };
  //<<<<<------end of table- functions------>>>>

  return (


    //<<<<<---table item--->>
    <div className="app-container">
      <div className="table-title">
        <h2>Request Items</h2>
      </div>

      {/* //<<<<--- table form input-->> */}

    <form  className="items-form" onSubmit={handleAddFormSubmit}>
      <input
        type="text"
        name="name"
        required="required"
        placeholder="Enter Clerk Name..."
        onChange={handleAddFormChange}
      />
        <input
          type="text"
          name="item"
          required="required"
          placeholder="item name."
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
        type="date"
        name="date"
        required="required"
        placeholder=" Due Date..."
        onChange={handleAddFormChange}
      />

      <button type="submit">Add +</button>
    </form>
                {/* end of table form input */}

      <form className="actual-table" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            <th>Clerk Name</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {request.map((itemx) => (
              <Fragment>
                {editItemId === itemx.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                  items={itemx}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

    </div>
  );
};


export default RequestTable