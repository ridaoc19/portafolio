import React, { useEffect, useState } from "react";
import Tooltip from "../../../../../components/Layout/Tooltip/Tooltip";
import { svg } from "../../../../../components/assets/svg";

function Render({ handleOnClick, state, status }) {
  const [tooltip, setTooltip] = useState(false)

  let render = status.position_function_id
    ? [state?.position?.find((s) => s._id === status.position_function_id)]
    : state?.position;

    const information = [
      { type: "edit", color: "blue", data: "Puede Editar los campos del Cargo o Grado" },
      { type: "delete", color: "red", data: "Eleminaría la empresa y toda la información relacionada con ella" },
      { type: "add", color: "green", data: "si le da clic al nombre de la empresa, abre la opción para agregar nuevos cargos o grados a la Empresa" }]
  
      useEffect(() => {
        window.matchMedia("(min-width: 1200px)").matches ? setTooltip(false) : setTooltip(true)
      }, [])

  return (
    <>
      <ul>
      {tooltip && <li>{information?.map(i =>
          <i key={i.type} value={i.data} >
            <Tooltip text={i.data} color={i.color} position="right">
              {svg({ type: "information", color: i.color, width: 18 })}
            </Tooltip>
          </i>)}</li>}
        {render?.map((e) => {
          return (
            <li key={e._id}>
              {!tooltip && <>
              <Tooltip text={`Editar ${e.name}`} color={"blue"} position="right">
                <i id="position_edit" name="position_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</i>
              </Tooltip><Tooltip text={`Eliminar ${e.name}`} color={"red"} position="top">
                <i id="position_delete" name="position_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              </Tooltip><Tooltip text={`Agregar Cargo o grado desmpeñado en ${e.name}`} color={"green"} position="bottom">
                <i id="position_add_position" name="position_add_position" onClick={handleOnClick} value={e._id}>{e.name}</i>
              </Tooltip>
            </>}

            {tooltip && <>
              <i id="position_edit" name="position_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</i>
              <i id="position_delete" name="position_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              <i id="position_add_position" name="position_add_position" onClick={handleOnClick} value={e._id}>{e.name}</i>
            </>}
             </li>
          );
        })}

        {status.position_add && <li>
          <button id="position_add" name="position_add" onClick={handleOnClick}>{svg({ type: "add", color: "rgb(5, 207, 5)" })} nuevo Cargo o Grado</button>
        </li>}
        
      </ul>
    </>
  );
}

export default Render;
