import React, { useState, useEffect } from 'react'
// import Spinner from '../../common/spinner/Spinner'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Grid from '@mui/material/Grid'
import { DataGrid } from '@mui/x-data-grid';



const Inventory = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    instock: '',
    spoilt:'',
    status: '',
    quantity: '',
    sellingPrice: '',
    buyingPrice:''
  })

  // const [loading, setLoading] = useState(false)
  const [inventories, setInventories] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    createInventory();
    console.log(formData);
  }

  //function adding inventory
  const createInventory = (data) => {
    fetch("http://localhost:3000/inventories", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
    })
  }
  
  //handling form field state
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
 
//fetch inventories
  useEffect(() => {
    fetch("http://localhost:3000/inventories")
      .then((response) => response.json())
      .then((data) => {
      setInventories(data)
    })
  }, [])
  
  return (
    <Grid item xs={8}>
      <div className='container'>
        <div className="row mt-5">
          <div className="col-md-6">
            <button className="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#form-modal"><ControlPointIcon />New</button>
          </div>
          <div className="col-md-6">
          <h3>Inventory</h3>
          </div>
        </div>

      <div className="modal" id="form-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* modal header */}
            <div className="modal-header">
              <h3 className="modal-title">New Inventory</h3>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            {/*modal body */}
            <div className="modal-body">
            <form action="">
                <div className="row">
                  <div className="col my-2">
                    <input type="text"
                      name="name"
                      placeholder='Item Name'
                      className="form-control"
                    />
                  </div>
                  <div className="col my-2">
                    <input type="number"
                      className="form-control"
                      name="price"
                      value={formData.price}
                      onChange={(e) => handleChange(e)}
                      placeholder='Price'
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={(e) => handleChange(e)}
                      placeholder='quantity'
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <input type="text"
                      name="instock"
                      value={formData.instock}
                      onChange={(e) => handleChange(e)}
                      placeholder='instock'
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <input type="number"
                      className="form-control"
                      value={formData.spoilt}
                      name="spoilt"
                      placeholder='spoilt'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <input type="text"
                      value={formData.sellingPrice}
                      onChange={(e) => handleChange(e)}
                      name="sellingPrice"
                      placeholder='Selling Price'
                      className="form-control"
                    />
                  </div>
                  <div className="col my-2">
                    <input type="number"
                      className="form-control"
                      name="buyingPrice"
                      value={formData.buyingPrice}
                      onChange={(e) => handleChange(e)}
                      placeholder='Buying Price'
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <input type="text"
                      name="status"
                      value={formData.status}
                      onChange={(e) => handleChange(e)}
                      placeholder='payment status'
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <input type="submit"
              className="btn btn-primary btn-block form-control"
                    />
                  </div>
          
                </div>
              </form>
            </div>
            {/*modal footer */}
            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>

      </div>
      <table className="table table-bordered">
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
          {inventories.map((inventory) => (
            <tr key={inventory.id}>
              <td>{inventory.name}</td>
              <td>{inventory.quantity}</td>
              <td>{inventory.instock}</td>
              <td>{inventory.spoilt}</td>
              <td>{inventory.buyingPrice}</td>
              <td>{inventory.sellingPrice}</td>
              <td>{inventory.status}</td>
          </tr>
        ))}
        </tbody>
      </table>
          
      </div>
      </Grid>  
  )
}

export default Inventory