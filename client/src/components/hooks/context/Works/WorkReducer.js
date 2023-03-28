import { GET_WORK } from "./types";

export const initialState = {
  works: {},
};


export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_WORK:
      return { ...state, works: payload };
    // case UPDATE_EXPERIENCE:
    //   return {
    //     ...state,
    //     renderExperience: payload,
    //   };

    default:
      return state;
  }
};
