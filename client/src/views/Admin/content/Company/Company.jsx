import React, { useContext } from 'react';
import CreateContext from '../../../../components/hooks/context/CreateContext';

function Company() {
  const { admin: {postAdmin, state} } = useContext(CreateContext)

  const handleOnChange = (e) => {
    postAdmin({ name: e.target.name, value: e.target.value })
  }
  
  return (
    <div>
      <h2>empresa</h2>
      <input type="text" onChange={handleOnChange} placeholder="empresa" name="company" value={state.company} />
      <input type="url" onChange={handleOnChange} placeholder="logo" name="image_company" value={state.image_company} />
      <input type="text" onChange={handleOnChange} placeholder="descripcion empresa" name="description_company" value={state.description_company} />
      <input type="url" onChange={handleOnChange} placeholder="link empresa" name="link_company" value={state.link_company} />
      <label htmlFor="start_date_dompany">fecha inicio</label>
      <input type="date" onChange={handleOnChange} id="start_date_dompany" name="start_date_dompany" value={state.start_date_dompany} />
      <label htmlFor="end_date_dompany">Fecha Termino</label>
      <input type="date" onChange={handleOnChange} id="end_date_dompany" name="end_date_dompany" value={state.end_date_dompany} />
      <hr />
    </div>
  );
}

export default Company;