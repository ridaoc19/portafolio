import { RESPONSE_LOCATION, LOADING } from "./types";

const initialState: InitialState = {
  location: {},
  loading: false
};

const reducer = (state: InitialState = initialState, actions: StateRedux): InitialState => {

  switch (actions.type) {
    case RESPONSE_LOCATION:
      return { ...state, loading: false }

    case LOADING:
      return { ...state, loading: true }

    default:
      return state;
  }
}

export default reducer;