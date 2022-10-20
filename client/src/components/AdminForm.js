import React from 'react'

function AdminForm() {
  return (
    <div>
      <div className="text-center mt-5">
        <form style ="max-width:300px; margin:auto;">
          <h1 className='h3 mb-3 font-weight-normal'>Please Enter your details</h1>

          <label htmlFor="fullName" className="sr-only">Full Name</label>
          <input type="text" id="fullName" className="form-control" placeholder="Full Name" required autofocus></input>
          
          <label htmlFor="emailAddress" className="sr-only">Email Address</label>
          <input type="email" id="emailAddress" className="form-control" placeholder="Email Address" required autofocus></input>
          
          <label htmlFor='password' className='sr-only'>Password</label>
          <input type="password" id="password" placeholder="Password" className='form-control'></input>
          
          <label htmlFor="store" className="sr-only">Store</label>
          <input type="text" id="store" className="form-control" placeholder="Store" required autofocus></input>

          <div className='mt-3'>
            <button className='btn btn-lg btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminForm