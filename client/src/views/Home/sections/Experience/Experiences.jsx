import React, { useContext, useEffect } from "react";
import CreateContext from "../../../../components/hooks/context/CreateContext";
import Header from "./sections/Header/Header";
import Main from "./sections/Main/Main";

function Experiences(props) {

  const { experience: {getExperience} } = useContext(CreateContext)
 
  useEffect(() => {
    getExperience()
    // eslint-disable-next-line
  }, [] )

  return (
    <>
      <h2>Experiencia</h2>
      <div className="experiences__container">
        <div className="experiences__header--container">
          <Header />
        </div>
        <div id="experiences__main--container" className="experiences__main--container grid">
          <Main />
        </div>
      </div>
    </>
  );
}

export default Experiences;
