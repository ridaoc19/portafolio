import { useReducer } from "react";
import ExperienceReducer, { initialState } from "./ExperienceReducer";
// import axios from 'axios';
import experiences from "../../../json/proyect";
import { GET_EXPERIENCE, UPDATE_EXPERIENCE } from "./types";
import { filter } from "./function/function";

function ExperienceState(props) {
  
  const [state, dispatch] = useReducer(ExperienceReducer, initialState);

  const getExperience = async () => {
    const res = experiences;
    dispatch({
      type: GET_EXPERIENCE,
      payload: res,
    });
  };

  const updateExperience = async (value) => {
    const result = filter(state.experience, state.renderExperience, value);
    dispatch({
      type: UPDATE_EXPERIENCE,
      payload: result,
    });
  };

  return {
    experience: state.experience,
    renderExperience: state.renderExperience,
    contact: state.contact,
    works: state.works,
    getExperience,
    updateExperience,
  }
}

export default ExperienceState;
