import React from "react";

const ReadOnlyRow = ({ items, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
              <td>{items.name}</td>
              <td>{items.item}</td>
              <td>{items.quantity}</td>
              <td>{items.date}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, items)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(items.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
