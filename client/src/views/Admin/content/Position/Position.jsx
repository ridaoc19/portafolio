import React, { useContext } from 'react';
import CreateContext from '../../../../components/hooks/context/CreateContext';

function Position(props) {
  const { admin: {postAdmin, state} } = useContext(CreateContext)


  const handleOnChange = (e) => {
    postAdmin({ name: e.target.name, value: e.target.value })
  }

  return (
    <div>
      <h2>Cargo o grado en la empresa</h2>
      <input type="text" onChange={handleOnChange} placeholder="cargo" name="position" value={state.position} />
      <label htmlFor="start_date_position">fecha inicio</label>
      <input type="date" onChange={handleOnChange} id="start_date_position" name="start_date_position" value={state.start_date_position} />
      <label htmlFor="end_date_position">Fecha Termino</label>
      <input type="date" onChange={handleOnChange} id="end_date_position" name="end_date_position" value={state.end_date_position} />
      <hr />
    </div>
  );
}

export default Position;