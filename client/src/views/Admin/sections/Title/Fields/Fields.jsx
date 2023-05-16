import moment from "moment";
import React from "react";
import { totalYear } from "../../../../../components/utils/function/date";

function Fields({ change, handleOnChange, handleOnClick, err, handleOnLoad }) {

  return (
    <>
      <div className="-name">
        <label >Titulo academico<span className="mandatory">*</span></label>
        <input type="text" onChange={handleOnChange} placeholder="Técnico en redes de datos" name="title_name" value={change.name} />
        {err.name && <span className="err">{err.name}</span>}
      </div>

      <div className="-start-date">
        <label>fecha inicio <span className="mandatory">*</span></label>
        <div><input type="date" onChange={handleOnChange} id="start_date" name="title_start_date" min="1999-04-01" max={moment().subtract(1, 'days').format('YYYY-MM-DD')} value={change.start_date} /></div>
        {err.start_date && <span className="err">{err.start_date}</span>}
      </div>


      <div className="-end-date">
        <label >Fecha Termino <span className="mandatory">*</span></label>
        <div>
          <input type="date" onChange={handleOnChange} id="end_date" name="title_end_date" min="1999-04-01" max={moment().subtract(1, 'days').format('YYYY-MM-DD')} value={change.end_date === "Presente" ? moment().format('YYYY-MM-DD') : change.end_date} disabled={change.end_date === "Presente" ? true : false} />
          <input type="checkbox" name="title_end_date" onChange={handleOnChange} value={change.end_date === "Presente" ? "" : "Presente"} checked={err.end_date ? false : change.end_date !== "Presente" ? false : true} />
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

      <div className="-description">
        <label >Descripción de titulo <span className="mandatory">*</span></label>
        <textarea type="text" onChange={handleOnChange} placeholder="Planear, implementar, administrar y dar soporte a redes de datos y elementos de telecomunicaciones, de acuerdo con las políticas establecidas para su operación." name="company_description" value={change.description} />
        {err.description && <span className="err">{err.description}</span>}
      </div>

      <div className="-image">
        <label >Certificado<span className="mandatory">*</span></label>
        <input type="url" onChange={handleOnChange} placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Escudo-UdeA.svg/240px-Escudo-UdeA.svg.png" name="company_image" value={change.image} />
        <span className="err">{err.image}</span>
        {<div>
          <img id="company_img" name="company_img" onLoad={(e) => { handleOnLoad(e, "Load") }} src={change.image} alt="" />
        </div>}
      </div>

      <div className="-button">
        <div>
          <button id="title_clean" name="title_clean" onClick={handleOnClick}> Limpiar </button>
          <button id="title_save" name="title_save" onClick={handleOnClick}> Guardar Cargo </button>
        </div>
      </div>
    </>
  );
}

export default Fields;
