import React from "react";

function Button({ handleOnClick}) {
  return (
    <>
      <button id="company_clean" name="company_clean" onClick={handleOnClick}>
        Limpiar
      </button>
      <button id="company_save" name="company_save" onClick={handleOnClick}>
        Guardar Empresa
      </button>
    </>
  );
}

export default Button;
