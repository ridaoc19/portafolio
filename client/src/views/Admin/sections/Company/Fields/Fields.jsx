import moment from "moment";
import React, { useEffect } from "react";
import { totalYear } from "../../../../../components/utils/function/date";
import { PARAMS } from "../../../../../components/utils/function/variables";
import Modal from "../../../../../components/Layout/Modal/Modal";

function Fields({ change, handleOnChange, handleOnLoad, err, handleOnClick }) {

  useEffect(() => {
    document.getElementById("company_save")?.setAttribute("disabled", "");
  }, []);

  return (
    <>

      <div className="company__modal-save">
        <Modal header="Validación Login" children="Para registrar información debe iniciar sesión" />
      </div>

      <div className="-name">
        <label >Empresa <span className="mandatory">*</span></label>
        <input type="text" onChange={handleOnChange} placeholder="Amazon" name="company_name" value={change.name} />
        {err.name && <span className="err">{err.name}</span>}
      </div>

      <div className="-image">
        <label >Logo de la Empresa <span className="mandatory">*</span></label>
        <input type="url" onChange={handleOnChange} placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" name="company_image" value={change.image} />
        <span className="err">{err.image}</span>
        {<div>
          <img id="company_img" name="company_img" onLoad={(e) => { handleOnLoad(e, "Load") }} src={change.image} alt="" />
        </div>}
      </div>

      <div className="-web">
        <label >Sitio web <span className="mandatory">*</span></label>
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
        <label>fecha inicio  <span className="mandatory">*</span></label>
        <div><input type="date" onChange={handleOnChange} id="start_date" name="company_start_date" min="1999-04-01" max={moment().subtract(1, 'days').format('YYYY-MM-DD')} value={change.start_date} /></div>
        {err.start_date && <span className="err">{err.start_date}</span>}
      </div>


      <div className="-end-date">
        <label >Fecha Termino  <span className="mandatory">*</span></label>
        <div>
          <input type="date" onChange={handleOnChange} id="end_date" name="company_end_date" min="1999-04-01" max={moment().subtract(1, 'days').format('YYYY-MM-DD')} value={change.end_date === "Presente" ? moment().format('YYYY-MM-DD') : change.end_date} disabled={change.end_date === "Presente" ? true : false} />
          <input type="checkbox" name="company_end_date" onChange={handleOnChange} value={change.end_date === "Presente" ? "" : "Presente"} checked={err.end_date ? false : change.end_date !== "Presente" ? false : true} />
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
        <label >Descriptión de la Empresa <span className="mandatory">*</span></label>
        <textarea type="text" onChange={handleOnChange} placeholder="Es una corporación estadounidense de comercio electrónico y servicios de computación en la nube a todos los niveles con sede en la ciudad de Seattle, Washington." name="company_description" value={change.description} />
        {err.description && <span className="err">{err.description}</span>}
      </div>

      <div className="-button">
        <div>
          <button id="company_clean" name="company_clean" onClick={handleOnClick}>
            Limpiar
          </button>
          <button id="company_save" name="company_save" onClick={handleOnClick}>
            Guardar Empresa
          </button>
        </div>

      </div>
    </>
  );
}

export default Fields;
