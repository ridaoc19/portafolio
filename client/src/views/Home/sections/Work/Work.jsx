import React, { useContext } from "react";
import CreateContext from '../../../../components/hooks/context/CreateContext';
import { formatDate, totalYear } from '../../../../components/utils/function/date';

const Work = () => {
  const { works: { company } } = useContext(CreateContext);

  return (
    <>
      <h2>Donde he trabajado</h2>
      <div className="home__work--container">
        {company?.map((e, i) => {

          return (
            <div key={i} className="home__work--content">
              <div className="work__content--one">
                <div className="work__content--image">
                  <img src={e.image} alt="logo" />
                </div>
                <div className="work__content--title">
                  <h3>
                    <a href={e.link} target="_blank" rel="noreferrer">@{e.name}</a>
                  </h3>
                  <h6>
                    <span>{totalYear(e.start_date, e.end_date === "Presente" ? Date.now() : e.end_date)} </span>
                    {`(${formatDate(e.start_date).date} - ${formatDate(e.end_date).state
                      ? formatDate(e.end_date).state
                      : formatDate(e.end_date).date})`}
                  </h6>
                  <p>{e.description}</p>
                </div>
              </div>
              {e.position.length !== 0 && <div className="work__content--two">
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
              </div>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Work;
