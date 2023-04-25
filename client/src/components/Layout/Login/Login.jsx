import React from 'react';
import { useNavigate } from 'react-router-dom';
import Google from './Google';

function Login() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/')}>Inicio </button>
      <button onClick={() => navigate(-1)}> Volver donde estaba</button>
      <Google />
    </div>
  );
}

export default Login;