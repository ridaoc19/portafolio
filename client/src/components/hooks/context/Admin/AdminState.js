import axios from 'axios';
import { useReducer } from "react";
import AdminReducer, { initialState } from "./AdminReducer";
import StatusReducer, { initialStateStatus } from './StatusReducer';
import { DATA_UPDATE, GET_COMPANY, GET_FUNCTIONS, LOADING_API, POST_FUNCTIONS, STATUS } from './adminTypes';

function AdminState() {

  const [state, dispatch] = useReducer(AdminReducer, initialState);
  const [status, dispatchStatus] = useReducer(StatusReducer, initialStateStatus);

  const callApi = async ({method, route, loading, post}) => {
    
    dispatch({ type: LOADING_API, payload: { [loading]: true } })

    fetch(`${process.env.REACT_APP_URL}/works/${route}`, {
      method: method,
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: DATA_UPDATE, payload: data, })
        dispatch({ type: LOADING_API, payload: { [loading]: false } })

      })
      .catch((error) => console.log({ errPost: error.message }));
  }

  // const companyGet = async () => {
  //   const { data } = await axios.get(`${process.env.REACT_APP_URL}/works/company`);
  //   dispatch({
  //     type: GET_COMPANY,
  //     payload: data,
  //   });
  // };

  // const companyPost = async (post) => {
  //   const { data } = await axios.post(`${process.env.REACT_APP_URL}/works/company`, post);

  //   dispatch({
  //     type: GET_COMPANY,
  //     payload: data,
  //   });
  // };

  // const positionPost = async (post) => {
  //   const { data } = await axios.post(`${process.env.REACT_APP_URL}/works/positions`, post);
  //   dispatch({
  //     type: GET_COMPANY,
  //     payload: data,
  //   });
  // };

  // const functionPost = async (post, id) => {
  //   const { data } = await axios.post(`${process.env.REACT_APP_URL}/works/functions`, post);
  //   dispatch({
  //     type: POST_FUNCTIONS,
  //     payload: data,
  //   });
  // };

  // const functionGet = async (id) => {
  //   const { data: functions } = await axios.get(`${process.env.REACT_APP_URL}/works/functions/${id}`);
  //   dispatch({
  //     type: GET_FUNCTIONS,
  //     payload: functions,
  //   });
  // };




  const setStatus = (name) => {
    // console.log("status", name)
    dispatchStatus({
      type: name.type ? 'CLEAN': STATUS,
      payload: name
    })
  }

  return {
    callApi,
    state,
    dispatch,
    status,
    setStatus,
    // positionPost,
    // functionGet,
    // functionPost
  }
}

export default AdminState;
