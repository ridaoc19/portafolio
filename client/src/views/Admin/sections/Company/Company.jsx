import React, { useContext, useEffect, useState } from 'react';
import { COMPANY, DELETE, LOADING_API_COMPANY, POST } from '../../../../components/hooks/context/Admin/adminTypes';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Button from './Buutton/Button';
import Fields from './Fields/Fields';
import Render from './Render/Render';
import Validation from '../../../../components/utils/function/Validation';

const initialState = {
  name: "",
  image: "",
  description: "",
  link: "",
  start_date: "",
  end_date: "",
}

function Company() {
  const { admin: { state, status, setStatus, callApi } } = useContext(CreateContext);

  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)

  useEffect(() => {
    Object.values(err).filter((e) => e).length === 0 && Object.values(change).filter((e) => e).length > 5
      ? document.getElementById("company_save")?.removeAttribute("disabled") :
      document.getElementById("company_save")?.setAttribute("disabled", "")
      // eslint-disable-next-line
  }, [err])

  const handleOnClick = (e) => {
    const { name, value } = e.target;
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
        if (Object.values(err).filter(e => e).length > 0) return
        setStatus({ type: 'CLEAN' })
        callApi({ method: POST, route: COMPANY, loading: LOADING_API_COMPANY, post: change })
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

  const handleOnLoad = (_e, s) => setErr({ ...err, image: "" })

  return (
    <div className="company__container">

      {state.loading_api_company ? <h1>Cargando...</h1> : <div>
        <div className="company__render">
          {status.company_render && <Render handleOnClick={handleOnClick} company={state.company} status={status} />}
        </div>
        <div className="admin__company">
          {status.company_fields && <Fields handleOnChange={handleOnChange} handleOnLoad={handleOnLoad} change={change} err={err} />}
        </div>
        <div className="company__button">
          {status.company_fields && <Button handleOnClick={handleOnClick} status={status} />}
        </div>
      </div>}
    </div>
  );
}

export default Company;