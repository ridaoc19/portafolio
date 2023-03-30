import React from 'react';

function Company({handleOnChange, state}) {

  return (
    <>
      <div className='admin__company-title'>
        <h2>empresa</h2>
      </div>
      <div className='admin__company'>
        <div className='-company'>
          <input type="text" onChange={handleOnChange} placeholder="empresa" name="company" value={state.company} />
        </div>
        <div className='-image'>
          <input type="url" onChange={handleOnChange} placeholder="logo" name="image_company" value={state.image_company} />
        </div>
        <div className='-description'>
          <input type="text" onChange={handleOnChange} placeholder="descripcion empresa" name="description_company" value={state.description_company} />
        </div>
        <div className='-web'>
          <input type="url" onChange={handleOnChange} placeholder="sitio web" name="link_company" value={state.link_company} />
        </div>
        <div className='-start-date'>
          <label htmlFor="start_date_company">fecha inicio </label>
          <input type="date" onChange={handleOnChange} id="start_date_company" name="start_date_company" value={state.start_date_company} />
        </div>
        <div className='-end-date'>
          <label htmlFor="end_date_company">Fecha Termino </label>
          <input type="date" onChange={handleOnChange} id="end_date_company" name="end_date_company" value={state.end_date_company} />
        </div>
      </div></>
  );
}

export default Company;