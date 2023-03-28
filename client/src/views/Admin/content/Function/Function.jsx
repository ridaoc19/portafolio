import React, { useContext, useState } from 'react';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Block from './Block';
import BlockTwo from './BlockTwo';
import { DragAndDrop } from './DragAndDrop';

function Function(props) {

  const [change, setChange] = useState([])

  const { admin: { postAdmin, state }, experience } = useContext(CreateContext)
  const { position } = experience.works.work[1]

  let tecnologies = Array.from(new Set(position.map(e => e.function.map(e => e.tecnologies)).flat(Infinity)))


  const handleOnChange = (e) => {
    postAdmin({ name: e.target.name, value: e.target.value })
  }

  return (
    <div>
      <h2>Funciones o proyectos</h2>
      <input type="text" onChange={handleOnChange} placeholder="cargo" name="function" value={state.function} />
      <input type="url" onChange={handleOnChange} placeholder="link pagina" name="link_function" value={state.link_function} />
      <label htmlFor="start_date_function">fecha inicio</label>
      <input type="date" onChange={handleOnChange} id="start_date_function" name="start_date_function" value={state.start_date_function} />
      <label htmlFor="end_date_function">Fecha Termino</label>
      <input type="date" onChange={handleOnChange} id="end_date_function" name="end_date_function" value={state.end_date_function} />
      <input type="url" onChange={handleOnChange} placeholder="respositorio github" name="repository" value={state.repository} />
      <hr />
      {/* <button onClick={handleOnClick} name="button_tecnologies">+</button> */}
      <input type="text" onChange={handleOnChange} placeholder="tecnologias" name="tecnologies" value={state.tecnologies} />
      {/* <button onClick={handleOnClick} name="button_tasks">+</button> */}
      <input type="text" onChange={handleOnChange} placeholder="tareas" name="tasks" value={state.tasks} />
      <div className='function_esayo'>
      </div>

      <hr />

      <div className="container-main flex">
        {/* <DragAndDrop /> */}
        {/* <Block /> */}
        <BlockTwo/>
      </div>

    </div>
  );
}

export default Function;