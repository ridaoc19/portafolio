import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Start from "./views/Start/Start";
import Home from "./views/Home/Home";
import StoreContext from "./components/hooks/context/StoreContext";

function App() {
  return (
    <div>
      <StoreContext>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </StoreContext>
    </div>
  );
}

export default App;
