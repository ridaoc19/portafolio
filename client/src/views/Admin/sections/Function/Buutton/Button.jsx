import React, { useEffect } from "react";

function Button({ handleOnClick }) {

  useEffect(()=>{
    document.getElementById("function_save")?.removeAttribute("disabled")
  },[])

  return (
    <>
      <button id="function_clean" name="function_clean" onClick={handleOnClick}>Limpiar</button>
      <button id="function_save" name="function_save" onClick={handleOnClick}>Guardar Empresa</button>
    </>
  );
}

export default Button;
