import React, { useEffect, useState } from "react";
import Validation from "../../../../../../../components/utils/function/Validation";
import { id } from "../../../../../../../components/utils/function/id";
import Slate from "./content/Slate/Slate";
import Write from "./content/Write/Write";

function Tasks({ handleTasks, changeGlobal }) {
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
      document.getElementById("tasks_add")?.setAttribute("disabled", "") : document.getElementById("tasks_add")?.removeAttribute("disabled")
    // eslint-disable-next-line
  }, [err, change])

  useEffect(() => {
    window.matchMedia("(min-width: 1200px)").matches ? setTooltip(false) : setTooltip(true)
    setTasks(changeGlobal.tasks.map((t, i) => { return { tasks: t, id: i } }))
    setChange("");
    setErr("")
    // eslint-disable-next-line
  }, []);

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
    { type: "delete", color: "red", data: "Elimina Tarea" },
    { type: "edit", color: "blue", data: "Puede Editar los campos de Tarea" },
  ]

  return (
    <>
      <div className="function__tasks-title">
        <h3>Tareas realizadas en el Proyecto</h3>
      </div>

      <div className="function__tasks">
        <Write handleOnChange={handleOnChange} change={change} err={err} handleOnClickLocal={handleOnClickLocal} />

        <div className="-slate">
          <Slate tooltip={tooltip} tasks={tasks} handleOnClickLocal={handleOnClickLocal} information={information} />
        </div>
      </div>
    </>
  );
}

export default Tasks;
