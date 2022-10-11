import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import SidebarRigth from './SidebarRigth';
import style from '../../styles/styles.module.scss'

function Layout({ children }) {
  return (
    <div className={style.principal}>
    <div className={style.layout_container}>
      <div className={style.layout_navbar}>
        <Navbar />
      </div>
      <div className={style.layout_children}>
        {children}
      </div>
      <div className={style.layout_sidebarrigth}>
        <SidebarRigth />
      </div>
      <div className={style.layout_footer}>
        <Footer />
      </div>
    </div></div>
  );
}

export default Layout;