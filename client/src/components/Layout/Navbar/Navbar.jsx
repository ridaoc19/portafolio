import React from "react";
import { Link } from "react-router-dom";
import Theme from "../../../views/Start/Theme/Theme";

function Navbar(props) {
  return (
    <div className="navbar__container">
      <Link to={"/"}>main</Link>
      <Link to={"/home"}>home</Link>
      <Link to={"/admin"}>admin</Link>
      <Theme />
    </div>
  );
}

export default Navbar;
