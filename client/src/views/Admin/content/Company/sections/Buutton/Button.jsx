import React from 'react';

function Button({status, handleOnClickLocal}) {
  return (
    <>
       {status.change && <button
        id="clean"
        onClick={handleOnClickLocal}
      >
        Limpiar
      </button>}
      <button
        id="undo"
        onClick={handleOnClickLocal}
      >
        Deshacer cambios
      </button>
    </>
  );
}

export default Button;