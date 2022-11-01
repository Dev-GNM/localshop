import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import SideBar from "../sidebar/SideBar";


const Clerks= ({setClerkUser}) => {

  const [adminId, setAdminId]= useState(localStorage.getItem('adminId'))


   
 // let navigate  = useNavigate()
  const [formData, setFormData] = useState({
    full_name: '',
    email:'',
    password:'',
    admin_id: adminId

  })

  const [clerks, setClerks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    createClerk(formData);
    console.log(formData);
  }

  //function adding clerk
  const createClerk = (data) => {
    fetch("/clerks", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData(data)
        setClerkUser(data)
        //navigate('/clerks')
    })
  }
  
  //handling form field state
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
 
//fetch clerks
  useEffect(() => {
    fetch(`/admins/${adminId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.clerks)
        setClerks(data.clerks)
    })
  }, [])
  
  return (
    <>
      <SideBar />
    <Grid item xs={8}>
      <div className='container'>
        <div className="row mt-5">
            <div className="col-md-6">
              <button className='btn btn-success my-3' data-bs-toggle="modal"  data-bs-target='#form-modal'>Add Clerk</button>
          </div>
          <div className="col-md-6">
          <h3 className='my-3 '>Clerks</h3>
          </div>
        </div>

      <div className="modal" id="form-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title ">New Clerk</h3>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
    
            <div className="modal-body">
            <form action="" onSubmit={handleSubmit}>
                <div className="row">
                <div className="col">
                    <input type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={(e) => handleChange(e)}
                      placeholder='full name'
                      className="form-control"
                    />
                  </div>
                  
                  <div className="col">
                    <input type="text"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                      placeholder='email'
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  
                  <div className="col">
                    <input type="text"
                      name="password"
                      value={formData.password}
                      onChange={(e) => handleChange(e)}
                      placeholder='password'
                      className="form-control"
                    />
                  </div>

                  <div className="col">
                        <input type="submit"
                        value="Submit"
                        className="btn btn-primary btn-block form-control mt-2"
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
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-2">
              <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Deactivate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clerks && clerks.map((clerk) => (
            <tr key={clerk.id}>
              <td>{clerk.full_name}</td>
              <td>{clerk.email}</td>
              <td><button className='btn btn-primary'>Deactivate</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
              </div>
            </div>     
          </div> 
      </div>
      </Grid>  
      </>
  )
}

export default Clerks;