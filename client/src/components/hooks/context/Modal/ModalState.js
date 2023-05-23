import { useReducer } from "react";
import { STATUS_MODAL } from "./ModalTypes";
import ModalReducer, { initialState } from "./ModalReducer";

function ModalState() {

  const [modal, dispatch] = useReducer(ModalReducer, initialState);

  const setModal = async (data) => {
    dispatch({ type: STATUS_MODAL, payload: data })

  }

  return { setModal, modal }
}

export default ModalState;
