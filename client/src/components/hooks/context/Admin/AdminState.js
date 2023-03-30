import { useReducer } from "react";
import AdminReducer, { initialState } from "./AdminReducer";
import { CLEAN_ADMIN, POST_ADMIN } from "./adminTypes";
import axios from 'axios';

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

  const updateAdmin = async (id) => {
    axios.put(`${process.env.REACT_APP_URL}/works/${id}`, { state })
  }

  return {
    state,
    postAdmin,
    cleanAdmin,
    updateAdmin
  }
}

export default AdminState;
