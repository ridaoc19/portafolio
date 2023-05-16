import React, { useContext, useState } from "react";
import Modal from "../../../../components/Layout/Modal/Modal";
import CreateContext from '../../../../components/hooks/context/CreateContext';
import { formatDate, totalYear } from '../../../../components/utils/function/date';
import ModalEducation from "./Modal/ModalEducation";

const Education = () => {
  const { works: { education }, modal: { setModal, modal } } = useContext(CreateContext);
  const [modalContent, setModalContent] = useState({})

  const handleOnClick = (e) => {
    const { id } = e.target
    e.preventDefault()

    setModalContent(education.map(e => e?.title_id?.filter(d => d?._id.includes(id))).flat(Infinity)[0])
    setModal({ ...modal, avalible: true, animation: "slideInOutLeft", element: "education__modal-title" })
  }

  return (
    <>
      <h2>Lo que he estudiando</h2>
      <div id="education__modal-title">
        <Modal header={modalContent.name} >
          {Object.keys(modalContent).length !== 0 && <ModalEducation  modalContent={modalContent} />}
                  </Modal>
      </div>
      <div className="home__education--container">


        {education?.map((e, i) => {

          return (
            <div key={i} className="home__education--content">

              <div className="education__content--one">

                <div className="education__content--image">
                  <img src={e.image} alt="logo" />
                </div>

                <div className="education__content--title">
                  <h3>
                    <a href={e.link} target="_blank" rel="noreferrer">@{e.name}</a>
                  </h3>

                </div>

              </div>


              {education.map(d => d.title_id).flat(Infinity).length !== 0 && <div className="education__content--two">
                <h4>Títulos académicos</h4>
                <ul >
                  {e.title_id?.map((e, i) =>
                    <button key={i} id={e._id} onClick={handleOnClick}>
                      <p>{e.name}</p>
                      <i>
                        {totalYear(e.start_date, e.end_date === "Presente" ? Date.now() : e.end_date)}
                        {` (${formatDate(e.start_date).date} - ${formatDate(e.end_date).state
                          ? formatDate(e.end_date).state
                          : formatDate(e.end_date).date})`}
                      </i>
                    </button>
                  )}
                </ul>
              </div>}

            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
