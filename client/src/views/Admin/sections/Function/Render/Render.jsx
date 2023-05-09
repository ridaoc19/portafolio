import React, { useEffect, useState } from "react";
import Tooltip from "../../../../../components/Layout/Tooltip/Tooltip";
import { svg } from "../../../../../components/assets/svg";

function Render({ handleOnClick, functions, status }) {
  const [tooltip, setTooltip] = useState(false)

  let render = status.function_edit_id
  ? [functions?.find((s) => s._id === status.function_edit_id)]
  : functions;

  const information = [
    { type: "delete", color: "red", data: "Eleminaría Función o Proyecto" },
    { type: "edit", color: "blue", data: "Puede Editar los campos de Función o Proyecto" },
  ]

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
        {render?.map((e) =>
          <li key={e._id}>
            {!tooltip && <>
              <Tooltip text={`Elimina ${e.name}`} color={"red"} position="top">
                <i id="function_delete" name="function_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              </Tooltip>
              <Tooltip text={`Edita ${e.name}`} color={"blue"} position="right">
                <i id="function_edit" name="function_edit" onClick={handleOnClick} value={e._id}>{e.name}</i>
              </Tooltip>
            </>}

            {tooltip && <>
              <i id="function_delete" name="function_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              <i id="function_edit" name="function_edit" onClick={handleOnClick} value={e._id}>{e.name}</i>
            </>}
          </li>
        )}

        {status.function_add &&
          <li>
            <button id="function_add" name="function_add" onClick={handleOnClick}>{svg({ type: "add", color: "rgb(5, 207, 5)" })} Agregar Funcion o Proyecto</button>
          </li>}

      </ul>
    </>
  );
}

export default Render;
