import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../../../../components/hooks/context/CreateContext";
import TechPost from "./TechPost";

function Technologies({ handleTech, change, idTasksTech }) {
  const { admin: { state, status, setStatus } } = useContext(CreateContext);

  const [tech, setTech] = useState([]);

  useEffect(() => {
    handleTech(tech.filter(d => d.status === 'selection').map(e => e._id), "tech")
    // eslint-disable-next-line
  }, [tech]);

  useEffect(() => {
    setTech(state?.technologies?.map(e => {

      if (change.technologies.includes(e._id)) {
        return Object.assign(e, { status: "selection" })
      } else {
        return Object.assign(e, { status: "technologies" })
      }

    }));
    // eslint-disable-next-line
  }, [idTasksTech, state?.technologies]);

  const handleOnClick = (e) => {
    const { id, name } = e.target;
    e.preventDefault();

    if (name === 'add') {
      setTech(
        tech.map((e) => {
          if (e._id === id) return { _id: e._id, name: e.name, image: e.image, technologies: e.technologies, status: "selection", };
          return e;
        })
      );
    } else if (name === 'delete') {
      setTech(
        tech.map((e) => {
          if (e._id === id) return { _id: e._id, name: e.name, image: e.image, technologies: e.technologies, status: "technologies", };
          return e;
        })
      );
    }
  };

  return (
    <>
      <div className="admin__technologies-title">
        <h3>Tecnologias utilizadas</h3>
        <label> <input type="checkbox" name="technologies" onClick={() => setStatus({ function_add_technologies: status.function_add_technologies ? false : true })} />Agregar Tecnología</label>
      </div>

      {status.function_add_technologies ? <TechPost />
        : <div className="admin__technologies-container">
          <div id="technologies" className="technologies__content">
            <div>
              <h3>tecnologias </h3>
              {tech?.map((e) =>
                e.status === "technologies" && (
                  <div key={e._id}>
                    <button key={e._id} onClick={handleOnClick} name="add" id={e._id}> {e.name} </button>
                  </div>
                )
              )}
            </div>
          </div>
          <div id="selection" className="technologies__selection">
            <div>
              <h3>Seleccionadas</h3>
              {tech.map((e) =>
                e.status === "selection" && (
                  <div key={e._id}>
                    <button id={e._id} name="delete" onClick={handleOnClick}> {e.name} </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>}
    </>
  );
}

export default Technologies;
