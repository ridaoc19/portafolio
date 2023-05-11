import React from 'react';
import './style/modal.scss';
import useOpenModal from './useOpenModal';

function Modal({ children, header }) {
  const { setModal, modal } = useOpenModal();

  const handleOnClick = (e) => {
    e.preventDefault();
    setModal({ ...modal, avalible: false })
  }

  document.addEventListener("click", e => {
    if (e.target === document.querySelector(".modal.is-visible")) {
      setModal({ ...modal, avalible: false })
    }
  });

  document.addEventListener("keyup", e => {
    if (e.key === "Escape" && document.querySelector(".modal.is-visible")) {
      setModal({ ...modal, avalible: false })
    }
  });


  return (
    <>
      <div className="modal" id="modal" data-animation="">
        <div className="modal-dialog">
          <header className="modal-header">
            <h3>{header}</h3>
            <button className="close-modal" onClick={handleOnClick} >✕</button>
          </header>
          <section className="modal-content">
            <p>{children}</p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Modal;

