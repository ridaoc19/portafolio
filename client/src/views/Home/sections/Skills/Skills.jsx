import React, { useContext } from "react";
import CreateContext from "../../../../components/hooks/context/CreateContext";

function Skills() {
  const { works: { technologies } } = useContext(CreateContext)

  return (
    <>
      <h2>Habilidades</h2>
      <h4>Frondtend</h4>

      <ul className="home__skill--container">
        {technologies?.map((e) => (
          e.technologies === "Front end" &&
          <div key={e.name} className="home__skill--card">
              <div className="skill__card--son">
                <img src={e.image} alt="img" />
                <h5>{e.name}</h5>
              </div>
          </div>
        ))}
      </ul>

      <h4>Backend</h4>

      <ul className="home__skill--container">
        {technologies?.map((e) => (
          e.technologies === "Back end" &&
          <div key={e.name} className="home__skill--card">
              <div className="skill__card--son">
                <img src={e.image} alt="img" />
                <h5>{e.name}</h5>
              </div>
          </div>
        ))}
      </ul>

      <h4>Otros</h4>

      <ul className="home__skill--container">
        {technologies?.map((e) => (
          e.technologies === "Otros" &&
          <div key={e.name} className="home__skill--card">
              <div className="skill__card--son">
                <img src={e.image} alt="img" />
                <h5>{e.name}</h5>
              </div>
            </div>
        ))}
      </ul>
    </>
  );
}

export default Skills;
