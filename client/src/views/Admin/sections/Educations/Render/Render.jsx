import React, { useEffect, useState } from "react";
import { svg } from "../../../../../components/assets/svg";
import Tooltip from "../../../../../components/Layout/Tooltip/Tooltip";

function Render({ handleOnClick, company, status }) {
  const [tooltip, setTooltip] = useState(false)

  let render = status.company_position_id
    ? [company?.find((s) => s._id === status.company_position_id)]
    : company;

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
        {render?.map((e) => (
          <li key={e._id}>
            {!tooltip && <>
              <Tooltip text={`Editar ${e.name}`} color={"blue"} position="right">
                <i id="company_edit" name="company_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</i>
              </Tooltip><Tooltip text={`Eliminar ${e.name}`} color={"red"} position="top">
                <i id="company_delete" name="company_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              </Tooltip><Tooltip text={`Agregar Cargo o grado desmpeñado en ${e.name}`} color={"green"} position="bottom">
                <i id="company_add_position" name="company_add_position" onClick={handleOnClick} value={e._id}>{e.name}</i>
              </Tooltip>
            </>}

            {tooltip && <>
              <i id="company_edit" name="company_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</i>
              <i id="company_delete" name="company_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              <i id="company_add_position" name="company_add_position" onClick={handleOnClick} value={e._id}>{e.name}</i>
            </>}
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
