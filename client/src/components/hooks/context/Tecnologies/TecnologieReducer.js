import { GET_TECNOLOGIES } from "./types";

export const initialState = {
  tecnologies: [],
};


export default (state, action) => {
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
