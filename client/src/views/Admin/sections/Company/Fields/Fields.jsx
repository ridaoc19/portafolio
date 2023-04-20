import React, { useEffect } from "react";
import { totalYear } from "../../../../../components/utils/function/date";
import { PARAMS } from "../../../../../components/utils/function/variables";

function Fields({ change, handleOnChange, handleOnLoad, err, handleOnClick }) {
  useEffect(() => {
    document.getElementById("company_save")?.setAttribute("disabled", "");
  }, []);

  

  return (
    <form>
      <div className="-name">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="empresa"
          name="company_name"
          value={change.name}
        />
        <span>{err.name}</span>
      </div>

      <div className="-image">
        <input
          type="url"
          onChange={handleOnChange}
          placeholder="logo"
          name="company_image"
          value={change.image}
        />
        <span>{err.image}</span>
        <img
          id="img_temp"
          name="company_img"
          onLoad={(e) => {
            handleOnLoad(e, "Load");
          }}
          src={change.image}
          alt=""
          width="50"
        />
      </div>

      <div className="-web">
        <input
          type="url"
          onChange={handleOnChange}
          placeholder="sitio web"
          name="company_link"
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

      <div className="-start-date">
        <label htmlFor="start_date">fecha inicio </label>
        <input
          type="date"
          onChange={handleOnChange}
          id="start_date"
          name="company_start_date"
          min="1999-04-01"
          max="2040-04-20"
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
          max="2040-04-20"
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
      <div className="-description">
        <textarea
          type="text"
          onChange={handleOnChange}
          placeholder="descripcion empresa"
          name="company_description"
          value={change.description}
        />
        <span>{err.description}</span>
      </div>
      <div className="company__button">
      <button id="company_clean" name="company_clean" onClick={handleOnClick}>
        Limpiar
      </button>
      <button id="company_save" name="company_save" onClick={handleOnClick}>
        Guardar Empresa
      </button>
      </div>
    </form>
  );
}

export default Fields;
