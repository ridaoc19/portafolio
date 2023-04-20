import React from "react";
import AdminState from "./Admin/AdminState";
import CreateContext from "./CreateContext";
import ExperienceState from "./Experience/ExperienceState";
import WorkState from "./Works/WorkState";
import LoginState from "./Login/LoginState";


function StoreContext(props) {
  const experience = ExperienceState();
  const admin = AdminState();
  const works = WorkState();
  const login = LoginState()

  return (
    <CreateContext.Provider
      value={{
        experience,
        admin,
        works,
        login
      }}
    >
      {props.children}
    </CreateContext.Provider>
  );
}

export default StoreContext;
