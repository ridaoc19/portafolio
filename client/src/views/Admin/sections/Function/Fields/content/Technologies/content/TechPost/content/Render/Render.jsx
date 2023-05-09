import React from 'react';
import Tooltip from '../../../../../../../../../../../components/Layout/Tooltip/Tooltip';
import { svg } from '../../../../../../../../../../../components/assets/svg';

function Render({ statusLocal, tooltip, information, state, handleOnClick }) {
  return (
    <>
      {tooltip &&
        <div className='-information'>
          {information?.map(i =>
            <i key={i.type} value={i.data} >
              <Tooltip text={i.data} color={i.color} position="right">
                {svg({ type: "information", color: i.color, width: 18 })}
              </Tooltip>
            </i>)}
        </div>}


      <ul>
        {state?.technologies?.map((e) => {
          return (
            <li key={e._id}>
              {!tooltip && <>
                <Tooltip text={`Eliminar ${e.name}`} color={"red"} position="top">
                  <i id={e.user_id.user_id} name="delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
                </Tooltip>
                <Tooltip text={`Editar ${e.name}`} color={"green"} position="bottom">
                  <i id={e.user_id.user_id} name="edit" onClick={handleOnClick} value={e._id}>{e.name}</i>
                </Tooltip>
              </>}

              {tooltip && <>
                <i id={e.user_id.user_id} name="delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
                <i id={e.user_id.user_id} name="edit" onClick={handleOnClick} value={e._id}>{e.name}</i>
              </>}
            </li>
          );
        })}

      </ul>
      {statusLocal.add &&
        <button id="add" name="add" onClick={handleOnClick}>
          {svg({ type: "add", color: "rgb(5, 207, 5)" })} Agregar nueva Tecnología
        </button>
      }
    </>
  );
}

export default Render;