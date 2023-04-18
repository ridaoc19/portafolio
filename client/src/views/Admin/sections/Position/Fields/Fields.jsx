import React from "react";
import { totalYear } from "../../../../../components/utils/function/date";

function Fields({ change, handleOnChange, err }) {
  return (
    <>
      <div className="-name">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="cargo o grado"
          name="position_name"
          value={change.name}
        />
        <span>{err.name}</span>
      </div>

      <div className="-start-date">
        <label htmlFor="start_date">fecha inicio </label>
        <input
          type="date"
          onChange={handleOnChange}
          id="start_date"
          name="position_start_date"
          value={change.start_date}
        />
        <span>{err.start_date}</span>
      </div>

      <div className="-end-date">
        <label htmlFor="end_date">Fecha Termino </label>
        <input
          type="date"
          onChange={handleOnChange}
          id="end_date"
          name="position_end_date"
          value={change.end_date}
        />
        <span>{err.end_date}</span>
      </div>
      {change.start_date && change.end_date && (
        <div>
          Tiempo en la empresa:{" "}
          {totalYear(
            change.start_date,
            change.end_date === "Presente" ? Date.now() : change.end_date
          )}
        </div>
      )}
    </>
  );
}

export default Fields;
