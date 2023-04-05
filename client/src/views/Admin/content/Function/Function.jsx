import React, { useContext, useEffect, useState } from 'react';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Tasks from './sections/tasks/Tasks';
import Technologies from './sections/technologies/Technologies';

const initialState = {
  name_function: "",
  link_function: "",
  start_date_function: "",
  end_date_function: "",
  repository: "",
  tecnologies: [],
  tasks: [],
}

function Function() {
  const { admin: { postAdmin, state, handleOnChange, change } } = useContext(CreateContext);
console.log(change)
  // const [change, setChange] = useState(initialState);

  // const handleOnChange = (e) => {
  //   setChange({ ...change, [e.target.name]: e.target.value });
  // };

  // useEffect(() => {
  //   postAdmin({ name: "position[0].function", value: [change] });
  // }, [change]);

  return (
    <>
      <div className='admin__function-title'>
        <h2>Funciones o proyectos</h2>
      </div>
      <div className='admin__function'>
        <div className='-function'>
          <input type="text" onChange={handleOnChange} placeholder="cargo" name="name_function" value={change.name_function} />
        </div>
        <div className='-deploy'>
          <input type="url" onChange={handleOnChange} placeholder="link pagina desplegada" name="link_function" value={change.link_function} />
        </div>
        <div className='-start-date'>
          <label htmlFor="start_date_function">fecha inicio</label>
          <input type="date" onChange={handleOnChange} id="start_date_function" name="start_date_function" value={change.start_date_function} />
        </div>
        <div className='-end-date'>
          <label htmlFor="end_date_function">Fecha Termino</label>
          <input type="date" onChange={handleOnChange} id="end_date_function" name="end_date_function" value={change.end_date_function} />
        </div>
        <div className='-respository'>
          <input type="url" onChange={handleOnChange} placeholder="respositorio github" name="repository" value={change.repository} />
        </div>
        <div className=''>
        </div>
      </div>
      <hr />
      {/* <div className='-tasks-technologies'>
        <div className='-tasks'>
          <Tasks />
          <hr />
        </div>
        <div className='technologies'>
          <Technologies />
        </div>
      </div> */}
    </>
  );
}

export default Function;