import React from "react";

function StoreReportsTable() {
  return (
    <div className="container">
      <h3>Store Reports Table</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Shoes</td>
            <td>2 pairs</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cooking Oil</td>
            <td>2 kg</td>
            <td>Not Paid</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Rice</td>
            <td>2 kg</td>
            <td>Paid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StoreReportsTable;
