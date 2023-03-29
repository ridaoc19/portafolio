import { useReducer } from "react";
import AdminReducer, { initialState } from "./AdminReducer";
import { CLEAN_ADMIN, POST_ADMIN } from "./adminTypes";

function AdminState(props) {
  const [state, dispatch] = useReducer(AdminReducer, initialState);

  const postAdmin = (value) => {
    dispatch({
      type: POST_ADMIN,
      payload: value,
    });
  };

  const cleanAdmin = () => {
    dispatch({
      type: CLEAN_ADMIN,
    });
  };

  return {
    state,
    postAdmin,
    cleanAdmin,
  }
}

export default AdminState;
