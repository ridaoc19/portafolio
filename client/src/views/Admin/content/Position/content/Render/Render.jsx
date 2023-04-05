import React from "react";

function Render({ handleOnClickLocal, status, change }) {
  return (
    <>
      <ul>
        {change?.map((e) => {
          return (
            <li key={e._id}>
              {e.company}
              <button id="edit" onClick={handleOnClickLocal} value={e._id}>
                editar
              </button>
              <button id="delete" onClick={handleOnClickLocal} value={e._id}>
                eliminar
              </button>
            </li>
          );
        })}
        {status.li && (
          <li>
            <button id="add" onClick={handleOnClickLocal}>
              Agregar nueva empresa
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default Render;
