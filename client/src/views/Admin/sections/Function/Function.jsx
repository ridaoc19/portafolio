import React, { useContext, useEffect, useState } from 'react';
import { DELETE, FUNCTIONS, LOADING_API_FUNCTIONS, POST } from '../../../../components/hooks/context/Admin/adminTypes';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Validation from '../../../../components/utils/function/Validation';
import Button from './Buutton/Button';
import Fields from './Fields/Fields';
import Render from './Render/Render';

const initialState = {
  name: "",
  link: "",
  start_date: "",
  end_date: "",
  repository: "",
  tasks: [],
  tecnologies: [],
}

function Function() {
  const { admin: { state, status, setStatus, callApi } } = useContext(CreateContext);

  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)
  const [idTasksTech, setIdTasksTech] = useState("")

  useEffect(() => {
    Object.values({ name: err.name, link: err.link, start_date: err.start_date, end_date: err.end_date, repository: err.repository }).filter(e => e).length === 0 &&
      Object.values({ name: change.name, link: change.link, start_date: change.start_date, end_date: change.end_date, repository: change.repository }).filter(e => e).length >= 5
      && change.tasks.length > 0
      && change.tecnologies.length > 0
      ? document.getElementById("function_save")?.removeAttribute("disabled") :
      document.getElementById("function_save")?.setAttribute("disabled", "")
  }, [err, change])

  const handleOnClick = (e) => {
    const { name, value } = e.target;
    const nameInput = name.split("_").length > 2 ? name.split("_").slice(1).toString().replace(',', '_') : name.split("_")[1]

    switch (nameInput) {
      case "add":
        setIdTasksTech("")
        setStatus({ function_fields: true, function__add: false, function_render: false })
        break

      case "edit":
        setChange(state.functions.find(d => d._id === value))
        setIdTasksTech(value)
        setStatus({ function_fields: true })
        return

      case "clean":
        setIdTasksTech("")
        setStatus({ function_render: false })
        break

      case "save":
        if (Object.values(err).filter(e => e).length > 2 || change.tasks.length === 0 || change.tecnologies.length === 0) return
        setStatus({ function_fields: false, function_add: true })
        callApi({ method: POST, route: `${FUNCTIONS}/${status.position_function_id}`, loading: LOADING_API_FUNCTIONS, post: Object.assign({ company: status.company_position_id, position: status.position_function_id }, change) })
        break

      case "delete":
        setStatus({ function_fields: false, function_add: true, function_render: true, function_add_function: false, function_function_id: "" })
        callApi({ method: DELETE, route: `${FUNCTIONS}/${value}`, loading: LOADING_API_FUNCTIONS })
        break

      case "add_position":
        break
      default: return
    }
    setErr(initialState)
    setChange(initialState)
  }



  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const nameInput = name.split("_").length > 2 ? name.split("_").slice(1).toString().replace(',', '_') : name.split("_")[1]
    const { type, stop, empty } = Validation(nameInput, value, change);
    !stop && setChange({ ...change, [nameInput]: empty ? "" : value });
    setErr({ ...err, [nameInput]: type });
  }

  const handleTasksTech = (data, component) => {
    if (component === "tasks") {
      setChange({ ...change, tasks: data })
    } else if (component === "tech") {
      setChange({ ...change, tecnologies: data })
    }
  }

  return (
    <div className="function__container">
      {state.loading_api_function ? <h1>Cargando...</h1> : <div>
        <div className="function__render">
          <Render handleOnClick={handleOnClick} functions={state.functions} status={status} />
        </div>
        <div className="admin__function">
          {status.function_fields && <Fields handleOnChange={handleOnChange} handleTasksTech={handleTasksTech} err={err} change={change} idTasksTech={idTasksTech} />}
        </div>
        <div className="function__button">
          {status.function_fields && <Button handleOnClick={handleOnClick} status={status} />}
        </div>
      </div>}
    </div>
  );
}

export default Function;