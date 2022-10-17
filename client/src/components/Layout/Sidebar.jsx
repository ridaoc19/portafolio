import React from 'react';
import style from "./layout.module.scss";
import images from '../../images/images.js';

export default function Sidebar(props) {
  return (
    <div>
      <div className={style.sidebar_container} >
        {images.contact.map(e => (
          <div key={e.name} >
            
            {e.name === "email" ?
              (<a href={`mailto:${e.url}`}><img src={e.image} alt="imagen" /></a>) :
              (<a href={e.url} target="_blank" rel="noreferrer"><img src={e.image} alt="imagen" /></a>)
            }
          </div>
        )
        )}
      </div>

    </div>
  );
}
