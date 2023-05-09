import React, { useContext, useEffect } from "react";
import { COMPANY, GET, LOADING_API_COMPANY } from "../../components/hooks/context/Admin/adminTypes";
import CreateContext from "../../components/hooks/context/CreateContext";
import Company from "./sections/Company/Company";
import Function from "./sections/Function/Function";
import Position from "./sections/Position/Position";
import { svg } from "../../components/assets/svg";

function Admin() {
  const { login: { state: { user, loading_login } }, admin: { status, callApi, setStatus }, } = useContext(CreateContext);

  useEffect(() => {
    user?._id && !loading_login && callApi({ method: GET, route: `${COMPANY}/${user._id}`, loading: LOADING_API_COMPANY });
    return () => { setStatus({ type: 'CLEAN' }) }
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <div className="admin_container">
        <div className="admin_company">
          <div className="company__title">
            <h2>Empresa</h2>
            <button id="admin_button"
              onClick={(e) => {
                e.preventDefault();
                setStatus({ type: "CLEAN" });
              }}>{svg({ type: "company" })}</button>
          </div>
          <Company />
          <hr />
        </div>
        <div className="admin_container-position">
          <div className="position__title">
            <h2>Cargo o grado en la empresa</h2>
            <button id="admin_button"
              onClick={(e) => {
                e.preventDefault();
                setStatus({ position_add_function: false, position_add: true, position_fields: false, position_render: true, position_function_id: "", function_fields: false, function_edit_id: "" })
              }}>{svg({ type: "grade" })}</button>
          </div>
          {status.company_add_position && <Position />}
          <hr />
        </div>
        <div className="admin_container-function">
          <div className="function__title">
            <h2>Funciones o proyectos</h2>
            <button id="admin_button"
              onClick={(e) => {
                e.preventDefault();
                setStatus({ function_render: true, function_fields: false, function_add: true, function_edit_id: "" })
              }}>{svg({ type: "computer" })}</button>
          </div>
          {status.position_add_function && <Function />}
          <hr />
        </div>
      </div>
    </>
  );
}

export default Admin;
