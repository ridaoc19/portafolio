import React, { useEffect } from "react";
import { totalYear } from "../../../../../components/utils/function/date";
import moment from "moment";

function Fields({ change, handleOnChange, handleOnClick, err }) {

  return (
    <>
      <div className="-name">
        <label >Cargo o Grado <span className="mandatory">*</span></label>
        <input type="text" onChange={handleOnChange} placeholder="Front end developer Junior" name="position_name" value={change.name} />
        {err.name && <span className="err">{err.name}</span>}
      </div>

      <div className="-start-date">
        <label>fecha inicio <span className="mandatory">*</span></label>
        <div><input type="date" onChange={handleOnChange} id="start_date" name="position_start_date" min="1999-04-01" max={moment().subtract(1, 'days').format('YYYY-MM-DD')} value={change.start_date} /></div>
        {err.start_date && <span className="err">{err.start_date}</span>}
      </div>


      <div className="-end-date">
        <label >Fecha Termino <span className="mandatory">*</span></label>
        <div>
          <input type="date" onChange={handleOnChange} id="end_date" name="position_end_date" min="1999-04-01" max={moment().subtract(1, 'days').format('YYYY-MM-DD')} value={change.end_date === "Presente" ? moment().format('YYYY-MM-DD') : change.end_date} disabled={change.end_date === "Presente" ? true : false} />
          <input type="checkbox" name="position_end_date" onChange={handleOnChange} value={change.end_date === "Presente" ? "" : "Presente"} checked={err.end_date ? false : change.end_date !== "Presente" ? false : true} />
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

      <div className="-button">
        <div>
          <button id="position_clean" name="position_clean" onClick={handleOnClick}> Limpiar </button>
          <button id="position_save" name="position_save" onClick={handleOnClick}> Guardar </button>
        </div>
      </div>
    </>
  );
}

export default Fields;
