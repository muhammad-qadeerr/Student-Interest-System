import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Add from "./pages/Add";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashbaord";
import Students from "./pages/Students";
// import About from "./pages/about";
// import SignUp from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Router>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/SignUp" element={<SignUp/>} />
                <Route path="/LogIn" element={<Login/>} />
                <Route path="/Student/Add" element={<Add/>} />
                <Route path="/Students" element={<Students/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                {/* <Route path="/about" element={<About />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
