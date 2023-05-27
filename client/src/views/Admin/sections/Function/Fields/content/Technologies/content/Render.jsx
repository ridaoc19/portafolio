import React from 'react';
import TechPost from './TechPost/TechPost';

function Render({ status, tech, handleOnClick }) {
  return (
    <>
      {status.function_add_technologies ? <TechPost />
        : <div className="admin__technologies-container">
          <div id="technologies" className="technologies__content">
            <div>
              <h3>tecnologias </h3>
              <ul>
                {tech?.map((e) =>
                  e.status === "technologies" && (
                    <button key={e._id} onClick={handleOnClick} name="add" id={e._id}> {e.name} </button>
                  )
                )}
              </ul>
            </div>
          </div>
          <div id="selection" className="technologies__selection">
            <div>
              <h3>Seleccionadas</h3>
              <ul>
                {tech.map((e) =>
                  e.status === "selection" && (
                    <button key={e._id} id={e._id} name="delete" onClick={handleOnClick}> {e.name} <span>{`%${e.percentage ? e.percentage : 0}`}</span> </button>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>}
    </>
  );
}

export default Render;