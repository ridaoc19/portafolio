import React, { useContext, useEffect, useState } from 'react';
import CreateContext from '../../../../../../components/hooks/context/CreateContext';


function Technologies() {

  const { tecnologies: { getTecnologies, tecnologies }, admin: { postAdmin } } = useContext(CreateContext)

  const [tech, setTech] = useState([])
  const [status, setStatus] = useState(false)

  useEffect(() => {
    getTecnologies()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setTech(tecnologies.map(e => Object.assign(e, { status: "technologies" })))
    // eslint-disable-next-line
  }, [tecnologies])


  useEffect(() => {
    postAdmin({ name: "tecnologies", value: tech.filter(e => e.status === "selection").map(e => e.name) })
    // eslint-disable-next-line
  }, [status])

  document.getElementById("admin-button-clean")?.addEventListener("click", () => {
    if (tech.length !== 0) {
      setTech(tecnologies.map(e => Object.assign(e, { status: "technologies" })))
      setStatus(false)
    }
  })


  function drag(ev) {
    ev.dataTransfer.setData("data", ev.target.id);
    setStatus(true)
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("data");

    if (data) {
      if (ev.target.id === "technologies" || ev.target.id === "selection") {
        tech.forEach(e => { if (e._id === data) e.status = ev.target.id })
        setStatus(false)
      }
    }

  }

  return (
    <>
      <div className='admin__technologies-title'>
        <h3>Tecnologias utilizadas</h3>
      </div>
      <div className="admin__technologies-container">
        <div id='technologies' className="technologies__content" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}>
          <h2>tecnologias</h2>
          {tech?.map(e => e.status === "technologies" && <div key={e._id} draggable onDragStart={e => drag(e)} id={e._id}> {e.name} </div>)}
        </div>
        <div id='selection' className="technologies__selection" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}>
          <h2>Seleccionadas</h2>
          {tech.map(e => e.status === "selection" && <div key={e._id} draggable onDragStart={e => drag(e)} id={e._id}> {e.name} </div>)}
        </div>
      </div>
    </>
  );
}

export default Technologies;