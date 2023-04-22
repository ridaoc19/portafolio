import { DATA_UPDATE, LOADING_API } from "./adminTypes";

export const initialState = {
  loading_api_company: true,
  loading_api_position: false,
  loading_api_function: true,
  loading_api_technologies: false,
  company: [],
  functions: [],
  technologies: []
};

const AdminReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case DATA_UPDATE:
      Object.entries(action.payload).map(([key, value]) => state[key] = value)
      return state
    // case GET_FUNCTIONS:
    //   return { ...state, functions: payload.functions };
    // case POST_FUNCTIONS:
    //   return { ...state, company: payload.company, functions: payload.functions }
    case LOADING_API:
      return Object.assign({ ...state }, payload)
    default:
      return state;
  }
};

export default AdminReducer;
