import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ClerkForm = () => {

    // let navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        createClerk()
    }
    const createClerk = (data) => {
        fetch("http://localhost:3000/clerks", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((data))
        // navigate('/')
    }
    
    
  
  return (
      <div className='container'>
          <div className="row">
              <div className="col-md-4 offset-md-2">
                  <form action="">
                      <h3 className='text-center mt-3'>Add Clerk</h3>
                      <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input
                              type="text"
                              name="fullname"
                              className='form-control'
                              value={formData.fullname}
                              onChange={(e)=>handleChange(e)}
                          />

                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email"
                              name="email"
                              className='form-control'
                              value={formData.email}
                              onChange={(e)=>handleChange(e)}
                          />

                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password"
                              name="password"
                              className='form-control'
                              value={formData.password}
                              onChange={(e)=>handleChange(e)}
                          />
                      </div>
                      <input type="submit" value="Submit"  className='btn btn-success my-3 '/>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default ClerkForm