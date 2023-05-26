import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../../../../../../components/hooks/context/CreateContext";
import Render from "./content/Render";
import Modal from "../../../../../../../components/Layout/Modal/Modal";

function Technologies({ handleTech, change }) {
  const { admin: { state, status, setStatus }, modal: { setModal, modal } } = useContext(CreateContext);
  const [tech, setTech] = useState([]);
  const [dataModal, setDataModal] = useState({ header: "", children: "" })


  useEffect(() => {
    handleTech(tech.filter(d => d.status === 'selection').map(e => e._id), "tech", tech.filter(d => d.status === 'selection').map(e => { return { _id: e._id, percentage: e.percentage } }))
    // eslint-disable-next-line
  }, [tech]);

  useEffect(() => {
    setTech(state?.technologies?.map(e => {

      if (change.technologies.includes(e._id)) {
        let perse = state.functions?.map(e => e.techPercentage)?.flat(Infinity)?.find(p => p._id === e._id)?.percentage
        return Object.assign(e, { status: "selection", percentage: perse ? Number(perse) : 0 })
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
      let percentage = prompt("Ingrese numero de Porcentaje", 10);
      percentage = Number(percentage)
      if (percentage === null || percentage < 0 || percentage > 100 || !Number(percentage)) {
        if (percentage <= 0 || percentage > 100) setDataModal({ header: "Campo obligatorio", children: `El numero debe ser mayor a 0 y menor o igual que 100` })
        if (isNaN(percentage)) setDataModal({ header: "Información", children: `Debe ser numero` })
        return setModal({ ...modal, avalible: true, animation: "mixInAnimations", element: "functions__modal-tech" })
      }

      setTech(
        tech.map((e) => {
          if (e._id === id) return { _id: e._id, name: e.name, image: e.image, technologies: e.technologies, percentage, status: "selection", };
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
        <div id="functions__modal-tech">
          <Modal header={dataModal.header} children={dataModal.children} />
        </div>
        <h3>Tecnologias utilizadas</h3>
        <label> <input type="checkbox" name="technologies" onClick={() => setStatus({ function_add_technologies: status.function_add_technologies ? false : true })} />Agregar Tecnología</label>
      </div>
      <Render handleOnClick={handleOnClick} status={status} tech={tech} />
    </>
  );
}

export default Technologies;
