import React, { useState } from "react";
import { svg } from "../../../../../components/assets/svg";
import Tooltip from "../../../../../components/Layout/Tooltip/Tooltip";

function Render({ handleOnClick, company, status }) {
  const [tooltip, setTooltip] = useState(true)

  let render = status.company_position_id
    ? [company?.find((s) => s._id === status.company_position_id)]
    : company;

  const information = [
  {type: "edit",data :"Eleminaría la empresa y toda la información relacionada con ella"},
  {type: "delete",data : "Agrega nuevos cargos o grados a la Empresa"},
  {type: "add",data : "si le da clic al nombre de la empresa, le da la opción de editar sus campos"}]

  const handleOnMouseDown = (e) => {
    e.preventDefault();

  }

  const handleOnMouseUp = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <ul>
        {tooltip && <li>{information?.map( i => 
        <i key={i.type} value={i.data} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
         <Tooltip text={i.data} color={"blue"} position="right">
          {svg({ type: "information" })}
          </Tooltip> 
          </i>)}</li>}
        {render?.map((e) => (
          <li key={e._id}>
            <Tooltip text={`Editar ${e.name}`} color={"blue"} position="right">
              <button id="company_edit" name="company_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</button>
            </Tooltip>
            <Tooltip text={`Eliminar ${e.name}`} color={"red"} position="top">
              <button id="company_delete" name="company_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</button>
            </Tooltip>
            <Tooltip text={`Agregar Cargo o grado desmpeñado en ${e.name}`} color={"green"} position="bottom">
              <button id="company_add_position" name="company_add_position" onClick={handleOnClick} value={e._id}>{svg({ type: "add_position", color: "green" })}</button>
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
