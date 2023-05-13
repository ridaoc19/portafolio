import React, { useEffect, useState } from "react";
import Tooltip from "../../../../../components/Layout/Tooltip/Tooltip";
import { svg } from "../../../../../components/assets/svg";

function Render({ handleOnClick, state, status }) {
  const [tooltip, setTooltip] = useState(false)

  let render = status.title_edit_id
    ? [state?.title_id?.find((s) => s._id === status.title_edit_id)]
    : state?.title_id;

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
        {render?.map((e) => {
          return (
            <li key={e._id}>
              {!tooltip && <>
                <Tooltip text={`Elimina ${e.name}`} color={"red"} position="top">
                  <i id="title_delete" name="title_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
                </Tooltip>
                <Tooltip text={`Edita ${e.name}`} color={"blue"} position="right">
                  <i id="title_edit" name="title_edit" onClick={handleOnClick} value={e._id}>{e.name}</i>
                </Tooltip>
              </>}

              {tooltip && <>
                <i id="title_delete" name="title_delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
                <i id="title_edit" name="title_edit" onClick={handleOnClick} value={e._id}>{e.name}</i>
              </>}
            </li>
          );
        })}

        {status.title_add && <li>
          <button id="title_add" name="title_add" onClick={handleOnClick}>{svg({ type: "add", color: "rgb(5, 207, 5)" })} nuevo Cargo o Grado</button>
        </li>}

      </ul>
    </>
  );
}

export default Render;
