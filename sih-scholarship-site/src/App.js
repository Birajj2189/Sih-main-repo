import './App.css';
import Navbar from './component/Navbar';
import React, { useState } from 'react'
import Dashboard from './component/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from './component/About';
function App() {

  return (
    <>
    <Router>
        <Navbar/>
    </Router>
    </>
  );
}

export default App;
