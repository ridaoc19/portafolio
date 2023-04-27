import React from "react";
import { totalYear } from "../../../../../../components/utils/function/date";
import { PARAMS } from "../../../../../../components/utils/function/variables";
import { svg } from "../../../../../../components/assets/svg";

function Main({ experience }) {

  return (
    <>
      {experience?.map((e, i) => {
        return (
          <div key={i} className="experiences__card--container">
            <div className="experiences__card--father">
              <div className="experiences__card--son">

                {/* <div className="experiences__card--repository"> */}
                {/* <button onClick={(e) => {
                  e.preventDefault()
                  window.open(e.repository, "test", PARAMS)
                }}> { }
                </button> */}
                {/* <a href={e.repository} target="_blank" rel="noreferrer">{svg({ type: "github", width: 40, height: 40 })}</a> */}
                {/* </div> */}

                <div className="experiences__card--date">
                  <h6>{e.start_date} - {e.end_date}</h6>
                  <h6>{totalYear(e.start_date, e.end_date === "Presente" ? Date.now() : e.end_date)}</h6>
                </div>

                <div className="experiences__card--image">
                  <img src={e.image} alt="img" />
                </div>

                <div className="experiences__card--name">

                  {/* <button onClick={(e) => {
                  e.preventDefault()
                  window.open(e.link, "test", PARAMS)
                }}>{e.name}
                </button> */}
                  <a href={e.link} target="_blank" rel="noreferrer">@{e.name}</a>

                </div>

                <div className="experiences__card--tasks">
                  <ul className={`card__tasks--${i}`}>
                    {e.tasks?.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>

                <div className="experiences__card--technologies">
                  {/* <h3>Tecnologias utilizadas</h3> */}
                  <div className="experiences__technologies--container">
                    {e.technologies?.map((e, i) => (
                      <div key={i} className="experiences__technologies--indi">
                        <li>{e.name}</li>
                      </div>
                    ))}
                  </div>
                  <div>
                    <a href={e.repository} target="_blank" rel="noreferrer">{svg({ type: "github", width: 35, height: 35 })}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default Main;
