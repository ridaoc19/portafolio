import React, { useEffect, useState } from "react";
import { svg } from "../../../../../components/assets/svg";
import Tooltip from "../../../../../components/Layout/Tooltip/Tooltip";

function Render({ handleOnClick, university, status }) {
  const [tooltip, setTooltip] = useState(false)

  let render = status.university_title_id
    ? [university?.find((s) => s._id === status.university_title_id)]
    : university;

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
                <i id="university_edit" name="university_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</i>
              </Tooltip><Tooltip text={`Eliminar ${e.name}`} color={"red"} position="top">
                <i id="university_delete" name="university_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              </Tooltip><Tooltip text={`Agregar Cargo o grado desmpeñado en ${e.name}`} color={"green"} position="bottom">
                <i id="university_add_title" name="university_add_title" onClick={handleOnClick} value={e._id}>{e.name}</i>
              </Tooltip>
            </>}

            {tooltip && <>
              <i id="university_edit" name="university_edit" onClick={handleOnClick} value={e._id}>{svg({ type: "edit" })}</i>
              <i id="university_delete" name="university_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
              <i id="university_add_title" name="university_add_title" onClick={handleOnClick} value={e._id}>{e.name}</i>
            </>}
          </li>
        ))}

        {status.university_add &&
          (
            <li>
              <button id="university_add" name="university_add" onClick={handleOnClick}>{svg({ type: "add", color: "rgb(5, 207, 5)" })} nueva empresa</button>
            </li>
          )}
      </ul>
    </>
  );
}

export default Render;
