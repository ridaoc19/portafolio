import { GET_EXPERIENCE, UPDATE_EXPERIENCE } from "./types";

export const initialState = {
  experience: [],
  renderExperience: [],
  contact: [],
  works: {},
};


export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_EXPERIENCE:
      return {
        ...state,
        experience: payload.item,
        renderExperience: payload.item,
        contact: payload.contact,
        works: payload
      };
    case UPDATE_EXPERIENCE:
      return {
        ...state,
        renderExperience: payload,
      };

    default:
      return state;
  }
};
