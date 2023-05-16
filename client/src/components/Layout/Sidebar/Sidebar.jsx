import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Theme from '../../../views/Start/Theme/Theme';
import CreateContext from '../../hooks/context/CreateContext';

const Sidebar = () => {
  const {  admin: { setStatus }, } = useContext(CreateContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    const name = e.target.attributes.getNamedItem("name").value
    document.querySelector(".hamburger").classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");

    switch (name) {
      case "education":
        setStatus({ sidebar_company: false, sidebar_education: true })
        break

      case "company":
        setStatus({ sidebar_company: true, sidebar_education: false })
        break

      default:
        break;
    }
  }

  return (
    <div className='sidebar'>
      <div name='hamburger' className="hamburger" onClick={handleOnClick}>
        <div className="_layer -top"></div>
        <div className="_layer -mid"></div>
        <div className="_layer -bottom"></div>
      </div>
      <nav className="menuppal">
        <ul>
          <li className='sidebar_header-container'>

            <div className="-button">
            </div>

            <div className="-link">
              <Link to={"/"}>Main</Link>
              <Link to={"/home"}>Home</Link>
            </div>

            <div className="-theme">
              <Theme />
            </div>

          </li>
          <li><button name='education' onClick={handleOnClick} >Educación</button></li>
          <li><button name='company' onClick={handleOnClick} >Empresa</button></li>
        </ul>
      </nav>
    </div >);
};

export default Sidebar;
