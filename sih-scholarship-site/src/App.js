import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import React, { useState } from 'react'

function App() {

  return (
    <>
  
      <Navbar/>

        {/* <Route path='/registration' element={<Registration/>}/> */}
        
        {/* <Route path='/login' element={<Login/>}/> */}
      {/* <Updates/> */}
      <Footer/>
    </>
  );
}

export default App;
