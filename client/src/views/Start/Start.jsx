import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useLoading from "../../components/hooks/custom/useLoading";
import { getLocation, postLocation } from "../../redux/actions";
import { LOADING } from "../../redux/types";
import Location from "./Location/Location";
import Theme from "./Theme/Theme";

function Start() {
  const dispatch = useDispatch();
  const loading = useLoading(12000);
  const loadingPost = useSelector((state) => state.loading);

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
            <h1>Cargando...</h1>
          </div>
          : loading ?
            <>
              <div className="start__container-location">
                <Location />
              </div>
              <div className="start__container-theme"></div>
            </>
            : <Navigate to="/home" replace={true} />}
      </div>
    </div>
  );
}

export default Start;
