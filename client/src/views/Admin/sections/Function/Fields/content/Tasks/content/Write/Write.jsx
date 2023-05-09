import React from 'react';

function Write({handleOnChange, handleOnClickLocal, err, change}) {
  return (
    <>
     <div className="-write">
          <textarea onChange={handleOnChange} placeholder="Diseño y mantenimiento de las funciones principales de la aplicación web orientada al cliente" value={change} name="tasks" id="tasks" className="function__tasks-textarea"          ></textarea>
          <span className='err'>{err}</span>
        </div>

        <div className="-button">
          <button onClick={handleOnClickLocal} id="tasks_add" name="add" >Agregar Tarea</button>
        </div> 
    </>
  );
}

export default Write;