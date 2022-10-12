import React from 'react';
import style from '../../styles/styles.module.scss'
import images from '../../images/images.js'

function SidebarRigth(props) {
  return (
    <div>
      <div className={style.sidebarrigth_container} >
        {images.contact.map(e => (
          <div key={e.name} >
            {e.name === "email" ?
              (<a href={`mailto:${e.url}`}><img src={e.image} alt="imagen" /></a>) :
              (<a href={e.url} target="_blank"><img src={e.image} alt="imagen" /></a>)
            }
          </div>
        )
        )}
      </div>

    </div>
  );
}

export default SidebarRigth;