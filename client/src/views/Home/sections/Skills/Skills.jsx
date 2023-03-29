import React, { useContext, useEffect } from "react";
import CreateContext from "../../../../components/hooks/context/CreateContext";

function Skills() {
  const { tecnologies: { getTecnologies, tecnologies } } = useContext(CreateContext)

  useEffect(() => {
    getTecnologies()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <h3>Habilidades</h3>
      <h4>Frondtend</h4>

      <ul className="home__skill--container">
        {tecnologies?.map((e) => (
          e.tecnologies === "Front end" &&
          <div key={e.name} className="home__skill--card">
            <div className="skill__card--father container">
              <div className="skill__card--son">
                <img src={e.image} alt="img" />
                <h5>{e.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </ul>

      <h4>Backend</h4>

      <ul className="home__skill--container">
        {tecnologies?.map((e) => (
          e.tecnologies === "back end" &&
          <div key={e.name} className="home__skill--card">
            <div className="skill__card--father container">
              <div className="skill__card--son">
                <img src={e.image} alt="img" />
                <h5>{e.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Skills;
