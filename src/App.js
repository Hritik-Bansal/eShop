import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>

         <Route path="/Login" element={<Login />} />

         <Route exact path="/Checkout" element={<><Header/><Checkout/></>}/>
           
         <Route exact path="/" element={<><Header/><Home/></>}/>

        </Routes>

      </Router>
         
    </div>
  );
}

export default App;
