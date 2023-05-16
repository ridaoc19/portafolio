import { STATUS_MODAL } from "./ModalTypes";

export const initialState = {
  avalible: false,
  animation: "",
  element: ""
};

const ModalReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case STATUS_MODAL:
      return { ...state, avalible: payload.avalible, animation: payload.animation, element: payload.element };
    default:
      return state;
  }
};

export default ModalReducer