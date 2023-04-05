import React, { useContext, useEffect, useState } from "react";
import CreateContext from "../../components/hooks/context/CreateContext";
import Button from "./content/Button/Button";
import Company from "./content/Company/Company";
import Function from "./content/Function/Function";
import Position from "./content/Position/Position";

function Admin() {

  const { admin: { getWorkAdmin, setChange, change, loadingContext } } = useContext(CreateContext)
  
  useEffect(() => {
    getWorkAdmin();
  }, [])

  return (
    <>
      <div className="admin_container">
        <div className="admin_company">
          {loadingContext ? <h1>Cargando...</h1> : <Company change={change} setChange={setChange} getWorkAdmin={getWorkAdmin} />}
        </div>
        {/* <div className="admin_container-position">
          <Position state={state} handleOnChange={handleOnChange} />
          <hr />
        </div> */}
        {/* <div className="admin_container-function">
          <Function state={state} handleOnChange={handleOnChange} />
          <hr />
        </div>
        <div className="admin_container-button">
          <Button handleOnClick={handleOnClick} />
        </div> */}
      </div>
    </>
  );
}

export default Admin;
