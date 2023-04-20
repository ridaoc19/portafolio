import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Start from "./views/Start/Start";
import Home from "./views/Home/Home";
import StoreContext from "./components/hooks/context/StoreContext";
import Navbar from "./components/Layout/Navbar/Navbar";
import Admin from "./views/Admin/Admin";
import Login from "./components/Layout/Login/Login";

function App() {
  return (
    <div>
      <StoreContext>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<><Navbar /><Home /></>} />
          <Route path="/admin" element={<><Navbar /><Admin /></>} />
        </Routes>
      </StoreContext>
    </div>
  );
}

export default App;
