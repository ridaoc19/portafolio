import React from "react";

function Button({ handleOnClick, status }) {
  return (
    <>
      <button id="function_clean" name="function_clean" onClick={handleOnClick}>
        Limpiar
      </button>

      {status.function_save && (
        <button id="function_save" name="function_save" onClick={handleOnClick}>
          Guardar Empresa
        </button>
      )}
    </>
  );
}

export default Button;
