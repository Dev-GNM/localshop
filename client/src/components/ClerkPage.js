import React from 'react'
import "../App.css"
import {useState,useEffect} from "react"
import Table from "./ItemsTables/Table"
import RequestTable from './RequestItemTable.js/RequestTable';




function ClerkPage() {
  // const[items,setItems]=useState(initialState)
  const[isTrue,setIsTrue]=useState(true)
  const[request,setRequest]=useState(null)




  // useEffect(() => {
  //   fetch(`http://127.0.0.1:3000/items`)
  //     .then((r) => r.json())
  //     .then(console.log);
  // }, []);

  
  //   useEffect(() => {
  //   // auto-login
  //   fetch("http://127.0.0.1:3000/items").then((r) => {
  //     if (r.ok) {
  //       r.json().then((item) => console.log(item));
  //     }
  //   });
  // },[]);


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
            <button className="add-btn" onClick={handleClick}> Add Items</button>
            <button className="add-btn" onClick={handleRequest}> Request Items</button>
            <button className="add-btn"> Logout</button>
            </div>
          {isTrue ?<Table/> :null}
            {request ? <RequestTable/>:null}
                </div>

                

        </div>
  )
}

export default ClerkPage