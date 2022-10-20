import React from "react";

function AdminList() {
  return (
    <div className="container">
      <h3>Admins List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Store</th>
            <th>Deactivate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dancun Oluoch</td>
            <td>dancun@gmail.com</td>
            <td>Store 1</td>
            <td>Deactivate</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Geoffrey Oluoch</td>
            <td>geoffrey@gmail.com</td>
            <td>Store 2</td>
            <td>Deactivate</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Evans Rutto</td>
            <td>evans@gmail.com</td>
            <td>Store 3</td>
            <td>Deactivate</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;
