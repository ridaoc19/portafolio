import React from "react";

function Button({ handleOnClick }) {
  return (
    <>
      <button id="position_clean" name="position_clean" onClick={handleOnClick}>
        Limpiar
      </button>

  
        <button id="position_save" name="position_save" onClick={handleOnClick}>
          Guardar Cargo
        </button>

    </>
  );
}

export default Button;
