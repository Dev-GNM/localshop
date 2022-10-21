import React from "react";

function AdminList({ admins }) {
  console.log(admins);

  //map admins to table
  return (
    <div className="container">
      <h3>Admins List</h3>
      <table className="table table-info table-bordered">
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
          {admins.map((admin) => {
            return (
              <tr key={admin.id}>
                <td>{admin.fullname}</td>
                <td>{admin.email}</td>
                <td>{admin.store}</td>
                <td>
                  <button className="btn btn-primary">Deactivate</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;
