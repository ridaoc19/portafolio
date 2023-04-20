import React from "react";
import AdminState from "./Admin/AdminState";
import CreateContext from "./CreateContext";
import ExperienceState from "./Experience/ExperienceState";
import TecnologieState from "./Tecnologies/TecnologieState";
import WorkState from "./Works/WorkState";
import LoginState from "./Login/LoginState";


function StoreContext(props) {
  const experience = ExperienceState();
  const admin = AdminState();
  const works = WorkState();
  const tecnologies = TecnologieState()
  const login = LoginState()

  return (
    <CreateContext.Provider
      value={{
        experience,
        admin,
        works,
        tecnologies,
        login
      }}
    >
      {props.children}
    </CreateContext.Provider>
  );
}

export default StoreContext;
