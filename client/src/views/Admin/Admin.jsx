import React, { useContext, useEffect } from "react";
import { svg } from "../../components/assets/svg";
import { COMPANY, GET, LOADING_API_COMPANY } from "../../components/hooks/context/Admin/adminTypes";
import CreateContext from "../../components/hooks/context/CreateContext";
import Company from "./sections/Company/Company";
import Function from "./sections/Function/Function";
import Position from "./sections/Position/Position";
import University from "./sections/University/University";
import Title from "./sections/Title/Title";

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
        {status.sidebar_education &&
          <section className="education">
            <div className="admin_container-university">
              <div className="university__title">
                <h2>Educación</h2>
                <button id="admin_button"
                  onClick={(e) => {
                    e.preventDefault();
                    setStatus({ university_add_title: false, university_add: true, title_render: true, title_add: true, university_title_id: "" });
                  }}>{svg({ type: "educations" })}</button>
              </div>
              <University />
              <hr />
            </div>

            <div className="admin_container-title">
              <div className="title__title">
                <h2>Titulos</h2>
                <button id="admin_button"
                  onClick={(e) => {
                    e.preventDefault();
                    // setStatus({ type: "CLEAN" });
                  }}>{svg({ type: "educations" })}</button>
              </div>
              {status.university_add_title && <Title />}
              <hr />
            </div>
          </section>}

        {status.sidebar_company &&
          <section className="company">
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
          </section>}
      </div>
    </>
  );
}

export default Admin;
