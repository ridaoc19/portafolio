import React, { useContext, useEffect, useState } from 'react';
import { DELETE, FUNCTIONS, GET, LOADING_API_FUNCTIONS, LOADING_API_TITLE, POST, TITLE } from '../../../../components/hooks/context/Admin/adminTypes';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Validation from '../../../../components/utils/function/Validation';
import Fields from './Fields/Fields';
import Render from './Render/Render';
import useValidation from '../../utils/useValidation';

const initialState = {
  name: "",
  start_date: "",
  end_date: "",
  description: "",
  image: ""
}

function Title() {
  const { login: { state: { user } }, admin: { state, status, setStatus, callApi } } = useContext(CreateContext);
  const { setValidation } = useValidation()

  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)

  useEffect(() => {
    setValidation({ change, validate: ["name", "start_date", "end_date","description", "image"], element: "title_save" })
    // eslint-disable-next-line
  }, [err, change, status.title_fields])

  const handleOnClick = (e) => {
    e.preventDefault();
    const name = e.target.attributes.getNamedItem("name").value
    const value = e.target.attributes?.getNamedItem("value")?.value

    const nameInput = name.split("_").length > 2 ? name.split("_").slice(1).toString().replace(',', '_') : name.split("_")[1]
    switch (nameInput) {
      case "add":
        setStatus({ title_fields: true, title_add: false, title_render: false })
        break
      case "edit":
        setChange(state.title.find(d => d._id === value))
        setStatus({ title_fields: true, title_add: false, title_add_function: false, title_function_id: value })
        return
      case "clean":
        setStatus({ title_fields: false, title_add: true, title_render: true, title_function_id: "" })
        break
      case "save":
        callApi({ method: POST, route: `${TITLE}/${user._id}`, loading: LOADING_API_TITLE, post: Object.assign({ university_id: status.university_title_id}, change) })
        setStatus({ title_fields: false, title_add: true, title_render: true })
        break
      case "delete":
        setStatus({ title_fields: false, title_add: true, title_render: true, title_add_function: false, title_function_id: "" })
        callApi({ method: DELETE, route: `${TITLE}/${value}/${user._id}`, loading: LOADING_API_TITLE })
        break
      case "add_title":
        callApi({ method: GET, route: `${FUNCTIONS}/${value}/${user._id}`, loading: LOADING_API_FUNCTIONS })
        setStatus({ title_add_function: true, title_add: false, title_fields: false, title_function_id: value })
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

  const handleOnLoad = (_e, s) => {
    setErr({ ...err, image: "" })
    document.getElementById("company_img").parentNode.classList.add("borde_image")
  }

  return (
    <div className="title__container">
      {state.loading_api_title ? <h1>Cargando...</h1> : <div>
        <div className="title__render">
          {status.title_render && <Render handleOnClick={handleOnClick} state={state.university?.find(d => d._id === status.university_title_id)} status={status} />}
        </div>
        {status.title_fields && <div className="title__fields">
          <Fields handleOnChange={handleOnChange} handleOnClick={handleOnClick} change={change} err={err} handleOnLoad={handleOnLoad} />
        </div>}
      </div>}
    </div>
  );
}

export default Title;