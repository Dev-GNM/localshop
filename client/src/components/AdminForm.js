import React, { useState } from "react";
import AdminList from "./AdminList";

function AdminForm({ onAddAdmin, admins,onDeleteAdmin}) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [store, setStore] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/admins", {
      method: "POST",
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        store: store,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onAddAdmin(data);
      });
    setFullname("");
    setEmail("");
    setStore("");
  }

  return (
    <div>
      <div className="text-center mt-5">
        <form className="max-width:240px; margin:auto;" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">
            Please enter admin details
          </h1>

          <label htmlFor="fullName" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="form-control"
            placeholder="Full Name"
            required
            autofocus
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          ></input>

          <label htmlFor="emailAddress" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            className="form-control"
            placeholder="Email Address"
            required
            autofocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-control"
          ></input>

          <label htmlFor="store" className="sr-only">
            Store
          </label>
          <input
            type="text"
            id="store"
            className="form-control"
            placeholder="Store"
            required
            autofocus
            value={store}
            onChange={(e) => setStore(e.target.value)}
          ></input>

          <div className="mt-3">
            <button className="btn btn-lg btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <AdminList admins={admins} onDeleteAdmin={onDeleteAdmin} />
    </div>
  );
}

export default AdminForm;
