import { useReducer } from "react";
import WorksReducer, { initialState } from "./WorkReducer";
import axios from 'axios';
import { GET_WORK, } from "./types";
import { filter } from "./function/function";

function WorkState(props) {

  const [state, dispatch] = useReducer(WorksReducer, initialState);

  const getWork = async () => {
    let { data } = await axios.get(`${process.env.REACT_APP_URL}/works`);
    dispatch({
      type: GET_WORK,
      payload: data,
    });
  };

  const updateExperience = async (value) => {
    // const result = filter(state.experience, state.renderExperience, value);
    // dispatch({
    //   type: UPDATE_EXPERIENCE,
    //   payload: result,
    // });
  };

  return {
    works: state.works,
    getWork
  }
}

export default WorkState;
