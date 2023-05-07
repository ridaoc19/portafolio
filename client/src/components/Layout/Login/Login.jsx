import React from 'react';
import { useNavigate } from 'react-router-dom';
import Google from './Google';

function Login() {
  const navigate = useNavigate()

  return (
    <div className='login__container'>
      <div>
        <div className='-google'>
         <div>
         <Google />
         </div>
        </div>
        <div className='-button'>
          <button onClick={() => navigate('/')}>Inicio </button>
          <button onClick={() => navigate(-1)}>Volver donde estaba</button>
        </div>
      </div>
    </div>
  );
}

export default Login;