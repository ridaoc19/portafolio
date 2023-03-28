import moment from 'moment';
import 'moment-precise-range-plugin';
import React, { useContext } from "react";
import CreateContext from '../../../../components/hooks/context/CreateContext';
import { formatDate } from "./functionWork";

 


const Work = () => {
  const { experience: { works: {work} }} = useContext(CreateContext);

  var m1 = moment('1990-02-12');
var m2 = moment('2023-02-23');
var diff = moment.preciseDiff(m1, m2, true);
 
// console.log(diff)

  return (
    <div className="home__work--container">
      <h2>Donde he trabajado</h2>
      {work?.map((e, i) => {

 
        return (
          <div key={i} className="home__work--content">
            <div className="work__content--one">
              <div className="work__content--image">
                <img src={e.image} alt="logo" />
              </div>
              <div className="work__content--title">
                <h6>
                  {formatDate(e.start_date).date} - {formatDate(e.end_date).state? formatDate(e.end_date).state: formatDate(e.end_date).date}
                </h6>
                <h3>
                  <a href={e.link} target="_blank" rel="noreferrer">@{e.company}</a>
                </h3>
              </div>
            </div>
            <div className="work__content--two">
              <p>{e.description}</p>
              <h4>Cargos desempeñados</h4>
              {e.position?.map((e, i) => <ul key={i}><li>{`${e.name} (${formatDate(e.start_date).date} - ${formatDate(e.end_date).state? formatDate(e.end_date).state: formatDate(e.end_date).date})`}</li></ul>)}
            </div>
          </div>

        );
      })}
    </div>
  );
};

export default Work;
