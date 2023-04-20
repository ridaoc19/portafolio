import { LOADING_API, LOGOUT, UPDATE_LOGIN } from "./loginTypes";

export const initialState = {
  user: {},
  loading_login: false

};

const LoginReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_LOGIN:
      return { ...state, user: payload, loading_login: false };
    case LOADING_API:
      return { ...state, loading_login: true };
      case LOGOUT:
        return {...state, user: {}};
    default:
      return state;
  }
};

export default LoginReducer