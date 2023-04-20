import { GET_WORK, LOADING_WORK } from "./types";

export const initialState = {
  company: [],
  position: [],
  functions: [],
  technologies: [],

  experience: [],
  works: [],
  id: "",
  loadingWork: true
};

// eslint-disable-next-line
export default (state, action) => {
  const { payload, type } = action;
console.log(payload);
  switch (type) {
    case GET_WORK:
      return {
        ...state, company: payload.company, position: payload.position, functions: payload.functions,
        technologies: payload.technologies, loadingWork: false
      };
    case LOADING_WORK:
      return {
        ...state,
        loadingWork: true,
      };

    default:
      return state;
  }
};
