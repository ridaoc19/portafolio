import { Navigate } from "react-router-dom";
import useLoading from "../../../components/hooks/custom/useLoading";
import { useEffect, useState } from "react";

function Location({ location }) {
  const loading = useLoading(15000);
  const [value, setValue] = useState(0)

  const { city, continent, country, region } = location[0];

  useEffect(() => {
    let width = 1;
    let id = setInterval(frame, 147);
    function frame() {
      if (width >= 101) {
        clearInterval(id);
      } else {
        setValue(width)
        width++;
      }
    }
  }, [])

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
              <div><span>{`${value}%`}</span><progress value={value} max="100">{value}</progress></div>
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
