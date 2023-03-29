import { GET_WORK } from "./types";

export const initialState = {
  experience: [],
  works: []
};


export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_WORK:
      return { ...state, experience: payload.experience, works: payload.works };
    // case UPDATE_EXPERIENCE:
    //   return {
    //     ...state,
    //     renderExperience: payload,
    //   };

    default:
      return state;
  }
};
