import React from "react";
import { svg } from "../../../../../components/assets/svg";
import Tooltip from "../../../../../components/Layout/Tooltip/Tooltip";

function Render({ handleOnClick, company, status }) {

  let render = status.company_position_id
    ? [company?.find((s) => s._id === status.company_position_id)]
    : company;

  return (
    <>
      <ul>
        {render?.map((e) => (
          <li key={e._id}>
            <Tooltip text={`Editar ${e.name}`} color={"blue"} position="right">
              <button id="company_edit" name="company_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</button>
            </Tooltip>
            <Tooltip text={`Eliminar ${e.name}`} color={"red"} position="top">
              <button id="company_delete" name="company_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</button>
            </Tooltip>
            <Tooltip text={`Agregar Cargo o grado desmpeñado en ${e.name}`} color={"green"} position="left">
              <button id="company_add_position" name="company_add_position" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "green" })}</button>
            </Tooltip>
            {e.name}
          </li>
        ))}

        {status.company_add &&
          (
            <li>
              <button id="company_add" name="company_add" onClick={handleOnClick}>{svg({ type: "add", color: "rgb(5, 207, 5)" })} nueva empresa</button>
            </li>
          )}
      </ul>
    </>
  );
}

export default Render;
