import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import style from "./layout.module.scss";

function Layout({ children }) {
  return (
    <div>
      <div className={style.layout_principal}>
        <div className={style.layout_container}>
          <div className={style.layout_navbar}>
            <Navbar />
          </div>
          <div className={style.layout_children}>
            {children}
            </div>
          <div className={style.layout_sidebar}>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
