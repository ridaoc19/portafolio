import React, { useContext, useEffect } from "react";
import CreateContext from "../../../../components/hooks/context/CreateContext";

function Skills() {
  const { works: { technologies } } = useContext(CreateContext)

  useEffect(() => {
    // getTechnologies()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <h3>Habilidades</h3>
      <h4>Frondtend</h4>

      <ul className="home__skill--container">
        {technologies?.map((e) => (
          e.technologies === "Front end" &&
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
        {technologies?.map((e) => (
          e.technologies === "Back end" &&
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
