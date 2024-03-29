import moment from "moment";
import React from "react";
import { totalYear } from "../../../../../components/utils/function/date";
import { PARAMS } from "../../../../../components/utils/function/variables";
import Tasks from "./content/Tasks/Tasks";
import Technologies from "./content/Technologies/Technologies";

function Fields({ change, handleOnChange, handleTasksTech, handleOnClick, status, err, handleOnLoad }) {

  return (
    <>
      <div className="-name">
        <label >Nombre del Proyecto o Función<span className="mandatory">*</span></label>
        <input type="text" onChange={handleOnChange} placeholder="e-commece" name="function_name" value={change.name} />
        {err.name && <span className="err">{err.name}</span>}
      </div>

      <div className="-image">
        <label >Logo del proyecto</label>
        <input type="url" onChange={handleOnChange} placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" name="company_image" value={change.image} />
        <span className="err">{err.image}</span>
        {<div>
          <img id="function_img" name="function_img" onLoad={(e) => { handleOnLoad(e, "Load") }} src={change.image} alt="" />
        </div>}
      </div>

      <div className="-web">
        <label >Sitio web</label>
        <input type="url" onChange={handleOnChange} placeholder="https://www.amazon.es" name="company_link" value={change.link} />
        {err.link && <span className="err">{err.link}</span>}
        {!err.link && change.link &&
          (<button onClick={(e) => {
            e.preventDefault();
            window.open(change.link, "test", PARAMS);
          }} >Verificar Web</button>
          )}
      </div>

      <div className="-start-date">
        <label>fecha inicio <span className="mandatory">*</span></label>
        <div><input type="date" onChange={handleOnChange} id="start_date" name="function_start_date" min="1999-04-01" max={moment().subtract(1, 'days').format('YYYY-MM-DD')} value={change.start_date} /></div>
        {err.start_date && <span className="err">{err.start_date}</span>}
      </div>


      <div className="-end-date">
        <label >Fecha Termino <span className="mandatory">*</span></label>
        <div>
          <input type="date" onChange={handleOnChange} id="end_date" name="function_end_date" min="1999-04-01" max={moment().subtract(1, 'days').format('YYYY-MM-DD')} value={change.end_date === "Presente" ? moment().format('YYYY-MM-DD') : change.end_date} disabled={change.end_date === "Presente" ? true : false} />
          <input type="checkbox" name="function_end_date" onChange={handleOnChange} value={change.end_date === "Presente" ? "" : "Presente"} checked={err.end_date ? false : change.end_date !== "Presente" ? false : true} />
        </div>
        {err.end_date && <span className="err">{err.end_date}</span>}
        {change.start_date && change.end_date &&
          (<div>
            Total:{" "}
            {totalYear(
              change.start_date,
              change.end_date === "Presente" ? Date.now() : change.end_date
            )}
          </div>
          )}
      </div>

      <div className="-repository">
        <label >Repositorio</label>
        <input type="text" onChange={handleOnChange} placeholder="https://github.com/ridaoc19" name="function_repository" value={change.repository} />
        {err.repository && <span className="err">{err.repository}</span>}
        {!err.repository && change.repository &&
          (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(change.repository, "test", PARAMS);
              }}>Verificar Repositorio</button>
          )}
      </div>

      <div className="-tasks">
        <Tasks handleTasks={handleTasksTech} changeGlobal={change} />
      </div>

      <div className="-technologies">
        <Technologies handleTech={handleTasksTech} change={change} />
      </div>

      <div className="-button"><div>
        {!status.function_add_technologies && <>
          <button id="function_clean" name="function_clean" onClick={handleOnClick}>Limpiar</button>
          <button id="function_save" name="function_save" onClick={handleOnClick}>Guardar</button>
        </>}
      </div>
      </div>
    </>
  );
}

export default Fields;
