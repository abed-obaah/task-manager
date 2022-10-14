import React from "react";
// import { FaBeer } from 'react-icons/fa';
import './App.css';
// import './home.css'
// import Navbar from './components/Nav';
import Dashboard from './components/Dashboard';
import Shop from './components/Shop';
import Home  from "./components/Home";
// import NavBar2 from "./components/FrontPage/Navbar2";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar2 from "./components/FrontPage/Navbar2";

function App() {
  return(
    <React.Fragment>
    
    <Router>
                <div>
                    {/* <Navbar /> */}
                        <Routes>
                            <Route exact path="/" element={<Home />}></Route>
                            <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
                            <Route exact path="/shop" element={<Shop/>}></Route>
                            <Route exact path="/navbar" element={<NavBar2/>}></Route>
                           
                        </Routes> 
                  
                </div>
        </Router>
        </React.Fragment>
  );
}
export default App;