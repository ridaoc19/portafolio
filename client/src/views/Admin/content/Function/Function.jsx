import React, { useContext } from 'react';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Tasks from './sections/tasks/Tasks';
import Technologies from './sections/technologies/Technologies';

function Function({handleOnChange, state}) {

  return (
    <>
      <div className='admin__function-title'>
        <h2>Funciones o proyectos</h2>
      </div>
      <div className='admin__function'>
        <div className='-function'>
          <input type="text" onChange={handleOnChange} placeholder="cargo" name="function" value={state.function} />
        </div>
        <div className='-deploy'>
          <input type="url" onChange={handleOnChange} placeholder="link pagina desplegada" name="link_function" value={state.link_function} />
        </div>
        <div className='-start-date'>
          <label htmlFor="start_date_function">fecha inicio</label>
          <input type="date" onChange={handleOnChange} id="start_date_function" name="start_date_function" value={state.start_date_function} />
        </div>
        <div className='-end-date'>
          <label htmlFor="end_date_function">Fecha Termino</label>
          <input type="date" onChange={handleOnChange} id="end_date_function" name="end_date_function" value={state.end_date_function} />
        </div>
        <div className='-respository'>
          <input type="url" onChange={handleOnChange} placeholder="respositorio github" name="repository" value={state.repository} />
        </div>
        <div className=''>
        </div>
      </div>
      <hr />
      <div className='-tasks-technologies'>
        <div className='-tasks'>
          <Tasks />
          <hr />
        </div>
        <div className='technologies'>
          <Technologies />
        </div>
      </div>
    </>
  );
}

export default Function;