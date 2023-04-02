import React from 'react';

function Position({handleOnChange, state}) {

  return (
    <>
      <div className='admin__position-title'>
        <h2>Cargo o grado en la empresa</h2>
      </div>
      <div className='admin__position'>
        <div className='-position'>
          <input type="text" onChange={handleOnChange} placeholder="cargo" name="position" value={state.position} />
        </div>
        <div className='-start-date'>
          <label htmlFor="start_date_position">fecha inicio</label>
          <input type="date" onChange={handleOnChange} id="start_date_position" name="start_date_position" value={state.start_date_position} />
        </div>
        <div className='-end-date'>
          <label htmlFor="end_date_position">Fecha Termino</label>
          <input type="date" onChange={handleOnChange} id="end_date_position" name="end_date_position" value={state.end_date_position} />
        </div>
      </div>
      <div className='admin__position-slate'>
        
      </div>
    </>
  );
}

export default Position;