import React from 'react';
import Tooltip from '../../../../../../../../../components/Layout/Tooltip/Tooltip';
import { svg } from '../../../../../../../../../components/assets/svg';

function Slate({tooltip, tasks, information, handleOnClickLocal}) {
  return (
    <>
      {tooltip &&
        information?.map(i =>
          <i key={i.type} value={i.data} >
            <Tooltip text={i.data} color={i.color} position="right">
              {svg({ type: "information", color: i.color, width: 18 })}
            </Tooltip>
          </i>)}

      <ul>
        {tasks.map((e) => (
          <li key={e.id}>
            {!tooltip && <>
              <Tooltip text={`Lo elimina`} color={"red"} position="right">
                <i onClick={handleOnClickLocal} name="delete" value={e.id}>{svg({ type: "delete", color: "red" })}</i>
              </Tooltip>
              <Tooltip text={`Edita esta Información`} color={"green"} position="bottom">
                <i onClick={handleOnClickLocal} name="edit" value={e.id}>{e.tasks}</i>
              </Tooltip>
            </>}

            {tooltip && <>
              <i onClick={handleOnClickLocal} name="delete" value={e.id}>{svg({ type: "delete", color: "red" })}</i>
              <i onClick={handleOnClickLocal} name="edit" value={e.id}>{e.tasks}</i>
            </>}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Slate;