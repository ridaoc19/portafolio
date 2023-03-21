import { RESPONSE_POST_UBICATION } from "./types";

const initialState: InitialState = {
  ubication: ""
};

const reducer = (state: InitialState = initialState, actions: StateRedux): InitialState => {

  switch (actions.type) {
    case RESPONSE_POST_UBICATION:
      return { ...state, ubication: actions.payload }

    default:
      return state;
  }
}

export default reducer;