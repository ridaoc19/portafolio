import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
	return (
		<div >
			<div >
				{/* <img src={images} alt="logo"></img> */}
				<h4>ridaoc</h4>
			</div>
			<div >
				<Link to={"/landing"}>Inicio</Link>
				<Link to={"/about"}>Mas sobre mí</Link>
				<Link>contacto</Link>
			</div>
		</div>)
};

export default Header;
