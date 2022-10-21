import React from 'react'
import "../App.css"
// import Navbar from './Navbar/Navbar';
import {useState,useEffect} from "react"
import Table from "./ItemsTables/Table"
import RequestTable from './RequestItemTable.js/RequestTable';




function ClerkPage() {
  // const[items,setItems]=useState(initialState)
  const[isTrue,setIsTrue]=useState(true)
  const[request,setRequest]=useState(null)



  function handleClick(){
    setRequest(null)
    setIsTrue(!isTrue)
  }
  function handleRequest(){
    setIsTrue(null)
    setRequest(!request)
  }

  return (
        <div className="clerk">
          <div className="clerk-banner"><h1 className='clerk-title'>Clerk Page</h1></div>
                <div class="clerk-container">
          <div class="clerk-navbar">
            <button className="add-btn" onClick={handleClick}> Add Items+</button>
            <button className="add-btn" onClick={handleRequest}> Request Items+</button>
            <button className="add-btn"> Logout</button>
            </div>
          {isTrue ?<Table/> :null}
          {request ? <RequestTable/>:null}
            </div>
          </div>
  )
}

export default ClerkPage