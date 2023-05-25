import React from 'react';
import { useSelector } from 'react-redux';

function LocationTemp(props) {

  const location = useSelector((state) => state.location)

  const { city, continent, country, region } = location[0];
  return (
    <>
      <div className="location__container">
        <h2>Gracias por visitarme desde</h2>

        <div>
          <div className="location__ubication">
            <div>
              <img src={location[0]?.svg} alt="flag" />
            </div>
            <div className="location__ubication--title">
              <ul>
                {[city, continent, country, region]?.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="location__especification">
            <div><span>{`0%`}</span><progress></progress></div>
            <h5>Esta página está alojada en servicios gratuitos, por ende, se demora en cargar la información, por favor esperar</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationTemp;