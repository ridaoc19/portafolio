import { GET_WORK, LOADING_API_WORK } from "./types";

export const initialState = {
  company: [],
  position: [],
  functions: [],
  technologies: [],
  education: [],
  loadingWork: true,
};

// eslint-disable-next-line
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_WORK:
      return {
        ...state, company: payload.company, position: payload.position, functions: payload.functions,
        technologies: payload.technologies, education: payload.education, loadingWork: false
      };
    case LOADING_API_WORK:
      return { ...state, loadingWork: true }

    default:
      return state;
  }
};
