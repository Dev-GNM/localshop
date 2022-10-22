import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Quantity."
          name="quantity"
          value={editFormData.quantity}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="inStock"
          name="inStock"
          value={editFormData.inStock}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="spoilt"
          required="required"
          placeholder="spoilt."
          name="spoilt"
          value={editFormData.spoilt}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="buyingPrice"
          required="required"
          placeholder="buyingPrice."
          name="buyingPrice"
          value={editFormData.buyingPrice}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="sellingPrice"
          required="required"
          placeholder="sellingPrice."
          name="sellingPrice"
          value={editFormData.sellingPrice}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
