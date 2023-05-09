import { LOADING_API, LOGOUT, UPDATE_LOGIN } from "./loginTypes";

export const initialState = {
  user: {},
  loading_login: false,
  visitors:[]
};

const LoginReducer = (state, action) => {
  const { payload, type } = action;
  console.log(action);
  switch (type) {
    case UPDATE_LOGIN:
      return { ...state, user: payload[0], visitors: payload[1], loading_login: false };
    case LOADING_API:
      return { ...state, loading_login: true };
      case LOGOUT:
        return {...state, user: {}, visitors:[]};
    default:
      return state;
  }
};

export default LoginReducer