import React, { useEffect, useState } from "react";
import Tooltip from "../../../../../components/Layout/Tooltip/Tooltip";
import { svg } from "../../../../../components/assets/svg";

function Render({ handleOnClick, functions, status }) {
  const [tooltip, setTooltip] = useState(false)


  const information = [
    { type: "edit", color: "blue", data: "Puede Editar los campos de la Empresa" },
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
        {functions?.map((e) =>
          <li key={e._id}>
            {!tooltip && <>
              <Tooltip text={`Editar ${e.name}`} color={"blue"} position="right">
                <i id="function_edit" name="function_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</i>
              </Tooltip>
              <Tooltip text={`Eliminar ${e.name}`} color={"red"} position="top">
                <i id="function_delete" name="function_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              </Tooltip>
              <Tooltip text={`Agregar Cargo o grado desmpeñado en ${e.name}`} color={"green"} position="bottom">
                <i id="function_add_position" name="function_add_position" onClick={handleOnClick} value={e._id}>{e.name}</i>
              </Tooltip>
            </>}

            {tooltip && <>
              <i id="function_edit" name="function_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</i>
              <i id="function_delete" name="function_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              <i id="function_add_position" name="function_add_position" onClick={handleOnClick} value={e._id}>{e.name}</i>
            </>}
            {/* {e.name}
            <button id="function_edit" name="function_edit" onClick={handleOnClick} value={e._id}>editar</button>
            <button id="function_delete" name="function_delete" onClick={handleOnClick} value={e._id}>eliminar</button> */}
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
