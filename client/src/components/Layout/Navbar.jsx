import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../images/logo.png';
import style from '../../styles/styles.module.scss'

function Navbar(props) {
  return (
    <div>
      <div className={style.navbar_container} >
        <div className={style.navbar_left}>

          <img src={images} alt="logo"></img>
          <p>ridaoc</p>

        </div>
        <div className={style.navbar_right}>

          <Link to={"/"}>inicio</Link>
          <Link to={"/about"}>mas sobre mí</Link>
          <Link>contacto</Link>

        </div>
      </div>
    </div>
  );
}

export default Navbar;