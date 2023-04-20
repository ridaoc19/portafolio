import { useReducer } from "react";
import TecnologieReducer, { initialState } from "./TecnologieReducer";
import axios from 'axios';
import { GET_TECNOLOGIES, } from "./types";

function TecnologieState(props) {

  const [state, dispatch] = useReducer(TecnologieReducer, initialState);

  const getTecnologies = async () => {
    let { data } = await axios.get(`${process.env.REACT_APP_URL}/tecnologies`);
    dispatch({
      type: GET_TECNOLOGIES,
      payload: data,
    });
  };

  // const updateExperience = async (value) => {
    // const result = filter(state.experience, state.renderExperience, value);
    // dispatch({
    //   type: UPDATE_EXPERIENCE,
    //   payload: result,
    // });
  // };

  return {
    tecnologies: state.tecnologies,
    getTecnologies
  }
}

export default TecnologieState;
