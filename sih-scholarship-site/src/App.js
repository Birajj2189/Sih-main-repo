import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Login from './component/Login';
import Updates from './component/Updates';
import Registration from './component/Registration';

// React router DOM -----------
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

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
