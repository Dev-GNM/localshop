import './App.css';
import SideBar from './components/sidebar/SideBar';

import React from 'react'
import ClerklandingPage from "./ClerkLandingPage"
import './App.css';
import Merchant from './Merchant';
function App() {


  return (

      <div className="App">
      <SideBar/>
      <ClerklandingPage/>
        <Merchant/>
    </div>
  )
}

export default App
