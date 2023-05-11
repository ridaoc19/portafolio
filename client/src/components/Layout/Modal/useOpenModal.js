import { useEffect, useState } from 'react';

const initialState = {
  avalible: false,
  animation: ""
}

function useOpenModal() {

  const [modal, setModal] = useState(initialState);

  useEffect(() => {
    const element = document?.getElementById("modal")
    if (modal.avalible) {
      element?.setAttribute("data-animation", modal.animation);
      element?.classList.add("is-visible")
    } else if (!modal.avalible) {
      element?.classList.remove("is-visible");
      modal.animation && setModal({ ...modal, animation: "" })
    }
  }, [modal])

  return { setModal, modal };
}

export default useOpenModal;


// slideInOutDown
// slideInOutTop
// slideInOutLeft
// slideInOutRight
// zoomInOut
// rotateInOutDown
// mixInAnimations
