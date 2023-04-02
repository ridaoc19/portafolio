import React from 'react';

function Mold({title, classN, id, array }) {
  const { admin: { postAdmin } } = useContext(CreateContext)

  const [change, setChange] = useState("")
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    postAdmin({ name: "tasks", value: tasks.map(e => e.tasks) })
     // eslint-disable-next-line
  }, [tasks])

  document.getElementById("admin-button-clean")?.addEventListener("click", () => {
    if (change.length !== 0) {
      setChange("")
    } else if (tasks.length !== 0) {
      setTasks([])
    }
  })

  const handleOnClick = (e) => {
    e.preventDefault();
    setTasks([...tasks, { tasks: change, id: id(tasks) }])
    setChange("")
  }

  const drag = (ev) => ev.dataTransfer.setData("text", ev.target.id);

  const allowDrop = (ev) => ev.preventDefault();


  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");

    if (data) {
      if (ev.target.id === "delete") {
        setTasks(tasks.filter(e => parseInt(e.id) !== parseInt(data)))
      } else if (ev.target.id === "edit") {
        setChange(tasks.filter(e => parseInt(e.id) === parseInt(data))[0].tasks)
        setTasks(tasks.filter(e => parseInt(e.id) !== parseInt(data)))
      }
    }
  }

  return (
    <>
    <div className={`${classN}-title`}>
      <h3>{title}</h3>
    </div>
    <div className={`${classN}-container`}>
      <div className='-write'>
        <textarea onChange={e => { setChange(e.target.value) }} placeholder="Ingrese tareas" value={change} name="tasks" id="tasks" className='function__tasks-textarea'></textarea>
      </div>
      <div className='-button'>
        <button onClick={handleOnClick}>Agregar</button>
      </div>
      <div className='-slate'>
        <ul onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}>
          {array.map(e => <li key={e.id} draggable onDragStart={e => drag(e)} id={e.id}>{e.data}</li>)}
        </ul>
      </div>
      <div className='-options'>
        <img id={`${id}-delete`} src="" alt="borrar" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
        <img id={`${id}-edit`} src="" alt="editar" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)} />
      </div>
    </div>
  </>
  );
}

export default Mold;