import React, { useContext, useEffect, useState } from 'react';
import { DELETE, FUNCTIONS, GET, LOADING_API_FUNCTIONS, LOADING_API_POSITION, POSITIONS, POST } from '../../../../components/hooks/context/Admin/adminTypes';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Button from './Buutton/Button';
import Fields from './Fields/Fields';
import Render from './Render/Render';
import Validation from '../../../../components/utils/function/Validation';


const initialState = {
  name: "",
  start_date: "",
  end_date: "",
}

function Position() {
  const { admin: { state, status, setStatus, callApi } } = useContext(CreateContext);

  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)

  useEffect(() => {
    Object.values(err).filter((e) => e).length === 0 && Object.values(change).filter((e) => e).length > 2
      ? document.getElementById("position_save")?.removeAttribute("disabled") :
      document.getElementById("position_save")?.setAttribute("disabled", "")
      // eslint-disable-next-line
  }, [err])

  useEffect(() => {
    return () => setStatus({ position_fields: false, position_function_id: "" })
    // eslint-disable-next-line
  }, [])



  const handleOnClick = (e) => {
    const { name, value } = e.target;
    const nameInput = name.split("_").length > 2 ? name.split("_").slice(1).toString().replace(',', '_') : name.split("_")[1]
    switch (nameInput) {
      case "add":
        setStatus({ position_fields: true, position_add: false, position_render: false })

        break
      case "edit":
        setChange(state.company.find(d => d._id === status.company_position_id).position.find(d => d._id === value))
        setStatus({ position_fields: true, position_add: false, position_add_function: false, position_function_id: value })
        return

      case "clean":
        setStatus({ position_fields: false, position_add: true, position_render: true, position_function_id: "" })
        break
      case "save":

        callApi({ method: POST, route: POSITIONS, loading: LOADING_API_POSITION, post: Object.assign({ company: status.company_position_id }, change) })
        setStatus({ position_fields: false, position_add: true, position_render: true })
        break
      case "delete":

        setStatus({ position_fields: false, position_add: true, position_render: true, position_add_function: false, position_function_id: "" })
        callApi({ method: DELETE, route: `${POSITIONS}/${value}`, loading: LOADING_API_POSITION })
        break
      case "add_position":

        callApi({ method: GET, route: `${FUNCTIONS}/${value}`, loading: LOADING_API_FUNCTIONS })
        setStatus({ position_add_function: true, position_add: false, position_fields: false, position_function_id: value })

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

  return (
    <div className="position__container">
      {state.loading_api_position ? <h1>Cargando...</h1> : <div>
        <div className="position__render">
          {status.position_render && <Render handleOnClick={handleOnClick} state={state.company?.find(d => d._id === status.company_position_id)} status={status} />}
        </div>
        <div className="admin__position">
          {status.position_fields && <Fields handleOnChange={handleOnChange} change={change} err={err} />}
        </div>
        <div className="position__button">
          {status.position_fields && <Button handleOnClick={handleOnClick} status={status} />}
        </div>
      </div>}

    </div>
  );
}

export default Position;