import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Login from './component/Login';
import Updates from './component/Updates';

// React router DOM -----------
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
      <Updates/>
      <Footer/>
    </>
  );
}

export default App;
