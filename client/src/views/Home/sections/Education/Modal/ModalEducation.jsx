import React from 'react';

function ModalEducation({modalContent}) {
  return (
    <div>
      <img src={modalContent.image} alt="" style={{width: '100%'}} />
      <p>{modalContent.description}</p>
    </div>
  );
}

export default ModalEducation;