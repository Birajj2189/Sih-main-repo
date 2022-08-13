import './App.css';
import Navbar from './component/Navbar';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar2 from './component/Navbar2';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/*" element={<Navbar/>}/>
        <Route path="/scholarships/*" element={<Navbar2/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
