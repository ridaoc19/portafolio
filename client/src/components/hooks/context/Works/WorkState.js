import axios from 'axios';
import { useReducer } from "react";
import WorksReducer, { initialState } from "./WorkReducer";
import { GET_WORK, LOADING_API_WORK } from "./types";

function WorkState() {

  const [state, dispatch] = useReducer(WorksReducer, initialState);

  const getWork = async ({ route }) => {
    dispatch({ type: LOADING_API_WORK })
    let { data } = await axios.get(`${process.env.REACT_APP_URL}/works/${route}`);
    dispatch({
      type: GET_WORK,
      payload: data,
    });
  };

  return {
    getWork,
    dispatch,
    loadingWork: state.loadingWork,
    technologies: state.technologies,
    functions: state.functions,
    company: state.company,
    education: state.education,
    position: state.position,//
  }
}

export default WorkState;
