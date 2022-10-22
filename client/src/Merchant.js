import React from 'react';
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router";
import MerchantPage from "./pages/MerchantPage";
import StorePage from "./pages/StorePage";

function Merchant() {
    const [admins, setAdmins] = useState([]);
    //mStores meaning merchant stores
    const [mStores, setmStores] = useState([]);
  
    const getAdmins = useCallback((admins) => {
      setAdmins(admins);
    }, []);
  
    const getmStores = useCallback((mStores) => {
      setmStores(mStores);
    }, []);
  
    function onAddAdmin(newAdmin) {
      setAdmins([...admins, newAdmin]);
    }
    function onDeleteAdmin(deletedAdmin){
      const newAdmins = admins.filter(admin=> admin.id!== deletedAdmin.id);
      setAdmins(newAdmins)
    }
  
    return (
        <div>
        <Routes>
        <Route path="/merchantpage"element={<MerchantPage admins={admins} onDeleteAdmin={onDeleteAdmin} getAdmins={getAdmins} mStores={mStores} getmStores={getmStores} onAddAdmin={onAddAdmin}/>}></Route>
        <Route path="/storepage/:storeId" element={<StorePage />}></Route>
      </Routes>
        </div>
    );
}

export default Merchant;