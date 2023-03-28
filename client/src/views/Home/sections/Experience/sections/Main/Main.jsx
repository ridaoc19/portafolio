import React, { useContext } from "react";
import CreateContext from "../../../../../../components/hooks/context/CreateContext";


function Main() {
  const { experience: {renderExperience} } = useContext(CreateContext);
  
  return (
    <>
      {renderExperience?.map((e, i) => (
        <div key={i} className="experiences__card--container">
          <div className="experiences__card--father">
            <div className="experiences__card--son">
              <div className="experiences__card--date">
                <h6>
                  {e.start_date} - {e.end_date}
                </h6>
              </div>

              <div className="experiences__card--image">
                <img src={e.image} alt="img" />
              </div>

              <div className="experiences__card--name">
                <h4>{e.name}</h4>
              </div>

              <div className="experiences__card--tasks">
                <ul>
                  {e.tasks?.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>

              <div className="experiences__card--tecnologies">
                {/* <h3>Tecnologias utilizadas</h3> */}
                <div className="experiences__tecnologies--container">
                  {e.tecnologies?.map((e, i) => (
                    <div key={i} className="experiences__tecnologies--indi">
                      <li>{e}</li>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Main;
