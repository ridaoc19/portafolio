import React from "react";
import Tasks from "./Tasks";
import Technologies from "./Technologies";
import { totalYear } from "../../../../../components/utils/function/date";
import { PARAMS } from "../../../../../components/utils/function/variables";

function Fields({ change, handleOnChange, handleTasksTech, err, idTasksTech }) {
  return (
    <>
      <div className="-name">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="funciones"
          name="function_name"
          value={change.name}
        />
        <span>{err.name}</span>
      </div>

      <div className="-link">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="link pagina"
          name="function_link"
          value={change.link}
        />
         <span>{err.link}</span>
        {!err.link && change.link && (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(change.link, "test", PARAMS);
            }}
          >
            Verificar Web
          </button>
        )}
      </div>

      <div className="-repository">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="respositorio"
          name="function_repository"
          value={change.repository}
        />
        <span>{err.repository}</span>
        {!err.repository && change.repository && (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(change.repository, "test", PARAMS);
            }}
          >
            Verificar Web
          </button>
        )}
      </div>

      <div className="-start-date">
        <label htmlFor="start_date">fecha inicio </label>
        <input
          type="date"
          onChange={handleOnChange}
          id="start_date"
          name="function_start_date"
          min="1999-04-01"
          max="2040-04-20"
          value={change.start_date}
        />
      </div>
      <span>{err.start_date}</span>
      <div className="-end-date">
        <label htmlFor="end_date">Fecha Termino </label>
        <input
          type="date"
          onChange={handleOnChange}
          id="end_date"
          name="function_end_date"
          min="1999-04-01"
          max="2040-04-20"
          value={change.end_date}
        />
        <span>{err.end_date}</span>
      </div>
      {change.start_date && change.end_date && (
        <div>
          Tiempo en el Proyecto:{" "}
          {totalYear(
            change.start_date,
            change.end_date === "Presente" ? Date.now() : change.end_date
          )}
        </div>
      )}

      <div className="-tasks">
        <Tasks handleTasks={handleTasksTech} changeGlobal={change} idTasksTech={idTasksTech}/>
      </div>

      <div className="-technologies">
        <Technologies handleTech={handleTasksTech} change={change} idTasksTech={idTasksTech}/>
      </div>
    </>
  );
}

export default Fields;
