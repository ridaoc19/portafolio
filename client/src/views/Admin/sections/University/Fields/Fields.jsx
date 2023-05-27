import React, { useEffect } from "react";
import { PARAMS } from "../../../../../components/utils/function/variables";

function Fields({ change, handleOnChange, handleOnLoad, err, handleOnClick }) {

  useEffect(() => {
    document.getElementById("university_save")?.setAttribute("disabled", "");
  }, []);

  return (
    <>

      <div className="-name">
        <label >Universidad o centro educativo<span className="mandatory">*</span></label>
        <input type="text" onChange={handleOnChange} placeholder="Universidad de Antioquia" name="university_name" value={change.name} />
        {err.name && <span className="err">{err.name}</span>}
      </div>

      <div className="-image">
        <label >Logo del centro educativo<span className="mandatory">*</span></label>
        <input type="url" onChange={handleOnChange} placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Escudo-UdeA.svg/240px-Escudo-UdeA.svg.png" name="university_image" value={change.image} />
        <span className="err">{err.image}</span>
        {<div>
          <img id="university_img" name="university_img" onLoad={(e) => { handleOnLoad(e, "Load") }} src={change.image} alt="" />
        </div>}
      </div>

      <div className="-web">
        <label >Sitio web <span className="mandatory">*</span></label>
        <input type="url" onChange={handleOnChange} placeholder="https://www.udea.edu.co" name="university_link" value={change.link} />
        {err.link && <span className="err">{err.link}</span>}
        {!err.link && change.link &&
          (<button onClick={(e) => {
            e.preventDefault();
            window.open(change.link, "test", PARAMS);
          }} >Verificar Web</button>
          )}
      </div>

      <div className="-button">
        <div>
          <button id="university_clean" name="university_clean" onClick={handleOnClick}>
            Limpiar
          </button>
          <button id="university_save" name="university_save" onClick={handleOnClick}>
            Guardar
          </button>
        </div>

      </div>
    </>
  );
}

export default Fields;
