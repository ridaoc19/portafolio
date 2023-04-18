import React, { useEffect } from "react";

function Render({ handleOnClick, state, status }) {
  let render = status.position_function_id
    ? [state?.position?.find((s) => s._id === status.position_function_id)]
    : state?.position;

  return (
    <>
      <ul>
        {render?.map((e) => {
          return (
            <li key={e._id}>
              {e.name}
              <button id="position_edit" name="position_edit" onClick={handleOnClick} value={e._id}>
                editar
              </button>
              <button id="position_delete" name="position_delete" onClick={handleOnClick} value={e._id}>
                eliminar
              </button>
              <button id="position_add_position" name="position_add_position" onClick={handleOnClick} value={e._id}>
                Agregar Cargo
              </button>
            </li>
          );
        })}

        {status.position_add && <li>
          <button id="position_add" name="position_add" onClick={handleOnClick}>
            Agregar nueva empresa
          </button>
        </li>}

      </ul>
    </>
  );
}

export default Render;
