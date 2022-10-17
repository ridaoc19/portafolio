import { useState, useEffect } from "react";
import { postClient } from "../../redux/actions";
// import { getClient } from "../../redux/actions";
import style from "../../styles/styles.module.scss";
import s from "./core.module.scss";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Core() {
  const dispatch = useDispatch();
  const data_ip = useSelector((state) => state.data_ip);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(postClient())
    // dispatch(getClient());
    // eslint-disable-next-line 
  }, []);



  let render;
  if (data_ip?.state === "") {
    render = (
      <div className={style.loader}>
        <span>Bienvenidos...</span>
      </div>
    );

  } else if (data_ip?.city === undefined) {
    render = (
      <div className={style.loader}>
        <span>Bienvenidos...</span>
      </div>
    );
    setTimeout(() => {
      setLoading(false);
    }, 7000);

  } else if (data_ip?.city) {
    render = (
      <div>
        <h2>Gracias por visitarme desde</h2>
        <div className={s.content}>
          <div className={s.content__container}>
            <div className={s.content__container__text}>
              <img src={data_ip.png} alt="bandera" />
            </div>

            <ul className={s.content__container__list}>
              <li className={s.content__container__list__item}>{data_ip.city}</li>
              <li className={s.content__container__list__item}>{data_ip.region}</li>
              <li className={s.content__container__list__item}>{data_ip.country}</li>
              <li className={s.content__container__list__item}>{data_ip.continent}</li>
            </ul>
          </div>
        </div>
      </div>
    );
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }

  return (
    <div>
      <div className={style.core_container}>
        <div className={style.core_loading}>
          {loading ? render : <Navigate to="/landing" />}
        </div>
      </div>
    </div>
  );
}
