import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../../../components/hooks/context/CreateContext";
import Main from "./sections/Main/Main";
import Header from "./sections/Header/Header";

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
    // eslint-disable-next-line
  }, [state])

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    setState({ ...state, type: e.target.value })
  }

  return (
    <>
      <h2>Experiencia</h2>
      <div className="experiences__container">
        <div className="experiences__header--container">
          <Header state={state} handleOnChange={handleOnChange} handleOnClick={handleOnClick} experience={experience.reverse()} />
        </div>
        <div id="experiences__main--container" className="experiences__main--container grid">
          <Main experience={experience} />
        </div>
      </div>
    </>
  );
}

export default Experiences;
