import React from "react";
import { Link } from "react-router-dom";
import images from "../../images/logo.png";
import style from "./layout.module.scss";

function Navbar(props) {
  return (
    <div>
      <div className={style.navbar_container}>
        <div className={style.navbar_left}>
          <img src={images} alt="logo"></img>
          <h4>ridaoc</h4>
        </div>
        <div className={style.navbar_right}>
          <Link to={"/landing"}>Inicio</Link>
          <Link to={"/about"}>Mas sobre mí</Link>
          <Link>contacto</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
