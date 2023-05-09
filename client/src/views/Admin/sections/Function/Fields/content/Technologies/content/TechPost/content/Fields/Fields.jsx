import React from 'react';

function Fields({ handleOnChange, handleOnClick, change, err, handleOnLoad }) {
  return (
    <>
      <div className="-name">
        <label >Nombre</label>
        <input type="text" onChange={handleOnChange} placeholder="React" name="name" value={change.name} />
        {err.name && <span className="err">{err.name}</span>}
      </div>

      <div className='-technologies'>
        <label >Clasificación</label>
        <select name="technologies" value={change.technologies} onChange={handleOnChange}>
          <option value="">Seleccionar</option>
          <optgroup label="Desarrollo">
            <option value="Front end">Front end</option>
            <option value="Back end">Back end</option>
          </optgroup>
          <optgroup label="Otras profesiones">
            <option value="Otros">Otros</option>
          </optgroup>
        </select>
        {err.technologies && <span>{err.technologies}</span>}
      </div>

      <div className="-image">
        <label >Logo</label>
        <input type="url" onChange={handleOnChange} placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png" name="image" value={change.image} />
        <span className="err">{err.image}</span>

      </div>

      {<div className='-render-image'>
        <img id="technologies_img" name="technologies_img" onLoad={(e) => { handleOnLoad(e, "Load") }} src={change.image} alt="" />
      </div>}

      <div className='-button'>
        <div>
          <button name='clean' onClick={handleOnClick} >limpiar</button>
          <button id='technologies_save' name='save' onClick={handleOnClick}>Guardar</button>
        </div>
      </div>
    </>
  );
}

export default Fields;