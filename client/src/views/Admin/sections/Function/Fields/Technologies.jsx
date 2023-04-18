import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../../../../components/hooks/context/CreateContext";

function Technologies({ handleTech, change, idTasksTech }) {
  const { admin: { state }, } = useContext(CreateContext);

  const [tech, setTech] = useState([]);

  useEffect(() => {
    handleTech(tech.filter(d => d.status === 'selection').map(e => e._id), "tech")
  }, [tech]);

  useEffect(() => {
    setTech(state?.technologies?.map(e => {

      if(change.tecnologies.includes(e._id)){
      return  Object.assign(e, { status: "selection" })
      }else{
      return  Object.assign(e, { status: "technologies" })
      }

      }));
    // eslint-disable-next-line
  }, [idTasksTech]);

  // useEffect(() => {
  //   setTech(state?.technologies?.map((e) => Object.assign(e, { status: "technologies" })));
  //   // eslint-disable-next-line
  // }, [state.technologies]);

  // document.getElementById("function_edit").addEventListener('click', (e)=> {
  //   e.preventDefault()
  //   setTech(state?.technologies?.map(e => {

  //     if(change.tecnologies.includes(e._id)){
  //     return  Object.assign(e, { status: "selection" })
  //     }else{
  //     return  Object.assign(e, { status: "technologies" })
  //     }
      
  //     }));
  // })


  const handleOnDblClick = (e) => {
    const { id, name, value } = e.target;
    e.preventDefault();

    if (name === 'add') {
      setTech(
        tech.map((e) => {
          if (e._id === id) {
            return {
              _id: e._id,
              name: e.name,
              image: e.image,
              tecnologies: e.tecnologies,
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
              tecnologies: e.tecnologies,
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
        <h3>Tecnologias utilizadas</h3>
      </div>
      <div className="admin__technologies-container">
        <div id="technologies" className="technologies__content">
          <h2>tecnologias</h2>
          {tech?.map(
            (e) =>
              e.status === "technologies" && (
                <div key={e._id}>
                  <button
                    key={e._id}
                    onDoubleClick={handleOnDblClick}
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
          <h2>Seleccionadas</h2>
          {tech.map(
            (e) =>
              e.status === "selection" && (
                <div key={e._id}>
                  <button
                    id={e._id}
                    name="delete"
                    onDoubleClick={handleOnDblClick}
                  >
                    {e.name}
                  </button>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Technologies;
