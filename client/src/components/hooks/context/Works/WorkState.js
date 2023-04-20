import axios from 'axios';
import { useReducer } from "react";
import { GET_WORK, LOADING_WORK } from "./types";
import WorksReducer, { initialState } from "./WorkReducer";

function WorkState(props) {

  const [state, dispatch] = useReducer(WorksReducer, initialState);

  const getWork = async ({ route }) => {
    let { data } = await axios.get(`${process.env.REACT_APP_URL}/works/${route}`);
    dispatch({
      type: GET_WORK,
      payload: data,
    });
  };

  const getLoadingWork = async () => {
    dispatch({
      type: LOADING_WORK,
    });
  }

  // const updateExperience = async (value) => {
  // const result = filter(state.experience, state.renderExperience, value);
  // dispatch({
  //   type: UPDATE_EXPERIENCE,
  //   payload: result,
  // });
  // };

  return {
    company: state.company,
    position: state.position,
    functions: state.functions,
    technologies: state.technologies,

    getWork,

    experience: state.experience,
    works: state.works,
    id: state.id,
    loadingWork: state.loadingWork,
    getLoadingWork
  }
}

export default WorkState;
