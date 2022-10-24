import React from 'react'
import './App.css';
import Merchant from './Merchant';
import { Route, Routes } from "react-router";
import StorePage from './pages/StorePage';
import OrderForm from './components/ClerkPage/pages/Order/OrderForm';
import Table from "./components/ClerkPage/ItemsTables/Table"
import RequestTable from './components/ClerkPage/RequestItemTable.js/RequestTable';
import ClerkPage from './components/ClerkPage/ClerkPagex';
import MerchantLogIn from './MainLandingPage/Signin/MerchantLogin/MerchantLogIn';
import AdminLogin from './MainLandingPage/Signin/AdminLogin/AdminLogin';
import ClerkLogin from './MainLandingPage/Signin/ClerkLogin/ClerkLogin';
import Register from './MainLandingPage/RegisterMerchant/Register';
import "./MainLandingPage/design.css"
import AdminBase from './components/adminbase/AdminBase';
import Inventory from './components/inventory/Inventory'
import InventoryAnalytics from './components/analytics/InventoryAnalytics';
import ClerkLandingPage from './ClerkLandingPage';
import Landing from './MainLandingPage/Landing'

function App() {

  return (
  
    <div className="App">
      <Routes>
       <Route exact path="/" element={<Landing/> }></Route>
       <Route path="/clerk" element={<ClerkLandingPage/>}></Route>
       <Route path="/merchant" element={<Merchant/>}></Route>


       
       <Route path="/storepage/:storeId" element={<StorePage />}></Route>

       <Route path='/orders' element={<OrderForm/>} />
       <Route path='/addItems' element={<Table/>} />
       <Route path='/addRequests' element={<RequestTable/>} />

       
       <Route path='/oldPage' element={<ClerkPage/>} />



       <Route path='/mlog-in' element={<MerchantLogIn/>} />
       <Route path='/alog-in' element={<AdminLogin/>} />
       <Route path='/clog-in' element={<ClerkLogin/>} />
       <Route path='/Register' element={<Register/>} />
      
        <Route path='/admin' element={<AdminBase/>}/>
        <Route path="/inventories" element={<Inventory />} />
        <Route path='/analytics' element={<InventoryAnalytics/>}/>
      </Routes>
      
    </div>
  )
}
export default App;
