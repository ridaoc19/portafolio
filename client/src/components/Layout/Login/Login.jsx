import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateContext from '../../hooks/context/CreateContext';
import Google from './Google';



function Login() {
  const { login: { state } } = useContext(CreateContext)
  const navigate = useNavigate()  

  return (
    <div>
      <button onClick={() => navigate('/')}>Inicio </button>
      <button onClick={() => navigate(-1)}> Volver donde estaba</button>
      <Google />
      {/* {!state.loading_login && state.user?.user_id? navigate(-1): <Google />} */}
      
    </div>
  );
}

export default Login;