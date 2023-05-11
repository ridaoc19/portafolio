import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Theme from "../../../views/Start/Theme/Theme";
import { GET } from "../../hooks/context/Admin/adminTypes";
import CreateContext from "../../hooks/context/CreateContext";

function Navbar() {
  const navigate = useNavigate();
  const { login: { callApiLogin, state, logout } } = useContext(CreateContext)

  useEffect(() => {
    sessionStorage?.login && !state.user?.user_id && callApiLogin({ method: GET, route: `login/${sessionStorage?.login}` })
    // eslint-disable-next-line
  }, [state.user])

  const handleOnClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    switch (name) {
      case "change_account":
        logout()
        return navigate('/login')
      case "logout":
        return logout()
      case "login_modal":
        document.querySelector(".navbar__login--google").classList.toggle("navbar__modal--open")
        return
      default:
        break;
    }
  }

  document.addEventListener("click", e => {
    if (e.target === document.querySelector(".navbar__login--google")) {
      document.querySelector(".navbar__login--google").classList.remove("navbar__modal--open");
    }
  });

  return (
    <div className="navbar__container">

      <div className="-theme">
        <Theme />
      </div>

      <div className="-link">
        <Link to={"/"}>main</Link>
        <Link to={"/home"}>home</Link>
        <Link to={"/admin"}>admin</Link>
      </div>

      <div className="-login">
        {state.user?.picture
          ? <div>
            <button className="button_login_modal" name="login_modal" onClick={handleOnClick}><img src={state.user?.picture} alt="" /></button>
            <div className="navbar__login--google">
              <div className="login__google--content">
                <div>
                  <button name="change_account" onClick={handleOnClick}>Cambiar Cuenta</button>
                </div>
                <div>
                  <button name="logout" onClick={handleOnClick}>Cerrar Sessión</button>
                </div>
              </div>
            </div>
          </div>
          : <Link to={"/login"}>Login</Link>}
      </div>
    </div>
  );
}

export default Navbar;
