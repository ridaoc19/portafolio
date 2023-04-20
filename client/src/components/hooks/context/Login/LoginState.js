import { useReducer } from "react";
import LoginReducer, { initialState } from "./LoginReducer";
import { LOADING_API, UPDATE_LOGIN } from "./loginTypes";

function LoginState() {

  const [state, dispatch] = useReducer(LoginReducer, initialState);


  const callApiLogin = async ({ method, post, route }) => {
    dispatch({ type: LOADING_API })
    fetch(`${process.env.REACT_APP_URL}/${route}`, {
      method: method,
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.login = data.user_id
        dispatch({ type: UPDATE_LOGIN, payload: data, })})
      .catch((error) => console.log({ errPost: error.message }));
  }

  return { state, callApiLogin }
}

export default LoginState;
