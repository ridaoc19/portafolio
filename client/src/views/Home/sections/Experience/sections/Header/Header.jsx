import React from "react";

function Header({state, handleOnChange, handleOnClick, experience}) {
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
        <select name="select" onChange={handleOnChange}>
          <option value="">Seleccionar</option>
          <option value="Front end">Front end</option>
          <option value="Back end">Back end</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
      <div className="experiences__header--organize">
        <button
          onClick={handleOnClick}
        >
          <img src={"gridIcon"} alt="grid" width={10} />
        </button>
        <button onClick={handleOnClick}>
          <img src={"listIcon"} alt="list" width={10} />
        </button>
      </div>
    </div>
  );
}

export default Header;
