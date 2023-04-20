import { GET_TECNOLOGIES } from "./types";

export const initialState = {
  tecnologies: [],
};

// import/no-anonymous-default-export
const TecnologieReducer = (state, action) => {
  // eslint-disable-next-line
  const { payload, type } = action;

  switch (type) {
    case GET_TECNOLOGIES:
      return { ...state, tecnologies: payload };
    // case UPDATE_EXPERIENCE:
    //   return {
    //     ...state,
    //     renderExperience: payload,
    //   };

    default:
      return state;
  }
};

export default TecnologieReducer