import React, {useEffect, useState } from "react";
// import {useSelector, useDispatch} from 'react-redux'
import Grid from "@mui/material/Grid";
import SideBar from "../sidebar/SideBar";
// import Clerks from "../clerks/Clerks";
// import Spinner from '../../common/spinner/Spinner'
// import { getItems } from "../../features/items/ItemSlice";
import NavBar from "../NavBar";

const Inventory = ({setClerkUser, setAdminUser}) => {


  const [items, setItems] = useState([])

  const[adminId, setAdminId] = useState(localStorage.getItem('adminId'))
    
  useEffect(() => {
      fetch(`/admins/${adminId}`)
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              setItems(data.items)
      })
  },[])

  return (
    <>
    <NavBar/>
    <SideBar  setAdminuser={setAdminUser}/>
    

      <Grid item xs={8}>
        <div className="container pt-5 ">
          <div className="row mt-5 ml">
            <div className="col-md-6"></div>
          </div>

          <div className="modal" id="form-modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title d-flex align-items-sm-center">New Inventory</h3>
                  <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <form action="">
                    <div className="row">
                      <div className="col my-2">
                        <input
                          type="text"
                          name="name"
                          placeholder="Item Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col my-2">
                        <input
                          type="number"
                          className="form-control"
                          name="price"
                          placeholder="Price"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          name="quantity"
                          placeholder="quantity"
                          className="form-control"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="instock"
                          placeholder="instock"
                          className="form-control"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          name="spoilt"
                          placeholder="spoilt"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col my-2">
                        <input
                          type="text"
                          name="sellingPrice"
                          placeholder="Selling Price"
                          className="form-control"
                        />
                      </div>
                      <div className="col my-2">
                        <input
                          type="number"
                          className="form-control"
                          name="buyingPrice"
                          placeholder="Buying Price"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col my-2">
                        <input
                          type="text"
                          name="status"
                          placeholder="payment status"
                          className="form-control"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="submit"
                          className="btn btn-primary btn-block form-control mt-2"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-danger" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 offset-md-2">
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>In Stock</th>
                <th>Spoilt</th>
                <th>Buying Price</th>
                <th>Selling Price</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.inStock}</td>
                  <td>{item.spoilt}</td>
                  <td>{item.BuyingPrice}</td>
                  <td>{item.SellingPrice}</td>
                  <td>{item.paid ? "paid" : "pending"}</td>
                </tr>
              ))}
            </tbody>
          </table>
         </div>
        </div>
      </Grid>
    </>
  );
};

export default Inventory;
