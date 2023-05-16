import React, { useContext, useEffect } from 'react';
import CreateContext from '../../hooks/context/CreateContext';
import './style/modal.scss';

function Modal({ children, header }) {
  const { modal: { setModal, modal } } = useContext(CreateContext);

  useEffect(() => {
    const element = document?.getElementById(modal.element)?.children?.modal
    if (modal.avalible) {
      element?.setAttribute("data-animation", modal.animation);
      element?.classList.add("is-visible")
    } else if (!modal.avalible) {
      element?.classList.remove("is-visible");
      setModal({ ...modal, element: "" })
    }
  }, [modal.avalible])

  const close = () => {
    setModal({ ...modal, avalible: false, animation: "" })
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    if (e.target.className === "modal is-visible" || e.target.className === "close-modal") return close()
  }

  return (
    <>
      <div className="modal" id="modal" data-animation="" onClick={handleOnClick} >
        <div className="modal-dialog">
          <header className="modal-header">
            <h3>{header}</h3>
            <button className="close-modal" onClick={handleOnClick} >✕</button>
          </header>
          <section className="modal-content">
            <div>{children}</div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Modal;

