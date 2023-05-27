import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../../../../../../components/hooks/context/CreateContext";
import Render from "./content/Render";

function Technologies({ handleTech, change }) {
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
  }, [state?.technologies]);

  const handleOnClick = (e) => {
    const { id, name } = e.target;
    e.preventDefault();

    if (name === 'add') {
      setTech(
        tech.map((e) => {
          if (e._id === id) return { _id: e._id, name: e.name, image: e.image, technologies: e.technologies, percentage: e.percentage, status: "selection" };
          return e;
        })
      );
    } else if (name === 'delete') {
      setTech(
        tech.map((e) => {
          if (e._id === id) return { _id: e._id, name: e.name, image: e.image, technologies: e.technologies, percentage: e.percentage, status: "technologies", };
          return e;
        })
      );
    }
  };

  return (
    <>
      <div className="admin__technologies-title">
        <h3>Tecnologias utilizadas</h3>
        <label> <input type="checkbox" name="technologies" onClick={() => setStatus({ function_add_technologies: status.function_add_technologies ? false : true })} /> <span>Agregar Tecnología</span></label>
      </div>
      <Render handleOnClick={handleOnClick} status={status} tech={tech} />
    </>
  );
}

export default Technologies;
