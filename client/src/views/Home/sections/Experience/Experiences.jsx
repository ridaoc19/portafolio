import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../../../components/hooks/context/CreateContext";
import Main from "./sections/Main/Main";

const initialState = {
  search: "",
  select: "",
  type: "grid",
};

function Experiences() {

  const { works: { functions } } = useContext(CreateContext);

  const [state, setState] = useState(initialState);
  const [experience, setExperience] = useState([])

  useEffect(() => {
    setExperience(functions)
  }, [functions])

  useEffect(() => {
    const div = document.getElementById("experiences__main--container");
    state.type === "grid" ? div.classList.replace("list", "grid") : div.classList.replace("grid", "list");
  }, [state.type]);

  useEffect(() => {
    let filter = [...functions];
    if (state.search) filter = filter.filter(e => e.technologies.some(d => d.name.toString().toLowerCase().includes(state.search.toLowerCase())))
    if (state.select) filter = filter.filter(e => e.technologies.some(d => d.technologies.toString().toLowerCase().includes(state.select.toLowerCase())))
    setExperience(filter)
  }, [state])



  return (
    <>
      <h2>Experiencia</h2>
      <div className="experiences__container">
        <div className="experiences__header--container">
          <div className="experiences__header--content">
            <div className="experiences__header--select">
              <h3>{experience?.length}</h3>
            </div>
            <div className="experiences__header--search">
              <input
                type="text"
                placeholder="busca tecnologia"
                value={state.search}
                onChange={(e) => setState({ ...state, search: e.target.value })}
              />
              <select name="technologies" onChange={(e) => setState({ ...state, select: e.target.value })}>
                <option value="">Seleccionar</option>
                <option value="Front end">Front end</option>
                <option value="Back end">Back end</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div className="experiences__header--organize">
              <button
                onClick={(e) => setState({ ...state, type: e.target.alt })}
              >
                <img src={"gridIcon"} alt="grid" width={10} />
              </button>
              <button onClick={(e) => setState({ ...state, type: e.target.alt })}>
                <img src={"listIcon"} alt="list" width={10} />
              </button>
            </div>
          </div>
        </div>
        <div id="experiences__main--container" className="experiences__main--container grid">
          <Main experience={experience} />
        </div>
      </div>
    </>
  );
}

export default Experiences;
