import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLocation } from "../../../redux/actions";

function Location() {
  const dispatch = useDispatch();

  const loading = useSelector((state: any) => state.loading);

  let sessionLocation = JSON.parse(sessionStorage.location || null);

  useEffect(() => {
    if (!sessionLocation) dispatch(postLocation())
  }, []);

  return (
    <>
      <div className="location__container">
        <h2>Gracias por visitarme desde</h2>
        {loading ? <h1>Cargando...</h1> : (
          <div className="location__ubication">
            <div>
              <img src={sessionLocation?.svg} alt="flag" />
            </div>
            <div className="location__ubication--title">
              <ul>
                {[
                  sessionLocation?.city,
                  sessionLocation?.continent,
                  sessionLocation?.county,
                  sessionLocation?.region,
                ]?.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Location;
