import React, { useEffect, useState } from "react";
import { id } from "../../../../../components/utils/function/id";
import Validation from "../../../../../components/utils/function/Validation";
import Tooltip from "../../../../../components/Layout/Tooltip/Tooltip";
import { svg } from "../../../../../components/assets/svg";

function Tasks({ handleTasks, changeGlobal, idTasksTech }) {
  const [change, setChange] = useState("");
  const [err, setErr] = useState("");
  const [tasks, setTasks] = useState([]);
  const [tooltip, setTooltip] = useState(false)


  useEffect(() => {
    handleTasks(tasks.map(e => e.tasks), "tasks")
    // eslint-disable-next-line
  }, [tasks])

  useEffect(() => {
    err || !change ?
      document.getElementById("tasks_add")?.setAttribute("disabled", "") :
      document.getElementById("tasks_add")?.removeAttribute("disabled")
  }, [err, change])

  useEffect(() => {
    setTasks(changeGlobal.tasks.map((t, i) => { return { tasks: t, id: i } }))
    setChange("");
    setErr("")
    // eslint-disable-next-line
  }, [idTasksTech]);

  const handleOnClickLocal = (e) => {
    e.preventDefault();
    const name = e.target.attributes.getNamedItem("name").value
    const value = e.target.attributes?.getNamedItem("value")?.value

    switch (name) {
      case 'add':
        setTasks([...tasks, { tasks: change, id: id(tasks) }]);
        break;
      case 'edit':
        setChange(tasks.filter((e) => parseInt(e.id) === parseInt(value))[0].tasks);
        setTasks(tasks.filter((e) => parseInt(e.id) !== parseInt(value)));
        return;
      case 'delete':
        setTasks(tasks.filter((e) => parseInt(e.id) !== parseInt(value)));
        break;
      default: return
    }
    setChange("");
    setErr("");
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    const { type, stop, empty } = Validation("tasks", value, tasks);
    !stop && setChange(empty ? "" : value);
    setErr(type);
  };


  // toolpit
  const information = [
    { type: "delete", color: "red", data: "Eleminaría la empresa y toda la información relacionada con ella" },
    { type: "edit", color: "blue", data: "Puede Editar los campos de la Empresa" },
  ]

  useEffect(() => {
    window.matchMedia("(min-width: 1200px)").matches ? setTooltip(false) : setTooltip(true)
  }, [])

  return (
    <>
      <div className="function__tasks-title">
        <h3>Tareas realizadas en el Proyecto</h3>
      </div>

      <div className="function__tasks">

        <div className="-write">
          <textarea onChange={handleOnChange} placeholder="Ingrese tareas" value={change} name="tasks" id="tasks" className="function__tasks-textarea"          ></textarea>
          <span>{err}</span>
        </div>

        <div className="-button">
          <button onClick={handleOnClickLocal} id="tasks_add" name="add" >Agregar Tarea</button>
        </div>
        <div className="-slate">
          <ul>
            {tooltip && <li className="-slate-information">{information?.map(i =>
              <i key={i.type} value={i.data} >
                <Tooltip text={i.data} color={i.color} position="right">
                  {svg({ type: "information", color: i.color, width: 18 })}
                </Tooltip>
              </i>)}</li>}
            {tasks.map((e) => (
              <li key={e.id}>
                {!tooltip && <>
                  <Tooltip text={`Eliminar ${e.name}`} color={"red"} position="top">
                    <i onClick={handleOnClickLocal} name="delete" value={e.id}>{svg({ type: "delete", color: "red" })}</i>
                  </Tooltip>
                  <Tooltip text={`Editar ${e.name}`} color={"green"} position="bottom">
                    <i onClick={handleOnClickLocal} name="edit" value={e.id}>{e.tasks}</i>
                  </Tooltip>
                </>}

                {tooltip && <>
                  <i onClick={handleOnClickLocal} name="delete" value={e.id}>{svg({ type: "delete", color: "red" })}</i>
                  <i onClick={handleOnClickLocal} name="edit" value={e.id}>{e.tasks}</i>
                </>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tasks;
