import React from "react";
import { totalYear } from "../../../../../components/utils/function/date";
import moment from "moment";

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
          name="company_end_date"
          min="1999-04-01"
          max={moment().subtract(1, 'days').format('YYYY-MM-DD')}
          value={change.end_date === "Presente" ? moment().format('YYYY-MM-DD') : change.end_date}
          disabled={change.end_date === "Presente" ? true : false}
        />

        <input
          type="checkbox"
          name="company_end_date"
          onChange={handleOnChange}
          value={change.end_date === "Presente" ? "" : "Presente"}
          checked={err.end_date ? false : change.end_date !== "Presente" ? false : true}
        />
        <label htmlFor="company_end_date"> Presente</label>

        <span>{err.end_date}</span>

        {change.start_date && change.end_date && (
          <div>
            Tiempo en el Cargo:{" "}
            {totalYear(
              change.start_date,
              change.end_date === "Presente" ? Date.now() : change.end_date
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Fields;
