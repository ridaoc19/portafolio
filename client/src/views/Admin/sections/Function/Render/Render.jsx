import React from "react";

function Render({ handleOnClick, functions, status }) {
  return (
    <>
      <ul>
        {functions?.map((e) => {
          return (
            <li key={e._id}>
              {e.name}
              <button id="function_edit" name="function_edit" onClick={handleOnClick} value={e._id}>
                editar
              </button>
              <button id="function_delete" name="function_delete" onClick={handleOnClick} value={e._id}>
                eliminar
              </button>
            </li>
          );
        })}

        {status.function_add && <li>
          <button id="function_add" name="function_add" onClick={handleOnClick}>
            Agregar nueva empresa
          </button>
        </li>}

      </ul>
    </>
  );
}

export default Render;
