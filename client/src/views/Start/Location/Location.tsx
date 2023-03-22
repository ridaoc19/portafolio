import React from "react";

const data = ["Medellín", "Antioquia", "Colombia", "South America mas grande"];
const svg = "https://static.abstractapi.com/country-flags/AR_flag.png";
function Location() {
  return (
    <div className="location__container">
      <h2>Gracias por visitarme desde</h2>
      <div className="location__ubication">
        <div>
          <img src={svg} alt="flag" />
        </div>
        <div className="location__ubication--title">
          <ul>
            {data?.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Location;
