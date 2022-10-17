import React from 'react';
import style from './home.module.scss';

function Studies(props) {
  return (
    <div>
      <div className={style.studies_container}>
      <h2>Estudios</h2>
      <br />
      <h3>Henry</h3>
      <h6>{`(marzo de 2022 - septiembre de 2022)`}</h6>
      <h4>Full Stack Developer</h4>
      <p></p>
      <br />
      <h3>Cesde Institución Educativa</h3>
      <h6>{`(enero de 2015 - diciembre de 2016)`}</h6>
      <h4>Técnico laboral por competencias en redes de datos y telecomunicaciones</h4>
      <p></p>
      <br />
      <h3>Policía Nacional de Colombia</h3>
      <h6>{`(enero de 2009 - octubre de 2009)`}</h6>
      <h4>Técnico Profesional en Servicio de Policía</h4>
      <p></p>
    </div></div>
  );
}

export default Studies;