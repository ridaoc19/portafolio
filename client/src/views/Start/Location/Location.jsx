import { Navigate } from "react-router-dom";
import useLoading from "../../../components/hooks/custom/useLoading";

function Location({ location }) {
  const loading = useLoading(12000);

  const { city, continent, country, region } = location[0];

  return (
    <>
      {loading ?
        <div className="location__container">
          <h2>Gracias por visitarme desde</h2>

          <div>
            <div className="location__ubication">
              <div>
                <img src={location[0].svg} alt="flag" />
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
              <h3>{location[1]} visitas desde</h3>
              {location[2]?.map((e, i) => (
                <p key={i}><span>{e.count}</span> <img src={e.svg} alt="" width={20} /><span>{e.country}</span><span>{e.region}</span><span>{e.city}</span></p>
              ))}
            </div>
          </div>
        </div>
        : <Navigate to="/home" replace={true} />}
    </>
  );
}

export default Location;
