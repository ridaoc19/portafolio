import React from 'react';
import style from './home.module.scss';

function Experience(props) {
  return (
    <div>
      <div className={style.experience_container}>
      <h2>Experiencia</h2>
      <br />
      <h3>Henry</h3>
      <h6>{`(julio 2022 - septiembre 2022)`}</h6>
      <h4>Auxiliar de enseñanza de estudiantes</h4>
      <p></p>
      <br />
      <h3>Henry</h3>
      <h6>{`(marzo de 2022 - septiembre de 2022)`}</h6>
      <h4>Full Stack Developer</h4>
      <p></p>
      <br />
      <h3>Grupo Telemática Departamento de Policía Antioquia</h3>
      <h6>{`(noviembre de 2014 - agosto de 2021)`}</h6>
      <h4></h4>
      <p></p>
      <br />
      <h3>Policía Nacional de Colombia</h3>
      <h6>{`(enero de 2009 - octubre de 2009)`}</h6>
      <h4></h4>
      <p></p>
      <br />
    </div></div>
  );
}

export default Experience;