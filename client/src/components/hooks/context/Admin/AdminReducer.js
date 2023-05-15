import { DATA_UPDATE, LOADING_API } from "./adminTypes";

export const initialState = {
  loading_api_company: true,
  loading_api_position: false,
  loading_api_function: true,
  loading_api_technologies: false,
  loading_api_university: false,
  loading_api_title: false,
  company: [],
  functions: [],
  technologies: [],
  university: [],
};

const AdminReducer = (state, action) => {
  const { payload, type } = action;


  switch (type) {
    case DATA_UPDATE:
      Object.entries(action.payload).map(([key, value]) => state[key] = value)
      return state
    case LOADING_API:
      return Object.assign({ ...state }, payload)
    default:
      return state;
  }
};

export default AdminReducer;
