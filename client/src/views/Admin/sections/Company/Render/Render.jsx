import React from "react";

function Render({ handleOnClick, company, status }) {

  let render = status.company_position_id
    ? [company?.find((s) => s._id === status.company_position_id)]
    : company;

  return (
    <>
      <ul>
        {render?.map((e) => (
          <li key={e._id}>
            {e.name}
            <button id="company_edit" name="company_edit" onClick={handleOnClick} value={e._id}>editar</button>
            <button id="company_delete" name="company_delete" onClick={handleOnClick} value={e._id}>eliminar</button>
            <button id="company_add_position" name="company_add_position" onClick={handleOnClick} value={e._id}>Agregar Cargo</button>
          </li>
        ))}

        {status.company_add &&
          (
            <li>
              <button id="company_add" name="company_add" onClick={handleOnClick}>Agregar nueva empresa</button>
            </li>
          )}
      </ul>
    </>
  );
}

export default Render;
