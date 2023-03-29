import moment from 'moment';
import 'moment-precise-range-plugin';
import React, { useContext } from "react";
import CreateContext from '../../../../components/hooks/context/CreateContext';
import { formatDate, totalYear } from '../../../../components/utils/function/date';
// import { formatDate, totalYear } from "./functionWork";




const Work = () => {
  const { experience: { works: { work } }, works: { works } } = useContext(CreateContext);

  return (
    <div className="home__work--container">
      <h2>Donde he trabajado</h2>
      {works?.map((e, i) => {

        return (
          <div key={i} className="home__work--content">
            <div className="work__content--one">
              <div className="work__content--image">
                <img src={e.image} alt="logo" />
              </div>
              <div className="work__content--title">
                <h6>
                  {formatDate(e.start_date).date} - {formatDate(e.end_date).state
                    ? formatDate(e.end_date).state
                    : formatDate(e.end_date).date}
                  <span> {totalYear(e.start_date, e.end_date === "Presente" ? Date.now() : e.end_date)}</span>
                </h6>
                <h3>
                  <a href={e.link} target="_blank" rel="noreferrer">@{e.company}</a>
                </h3>
              </div>
            </div>
            <div className="work__content--two">
              <p>{e.description}</p>
              <h4>Cargos desempeñados</h4>
              <ul >
                {e.position?.map((e, i) =>
                  <div key={i}>
                    <li >
                      {e.name}
                      <p>
                        {totalYear(e.start_date, e.end_date === "Presente" ? Date.now() : e.end_date)}
                        {` (${formatDate(e.start_date).date} - ${formatDate(e.end_date).state
                          ? formatDate(e.end_date).state
                          : formatDate(e.end_date).date})`}
                      </p>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>

        );
      })}
    </div>
  );
};

export default Work;
