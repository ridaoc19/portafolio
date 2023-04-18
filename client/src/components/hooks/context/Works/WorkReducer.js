import { GET_WORK, LOADING_WORK } from "./types";

export const initialState = {
  experience: [],
  works: [],
  id: "",
  loadingWork: true
};

// eslint-disable-next-line
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_WORK:
      return { ...state, experience: payload.experience, works: payload.works, id: payload.id, loadingWork: false  };
    case LOADING_WORK:
      return {
        ...state,
        loadingWork: true,
      };

    default:
      return state;
  }
};
