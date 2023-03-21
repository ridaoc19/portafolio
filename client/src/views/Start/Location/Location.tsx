import React from "react";

const data = ["Medellín", "Antioquia", "Colombia", "South America"];
const svg = "https://static.abstractapi.com/country-flags/AR_flag.png";
function Location() {
  return (
    <div >
      <h2>Gracias por visitarme desde</h2>
            <img src={svg} alt="" width="20" />
      <div className="location__ubication">
        <div className="location__ubication--container">
          <ul>
            {data?.map((e, i) => (
              <li key={i}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Location;
