import React from "react";
import AdminState from "./Admin/AdminState";
import CreateContext from "./CreateContext";
import LoginState from "./Login/LoginState";
import WorkState from "./Works/WorkState";

function StoreContext(props) {
  const admin = AdminState();
  const works = WorkState();
  const login = LoginState()

  return (
    <CreateContext.Provider
      value={{
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
