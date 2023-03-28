import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation, postLocation } from "../../redux/actions";
import Location from "./Location/Location";
import Theme from "./Theme/Theme";

function Start() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (!sessionStorage.location) {
      dispatch(postLocation());
    } else {
      dispatch(getLocation(sessionStorage.location))
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="start__container">
      {loading ? <h1>Cargando...</h1> :
        <>
          <div className="start__container-location">
            <Location />
          </div>
          <div className="start__container-theme">
            <Theme />
          </div>
        </>
      }

    </div>
  )
}

export default Start;
