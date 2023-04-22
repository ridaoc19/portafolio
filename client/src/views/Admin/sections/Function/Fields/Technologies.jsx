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
          if (e._id === id) {
            return {
              _id: e._id,
              name: e.name,
              image: e.image,
              technologies: e.technologies,
              status: "selection",
            };
          }
          return e;
        })
      );
    } else if (name === 'delete') {
      setTech(
        tech.map((e) => {
          if (e._id === id) {
            return {
              _id: e._id,
              name: e.name,
              image: e.image,
              technologies: e.technologies,
              status: "technologies",
            };
          }
          return e;
        })
      );
    }
  };

  return (
    <>
      <div className="admin__technologies-title">
        <h2>Tecnologias utilizadas</h2>
        <input
          type="checkbox"
          name="technologies"
          onClick={() => setStatus({ function_add_technologies: status.function_add_technologies ? false : true })}
          // checked={status.function_add_technologies}
        />
        <label htmlFor="technologies"> Agregar Tecnología</label>
        {status.function_add_technologies && <TechPost />}
      </div>
      {!status.function_add_technologies && <div className="admin__technologies-container">
        <div id="technologies" className="technologies__content">
          <h3>tecnologias </h3>
          {tech?.map(
            (e) =>
              e.status === "technologies" && (
                <div key={e._id}>
                  <button
                    key={e._id}
                    onClick={handleOnClick}
                    name="add"
                    id={e._id}
                  >
                    {e.name}
                  </button>
                </div>
              )
          )}
        </div>
        <div id="selection" className="technologies__selection">
          <h3>Seleccionadas</h3>
          {tech.map(
            (e) =>
              e.status === "selection" && (
                <div key={e._id}>
                  <button
                    id={e._id}
                    name="delete"
                    onClick={handleOnClick}
                  >
                    {e.name}
                  </button>
                </div>
              )
          )}
        </div>
      </div>}
    </>
  );
}

export default Technologies;
