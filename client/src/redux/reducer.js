import { RESPONSE_LOCATION, LOADING } from "./types";

const initialState = {
  location: [],
  loading: true
};

const reducer = (state = initialState, actions) => {

  switch (actions.type) {
    case RESPONSE_LOCATION:
      return { ...state, loading: false, location: actions.payload }
    case LOADING:
      return { ...state, loading: true }
    default:
      return state;
  }
}

export default reducer;