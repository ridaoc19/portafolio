import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../../../components/hooks/context/CreateContext";

function Skills() {
  const { works: { technologies, functions } } = useContext(CreateContext)
  const [tech, setTech] = useState([]);

  useEffect(() => {
    setTech(technologies?.map(e => {
      let porcen = functions?.map(e => e.techPercentage).flat(Infinity)?.find(p => p._id === e._id)?.percentage
      return Object.assign(e, { value: porcen? Number(porcen): 0 })
    }));
    // eslint-disable-next-line
  }, [functions]);


  return (
    <>
      <h2>Habilidades</h2>
      <h4>Frondtend</h4>

      <ul className="home__skill--container">
        {tech?.map((e) => (
          e.technologies === "Front end" &&
          <div key={e.name} className="home__skill--card">
            <span>{`%${e.value}`}</span>
            <div className="skill__card--son">
              <img src={e.image} alt="img" />
              <div>
                <h5>{e.name}</h5>
                <progress value={e.value} max="100">{e.value}</progress>
              </div>
            </div>
          </div>
        ))}
      </ul>

      <h4>Backend</h4>

      <ul className="home__skill--container">
        {tech?.map((e) => (
          e.technologies === "Back end" &&
          <div key={e.name} className="home__skill--card">
            <span>{`%${e.value}`}</span>
            <div className="skill__card--son">
              <img src={e.image} alt="img" />
              <div>
                <h5>{e.name}</h5>
                <progress value={e.value} max="100">{e.value}</progress>
              </div>
            </div>
          </div>
        ))}
      </ul>

      <h4>Otros</h4>

      <ul className="home__skill--container">
        {tech?.map((e) => (
          e.technologies === "Otros" &&
          <div key={e.name} className="home__skill--card">
            <span>{`%${e.value}`}</span>
            <div className="skill__card--son">
              <img src={e.image} alt="img" />
              <div>
                <h5>{e.name}</h5>
                <progress value={e.value} max="100">{e.value}</progress>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Skills;
