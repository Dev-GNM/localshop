import './App.css';
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router";
import MerchantPage from "./pages/MerchantPage";
import StorePage from "./pages/StorePage";
import AdminList from './components/AdminList';



function App() {
  const [admins, setAdmins] = useState();
  //mStores meaning merchant stores
  const [mStores, setmStores] = useState();

  const getAdmins = useCallback((admins) => {
    setAdmins(admins);
  }, []);

  const getmStores = useCallback((mStores) => {
    setmStores(mStores);
  }, []);

  function onAddAdmin(newAdmin) {
    setAdmins([...admins, newAdmin]);
  }

  return (
    <div>
      <Routes>
        <Route path="/merchantpage"element={<MerchantPage admins={admins} getAdmins={getAdmins} mStores={mStores} getmStores={getmStores} onAddAdmin={onAddAdmin}/>}></Route>
        <Route path="/storepage/:storeId" element={<StorePage />}></Route>
        <Route path="/adminform" element={<AdminList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
