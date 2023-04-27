import React from "react";
import { svg } from "../../../../../../components/assets/svg";

function Header({ state, handleOnChange, handleOnClick, experience }) {
  return (
    <div className="experiences__header--content">

      <div className="experiences__header--select">
        <h3>{experience?.length}</h3>
      </div>

      <div className="experiences__header--search">
        <input
          type="text"
          placeholder="busca tecnologia"
          value={state.search}
          name="search"
          onChange={handleOnChange}
        />
      </div>

      <div className="experiences__header--tech">
        <select name="select" onChange={handleOnChange}>
          <option value="">Seleccionar</option>
          <option value="Front end">Front end</option>
          <option value="Back end">Back end</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
      
      <div className="experiences__header--organize">
        <button className="style__svg" onClick={handleOnClick} value={"grid"}>
          {svg({ type: "grid",  width: 20, height: 20 })}
        </button>
        <button className="style__svg" onClick={handleOnClick} value={"list"}>
          {svg({ type: "list", width: 20, height: 20  })}
        </button>
      </div>
    </div>
  );
}

export default Header;
