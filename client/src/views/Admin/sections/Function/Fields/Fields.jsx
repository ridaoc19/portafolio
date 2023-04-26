import moment from "moment";
import React from "react";
import { totalYear } from "../../../../../components/utils/function/date";
import { PARAMS } from "../../../../../components/utils/function/variables";
import Tasks from "./Tasks";
import Technologies from "./Technologies";

function Fields({ change, handleOnChange, handleTasksTech, err, idTasksTech, handleOnLoad }) {
  return (
    <>
      <div className="-name">
        <input type="text" onChange={handleOnChange} placeholder="funcion o proyecto" name="function_name" value={change.name} />
        <span>{err.name}</span>
      </div>

      <div className="-image">
        <input type="url" onChange={handleOnChange} placeholder="logo" name="function_image" value={change.image} />
        <span>{err.image}</span>
        <img id="img_temp" name="function_img" onLoad={(e) => { handleOnLoad(e, "Load") }} src={change.image} alt="" width="50" />
      </div>

      <div className="-link">
        <input type="text" onChange={handleOnChange} placeholder="link pagina" name="function_link" value={change.link} />
        <span>{err.link}</span>
        {!err.link && change.link &&
          (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(change.link, "test", PARAMS);
              }}>Verificar Web</button>
          )}
      </div>

      <div className="-repository">
        <input type="text" onChange={handleOnChange} placeholder="respositorio" name="function_repository" value={change.repository} />
        <span>{err.repository}</span>
        {!err.repository && change.repository &&
          (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(change.repository, "test", PARAMS);
              }}>Verificar Web</button>
          )}
      </div>

      <div className="-start-date">
        <label htmlFor="start_date">fecha inicio </label>
        <input type="date" onChange={handleOnChange} id="start_date" name="function_start_date" min="1999-04-01" max="2040-04-20" value={change.start_date} />
        <span>{err.start_date}</span>
      </div>

      <div className="-end-date">
        <label htmlFor="end_date">Fecha Termino </label>
        <input type="date" onChange={handleOnChange} id="end_date" name="company_end_date" min="1999-04-01" max={moment().subtract(1, 'days').format('YYYY-MM-DD')} value={change.end_date === "Presente" ? moment().format('YYYY-MM-DD') : change.end_date} disabled={change.end_date === "Presente" ? true : false} />
        <input type="checkbox" name="company_end_date" onChange={handleOnChange} value={change.end_date === "Presente" ? "" : "Presente"} checked={err.end_date ? false : change.end_date !== "Presente" ? false : true} />
        <label htmlFor="company_end_date"> Presente</label>
        <span>{err.end_date}</span>
        {change.start_date && change.end_date &&
          (
            <div>
              Tiempo en la empresa:{" "}
              {totalYear(
                change.start_date,
                change.end_date === "Presente" ? Date.now() : change.end_date
              )}
            </div>
          )}
      </div>

      <div className="-tasks">
        <Tasks handleTasks={handleTasksTech} changeGlobal={change} idTasksTech={idTasksTech} />
      </div>

      <div className="-technologies">
        <Technologies handleTech={handleTasksTech} change={change} idTasksTech={idTasksTech} />
      </div>
    </>
  );
}

export default Fields;
