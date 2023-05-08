import React, { useContext, useEffect, useState } from 'react';
import { DELETE, FUNCTIONS, LOADING_API_FUNCTIONS, POST } from '../../../../components/hooks/context/Admin/adminTypes';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Validation from '../../../../components/utils/function/Validation';
import Fields from './Fields/Fields';
import Render from './Render/Render';

const initialState = {
  name: "",
  image: "",
  link: "",
  start_date: "",
  end_date: "",
  repository: "",
  tasks: [],
  technologies: [],
}

function Function() {
  const { login: { state: { user } }, admin: { state, status, setStatus, callApi } } = useContext(CreateContext);

  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)

  useEffect(() => {
    Object.values({ name: err.name, image: err.image, link: err.link, start_date: err.start_date, end_date: err.end_date, repository: err.repository }).filter(e => e).length === 0 &&
      Object.values({ name: change.name, image: err.image, link: change.link, start_date: change.start_date, end_date: change.end_date, repository: change.repository }).filter(e => e).length >= 5
      && change.tasks.length > 0
      && change.technologies.length > 0
      ? document.getElementById("function_save")?.removeAttribute("disabled") :
      document.getElementById("function_save")?.setAttribute("disabled", "")
  }, [err, change])

  const handleOnClick = (e) => {
    const name = e.target.attributes.getNamedItem("name").value
    const value = e.target.attributes?.getNamedItem("value")?.value
    const nameInput = name.split("_").length > 2 ? name.split("_").slice(1).toString().replace(',', '_') : name.split("_")[1]

    switch (nameInput) {
      case "add":
        setStatus({ function_fields: true, function_add: false, function_render: false })
        break
      case "edit":
        setChange(state.functions.find(d => d._id === value))
        setStatus({ function_fields: true })
        return
      case "clean":
        setStatus({ function_render: false, function_fields: false, function_add: true })
        break
      case "save":
        if (Object.values(err).filter(e => e).length > 2 || change.tasks.length === 0 || change.technologies.length === 0) return
        setStatus({ function_fields: false, function_add: true })
        callApi({ method: POST, route: `${FUNCTIONS}/${status.position_function_id}/${user._id}`, loading: LOADING_API_FUNCTIONS, post: Object.assign({ company: status.company_position_id, position: status.position_function_id }, change) })
        break
      case "delete":
        setStatus({ function_fields: false, function_add: true, function_render: true })
        callApi({ method: DELETE, route: `${FUNCTIONS}/${status.position_function_id}/${user._id}`, loading: LOADING_API_FUNCTIONS, post: {id_delete: value} })
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
      setChange({ ...change, technologies: data })
    }
  }

  const handleOnLoad = (_e, s) => setErr({ ...err, image: "" })

  return (
    <div className="function__container">
      {state.loading_api_function ? <h1>Cargando...</h1> : <div>
        <div className="function__render">
          <Render handleOnClick={handleOnClick} functions={state.functions} status={status} />
        </div>
        {status.function_fields && <div className="function__fields">
          <Fields handleOnChange={handleOnChange} handleTasksTech={handleTasksTech} handleOnClick={handleOnClick} status={status} err={err} change={change} handleOnLoad={handleOnLoad} />
        </div>}

      </div>}
    </div>
  );
}

export default Function;