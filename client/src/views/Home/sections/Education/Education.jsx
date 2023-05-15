import React, { useContext } from "react";
import CreateContext from '../../../../components/hooks/context/CreateContext';
import { formatDate, totalYear } from '../../../../components/utils/function/date';

const Education = () => {
  const { works: { education } } = useContext(CreateContext);

  return (
    <>
      <h2>Lo que he estudiando</h2>
      <div className="home__education--container">
        {education?.map((e, i) => {

          return (
            <div key={i} className="home__education--content">

              <div className="education__content--one">

                <div className="education__content--image">
                  <img src={e.image} alt="logo" />
                </div>

                <div className="education__content--title">
                  <h3>
                    <a href={e.link} target="_blank" rel="noreferrer">@{e.name}</a>
                  </h3>

                </div>

              </div>


              <div className="education__content--two">
                {education.map(d => d.title_id).flat(Infinity).length !== 0 && <h4>Títulos académicos</h4>}
                <ul >
                  {e.title_id?.map((e, i) =>
                    <button key={i}>
                      <p>{e.name}</p>
                      <i>
                        {totalYear(e.start_date, e.end_date === "Presente" ? Date.now() : e.end_date)}
                        {` (${formatDate(e.start_date).date} - ${formatDate(e.end_date).state
                          ? formatDate(e.end_date).state
                          : formatDate(e.end_date).date})`}
                      </i>
                    </button>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
