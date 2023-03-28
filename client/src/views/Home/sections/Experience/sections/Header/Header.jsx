import React, { useContext, useEffect, useState } from "react";
import gridIcon from "../../../../../../assets/images/icons/grid.svg";
import listIcon from "../../../../../../assets/images/icons/list.svg";
import CreateContext from "../../../../../../components/hooks/context/CreateContext";

const initialState = {
  search: "",
  type: "grid",
};

function Header() {
 const { experience: {renderExperience, updateExperience} } = useContext(CreateContext);
  const [state, setState] = useState(initialState);
 
  useEffect(() => {
    const div = document.getElementById("experiences__main--container");

    if (state.type === "grid") {
      div.classList.replace("list", "grid");
    } else {
      div.classList.replace("grid", "list");
    }

  }, [state.type]);

  useEffect(() => {
    
  },[state.search])


  useEffect(() => {
      updateExperience(state.search)
    // eslint-disable-next-line
  },[state.search])

  return (
    <div className="experiences__header--content">
      <div className="experiences__header--select">
        {/* <select name="" id=""></select> */}
        <h3>{renderExperience?.length}</h3>
      </div>
      <div className="experiences__header--search">
        <input
          type="text"
          placeholder="busca tecnologia"
          value={state.search}
          onChange={(e) => setState({ ...state, search: e.target.value })}
        />
      </div>
      <div className="experiences__header--organize">
        <button
          onClick={(e) => setState({ ...state, type: e.target.alt })}
        >
          <img src={gridIcon} alt="grid" width={10} />
        </button>
        <button onClick={(e) => setState({ ...state, type: e.target.alt })}>
          <img src={listIcon} alt="list" width={10} />
        </button>
      </div>
    </div>
  );
}

export default Header;
