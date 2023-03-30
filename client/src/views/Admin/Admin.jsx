import React, { useContext } from "react";
import CreateContext from "../../components/hooks/context/CreateContext";
import Button from "./content/Button/Button";
import Company from "./content/Company/Company";
import Function from "./content/Function/Function";
import Position from "./content/Position/Position";

function Admin() {

  const {works: { id }, admin: { postAdmin, state, cleanAdmin, updateAdmin } } = useContext(CreateContext)

  const handleOnChange = (e) => {
    postAdmin({ name: e.target.name, value: e.target.value })
  }

  const handleOnClick =(e) => {
    e.preventDefault();
    if(e.target.name === "clear"){
      cleanAdmin()
    }else if (e.target.name === "update"){
      updateAdmin(id)
    }
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
