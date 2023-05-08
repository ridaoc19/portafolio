import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation, postLocation } from "../../redux/actions";
import { LOADING } from "../../redux/types";
import Location from "./Location/Location";
import LocationTemp from "./Location/LocationTemp";
import Theme from "./Theme/Theme";

function Start() {
  const dispatch = useDispatch();
  const loadingPost = useSelector((state) => state.loading);
  const loadingLocal = useSelector((state) => state.loadingLocal);
  const location = useSelector((state) => state.location)


  useEffect(() => {
    if (!sessionStorage.location) {
      dispatch(postLocation());
    } else {
      dispatch(getLocation(sessionStorage.location));
    }

    return () => {
      dispatch({ type: LOADING });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="start__container">
      <Theme />
      <div className="start__container-content">
        {loadingPost ?
          <div className="start__container-loading">
            {loadingLocal ? <h1>Cargando...</h1> : <LocationTemp />}
          </div>
          : <>
            <div className="start__container-location">
              <Location location={location} />
            </div>
            <div className="start__container-theme"></div>
          </>
        }
      </div>
    </div>
  );
}

export default Start;
