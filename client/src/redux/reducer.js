import { DATA_IP } from "./actions";

const initialState = {
  data_ip: { state: "" },
  loading: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {

    case DATA_IP:
      return { ...state, data_ip: actions.payload, loading: false };

    default:
      return state;
  }
}
