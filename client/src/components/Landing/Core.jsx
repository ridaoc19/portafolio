import { useState, useEffect } from 'react';
import { postClient } from '../../redux/actions';
import style from '../../styles/styles.module.scss';
import { Navigate }  from 'react-router-dom'

export default function Core() {

 const [loading, setLoading] = useState(true)

  useEffect(() => {
    postClient()
    setTimeout(() => {
      setLoading(false)
    }, 4000);

  },[])
  return (
    <div>
      <div className={style.core_container}>
        <div className={style.core_loading}>
          {loading? <h1>Bienvenido...</h1>: <Navigate to="/landing" /> }
        </div>
      </div>
    </div>
  );
}
