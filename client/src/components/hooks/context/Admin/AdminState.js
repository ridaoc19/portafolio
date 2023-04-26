import { useReducer } from "react";
import AdminReducer, { initialState } from "./AdminReducer";
import StatusReducer, { initialStateStatus } from './StatusReducer';
import { DATA_UPDATE, LOADING_API, STATUS } from './adminTypes';

function AdminState() {
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  const [status, dispatchStatus] = useReducer(StatusReducer, initialStateStatus);

  const callApi = async ({ method, route, loading, post }) => {
    dispatch({ type: LOADING_API, payload: { [loading]: true } })

    fetch(`${process.env.REACT_APP_URL}/works/${route}`, {
      method: method,
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: DATA_UPDATE, payload: data, })
        dispatch({ type: LOADING_API, payload: { [loading]: false } })
      })
      .catch((error) => console.log({ errPost: error.message }));
  };

  const setStatus = (name) => {
    dispatchStatus({
      type: name.type ? 'CLEAN' : STATUS,
      payload: name
    });
  };

  return { callApi, state, status, setStatus }
}

export default AdminState;
