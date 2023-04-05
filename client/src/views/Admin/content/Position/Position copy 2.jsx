import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../../../components/hooks/context/CreateContext";
import Function from "../Function/Function";

const initialState = {
  name_position: "",
  start_date_position: "",
  end_date_position: "",
  function: [],
};

function Position() {
  const { admin: { postAdmin, state } } = useContext(CreateContext);

  const [change, setChange] = useState(initialState);

  const handleOnChange = (e) => {
    setChange({ ...change, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    postAdmin({ name: "position", value: [change] });
  }, [change]);

  return (
    <>
      <div className="admin__position-title">
        <h2>Cargo o grado en la empresa</h2>
      </div>
      <div className="admin__position">
        <div className="-position">
          <input
            type="text"
            onChange={handleOnChange}
            placeholder="cargo"
            name="name_position"
            value={change.name_position}
          />
        </div>
        <div className="-start-date">
          <label htmlFor="start_date_position">fecha inicio</label>
          <input
            type="date"
            onChange={handleOnChange}
            id="start_date_position"
            name="start_date_position"
            value={change.start_date_position}
          />
        </div>
        <div className="-end-date">
          <label htmlFor="end_date_position">Fecha Termino</label>
          <input
            type="date"
            onChange={handleOnChange}
            id="end_date_position"
            name="end_date_position"
            value={change.end_date_position}
          />
        </div>
      </div>
      <hr />
      <div className="admin_container-function">
        <Function changes={change} handleOnChanges={handleOnChange} />
      </div>
    </>
  );
}

export default Position;
