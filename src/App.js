import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Comps/Navbar";
import { useState } from "react";

function App() {
  const [Logged, setLogged] = useState(false);
  return (
    <div className="App">
      <Navbar Logged={Logged} setLogged={setLogged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
