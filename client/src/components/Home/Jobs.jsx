import React from 'react';
import style from './home.module.scss';

function Jobs(props) {
  return (
    <div>
      <div className={style.jobs_container}>
       <h2>Trabajos</h2>
      <br />
      <h3>Policía Nacional de Colombia</h3>
      <h6>{`(octubre de 2009 - agosto de 2021)`}</h6>
      <h4></h4>
      <p></p>
      <br />
    </div></div>
  );
}

export default Jobs;