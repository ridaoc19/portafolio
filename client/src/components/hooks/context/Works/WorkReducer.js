import { GET_WORK } from "./types";

export const initialState = {
  company: [],
  position: [],
  functions: [],
  technologies: [],
  loadingWork: true,
};

// eslint-disable-next-line
export default (state, action) => {
  const { payload, type } = action;
  
  switch (type) {
    case GET_WORK:
      return {
        ...state, company: payload.company, position: payload.position, functions: payload.functions,
        technologies: payload.technologies, loadingWork: false
      };

    default:
      return state;
  }
};
