import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Theme from "../../../views/Start/Theme/Theme";
import { GET } from "../../hooks/context/Admin/adminTypes";
import CreateContext from "../../hooks/context/CreateContext";

function Navbar() {
  const { login: { callApiLogin, state } } = useContext(CreateContext)

  useEffect(() => {
    sessionStorage?.login && !state.user?.user_id && callApiLogin({ method: GET, route: `login/${sessionStorage?.login}` })
  }, [state.user])

  return (
    <div className="navbar__container">
      <Link to={"/"}>main</Link>
      <Link to={"/home"}>home</Link>
      <Link to={"/admin"}>admin</Link>
      {state.user?.picture ? <img src={state.user?.picture} alt="" /> : <Link to={"/login"}>Login</Link>}
      <Theme />
    </div>
  );
}

export default Navbar;
