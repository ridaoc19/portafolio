import React from "react";
import AdminState from "./Admin/AdminState";
import CreateContext from "./CreateContext";
import LoginState from "./Login/LoginState";
import WorkState from "./Works/WorkState";
import ModalState from "./Modal/ModalState";

function StoreContext(props) {
  const admin = AdminState();
  const works = WorkState();
  const login = LoginState()
  const modal = ModalState()

  return (
    <CreateContext.Provider
      value={{
        admin,
        works,
        login,
        modal
      }}
    >
      {props.children}
    </CreateContext.Provider>
  );
}

export default StoreContext;
