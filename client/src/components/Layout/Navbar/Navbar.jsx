import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Theme from "../../../views/Start/Theme/Theme";
import { GET } from "../../hooks/context/Admin/adminTypes";
import CreateContext from "../../hooks/context/CreateContext";

function Navbar() {
  const { login: { callApiLogin, state, logout } } = useContext(CreateContext)

  useEffect(() => {
    sessionStorage?.login && !state.user?.user_id && callApiLogin({ method: GET, route: `login/${sessionStorage?.login}` })
  }, [state.user])

  const handleOnClick = (e)=> {
    e.preventDefault();
    logout()
  }

  return (
    <div className="navbar__container">
      <Link to={"/"}>main</Link>
      <Link to={"/home"}>home</Link>
      <Link to={"/admin"}>admin</Link>
      {state.user?.picture 
      ? <div><img src={state.user?.picture} alt="" /> <button onClick={handleOnClick}>Cerrar Sessión</button></div> 
      : <Link to={"/login"}>Login</Link>}
      <Theme />
    </div>
  );
}

export default Navbar;
