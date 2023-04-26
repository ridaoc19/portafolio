import React from "react";
import "./styles/Layout.scss";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
