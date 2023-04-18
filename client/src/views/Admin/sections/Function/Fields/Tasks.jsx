import React, { useEffect, useState } from "react";
import { id } from "../../../../../components/utils/function/id";
import Validation from "../../../../../components/utils/function/Validation";

function Tasks({ handleTasks, changeGlobal, idTasksTech }) {
  const [change, setChange] = useState("");
  const [err, setErr] = useState("");
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    handleTasks(tasks.map(e => e.tasks), "tasks")
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
    const { name, value } = e.target;

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

    }

    setChange("");
    setErr("");



    // if (name === 'add') {
    //   setTasks([...tasks, { tasks: change, id: id(tasks) }]);
    //   setChange("");
    //   setErr("");
    // } else if (name === 'delete') {
    //   setTasks(tasks.filter((e) => parseInt(e.id) !== parseInt(value)));
    //   setErr("");

    // } else if (name === 'edit') {
    //   setChange(tasks.filter((e) => parseInt(e.id) === parseInt(value))[0].tasks);
    //   setTasks(tasks.filter((e) => parseInt(e.id) !== parseInt(value)));
    // }
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    const { type, stop, empty } = Validation("tasks", value, tasks);
    !stop && setChange(empty ? "" : value);
    setErr(type);
  };



  return (
    <>
      <div className="function__tasks-title">
        <h3>Tareas realizadas en el Proyecto</h3>
      </div>
      <div className="function__tasks">
        <div className="-write">
          <textarea
            onChange={handleOnChange}
            placeholder="Ingrese tareas"
            value={change}
            name="tasks"
            id="tasks"
            className="function__tasks-textarea"
          ></textarea>
          <span>{err}</span>
        </div>
        <div className="-button">
          <button onClick={handleOnClickLocal} id="tasks_add" name="add" >Agregar</button>
        </div>
        <div className="-slate">
          <ul>
            {tasks.map((e) => (
              <li key={e.id}>
                {e.tasks}
                <button onClick={handleOnClickLocal} name="delete" value={e.id}>Eliminar</button>
                <button onClick={handleOnClickLocal} name="edit" value={e.id}>Editar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="-options">
          {/* <img id='delete' src="" alt="borrar" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
          <img id='edit' src="" alt="editar" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} /> */}
        </div>
      </div>
    </>
  );
}

export default Tasks;
