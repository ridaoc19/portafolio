import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Login from "./components/Layout/Login/Login";
import StoreContext from "./components/hooks/context/StoreContext";
import Admin from "./views/Admin/Admin";
import Home from "./views/Home/Home";
import Start from "./views/Start/Start";

function App() {
  return (
    <div>
      <StoreContext>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Layout ><Home /></Layout>} />
          <Route path="/admin" element={<Layout ><Admin /></Layout>} />
        </Routes>
      </StoreContext>
    </div>
  );
}

export default App;
