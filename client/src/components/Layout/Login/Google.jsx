import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { POST } from '../../hooks/context/Admin/adminTypes';
import CreateContext from '../../hooks/context/CreateContext';

function Google() {
  const navigate = useNavigate()
  const { login: { callApiLogin, state } } = useContext(CreateContext)

  useEffect(() => {
    if (state.user?.user_id) {
      navigate(-1)
    }
  }, [state.user?.user_id])

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: `${process.env.REACT_APP_CLIENT_ID_GOOGLE}`,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "filled_blue",
      size: "large",
      width: "230",
      click_listener: onClickHandler
    });
  }, [])

  function onClickHandler() {
    // console.log("Haga clic en el botón Iniciar sesión con Google...")
  }

  function handleCallbackResponse(response) {
    callApiLogin({ method: POST, post: Object.assign({ location: sessionStorage.location }, response), route: `login` })
  }

  return (
    <>
      <div id="signInDiv"></div>
    </>
  );
}


export default Google;