import React, { useContext, useEffect } from "react";
import CreateContext from "../../components/hooks/context/CreateContext";
import Button from "./content/Button/Button";
import Company from "./content/Company/Company";
import Function from "./content/Function/Function";
import Position from "./content/Position/Position";

function Admin(props) {

  const { admin: { postAdmin, state, cleanAdmin } } = useContext(CreateContext)

  const handleOnChange = (e) => {
    postAdmin({ name: e.target.name, value: e.target.value })
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    cleanAdmin()
  }

  return (
    <>
      <div className="admin_container">
        <div className="admin_container-company">
          <Company state={state} handleOnChange={handleOnChange} />
          <hr />
        </div>
        <div className="admin_container-position">
          <Position state={state} handleOnChange={handleOnChange} />
          <hr />
        </div>
        <div className="admin_container-function">
          <Function state={state} handleOnChange={handleOnChange} />
          <hr />
        </div>
        <div className="admin_container-button">
          <Button handleOnClick={handleOnClick} />
        </div>
      </div>
    </>
  );
}

export default Admin;
