import React from 'react';
import style from '../../styles/styles.module.scss'

function Footer(props) {
  return (
    <div>
      <div className={style.footer_container} >
        <h5>Creado por Ricardo David Ocampo</h5>
        <h6>Medellin - Antioquia - Colombia</h6>
      </div>
    </div>
  );
}

export default Footer;