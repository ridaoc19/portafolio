import React, { useContext, useEffect, useState } from 'react';
import Modal from '../../../../components/Layout/Modal/Modal';
import useOpenModal from '../../../../components/Layout/Modal/useOpenModal';
import { COMPANY, DELETE, LOADING_API_COMPANY, POST } from '../../../../components/hooks/context/Admin/adminTypes';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Validation from '../../../../components/utils/function/Validation';
import useValidation from '../../utils/useValidation';
import Fields from './Fields/Fields';
import Render from './Render/Render';

const initialState = {
  name: "",
  image: "",
  description: "",
  link: "",
  start_date: "",
  end_date: "",
}

function Company() {
  const { setValidation } = useValidation()
  const { setModal, modal } = useOpenModal();
  const { login: { state: { user, loading_login } }, admin: { state, status, setStatus, callApi } } = useContext(CreateContext);
  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)

  useEffect(() => {
    setValidation({ change, validate: ["name", "image", "description", "link", "start_date", "end_date",], element: "company_save", image: "company_img" })
    // eslint-disable-next-line
  }, [err])

  const handleOnClick = (e) => {
    e.preventDefault();
    const name = e.target.attributes.getNamedItem("name").value
    const value = e.target.attributes?.getNamedItem("value")?.value

    const nameInput = name.split("_").length > 2 ? name.split("_").slice(1).toString().replace(',', '_') : name.split("_")[1]
    switch (nameInput) {
      case "add":
        setStatus({ company_fields: true, company_add: false, company_position_id: "", company_render: false })
        break
      case "edit":
        setChange(state.company.find(d => d._id === value))
        setStatus({ company_fields: true, position_add_function: false, company_add_position: false, company_add: false, company_position_id: value })
        return
      case "clean":
        setStatus({ company_fields: false, company_add: true, company_position_id: "", company_render: true })
        break
      case "save":
        if (!user?._id) return setModal({ ...modal, avalible: true, animation: "mixInAnimations" })
        setStatus({ type: 'CLEAN' })
        callApi({ method: POST, route: COMPANY, loading: LOADING_API_COMPANY, post: Object.assign({ user_id: user._id }, change) })
        break
      case "delete":
        setStatus({ type: 'CLEAN' })
        callApi({ method: DELETE, route: `${COMPANY}/${value}`, loading: LOADING_API_COMPANY })
        break
      case "add_position":
        setStatus({ company_add_position: true, company_add: false, company_fields: false, company_position_id: value })
        break
      default: return
    }
    setErr(initialState)
    setChange(initialState)
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const nameInput = name.split("_").length > 2 ? name.split("_").slice(1).toString().replace(",", "_") : name.split("_")[1];
    const { type, stop, empty } = Validation(nameInput, value, change);
    !stop && setChange({ ...change, [nameInput]: empty ? "" : value });
    setErr({ ...err, [nameInput]: type });
  };

  const handleOnLoad = (_e, s) => {
    setErr({ ...err, image: "" })
    document.getElementById("company_img").parentNode.classList.add("borde_image")
  }

  return (
    <div className="company__container">

      {!user?._id && !loading_login
        ? <div className="company__fields"><Fields handleOnChange={handleOnChange} handleOnLoad={handleOnLoad} handleOnClick={handleOnClick} change={change} err={err} /></div>
        : state.loading_api_company
          ? <h1>Cargando...</h1>
          : <div>
            <div className="company__render">
              {status.company_render && <Render handleOnClick={handleOnClick} company={state.company} status={status} />}
            </div>
            {status.company_fields && <div className="company__fields">
              <Fields handleOnChange={handleOnChange} handleOnLoad={handleOnLoad} handleOnClick={handleOnClick} change={change} err={err} />
            </div>}
          </div>}
    </div>
  );
}

export default Company;