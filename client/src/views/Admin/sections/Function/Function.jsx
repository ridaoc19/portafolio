import React, { useContext, useEffect, useState } from 'react';
import { DELETE, FUNCTIONS, LOADING_API_FUNCTIONS, POST } from '../../../../components/hooks/context/Admin/adminTypes';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Validation from '../../../../components/utils/function/Validation';
import useValidation from '../../utils/useValidation';
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
  const { setValidation } = useValidation()
  const { login: { state: { user } }, admin: { state, status, setStatus, callApi } } = useContext(CreateContext);

  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)

  useEffect(() => {
    setValidation({ change, validate: ["name", "image", "link", "start_date", "end_date", "tasks"], element: "function_save", image: "function_img" })
  // eslint-disable-next-line
  }, [err, change, status.function_add_technologies])

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
        setStatus({ function_fields: true, function_add: false, function_edit_id: value })
        return
      case "clean":
        setStatus({ function_render: true, function_fields: false, function_add: true, function_edit_id: "" })
        break
      case "save":
        setStatus({ function_fields: false, function_render: true, function_add: true, function_edit_id: "" })
        callApi({ method: POST, route: `${FUNCTIONS}/${status.position_function_id}/${user._id}`, loading: LOADING_API_FUNCTIONS, post: Object.assign({ company: status.company_position_id, position: status.position_function_id }, change) })
        break
      case "delete":
        setStatus({ function_fields: false, function_add: true, function_render: true, function_edit_id: "" })
        callApi({ method: DELETE, route: `${FUNCTIONS}/${status.position_function_id}/${user._id}`, loading: LOADING_API_FUNCTIONS, post: { id_delete: value } })
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
          {status.function_render && <Render handleOnClick={handleOnClick} functions={state.functions} status={status} />}
        </div>
        {status.function_fields && <div className="function__fields">
          <Fields handleOnChange={handleOnChange} handleTasksTech={handleTasksTech} handleOnClick={handleOnClick} status={status} err={err} change={change} handleOnLoad={handleOnLoad} />
        </div>}

      </div>}
    </div>
  );
}

export default Function;