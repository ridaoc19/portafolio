import React from 'react';

function ModalEducation({modalContent}) {
  return (
    <div>
      <div>

      <img src={modalContent?.image} alt="" style={{width: '100%'}} />
      </div>
      <div>

      <p>{modalContent?.description}</p>
      </div>
    </div>
  );
}

export default ModalEducation;