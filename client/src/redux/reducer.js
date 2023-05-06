import { RESPONSE_LOCATION, LOADING, LOADING_LOCAL, LOADING_POST } from "./types";

const initialState = {
  location: [],
  loading: true,
  loadingLocal: true
};

const reducer = (state = initialState, actions) => {

  switch (actions.type) {
    case RESPONSE_LOCATION:
      return { ...state, location: actions.payload }

    case LOADING_POST:
      return { ...state, loading: false }

    case LOADING:
      return { ...state, loading: true }

    case LOADING_LOCAL:
      return { ...state, loadingLocal: false }
    default:
      return state;
  }
}

export default reducer;